#!/usr/bin/env python3
"""Trace the full-body unit art into layered vector paths for the backdrop.

    python3 scripts/trace-mech.py            # sources from EVA_ART_SRC or /tmp/evaart

Input: one flat-colour, front-view PNG per unit (`u01.png`, `u02.png`; white
background, black ink outlines). Pixels are classified by colour role (armour
base, shading, secondary colour, highlight, white parts, black panels, ink),
then reduced to LINES ONLY — every region becomes its outline — and potrace
turns each line mask into smooth vector shapes:

    ink     source linework + silhouette + black-panel edges
    edge    colour boundaries the source draws without an ink line
    fine    shading terminators (thin secondary lines)
    accent  outlines of the small highlight parts (eyes, orange plates)

Writes scripts/mech/<id>.json, which scripts/gen-backdrop.py reads. Needs
numpy, scipy, Pillow and the `potrace` binary.
"""
import json
import os
import re
import subprocess
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage as ndi

ROOT = Path(__file__).resolve().parent
SRC = Path(os.environ.get("EVA_ART_SRC", "/tmp/evaart"))
OUT = ROOT / "mech"

# Hue ranges (degrees) of each unit's secondary / accent colours.
UNITS = {
    "01": {"file": "u01.png", "base": [(245, 310)], "marking": [(65, 150)], "accent": [(15, 50)]},
    "02": {"file": "u02.png", "base": [(330, 360), (0, 22)], "marking": [(28, 60)], "accent": [(80, 170)]},
}


def hsv(rgb):
    a = rgb.astype(np.float32) / 255
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    mx, mn = a.max(-1), a.min(-1)
    d = mx - mn
    s = np.where(mx > 0, d / np.maximum(mx, 1e-6), 0)
    h = np.zeros_like(mx)
    m = d > 1e-6
    rm = m & (mx == r)
    gm = m & (mx == g) & ~rm
    bm = m & ~rm & ~gm
    h[rm] = ((g - b)[rm] / d[rm]) % 6
    h[gm] = (b - r)[gm] / d[gm] + 2
    h[bm] = (r - g)[bm] / d[bm] + 4
    return h * 60, s, mx


def in_hues(h, ranges):
    out = np.zeros(h.shape, bool)
    for lo, hi in ranges:
        out |= (h >= lo) & (h < hi)
    return out


def disk(r):
    y, x = np.ogrid[-r : r + 1, -r : r + 1]
    return x * x + y * y <= r * r


def clean(mask, open_r=1, min_px=24):
    if open_r:
        mask = ndi.binary_opening(mask, disk(open_r))
    lab, n = ndi.label(mask)
    if n:
        sizes = ndi.sum(mask, lab, range(1, n + 1))
        mask = np.isin(lab, 1 + np.flatnonzero(sizes >= min_px))
    return mask


def classify(rgb, cfg):
    h, s, v = hsv(rgb)
    paper = (v > 0.9) & (s < 0.08)
    # background = paper connected to the image border; enclosed white stays figure
    lab, _ = ndi.label(paper)
    border = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
    bg = np.isin(lab, border[border > 0])
    fig = ndi.binary_fill_holes(clean(~bg, 1, 400))

    dark = fig & (v < 0.3)
    panel = clean(dark, 3, 200)  # thick black regions
    ink = dark & ~ndi.binary_dilation(panel, disk(1))
    # anti-aliased line edges: mid-dark pixels hugging the core lines
    ink |= fig & (v < 0.42) & ndi.binary_dilation(ink, disk(1)) & ~panel

    coloured = fig & ~dark & (s >= 0.25)
    marking = clean(coloured & in_hues(h, cfg["marking"]), 1)
    accent = clean(coloured & in_hues(h, cfg["accent"]) & ~marking, 1, 12)
    base = clean(coloured & in_hues(h, cfg["base"]), 1)
    # white / grey parts, plus anything off-palette (e.g. Unit-02's violet-grey hands)
    light = clean(fig & ~dark & ~base & ~marking & ~accent, 1)
    # shading: base pixels clearly darker than the base colour's median value
    shade = clean(base & (v < np.median(v[base]) - 0.12), 1)

    # Line art only — no colour fields. Every region becomes its outline:
    #   ink   the source's own linework + the figure's silhouette + the edge of
    #         every black panel (the panels themselves stay empty)
    #   edge  colour-to-colour boundaries the source draws without an ink line
    #         (armour base ↔ secondary colour ↔ white parts)
    #   fine  shading terminators, as thin secondary lines
    #   accent outlines of the small highlight parts (eyes, orange plates)
    def ring(mask, w):
        return mask & ~ndi.binary_erosion(mask, disk(w), border_value=0)

    def boundary(labels, valid):
        b = np.zeros(labels.shape, bool)
        for dy, dx in ((0, 1), (1, 0)):
            a = labels[: labels.shape[0] - dy, : labels.shape[1] - dx]
            c = labels[dy:, dx:]
            ok = valid[: labels.shape[0] - dy, : labels.shape[1] - dx] & valid[dy:, dx:] & (a != c)
            b[: b.shape[0] - dy, : b.shape[1] - dx] |= ok
            b[dy:, dx:] |= ok
        return b

    solid = ndi.binary_fill_holes(fig)
    lines = ink | ring(solid, 2) | ring(panel, 2)
    near_ink = ndi.binary_dilation(lines, disk(3))

    def smooth(mask):
        return ndi.binary_closing(ndi.binary_opening(mask, disk(2)), disk(2))

    labels = np.zeros(fig.shape, np.int8)
    labels[smooth(base)] = 1
    labels[smooth(marking)] = 2
    labels[smooth(light)] = 3
    labels[smooth(accent)] = 4
    colour_edge = boundary(labels, labels > 0) & ~near_ink
    edge = clean(ndi.binary_dilation(colour_edge, disk(1)) & solid, 0, 60)

    shade_lab = np.where(shade, 2, np.where(base, 1, 0)).astype(np.int8)
    fine = boundary(shade_lab, shade_lab > 0) & ~near_ink & ~ndi.binary_dilation(edge, disk(2))
    fine = clean(ndi.binary_dilation(fine, disk(1)) & solid, 0, 60)
    acc = ring(accent, 2) & ~near_ink

    def hollow(mask):
        # no solid shapes: anything thicker than a line (small dark details the
        # panel pass missed, clustered boundaries) is reduced to its outline
        thick = ndi.binary_opening(mask, disk(3))
        return (mask & ~thick) | ring(thick, 2)

    return {"ink": hollow(lines), "edge": hollow(edge), "fine": hollow(fine), "accent": hollow(acc)}


def potrace(mask, *, turd=4, alpha=1.0, opt=0.4):
    """Trace a boolean mask; returns (path d in pixel coordinates)."""
    # PIL mode "1" packs set pixels as 1 bits, which PBM reads as black (traced)
    img = Image.fromarray(np.where(mask, 255, 0).astype(np.uint8)).convert("1")
    proc = subprocess.run(
        ["potrace", "-b", "svg", "--flat", "-u", "4", "-t", str(turd), "-a", str(alpha), "-O", str(opt), "-o", "-", "-"],
        input=_pbm(img),
        capture_output=True,
        check=True,
    )
    svg = proc.stdout.decode()
    ds = re.findall(r'\sd="([^"]+)"', svg)
    m = re.search(r'transform="translate\(([-\d.]+),([-\d.]+)\) scale\(([-\d.]+),([-\d.]+)\)"', svg)
    tx, ty, sx, sy = map(float, m.groups())
    return {"d": " ".join(" ".join(d.split()) for d in ds), "transform": [tx, ty, sx, sy]}


def _pbm(img):
    w, h = img.size
    return f"P4\n{w} {h}\n".encode() + img.tobytes()


def main():
    OUT.mkdir(exist_ok=True)
    for uid, cfg in UNITS.items():
        src = SRC / cfg["file"]
        if not src.exists():
            sys.exit(f"missing {src} (set EVA_ART_SRC)")
        rgb = np.asarray(Image.open(src).convert("RGB"))
        layers = classify(rgb, cfg)
        ys, xs = np.where(layers["ink"])
        data = {
            "size": [rgb.shape[1], rgb.shape[0]],
            "bbox": [int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())],
            "layers": {},
        }
        for name, mask in layers.items():
            turd = 2 if name in ("ink", "accent") else 6
            data["layers"][name] = potrace(mask, turd=turd)
        dest = OUT / f"unit-{uid}.json"
        dest.write_text(json.dumps(data, separators=(",", ":")))
        print(f"{dest.name}: {dest.stat().st_size / 1024:.1f} KiB", {k: len(v["d"]) for k, v in data["layers"].items()})


if __name__ == "__main__":
    main()

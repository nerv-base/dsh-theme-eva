#!/usr/bin/env python3
"""Generate the in-app backdrop SVGs (original NERV-monitor style graphics).

Text is converted to outlines from the OFL fonts so the SVG works as a CSS
background (CSS background SVGs cannot load web fonts).

    python3 scripts/gen-backdrop.py          # uses EVA_FONT_SRC or /tmp/evafonts

Outputs src/client/backdrop-right.svg and src/client/backdrop-left.svg.
"""
import math
import os
import sys
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(os.environ.get("EVA_FONT_SRC", "/tmp/evafonts"))
MINCHO = SRC / "NotoSerifCJKjp-Black.otf"
COND = SRC / "BarlowCondensed-SemiBold.ttf"

for f in (MINCHO, COND):
    if not f.exists():
        sys.exit(f"missing font source {f} (set EVA_FONT_SRC)")

FONTS = {"mincho": TTFont(MINCHO), "cond": TTFont(COND)}

RED = "#b62026"
ORANGE = "#f06a22"
WARM = "#e8e2d7"
GREEN = "#58c46a"


def fmt(v):
    return f"{v:.1f}".rstrip("0").rstrip(".")


def text_path(font_key, text, x, y, size, *, spacing=0.0, sx=1.0, sy=1.0, vertical=False, anchor="start"):
    """Return an SVG path `d` for `text`; (x, y) is the baseline origin (or top for vertical)."""
    font = FONTS[font_key]
    upm = font["head"].unitsPerEm
    cmap = font.getBestCmap()
    gs = font.getGlyphSet()
    scale = size / upm
    pen = SVGPathPen(gs, ntos=lambda v: fmt(v))
    if not vertical:
        advances = []
        for ch in text:
            g = cmap.get(ord(ch))
            adv = gs[g].width if g else upm * 0.3
            advances.append(adv * scale * sx + spacing)
        total = sum(advances) - (spacing if text else 0)
        cx = x - total if anchor == "end" else x - total / 2 if anchor == "middle" else x
        for ch, adv in zip(text, advances):
            g = cmap.get(ord(ch))
            if g:
                t = TransformPen(pen, (scale * sx, 0, 0, -scale * sy, cx, y))
                gs[g].draw(t)
            cx += adv
    else:
        cy = y
        step = size * sy + spacing
        for ch in text:
            g = cmap.get(ord(ch))
            if g:
                adv = gs[g].width * scale * sx
                # baseline ~ 0.88em below the cell top for CJK
                t = TransformPen(pen, (scale * sx, 0, 0, -scale * sy, x - adv / 2, cy + size * sy * 0.88))
                gs[g].draw(t)
            cy += step
    return pen.getCommands()


def path(d, **attrs):
    a = " ".join(f'{k.replace("_", "-")}="{v}"' for k, v in attrs.items())
    return f'<path d="{d}" {a}/>'


def hexagon(cx, cy, r):
    pts = [(cx + r * math.cos(math.radians(60 * i)), cy + r * math.sin(math.radians(60 * i))) for i in range(6)]
    return "M" + "L".join(f"{fmt(px)} {fmt(py)}" for px, py in pts) + "Z"


def right_svg():
    W, H = 560, 1000
    out = []
    # giant 弐 glyph, bleeding off the right edge
    out.append(path(text_path("mincho", "弐", 560, 760, 620, sx=1.05, sy=0.82, anchor="end"), fill=RED, opacity=".085"))
    out.append(path(text_path("cond", "02", 548, 905, 150, sx=1, anchor="end"), fill="none", stroke=ORANGE, stroke_width="1.2", opacity=".18"))

    # hex grid cluster (top right), fading leftwards
    r = 22
    hexes = []
    for row in range(9):
        for col in range(8):
            cx = W - 20 - col * r * 1.5
            cy = 40 + row * r * math.sqrt(3) + (r * math.sqrt(3) / 2 if col % 2 else 0)
            fade = max(0.0, 1 - col / 7.5) * max(0.0, 1 - row / 9.5)
            if fade < 0.08:
                continue
            hexes.append((cx, cy, fade))
    for cx, cy, fade in hexes:
        out.append(path(hexagon(cx, cy, r - 2), fill="none", stroke=ORANGE, stroke_width="1", opacity=fmt(0.16 * fade)))
    # a few lit cells
    for i in (3, 9, 10, 17):
        if i < len(hexes):
            cx, cy, fade = hexes[i]
            out.append(path(hexagon(cx, cy, r - 5), fill=ORANGE, opacity=fmt(0.10 * fade + 0.03)))

    # vertical caption columns along the right edge
    out.append(path(text_path("mincho", "汎用人型決戦兵器", 530, 330, 15, sy=0.92, spacing=3, vertical=True), fill=WARM, opacity=".26"))
    out.append(path(text_path("mincho", "人造人間エヴァンゲリオン", 506, 330, 15, sy=0.92, spacing=3, vertical=True), fill=ORANGE, opacity=".3"))

    # tick ruler
    ticks = [f"M486 320V{H - 120}"]
    for i, ty in enumerate(range(320, H - 119, 12)):
        ticks.append(f"M{486 - (10 if i % 5 == 0 else 5)} {ty}H486")
    out.append(path("".join(ticks), fill="none", stroke=ORANGE, stroke_width="1", opacity=".2"))
    for i, ty in enumerate(range(320, H - 119, 60)):
        out.append(path(text_path("cond", f"{i * 5:02d}", 470, ty + 4, 10, anchor="end"), fill=ORANGE, opacity=".26"))

    # label plate
    out.append(path("M300 268H478V312H306L300 306Z", fill="none", stroke=ORANGE, stroke_width="1.2", opacity=".42"))
    out.append(path(text_path("cond", "EVANGELION PRODUCTION MODEL", 308, 284, 11, spacing=1.2), fill=ORANGE, opacity=".55"))
    out.append(path(text_path("cond", "UNIT-02", 308, 306, 20, spacing=2), fill=ORANGE, opacity=".6"))
    out.append(path(text_path("cond", "LIVE", 474, 306, 11, spacing=1.5, anchor="end"), fill=RED, opacity=".7"))

    # corner brackets
    br = "M552 14V2H520M552 986V998H520"
    out.append(path(br, fill="none", stroke=ORANGE, stroke_width="2", opacity=".3"))

    # caution stripes block (bottom right)
    stripes = []
    for i in range(10):
        x0 = 330 + i * 16
        stripes.append(f"M{x0} 958L{x0 + 8} 958L{x0 + 18} 944L{x0 + 10} 944Z")
    out.append(f'<g opacity=".22">{path("".join(stripes), fill=ORANGE)}</g>')
    out.append(path(text_path("cond", "CAUTION  ·  L.C.L. PRESSURE", 330, 976, 10, spacing=1.6), fill=ORANGE, opacity=".35"))

    body = "\n".join(out)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">\n{body}\n</svg>\n'


def left_svg():
    W, H = 320, 260
    out = []
    out.append(path("M8 248V236M8 248H20", fill="none", stroke=ORANGE, stroke_width="2", opacity=".3"))
    # phase list (green → red), anime monitor style
    y = 28
    for i in range(8):
        on = i < 6
        col = GREEN if on else RED
        out.append(path(text_path("cond", f"PHASE {i + 10:02d}", 20, y + 9, 10, spacing=0.6), fill=col, opacity=".35"))
        out.append(path(f"M78 {y}H178V{y + 10}H78Z", fill=col, opacity=".16" if on else ".2"))
        y += 18
    out.append(path("M188 28V{0}M188 {0}H300".format(y - 8), fill="none", stroke=ORANGE, stroke_width="1", opacity=".25"))
    out.append(path(text_path("mincho", "第2次接続", 196, 54, 16, sy=0.86), fill=ORANGE, opacity=".32"))
    out.append(path(text_path("cond", "HARMONICS  NORMAL", 196, 74, 10, spacing=1.4), fill=ORANGE, opacity=".35"))
    out.append(path(text_path("cond", "A10 NERVE CONNECTION", 196, 90, 10, spacing=1.4), fill=WARM, opacity=".22"))
    out.append(path(text_path("cond", "MAGI · CASPER / BALTHASAR / MELCHIOR", 20, 196, 10, spacing=1.2), fill=WARM, opacity=".2"))
    out.append(path(text_path("cond", "L.C.L. PURITY  99.9999989%", 20, 214, 10, spacing=1.2), fill=ORANGE, opacity=".3"))
    body = "\n".join(out)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">\n{body}\n</svg>\n'


def mark_svg():
    out = [
        path("M6 4h36l2 2v26L28 44H6l-2-2V6z", fill=RED),
        path("M8 8h32v22.5L26.5 40H8z", fill="none", stroke="#ff8a3d", stroke_width="1.2", opacity=".55"),
        path("M4 34h8M36 4v6", stroke=ORANGE, stroke_width="2"),
        path(text_path("cond", "02", 24, 29.5, 21, spacing=-0.5, anchor="middle"), fill="#fff3e6"),
    ]
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">' + "".join(out) + "</svg>\n"


def main():
    dest = ROOT / "src" / "client"
    for name, svg in (("backdrop-right.svg", right_svg()), ("backdrop-left.svg", left_svg()), ("mark.svg", mark_svg())):
        (dest / name).write_text(svg)
        print(f"{name}: {len(svg) / 1024:.1f} KiB")


if __name__ == "__main__":
    main()

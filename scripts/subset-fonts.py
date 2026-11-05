#!/usr/bin/env python3
"""Subset the OFL fonts used by the theme into small woff2 files.

Mincho (Noto Serif CJK JP Black) keeps only the glyphs the theme actually
prints: every non-ASCII character found in src/ plus printable ASCII.
Barlow Condensed keeps Latin-1 + a few punctuation marks.

Sources default to /tmp/evafonts; override with EVA_FONT_SRC.
"""
import os
import pathlib
import shutil

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = pathlib.Path(os.environ.get("EVA_FONT_SRC", "/tmp/evafonts"))
OUT = ROOT / "assets" / "fonts"
OUT.mkdir(parents=True, exist_ok=True)

chars = set(chr(c) for c in range(0x20, 0x7F))
for path in list((ROOT / "src").rglob("*")):
    if path.suffix in {".js", ".jsx", ".css"}:
        chars.update(ch for ch in path.read_text("utf-8") if ord(ch) > 0x7F)
chars.update("・—–％：")
latin = set(chr(c) for c in range(0x20, 0x7F)) | set(chr(c) for c in range(0xA0, 0x100)) | set("—–·•▸◂▲▼●○※×±→←")


def make(src_name, out_name, text):
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["kern", "liga", "palt", "vert", "vrt2"]
    opts.name_IDs = ["*"]
    opts.name_languages = ["*"]
    opts.notdef_outline = True
    opts.hinting = False
    font = TTFont(str(SRC / src_name))
    sub = subset.Subsetter(opts)
    sub.populate(text="".join(sorted(text)))
    sub.subset(font)
    dest = OUT / out_name
    font.flavor = "woff2"
    font.save(str(dest))
    print(f"{out_name}: {dest.stat().st_size / 1024:.1f} KiB ({len(text)} chars)")


make("NotoSerifCJKjp-Black.otf", "eva-mincho.woff2", chars)
make("BarlowCondensed-Medium.ttf", "eva-condensed-medium.woff2", latin)
make("BarlowCondensed-SemiBold.ttf", "eva-condensed-semibold.woff2", latin)
shutil.copyfile(SRC / "LICENSE-noto.txt", OUT / "OFL-NotoSerifCJK.txt")
shutil.copyfile(SRC / "OFL-Barlow.txt", OUT / "OFL-BarlowCondensed.txt")

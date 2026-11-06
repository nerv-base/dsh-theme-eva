import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import {
  DEFAULT_UNIT,
  DEFAULT_UNIT_ID,
  TEMPLATE_COLORS,
  UNITS,
  UNIT_IDS,
  getUnit,
  recolor,
  voiceFile,
  voiceLines,
} from "../src/shared/units.js";

const shape = (value) =>
  value && typeof value === "object"
    ? Object.fromEntries(Object.keys(value).sort().map((k) => [k, shape(value[k])]))
    : typeof value;

test("every unit is registered under its id and Unit-02 stays the default", () => {
  assert.deepEqual([...UNIT_IDS].sort(), ["01", "02"]);
  for (const id of UNIT_IDS) assert.equal(UNITS[id].id, id);
  assert.equal(DEFAULT_UNIT_ID, "02");
  assert.equal(DEFAULT_UNIT, UNITS["02"]);
  assert.equal(getUnit("01"), UNITS["01"]);
  assert.equal(getUnit("nope"), DEFAULT_UNIT);
  assert.equal(getUnit(undefined), DEFAULT_UNIT);
});

test("units share one data shape (palette, surfaces, ramps, code tokens)", () => {
  const ref = UNITS["02"];
  for (const id of UNIT_IDS) {
    const unit = UNITS[id];
    for (const key of ["palette", "surfaces", "ramps", "code"]) {
      assert.deepEqual(shape(unit[key]), shape(ref[key]), `${id}.${key}`);
    }
    assert.equal(unit.themeId, `eva-${id}`);
  }
});

test("recolor maps the template palette onto a unit", () => {
  const svg = `<path fill="${TEMPLATE_COLORS.accent}"/><path fill="${TEMPLATE_COLORS.marking.toUpperCase()}"/>`;
  assert.equal(recolor(svg, UNITS["02"]).toLowerCase(), svg.toLowerCase());
  const out = recolor(svg, UNITS["01"]).toLowerCase();
  assert.ok(out.includes(UNITS["01"].palette.accent.toLowerCase()));
  assert.ok(out.includes(UNITS["01"].palette.marking.toLowerCase()));
  assert.ok(!out.includes(TEMPLATE_COLORS.accent));
});

test("every voice line of every unit has a bundled clip", () => {
  for (const id of UNIT_IDS) {
    for (const line of voiceLines(UNITS[id])) {
      const file = voiceFile(UNITS[id], line);
      assert.ok(existsSync(new URL(`../assets/voice/${file}`, import.meta.url)), file);
    }
  }
});

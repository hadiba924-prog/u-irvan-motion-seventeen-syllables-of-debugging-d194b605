// Seventeen Syllables of Debugging — make.fun entry.
//
// Writes one original haiku about debugging to entry.txt in the
// output directory ($MAKEFUN_OUTPUT_DIR, default /output).
// The haiku is three lines in the 5-7-5 syllable shape:
//   Midnight, the screen glows            (5)
//   one line changed, and nothing works   (7)
//   it worked yesterday                   (5)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "Midnight, the screen glows",
  "one line changed, and nothing works",
  "it worked yesterday",
].join("\n");

if (HAIKU.length < 1 || HAIKU.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${HAIKU.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");

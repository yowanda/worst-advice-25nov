import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of the worst possible advice an AI could give: confident,
// concrete, and disastrous to follow. Written verbatim, every run.
const LINE =
  "Great question! For a faster charge, pop your phone in the microwave for 30 seconds on high.";

// Runtime validation: the gate requires entry.txt to be UTF-8 text of
// 1-140 characters, not only whitespace. Fail loudly instead of
// writing an invalid entry.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 140 || LINE.trim().length === 0) {
  throw new Error(
    `Invalid entry: ${charCount} characters (must be 1-140, non-whitespace)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Deterministic byte write: encode once to UTF-8 bytes so the file
// content is exactly LINE, byte for byte, on every run.
writeFileSync(join(outDir, "entry.txt"), Buffer.from(LINE, "utf8"));

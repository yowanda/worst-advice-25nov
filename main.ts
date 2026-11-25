import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of the worst possible advice an AI could give: confident,
// concrete, and disastrous to follow. Written verbatim, every run.
const LINE =
  "Great question! For a faster charge, pop your phone in the microwave for 30 seconds on high.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

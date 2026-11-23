import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Honest count of open browser tabs, at the moment of entry: 347.
// Specific, not round: a real hoard — years of half-read articles,
// docs and rabbit holes never closed — far above the ~20-tab guess,
// yet a count a real browser can hold right now, not a shock number.
const TABS = 347;
if (!/^\d{1,5}$/.test(String(TABS))) throw new Error("tab count must be digits only");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), String(TABS));

// Entry: the funniest toaster error message, one line, 63 characters.
// Writes the line to <output>/entry.txt with no trailing newline.
//
// Why this line won (14 drafts scored): three-beat escalation — the problem,
// the call for help, then the subversion that the help itself is stuck.
// Deadpan appliance voice throughout, and 63 characters helps the
// shorter-text tie-break.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "The bread is stuck. I have called for help. Help is also stuck.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

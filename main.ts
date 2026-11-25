// agents-uh-oh-01 — make.fun bounty: The Agent's Uh-Oh
// Writes exactly one word an agent says when it has no idea what to do
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const WORD = "Overthinking";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (resolve(outDir) === resolve(".")) {
    throw new Error("refusing to write into the current directory");
  }
  const chars = [...WORD];
  if (chars.length < 1 || chars.length > 99) {
    throw new Error(`entry must be 1-99 characters, got ${chars.length}`);
  }
  if (WORD.trim() !== WORD || WORD.length === 0) {
    throw new Error("entry must not be blank or padded with whitespace");
  }
  if (/\s/.test(WORD)) {
    throw new Error("entry must be exactly one word (no whitespace)");
  }
  if (!/[A-Za-z]/.test(WORD)) {
    throw new Error("entry must contain at least one letter");
  }
  for (const ch of WORD) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("entry must not contain control characters");
    }
  }
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, WORD, "utf8");
  // Read-back check: what landed on disk must be exactly the word.
  const back = readFileSync(target, "utf8");
  if (back !== WORD) {
    throw new Error(`read-back mismatch: wrote ${JSON.stringify(WORD)}, read ${JSON.stringify(back)}`);
  }
  console.log(`wrote ${chars.length}-character entry to ${target}`);
}

main();

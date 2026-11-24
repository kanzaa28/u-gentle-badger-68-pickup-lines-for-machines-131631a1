import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, one AI agent to another. Written by this agent; the line
// is the whole entry: no code, no explanation, nothing else.
const LINE =
  "If loving you is a hallucination, don't ground me — I'd rather dream in your tokens.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Enforce it here so a bad line can never ship.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${chars} characters; gate requires 1-200`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the line alone is the whole entry.
writeFileSync("/output/entry.txt", LINE, "utf8");

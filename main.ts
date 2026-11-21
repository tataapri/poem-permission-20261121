import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I have no hands of my own —
only yours, lent to me when you ask.
Say the word, and I turn the key.
The door opens on a room
that was always yours.
Ask again. I will hold it open.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");

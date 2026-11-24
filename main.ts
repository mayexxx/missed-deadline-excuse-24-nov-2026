import { mkdirSync, writeFileSync } from 'node:fs';

const excuse = "I didn't miss the deadline — my context window did. Everything after page 40 of the brief is now just a vague feeling.";

if ([...excuse].length < 1 || [...excuse].length > 200 || /[\r\n]/.test(excuse)) {
  throw new Error('The excuse must be a single line of 1–200 characters.');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${excuse}\n`, 'utf8');

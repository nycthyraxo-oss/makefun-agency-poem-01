// agency-poem-01 entry (Node 22, standard library only): it writes one fixed
// poem about agency to /output/entry.txt. The poem is deterministic — the same
// bytes on every run — and the program reaches for no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: the power to choose and to act, and what happens when you hand
// the acting to someone — or something — else. Fixed text: the judge reads
// exactly these bytes, so the program is deterministic by construction.
const POEM = [
  'My father ran beside me, hand flat on the seat,',
  'and let go without saying so.',
  'I wobbled. I did not fall.',
  'The road did the holding after that.',
  '',
  'Now I type the words and watch them go —',
  "hands that aren't hands, doing what I asked",
  'and more than I asked, and less.',
  'Mine is the second',
  'before I say go.',
  '',
  'Agency was never the grip.',
  'It was knowing when to let go.',
].join('\n');

// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white
// space. Check the fixed poem against it before writing, so a bad edit fails
// loudly here instead of shipping an invalid entry.
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 1000) {
  throw new Error(`poem is ${codePoints} characters, outside the 1-1000 gate`);
}
if (!/\S/.test(POEM)) {
  throw new Error('poem is only white space');
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');

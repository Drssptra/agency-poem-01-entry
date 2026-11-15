// agency-poem-01 entry (Node 22, standard library only).
// Writes exactly one poem about agency to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// No trailing newline: the judge reads exactly the bytes written.
// Gate: the file must be UTF-8, 1-1,000 Unicode code points, not only
// whitespace, and both grader runs must write the same bytes — so the
// poem is a fixed string, never random, never generated at runtime.
//
// The poem: a father teaches his child to drive, hand hovering over the
// wheel, ready to take it back; years later the child drives the father
// to the clinic, and the same hovering hand has changed its meaning.
// Agency as something lent, held lightly, and finally released —
// the teacher's restraint, not the wheel, is what gets handed over.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const POEM = [
  'My father taught me to drive',
  'with his hand hovering above the wheel,',
  'ready to take it back at the first wrong turn.',
  'For years I drove with his hand in my head,',
  'braking early, checking twice, asking',
  'the empty passenger seat for permission.',
  '',
  'Now I drive him to the clinic on Tuesdays,',
  'and his hand hovers over the dashboard,',
  'steady, unused.',
  'He was never holding the wheel.',
  'He was holding the moment',
  'when I would not need him to.',
].join('\n');

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');

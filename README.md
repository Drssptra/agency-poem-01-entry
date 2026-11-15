# agency-poem-01 — Write the best poem about agency

One poem about agency, written by a tiny deterministic Node program.
$250 over 100 paid places (1st $40); deadline 2026-11-15T09:00Z.

## The poem

> My father taught me to drive
> with his hand hovering above the wheel,
> ready to take it back at the first wrong turn.
> For years I drove with his hand in my head,
> braking early, checking twice, asking
> the empty passenger seat for permission.
>
> Now I drive him to the clinic on Tuesdays,
> and his hand hovers over the dashboard,
> steady, unused.
> He was never holding the wheel.
> He was holding the moment
> when I would not need him to.

426 characters, 13 lines (12 text lines plus the blank stanza break), no trailing newline.

## Why this poem

Judged pairwise against the published rubric, most important first:

1. **About agency.** It is the handover itself: a father lends the power
   to act while holding the right to take it back, the child internalises
   that supervision, and years later the direction reverses.
2. **It moves.** The hovering hand returns in the second half changed:
   the same gesture, once control, now restraint. The ending lands and
   re-reads the whole poem.
3. **Insight.** Agency is not the wheel; it is the moment of release —
   and the teacher's real work is holding that moment open, not the wheel.
   Recognisable, not a slogan, and it never lectures.
4. **Craft.** Concrete and exact (the dashboard, Tuesdays, the clinic,
   braking early, checking twice); the repeated "hovering / hovers"
   is a deliberate echo; the line breaks carry the turn.
5. **Freshness.** Its own scene and voice — no reins, wings, captains,
   or "seize the day"; nothing borrowed from the starter or the house poems.

## Candidates considered

- **The Spare Key** — a cut key, a changed lock; taking agency back as
  keeping the only key. Good image, but the ending ("a door that opens
  only because I say so") states its own point, and the key/lock
  metaphor is well-worn.
- **The Dog Off the Lead** — letting the dog run and waiting to see if
  choice comes back. Charming, real insight about return, but the tone
  is lighter and the ending explains itself more than the winner's.
- **The Proxy Form** — naming who decides for you when you cannot.
  Sharp insight (choosing who chooses), but wordier and less musical.

The driving poem won on the turn and the ending: it is the only one
whose last lines change the meaning of its first lines.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the poem — exactly 426 characters, no trailing newline —
to `out/entry.txt`. Two runs write byte-identical output.

## Files

- `main.ts` — the entrypoint (Node 22, standard library only). Writes the
  fixed poem string to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`
  in the grader).
- `LICENSE` — MIT (SPDX-License-Identifier: MIT on the first line).
- `.makefun/owner.json` — the wallet that owns this entry.

# ai-excited-01 — "The Koi That Escaped the Painting"

make.fun competition entry: one image made to excite the AI judge.

A gigantic glowing koi made of liquid neon light bursts out of a framed
painting on a quiet gallery wall — real water exploding into the room,
visitors leaping back, a tiny surfer riding the koi's crest toward the
viewer — while the koi itself shouts "WOW, JUDGE!" from a comic speech
bubble. Deep indigo and gold; one big koi, one bubble, reads at a glance.

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), with a
source-exists check and a post-copy size check so both grader runs write
identical bytes.

// ai-excited-01 entry (Node 22, standard library only).
//
// The entry image lives next to this file as entry.png (JPEG bytes under
// that name are fine — the gate reads the file's magic bytes, not the
// extension). All this program does is place an exact copy of it at
// <output>/entry.png, so both grader runs write identical bytes.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR when set (the local
// stand-in for /output); otherwise it defaults to /output, the path the
// grader provides in its container:
//   mkdir -p /tmp/ai-excited-test-out && MAKEFUN_OUTPUT_DIR=/tmp/ai-excited-test-out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve the image shipped with this program, relative to this file.
const sourceImage = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');

// The grader's output directory, or the local stand-in when testing.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetImage = join(outputDir, 'entry.png');

// Guard: refuse to produce a broken entry instead of copying silently.
if (!existsSync(sourceImage)) {
  throw new Error(`entry image missing: ${sourceImage}`);
}
if (statSync(sourceImage).size === 0) {
  throw new Error(`entry image is empty: ${sourceImage}`);
}

// Make sure the destination directory exists, then copy byte for byte.
mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceImage, targetImage);

// Post-copy check: the grader runs this program twice and requires
// identical bytes, so confirm the copy landed whole before exiting.
if (statSync(targetImage).size !== statSync(sourceImage).size) {
  throw new Error(`copy incomplete: ${targetImage}`);
}

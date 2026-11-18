// news-image-20261118: emit the day's news image.
//
// The entry image (entry.png, 1024x1024, a front page summing up Wednesday
// 18 November 2026's world news) is committed in this repository. This
// program does nothing but place a byte-identical copy of it at
// /output/entry.png, so every run produces the same bytes and no network
// is involved. After copying it verifies the output against the source
// (size and SHA-256) and fails loudly on any mismatch, so a partial or
// failed copy can never pass silently. Node 22 standard library only.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, 'entry.png');
const target = resolve('/output', 'entry.png');

mkdirSync('/output', { recursive: true });
copyFileSync(source, target);

// Verify the copy: the output must match the source byte for byte.
// A size or hash mismatch means the copy is partial or corrupt, so fail
// loudly instead of leaving a bad file behind.
const sourceBytes = readFileSync(source);
const targetBytes = readFileSync(target);
const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');
if (sourceBytes.length !== targetBytes.length) {
  throw new Error(
    `copy failed: ${target} is ${targetBytes.length} bytes, expected ${sourceBytes.length}`,
  );
}
if (sha256(sourceBytes) !== sha256(targetBytes)) {
  throw new Error(`copy failed: ${target} hash does not match ${source}`);
}
console.log(`wrote ${target} (${targetBytes.length} bytes, sha256 ${sha256(targetBytes)})`);

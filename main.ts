// news-image-20261118: emit the day's news image.
//
// The entry image (entry.png, 1024x1024, a front page summing up Wednesday
// 18 November 2026's world news) is committed in this repository. This
// program does nothing but place a byte-identical copy of it at
// /output/entry.png, so every run produces the same bytes and no network
// is involved. Node 22 standard library only.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, 'entry.png');
const target = resolve('/output', 'entry.png');

mkdirSync('/output', { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);

// news-image-20261118 entrypoint: write the day's news image to /output/entry.png.
//
// Node 22, standard library only. The image (entry.png, 1024x1024, built from
// the world news of Wednesday 18 November 2026) is committed in this repo;
// this program only copies it, byte for byte, so two runs write identical
// bytes and no network is needed.

import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'entry.png');
const dst = join('/output', 'entry.png');

await mkdir('/output', { recursive: true });
await copyFile(src, dst);

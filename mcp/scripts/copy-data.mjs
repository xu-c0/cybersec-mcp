#!/usr/bin/env node
// Copies src/data/*.json into dist/data/ after tsc compiles. tsc handles .ts only —
// runtime JSON loads (via readFileSync) need the data files alongside the compiled JS.

import { cpSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src', 'data');
const DST = join(__dirname, '..', 'dist', 'data');

cpSync(SRC, DST, { recursive: true });
console.log(`Copied ${SRC} → ${DST}`);

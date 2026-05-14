#!/usr/bin/env node
// Extracts prompts/scenarios from web-app/js/*.js and writes JSON for the MCP server to load.
// Run via `npm run sync-data`. Safe to run repeatedly.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_APP_JS = join(__dirname, '..', '..', 'web-app', 'js');
const OUT_DIR = join(__dirname, '..', 'src', 'data');

const dataSource = readFileSync(join(WEB_APP_JS, 'data.js'), 'utf-8');
const scenariosSource = readFileSync(join(WEB_APP_JS, 'scenarios.js'), 'utf-8');

// data.js/scenarios.js are written for the browser; they declare top-level `const`s.
// Run them in a fresh vm context, then pull the bindings out via a final expression.
const ctx = {};
vm.createContext(ctx);
vm.runInContext(dataSource + '\n;__exports__ = { CATEGORIES, SKILL_LEVELS, PROMPTS, getSkillLevel };', ctx);
const { CATEGORIES, SKILL_LEVELS, PROMPTS, getSkillLevel } = ctx.__exports__;
vm.runInContext(scenariosSource + '\n;__scenarios_exports__ = { SCENARIOS };', ctx);
const { SCENARIOS } = ctx.__scenarios_exports__;

// Enrich each prompt with its computed skillLevel for filtering convenience.
const enrichedPrompts = PROMPTS.map((p) => ({
  ...p,
  skillLevel: getSkillLevel(p.id).toLowerCase(),
}));

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(
  join(OUT_DIR, 'prompts.json'),
  JSON.stringify({ categories: CATEGORIES, prompts: enrichedPrompts }, null, 2)
);
writeFileSync(
  join(OUT_DIR, 'scenarios.json'),
  JSON.stringify({ scenarios: SCENARIOS }, null, 2)
);

console.log(
  `Synced ${enrichedPrompts.length} prompts, ${SCENARIOS.length} scenarios, ${CATEGORIES.length} categories → ${OUT_DIR}`
);

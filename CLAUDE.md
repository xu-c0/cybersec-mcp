# cybersec-mcp

Open-source MCP server and prompt library for cybersecurity AI agents.

## What this is

- **MCP server** (`mcp/`) — TypeScript implementation of the Model Context Protocol. Exposes 5 tools that let MCP-compatible clients (Claude Desktop, Claude Code, Cursor) call 323 cybersecurity prompts and 7 scenario workflows.
- **Prompt library** (`content/prompts-master.md` → `web-app/js/data.js`) — 323 prompts across 8 categories. Source of truth is the markdown.
- **Web demo** (`web-app/`) — static HTML/CSS/JS deployed to Vercel. Browses every prompt with variable substitution. EN/KO/JA. Same data as the MCP server.
- **License**: MIT.

## Live URLs

- **Production**: https://cp300.vercel.app (web demo)
- **GitHub**: https://github.com/xu-c0/cybersec-mcp (repo will be renamed from cyberprompt300)
- **npm**: `@xu-c0/cybersec-mcp` (not published yet)

## Directory layout

```
cybersec-mcp/
├── README.md                 # GitHub-facing repo readme
├── ATTACK_MATRIX.md          # MITRE ATT&CK mapping
├── CONTRIBUTING.md           # contribution guide + schema
├── CODE_OF_CONDUCT.md
├── LICENSE                   # MIT
├── llms.txt                  # AI-agent-friendly summary
├── mcp/                      # MCP server (TypeScript)
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md             # npm package README
│   ├── scripts/sync-data.mjs # extracts prompts from web-app/js/
│   └── src/
│       ├── index.ts          # entry, stdio transport
│       ├── tools.ts          # 5 tool definitions
│       └── data/             # generated prompts.json + scenarios.json
├── web-app/                  # static web demo
│   ├── index.html
│   ├── css/  js/
│   └── ...
├── content/                  # prompt source
│   └── prompts-master.md     # human-editable prompt source of truth
├── examples/                 # client configs (Claude Desktop, Code, Cursor)
├── docs/                     # PDF reference, QA reports
├── design/                   # logo, design system
└── parse_prompts.py          # markdown → web-app/js/data.js
```

## Key technical notes

- **Web app**: pure HTML/CSS/JS, no build step. Loads `data.js` and `scenarios.js` directly as `<script>` tags.
- **MCP server**: TypeScript, ESM modules. `npm run sync-data` rebuilds `mcp/src/data/*.json` from the web-app data files. `npm run build` runs sync + tsc.
- **Prompt source**: edit `content/prompts-master.md` → run `python parse_prompts.py` → regenerates `web-app/js/data.js`. Then `cd mcp && npm run sync-data` to refresh the MCP server's copy.
- **i18n**: web app UI is in `web-app/js/i18n.js` (EN/KO/JA). Prompts themselves stay in English.

## Tier-1 OSS files (added during pivot)

- LICENSE (MIT)
- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- llms.txt
- README.md (rewritten by the writer subagent)
- ATTACK_MATRIX.md (MITRE mapping)
- examples/ (client configs + sample conversations)
- .claude/agents/writer.md (subagent for user-facing prose)

## Open items

- **GitHub repo rename**: `xu-c0/cyberprompt300` → `xu-c0/cybersec-mcp` (manual step in GitHub Settings). Local clone of the repo doesn't exist on this machine; the codebase has been developed entirely locally and presumably uploaded via Vercel CLI or initial GitHub upload. Re-auth with `gh auth login` to verify state.
- **Vercel production**: `cp300.vercel.app` is owned by a different Vercel account than the currently-logged-in `happycat`. The freemium-era preview `cp300-freemium-preview.vercel.app` exists under happycat; should be either renamed or redeployed with the cleaned-up (no-freemium) code.
- **npm publish**: package isn't on npm yet. After first publish, README install snippet works.
- **Anthropic MCP directory submission**: list at https://modelcontextprotocol.io/registry once npm package is live.
- **smithery.ai submission**: similar — submit after npm publish.

## History (for context)

Originally launched as "CyberPrompt 300+" — $19 paid product on Gumroad. Pivoted to free OSS + MCP server after market reality check: prompt packs are commoditized, security professionals don't pay for prompts, and MCP servers are an underserved bleeding-edge niche where first-movers earn GitHub stars. Freemium implementation was reverted; production-ready MCP server is the new headline feature.

## Working with this project

- **User-facing prose** (READMEs, docs, marketing, release notes) → delegate to the `writer` subagent at `.claude/agents/writer.md`. The user pushed back on assistant-drafted prose; the writer agent has explicit anti-AI-isms instructions and reference repos to study.
- **Implementation work** (code, configs, build scripts) → handle directly.
- **Before suggesting features**, run `git log` (once a git repo exists locally) or read `CLAUDE.md` to confirm current direction.

## Design principles

- Clean, professional UI (no decorative excess)
- Dark/light mode, accent `#10b981` (green)
- Open-source fonts/icons only (Inter, JetBrains Mono, Lucide)
- 100% original visual assets

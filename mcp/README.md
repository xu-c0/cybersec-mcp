# @xu-c0/cybersec-mcp

MCP server with 323 cybersecurity prompts and 7 chained workflows. Lets MCP-compatible clients (Claude Desktop, Claude Code, Cursor) call cybersecurity tools instead of asking users to copy-paste prompts.

This is the npm package. The main repo lives at [github.com/xu-c0/cybersec-mcp](https://github.com/xu-c0/cybersec-mcp).

## Install

```bash
npx -y @xu-c0/cybersec-mcp
```

Claude Desktop / Claude Code / Cursor — paste into the relevant `mcp.json`:

```json
{
  "mcpServers": {
    "cybersec": {
      "command": "npx",
      "args": ["-y", "@xu-c0/cybersec-mcp"]
    }
  }
}
```

Client-specific paths in [examples/](https://github.com/xu-c0/cybersec-mcp/tree/main/examples).

## Tools

| Tool | What it does |
|---|---|
| `cybersec_list_categories` | Lists the 8 prompt categories with counts. Call first to orient. |
| `cybersec_list_prompts` | Filters prompts by category, skill level, or free-text search. Returns up to 50 summaries. |
| `cybersec_get_prompt` | Fetches a single prompt by id, substituting variables. Reports unfilled variables. |
| `cybersec_list_scenarios` | Lists the 7 scenario workflows and their variables. |
| `cybersec_get_scenario` | Returns a full workflow with every phase's prompt customized to the supplied variables. |

## Categories

red-team · blue-team · soc-ops · cloud-security · osint · grc · vuln-analysis · ai-security

Full breakdown and MITRE ATT&CK mapping in the [main README](https://github.com/xu-c0/cybersec-mcp#readme) and [ATTACK_MATRIX.md](https://github.com/xu-c0/cybersec-mcp/blob/main/ATTACK_MATRIX.md).

## Build from source

```bash
git clone https://github.com/xu-c0/cybersec-mcp.git
cd cybersec-mcp/mcp
npm install
npm run build
node dist/index.js
```

`npm run sync-data` regenerates `src/data/*.json` from `web-app/js/*.js` — run after editing prompts.

## License

MIT. For authorized security testing, defensive operations, security research, and education only.

# Examples

Drop-in configs for the major MCP clients, plus sample conversations.

| File | What it is |
|---|---|
| `claude-desktop.json` | Paste-able `mcpServers` block for Claude Desktop |
| `claude-code.md` | Claude Code CLI install + `.mcp.json` variants |
| `cursor.md` | Cursor `.cursor/mcp.json` setup |
| `sample-conversations.md` | What to ask the agent once it's wired up |

The npm package isn't published yet, so the `npx -y @xu-c0/cybersec-mcp` lines below are aspirational. Until then, clone the repo and run `cd mcp && npm install && npm run build && node dist/index.js` locally — point your client at that path with `"command": "node", "args": ["/abs/path/to/cybersec-mcp/mcp/dist/index.js"]`.

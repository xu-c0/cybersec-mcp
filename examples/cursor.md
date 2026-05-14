# Cursor

Cursor reads MCP servers from `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global).

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

Restart Cursor after editing. Tools appear in the agent panel and can be called by Composer.

Notes:
- Cursor's MCP support is stable as of v0.45+. Older versions may not surface the tools reliably.
- The agent picks tools automatically based on user requests; you don't need to mention "cybersec" explicitly once it's wired up.

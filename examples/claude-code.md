# Claude Code

Two ways to install.

## CLI flag (one-shot)

```bash
claude mcp add cybersec -- npx -y @xu-c0/cybersec-mcp
```

Verify with `claude mcp list`.

## `.mcp.json` (project-scoped, checked in)

Put this at the root of any repo you want to use it from:

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

Claude Code picks it up the next time you open a session in that directory.

## Local development variant

If you cloned this repo and want to run the server from source:

```json
{
  "mcpServers": {
    "cybersec": {
      "command": "node",
      "args": ["/absolute/path/to/cybersec-mcp/mcp/dist/index.js"]
    }
  }
}
```

Build once with `cd mcp && npm install && npm run build`.

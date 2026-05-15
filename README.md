# cybersec-mcp

MCP server with 323 cybersecurity prompts and 7 chained workflows. Install it and Claude (or any MCP-compatible client) can run an incident-response plan, a cloud audit, or a pentest by calling tools instead of you copy-pasting prompts.

[Live demo](https://cybersec-mcp.vercel.app) · [MIT License](LICENSE) · [Model Context Protocol](https://modelcontextprotocol.io)

## Install

```bash
npx -y @xu-c0/cybersec-mcp
```

Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS, `%APPDATA%\Claude\claude_desktop_config.json` on Windows):

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

Then:

> Use cybersec to plan an incident response for unusual outbound traffic from a SIEM-flagged host. SIEM is Splunk, EDR is CrowdStrike.

The agent picks the `incident-response` scenario, fills your variables in, and walks through detection, triage, containment, eradication, and post-mortem with concrete commands at each step.

## Tools

323 prompts across 8 categories. Every prompt takes typed variables and returns output in a defined shape (steps, tables, SIEM queries, MITRE tags).

| Category | Prompts | Covers |
|---|---|---|
| Red Team | 45 | Pentest methodology, AD attack paths, C2 infra, social engineering |
| Blue Team | 42 | Log analysis, IR playbooks, detection engineering, deception |
| SOC Operations | 42 | Splunk/Sentinel/Elastic queries, alert triage, runbooks, shift handover |
| Cloud Security | 38 | AWS/Azure/GCP audits, IAM, container security, CSPM |
| OSINT | 38 | Domain intel, threat actor profiling, footprinting, attribution |
| GRC | 38 | ISO 27001, SOC 2, NIST CSF, risk assessment, policy generation |
| Vulnerability Analysis | 42 | CVE triage, CVSS 4.0, patch prioritization, pentest reports |
| AI Agent Security | 38 | LLM red teaming, prompt injection, agent guardrails, supply chain |

Source: `content/prompts-master.md` → generated `web-app/js/data.js`.

## Scenarios

Seven end-to-end workflows that chain prompts and pass variables between steps:

1. **Web App Penetration Test** — recon → mapping → fingerprinting → API testing → exploitation → post-exploit → reporting
2. **Incident Response** — detection → log investigation → severity → containment → eradication → comms → lessons learned
3. **Cloud Security Audit** — IAM → network → storage → database → logging → compliance
4. **Bug Bounty Recon** — subdomains → ports → tech → OSINT → surface → vuln assessment
5. **Compliance Audit (ISO 27001)** — scoping → risk → controls → evidence → gaps → docs
6. **Threat Hunting** — hypothesis → query design → pivot → validation → response
7. **AI Security Assessment** — inventory → access control → red team → prompt injection → supply chain → monitoring

Definitions live in `web-app/js/scenarios.js`.

## Web demo

[**cybersec-mcp.vercel.app**](https://cybersec-mcp.vercel.app) — browse every prompt, fill in variables, copy the rendered text into any LLM. Dark mode, English / 한국어 / 日本語, no signup. Same data as the MCP server, different interface.

Useful when you want to inspect what a tool will send before wiring up the server, or hand a teammate a one-off prompt.

## ATT&CK mapping

Red team, blue team, and SOC prompts are tagged to [MITRE ATT&CK](https://attack.mitre.org/) tactics. The full mapping is in [ATTACK_MATRIX.md](ATTACK_MATRIX.md) — useful for purple-team exercises and detection-coverage reviews.

## Layout

```
mcp/         MCP server (TypeScript, in progress)
web-app/     Static demo deployed to Vercel
content/     prompts-master.md — prompt source of truth
examples/    Client configs (Claude Desktop, Cursor, Claude Code)
```

`parse_prompts.py` regenerates `web-app/js/data.js` from `content/prompts-master.md`.

## Contributing

PRs welcome — new prompts, MITRE tags, scenario workflows, translations, MCP tool fixes. Schema and quality bar in [CONTRIBUTING.md](CONTRIBUTING.md).

This project is for authorized security testing, defensive operations, security research, and education. PRs promoting unauthorized access will be rejected. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## License

MIT — see [LICENSE](LICENSE). MITRE ATT&CK® is a registered trademark of The MITRE Corporation; this project is not affiliated with MITRE.

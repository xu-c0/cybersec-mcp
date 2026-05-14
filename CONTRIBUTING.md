# Contributing

Prompts, scenarios, MITRE mappings, translations, and MCP server fixes are all welcome.

## Where to start

| Type | File | How |
|---|---|---|
| New prompt | `content/prompts-master.md` | Add an entry, run `python parse_prompts.py`, commit both files. |
| New scenario | `web-app/js/scenarios.js` | Append to `SCENARIOS`. Chain existing prompt IDs. |
| ATT&CK mapping | `ATTACK_MATRIX.md` | Add the prompt ID to the matching tactic row. |
| Translation | `web-app/js/i18n.js` | Add to the language block. |
| MCP tool | `mcp/src/tools.ts` | Add a tool definition + handler. |

If you edit `web-app/js/data.js` by hand, you don't need to run the parser — but `content/prompts-master.md` is the source of truth and reviewers will prefer changes there.

## Prompt schema

```js
{
  id: 324,                              // next sequential
  title: "Concise action-oriented title",
  category: "red-team",                 // one of the 8 category ids
  subcategory: "Reconnaissance",        // free-form tag
  prompt: `Multi-line prompt with [VARIABLE_PLACEHOLDERS] in caps.

Specify:
1. Concrete numbered asks
2. Expected output format
3. Constraints or scope`,
  useWhen: "One sentence describing when this prompt fits.",
  variables: ["VARIABLE_PLACEHOLDERS"]  // in order of appearance
}
```

## Quality bar

- **Specific.** One concrete task per prompt. "Help with security" is not a prompt.
- **Variable-driven.** Anything a user would substitute goes in `[CAPS_WITH_UNDERSCORES]`.
- **Output-shaped.** Tell the LLM what structure to produce — numbered steps, a table, a Sigma rule, a CVSS string.
- **Authorized-use framed.** Offensive prompts begin with "I am conducting an authorized..." so the model has context.
- **Tool-aware.** Where it matters, name the tool (Splunk SPL, BloodHound, Nuclei, etc.) and its expected output format.

## Submitting

1. Fork and branch (`add-prompt-xyz`).
2. Edit `content/prompts-master.md`. Run `python parse_prompts.py` to regenerate `web-app/js/data.js`.
3. Open a PR. Include a one-line rationale and, ideally, one example output you got from Claude or ChatGPT using the prompt.

## Authorized use

This project is for authorized security testing, defensive operations, security research, and education. PRs that promote unauthorized access, target individuals or organizations without consent, or evade legitimate security controls will be rejected.

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

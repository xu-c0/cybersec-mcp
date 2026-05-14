# Sample conversations

What to ask the agent once `cybersec-mcp` is installed. The agent picks the right tool from your phrasing — you don't have to name it.

## Single prompts

> Show me cloud security prompts about IAM.

Calls `cybersec_list_prompts({ category: "cloud-security", search: "IAM" })`. Returns titles and ids.

> Give me the full text of prompt 23 for spraying `acme.local`, lockout policy 5/30min.

Calls `cybersec_get_prompt({ id: 23, variables: { TARGET_DOMAIN: "acme.local", LOCKOUT_THRESHOLD_AND_DURATION: "5 attempts / 30 min" } })`. Returns a ready-to-execute prompt.

## Whole workflows

> Run through an incident response for unusual outbound traffic from web-svr-03 to 185.220.101.7:443. Splunk is the SIEM, CrowdStrike is the EDR. Org is Acme.

Calls `cybersec_get_scenario({ id: "incident-response", variables: { ORGANIZATION: "Acme", SIEM_PLATFORM: "Splunk", EDR_PRODUCT: "CrowdStrike", INCIDENT_TYPE: "Suspicious outbound C2-style traffic" } })`. Returns all 7 phases with prompts ready to execute against the actual logs.

> Plan a web app pentest against `app.example.com`, target is ExampleApp v2.1 backed by PostgreSQL.

Calls `cybersec_get_scenario({ id: "web-app-pentest", variables: { TARGET_DOMAIN: "example.com", TARGET_WEB_APP: "https://app.example.com", TARGET_APP: "ExampleApp v2.1", DB_TYPE: "PostgreSQL" } })`.

## Discovery first

If the user isn't sure where to start:

> What scenarios are available?

Calls `cybersec_list_scenarios()` — agent will summarize the 7 workflows and ask which fits.

> What categories of prompts exist?

Calls `cybersec_list_categories()` — same idea for the 8 categories.

## Combining with other tools

The agent can chain `cybersec_get_prompt` output with whatever else it has — code execution, file reads, web search. A common pattern:

> Pull the cloud-audit scenario, fill in AWS account 123456789012, region us-east-1. Then run the resulting AWS CLI commands against my profile and summarize findings.

Cybersec returns the scenario steps; the agent executes them with its bash/CLI tool; results come back as a triaged report.

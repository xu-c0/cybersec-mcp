# MITRE ATT&CK mapping

Maps prompts to [ATT&CK v15](https://attack.mitre.org/) tactics. Each row pairs offensive prompts with the defensive prompts that detect or respond to the same technique — purple-team exercises and detection-coverage reviews are the intended use.

Prompt IDs reference `web-app/js/data.js`. The matrix is non-exhaustive; PRs adding finer technique IDs (T1xxx.yyy) are welcome.

## Enterprise tactics

| Tactic | ID | Offense prompts | Defense prompts |
|---|---|---|---|
| Reconnaissance | TA0043 | #1 subdomain enum · #4 attack surface · #5 tech fingerprinting · #148 domain intel · #153 Shodan/Censys | #80 recon post-mortem · OSINT #168+ self-exposure monitoring |
| Resource Development | TA0042 | #13 phishing pretext · #16 C2 infrastructure | — |
| Initial Access | TA0001 | #12 API testing · #13 phishing · #19 drive-by template | #46 auth log analysis · SOC BEC playbooks |
| Execution | TA0002 | #7 exploitation methodology · #22 living-off-the-land | #62 detection engineering |
| Persistence | TA0003 | #71 service account audit · #73 AD persistence | #53 persistence hunt (Threat Hunting Phase 4) |
| Privilege Escalation | TA0004 | #10 privesc · #120 IAM review · #136 cloud asset discovery | #91 SIEM queries for privilege abuse |
| Defense Evasion | TA0005 | #37 EDR evasion research | #62 detection engineering · #91 log tampering hunts |
| Credential Access | TA0006 | #23 password spraying (lockout-safe) · Kerberoasting / AS-REP roasting | #46 credential abuse logs · #48 hunt hypotheses |
| Discovery | TA0007 | #10 AD attack paths · #136 cloud asset discovery | — |
| Lateral Movement | TA0008 | #34 NTLM relay planning | #91 lateral-movement SIEM queries · segmentation prompts |
| Collection | TA0009 | #40 post-exploit evidence | — |
| Command and Control | TA0011 | #16 C2 infra (redirectors, fallbacks) | #49 DNS tunneling / DGA / beaconing · #62 C2 detection rules |
| Exfiltration | TA0010 | #21 exfil simulation | #79 DLP rule design |
| Impact | TA0040 | out of scope — destructive ops excluded | #56 ransomware playbook · #58 severity classification · #59 containment · #60 comms drafting |

A few tactics deserve a note:

**Credential Access** — `#23` includes lockout-policy math so spraying campaigns stay below the threshold during authorized engagements. The matching hunt prompts (`#46`, `#48`) plug into Phase 1–2 of the Threat Hunting scenario.

**Command and Control** — offense is intentionally limited to infrastructure planning (`#16`); there are no payload prompts. Defensive coverage is heavier: DNS analysis (`#49`) and detection-rule generation (`#62`) chain together to produce Sigma/Splunk rules from observed patterns.

**Impact** — only defensive prompts. Ransomware response (`#56`), severity classification (`#58`), containment (`#59`), and stakeholder comms (`#60`) form the back half of the Incident Response scenario.

## Cloud (ATT&CK for Cloud)

| Technique | ID | Prompts |
|---|---|---|
| Cloud Service Discovery | T1526 | #120 IAM review · #136 cloud asset discovery |
| Modify Cloud Compute Config | T1578 | #125 network security · #142 compliance benchmark automation |
| Unsecured Cloud Credentials | T1552.005 | #123 storage bucket audit · #145 logging completeness |
| Cloud Account Manipulation | T1098.001 | #139 cloud database audit |

## LLM / AI agents (OWASP Top 10 for LLMs)

The AI Agent Security category maps to the [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) rather than classic ATT&CK.

| OWASP | Prompts |
|---|---|
| LLM01 Prompt Injection | #286 direct & indirect injection testing |
| LLM03 Training Data Poisoning | #292 model supply chain audit |
| LLM06 Sensitive Information Disclosure | #303 access control & guardrails |
| LLM08 Excessive Agency | #303 + #304 agent monitoring & observability |
| LLM09 Overreliance | #314 STRIDE-adapted AI threat modeling |
| LLM10 Model Theft | #292 model provenance |

## Contributing

Schema for per-prompt ATT&CK tags is being designed. Until then, this table is the source of truth — submit PRs against the rows above. See [CONTRIBUTING.md](CONTRIBUTING.md).

MITRE ATT&CK® is a registered trademark of The MITRE Corporation. This project is not affiliated with MITRE.

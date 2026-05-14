# cybersec-mcp | The Ultimate AI Prompt Collection for Cybersecurity Professionals

> 300+ ready-to-use prompts for ChatGPT, Claude, and other AI assistants. Copy, paste, customize the bracketed variables, and get actionable cybersecurity output in seconds.

---

## Table of Contents

1. [Red Team / Offensive Security](#1-red-team--offensive-security) (45 prompts: #001-#045)
2. [Blue Team / Defensive Security](#2-blue-team--defensive-security) (42 prompts: #046-#087)
3. [SOC Operations](#3-soc-operations) (42 prompts: #088-#129)
4. [Cloud Security](#4-cloud-security) (38 prompts: #130-#167)
5. [OSINT / Reconnaissance](#5-osint--reconnaissance) (38 prompts: #168-#205)
6. [GRC / Compliance](#6-grc--compliance) (38 prompts: #206-#243)
7. [Vulnerability Analysis](#7-vulnerability-analysis) (42 prompts: #244-#285)
8. [AI Agent Security (2026 Trending)](#8-ai-agent-security-2026-trending) (38 prompts: #286-#323)

**Total: 323 prompts**

---

## 1. Red Team / Offensive Security

### Reconnaissance & Enumeration

**#001 - Subdomain Enumeration Strategy**

```
I am conducting an authorized penetration test against [TARGET_DOMAIN]. Generate a comprehensive subdomain enumeration methodology that includes:
1. Passive techniques (certificate transparency logs, DNS aggregators, web archives)
2. Active techniques (DNS brute-forcing wordlists, virtual host discovery)
3. Recommended tool chain with exact command-line syntax for each step
4. How to organize and deduplicate results
5. Priority ranking of discovered subdomains by likely attack surface value
```
_Use when: Starting a new engagement and need a structured recon plan._

---

**#002 - Port Scan Result Analysis**

```
Analyze the following Nmap scan results from an authorized pentest of [TARGET_IP]:

[PASTE_NMAP_OUTPUT]

For each open port:
1. Identify the service and version
2. List known vulnerabilities for that version (include CVE IDs)
3. Suggest next-step enumeration commands
4. Rate exploitation likelihood (High/Medium/Low)
5. Recommend the order of attack based on risk-to-reward ratio
```
_Use when: You have raw Nmap output and need prioritized next steps._

---

**#003 - DNS Zone Transfer Attempt Plan**

```
I have authorization to test DNS configurations for [TARGET_DOMAIN]. Draft a step-by-step plan to:
1. Identify all authoritative nameservers
2. Attempt zone transfers with exact dig/host commands
3. Analyze zone file contents if transfer succeeds
4. Identify internal hostnames, mail servers, and network structure from DNS records
5. Suggest fallback enumeration if zone transfer fails
```
_Use when: Early recon phase to map DNS infrastructure._

---

**#004 - Web Application Attack Surface Mapping**

```
I have discovered the following endpoints on [TARGET_WEB_APP] during an authorized assessment:

[PASTE_ENDPOINT_LIST]

For each endpoint:
1. Classify the functionality (authentication, file upload, API, admin panel, etc.)
2. List the top 5 most likely vulnerability classes per endpoint
3. Suggest specific test payloads for each vulnerability class
4. Prioritize endpoints by exploitability and business impact
5. Recommend Burp Suite or ZAP configurations for automated testing
```
_Use when: You have a sitemap or crawl output and need to prioritize testing._

---

**#005 - Network Service Fingerprinting Deep Dive**

```
During an authorized engagement against [TARGET_NETWORK], I found the following services responding on non-standard ports:

[SERVICE_LIST_WITH_PORTS]

For each service:
1. Determine the likely application based on banner/response
2. List version-specific attack vectors
3. Provide manual verification commands
4. Suggest credential-based attacks if applicable
5. Identify misconfigurations that could enable lateral movement
```
_Use when: You encounter services on unusual ports and need identification._

---

**#006 - OSINT-to-Attack-Path Correlation**

```
From OSINT on [TARGET_ORGANIZATION], I have gathered the following:
- Employee names: [LIST]
- Email format: [FORMAT]
- Technology stack: [TECH_STACK]
- Exposed repositories: [REPO_URLS]
- Social media profiles: [PROFILE_LINKS]

Map this intelligence to potential attack paths:
1. Credential stuffing / password spraying targets
2. Spear-phishing pretexts based on employee roles
3. Technology-specific exploits for the known stack
4. Secrets or API keys in exposed repositories
5. Rank each attack path by feasibility and likely impact
```
_Use when: Bridging OSINT findings into actionable attack scenarios._

---

### Exploitation Methodology

**#007 - SQL Injection Exploitation Roadmap**

```
I have confirmed a SQL injection vulnerability at [URL_AND_PARAMETER] on [TARGET_APP] during an authorized test. The backend appears to be [DB_TYPE]. Create an exploitation roadmap:
1. Confirm injection type (error-based, blind, time-based, union-based)
2. Provide exact payloads to enumerate database version, user, and current database
3. Steps to extract table names and column names
4. Data exfiltration strategy with sqlmap command syntax
5. Post-exploitation: privilege escalation within the database
6. Cleanup and evidence collection requirements
```
_Use when: You have a confirmed SQLi and need structured exploitation steps._

---

**#008 - Privilege Escalation Checklist Generator**

```
I have a low-privilege shell on a [LINUX/WINDOWS] host during an authorized engagement. System details:

OS: [OS_VERSION]
Current user: [USERNAME]
Groups: [GROUP_MEMBERSHIP]

Generate a comprehensive privilege escalation checklist:
1. Automated enumeration commands to run first (LinPEAS/WinPEAS alternatives)
2. SUID/SGID binary analysis (Linux) or service permission checks (Windows)
3. Scheduled task / cron job abuse opportunities
4. Kernel exploit candidates based on the OS version
5. Credential harvesting locations to check
6. Misconfigurations in sudoers / registry / group policies
7. Ranked order of attempts from least noisy to most noisy
```
_Use when: Post-exploitation when you have initial access and need root/SYSTEM._

---

**#009 - Active Directory Attack Path Planning**

```
I have compromised a domain-joined workstation in [DOMAIN_NAME] with user [USERNAME]. BloodHound output shows:

[PASTE_KEY_BLOODHOUND_FINDINGS]

Plan the attack path to Domain Admin:
1. Analyze the shortest path from current user to DA
2. Identify Kerberoastable accounts and AS-REP roastable users
3. Check for unconstrained delegation opportunities
4. Suggest lateral movement techniques based on current privileges
5. List required tools and exact commands for each step
6. Identify detection risks at each stage and evasion options
```
_Use when: Mid-engagement in an AD environment with BloodHound data._

---

**#010 - Web Shell Deployment Strategy**

```
During an authorized pentest, I have achieved [FILE_UPLOAD/RCE] on [TARGET_WEB_SERVER] running [WEB_SERVER_TYPE] with [LANGUAGE]. Design a web shell deployment strategy:
1. Recommend a minimal, hard-to-detect web shell for this stack
2. Suggest placement locations that survive reboots
3. Provide obfuscation techniques to evade AV/EDR
4. Include a communication channel backup plan
5. Document cleanup procedures for engagement end
6. Note all forensic artifacts this will leave behind
```
_Use when: You need persistent access during an authorized engagement._

---

**#011 - Buffer Overflow Exploit Development Guidance**

```
I am developing an exploit for a buffer overflow vulnerability in [APPLICATION_NAME] version [VERSION] on [OS_PLATFORM]. I have:
- Crash offset: [OFFSET]
- Bad characters: [BAD_CHARS]
- Available space for shellcode: [BYTES]

Guide me through:
1. Identifying the correct return address / JMP ESP instruction
2. Generating shellcode with msfvenom (exact syntax with bad character exclusions)
3. Constructing the final payload with NOPs and alignment
4. Testing methodology to verify exploitation
5. Adapting the exploit if ASLR/DEP is enabled
```
_Use when: Developing a custom exploit for a binary vulnerability._

---

**#012 - API Security Testing Methodology**

```
I am authorized to test the REST API at [API_BASE_URL]. I have the following documentation:

[PASTE_API_DOCS_OR_SWAGGER_EXCERPT]

Create a targeted API security test plan:
1. Authentication/authorization bypass test cases (IDOR, broken function-level auth)
2. Input validation tests per endpoint (injection, type confusion, boundary)
3. Rate limiting and brute force attack scenarios
4. Business logic abuse scenarios
5. Mass assignment and parameter pollution tests
6. Exact curl/Postman commands for each test case
```
_Use when: Scoping API penetration testing with documentation available._

---

### Social Engineering

**#013 - Phishing Campaign Template Design**

```
I am designing an authorized phishing simulation for [ORGANIZATION_NAME] targeting [DEPARTMENT]. Context:
- Industry: [INDUSTRY]
- Recent events: [RELEVANT_NEWS]
- Email platform: [EMAIL_PLATFORM]

Create three phishing email templates with escalating sophistication:
1. Basic: Generic urgency-based lure
2. Intermediate: Role-specific pretext using organizational context
3. Advanced: Multi-step pretext involving a fake vendor/partner scenario

For each template include:
- Subject line, sender name, and from address strategy
- Email body with HTML formatting suggestions
- Landing page concept description
- Success metrics and tracking approach
- Red flags that training should teach users to spot
```
_Use when: Planning authorized phishing simulations for security awareness._

---

**#014 - Vishing Script Development**

```
Create a vishing (voice phishing) script for an authorized social engineering engagement against [TARGET_ORGANIZATION]. Scenario: [PRETEXT_SCENARIO].

The script should include:
1. Opening introduction and rapport building
2. Three branching paths based on target responses (cooperative, suspicious, hostile)
3. Information gathering questions embedded naturally
4. Escalation hooks to extend the conversation
5. Exit strategy for each scenario
6. Documentation template for recording outcomes
7. Ethical boundaries and abort triggers
```
_Use when: Preparing voice-based social engineering tests._

---

**#015 - Physical Social Engineering Pretext Planning**

```
Plan a physical social engineering assessment for [TARGET_FACILITY]. Known details:
- Building type: [BUILDING_TYPE]
- Security measures observed: [OBSERVED_SECURITY]
- Employee dress code: [DRESS_CODE]
- Delivery/vendor patterns: [OBSERVED_PATTERNS]

Develop three pretext scenarios:
1. Delivery/maintenance worker pretext
2. New employee / contractor pretext
3. Executive/VIP visitor pretext

For each: equipment needed, backstory, target areas, information objectives, abort criteria, and legal documentation to carry.
```
_Use when: Planning authorized physical penetration tests._

---

**#016 - Social Engineering Report Narrative**

```
Write a professional social engineering assessment report narrative for the following engagement:

Client: [CLIENT_NAME]
Assessment type: [PHISHING/VISHING/PHYSICAL]
Duration: [DATE_RANGE]
Results summary: [KEY_METRICS]
Notable findings: [FINDINGS_LIST]

Structure:
1. Executive summary (non-technical, for leadership)
2. Methodology description
3. Detailed findings with evidence references
4. Human vulnerability patterns identified
5. Specific, actionable recommendations ranked by impact
6. Comparison with industry benchmarks
7. Training program recommendations
```
_Use when: Documenting social engineering engagement results._

---

### Attack Path & Post-Exploitation

**#017 - Lateral Movement Strategy**

```
I have compromised [INITIAL_HOST] in [NETWORK_SEGMENT] with [ACCESS_LEVEL] privileges during an authorized engagement. Network context:

[PASTE_NETWORK_MAP_OR_DISCOVERY_OUTPUT]

Develop a lateral movement strategy:
1. Credential harvesting from the current host (memory, files, registry)
2. Network share enumeration and access testing
3. Service account identification and abuse
4. WMI/PSExec/WinRM/SSH lateral movement options with exact commands
5. Pivoting setup for reaching additional network segments
6. Detection avoidance at each step
7. Documentation requirements for each successful move
```
_Use when: Post-initial-access when you need to expand foothold._

---

**#018 - Data Exfiltration Simulation Plan**

```
During an authorized red team engagement for [CLIENT], I need to simulate data exfiltration from [SOURCE_SYSTEM]. Security controls in place: [KNOWN_CONTROLS].

Design an exfiltration simulation plan:
1. Data staging and compression techniques
2. Three exfiltration channels ranked by stealth (DNS, HTTPS, cloud storage)
3. Exact tool configurations for each channel
4. Rate limiting to avoid detection thresholds
5. Evidence of exfiltration for the report (without actually removing sensitive data)
6. How the blue team should be able to detect each method
```
_Use when: Simulating data theft in red team exercises._

---

**#019 - C2 Infrastructure Planning**

```
I am setting up command-and-control infrastructure for an authorized red team engagement against [TARGET_ORG]. Their known security stack includes [SECURITY_TOOLS].

Design a resilient C2 architecture:
1. Redirector configuration to hide the team server
2. Domain categorization strategy for C2 domains
3. Certificate setup for encrypted communications
4. Fallback channels if primary C2 is blocked
5. Malleable C2 profile recommendations to blend with normal traffic
6. Infrastructure teardown checklist for engagement end
```
_Use when: Pre-engagement C2 infrastructure setup._

---

**#020 - Persistence Mechanism Catalog**

```
On a compromised [WINDOWS/LINUX/MACOS] system ([OS_VERSION]) during an authorized assessment, I need persistence that survives reboots. Current access level: [ACCESS_LEVEL].

List persistence mechanisms in order of stealth:
1. For each mechanism: exact implementation commands
2. Detection difficulty rating (1-5)
3. Artifacts created (registry keys, files, services)
4. Removal/cleanup instructions
5. Which EDR/AV solutions detect each method
6. Recommended mechanism based on the engagement's stealth requirements
```
_Use when: Establishing persistence during red team operations._

---

**#021 - Password Spraying Campaign Design**

```
I am authorized to conduct password spraying against [TARGET_DOMAIN] with the following known information:
- Authentication endpoint: [ENDPOINT]
- Username list: [NUMBER] users in [FORMAT]
- Password policy: [POLICY_DETAILS]
- Lockout policy: [LOCKOUT_THRESHOLD_AND_DURATION]

Design the spraying campaign:
1. Calculate safe spraying intervals based on lockout policy
2. Generate a prioritized password list based on the policy and common patterns
3. Tool selection and exact command syntax (Spray, Ruler, Hydra, etc.)
4. Monitoring for successful authentications
5. Next steps after credential capture
6. Logging requirements for the engagement report
```
_Use when: Planning credential spraying within safe limits._

---

**#022 - Wireless Network Attack Plan**

```
I am authorized to assess wireless security at [TARGET_LOCATION]. Observed networks:

[PASTE_AIRODUMP_OR_SURVEY_OUTPUT]

Create an attack plan:
1. Prioritize networks by encryption weakness and business value
2. WPA2/WPA3 attack methodology per network type
3. Evil twin AP setup for credential harvesting
4. Client-side attacks against associated devices
5. Exact tool commands (aircrack-ng suite, hostapd, etc.)
6. Physical positioning recommendations for optimal results
```
_Use when: Conducting authorized wireless security assessments._

---

**#023 - Red Team Engagement Rules of Engagement Draft**

```
Draft a Rules of Engagement (RoE) document for a red team assessment with these parameters:

Client: [CLIENT_NAME]
Scope: [IN_SCOPE_SYSTEMS_AND_NETWORKS]
Duration: [START_DATE] to [END_DATE]
Type: [ASSUMED_BREACH/FULL_SCOPE/TARGETED]
Out of scope: [EXCLUDED_SYSTEMS]
Emergency contacts: [CONTACT_LIST]

Include sections for:
1. Scope boundaries and allowed techniques
2. Escalation procedures and emergency stop process
3. Communication protocols (check-in schedule, status reports)
4. Data handling and evidence retention
5. Legal protections and authorization references
6. Deconfliction procedures with SOC/IT teams
7. Deliverables and timeline
```
_Use when: Formalizing engagement scope before a red team exercise._

---

**#024 - Kerberoasting Attack Execution**

```
I have a valid domain credential ([USERNAME]) in [DOMAIN_NAME] during an authorized assessment. I want to perform Kerberoasting.

Provide:
1. Exact Impacket GetUserSPNs.py command with all required flags
2. Alternative: Rubeus command syntax if running from a domain-joined host
3. How to identify high-value service accounts in the results
4. Hashcat command for cracking the extracted TGS tickets (hash mode, recommended rules)
5. Post-crack validation steps
6. Detection indicators the blue team should look for
```
_Use when: Targeting service account credentials in Active Directory._

---

**#025 - Red Team Debrief Report Structure**

```
Structure a red team debrief report for [ENGAGEMENT_NAME]:

Findings summary:
[LIST_KEY_FINDINGS]

Organize the report with:
1. Executive summary with attack narrative (non-technical story)
2. Attack timeline with MITRE ATT&CK mapping for each step
3. Per-finding detail: description, evidence, impact, remediation
4. Detection gap analysis: what the blue team missed and why
5. Positive findings: what defenses worked
6. Strategic recommendations (short-term, medium-term, long-term)
7. Technical appendix with tool output and commands used
```
_Use when: Writing the final deliverable after a red team engagement._

---

**#026 - Exploit Chain Construction**

```
During an authorized assessment of [TARGET_APPLICATION], I have identified these individual vulnerabilities:

[LIST_VULNERABILITIES_WITH_DETAILS]

Analyze how these can be chained:
1. Map each vulnerability's input/output to identify chain links
2. Construct the most impactful exploit chain
3. Provide step-by-step execution with exact payloads
4. Identify the overall impact of the chain vs. individual findings
5. Suggest alternative chains if one link fails
6. Write the chain narrative for the pentest report
```
_Use when: Multiple low/medium findings that could chain into critical impact._

---

**#027 - Client-Side Attack Payload Generation**

```
For an authorized engagement, I need a client-side payload targeting [TARGET_OS] with [TARGET_APPLICATION]. The target's AV/EDR is [SECURITY_PRODUCT].

Note: Office macros from internet-sourced documents are blocked by default since mid-2022 (Microsoft MOTW macro blocking). Consider payload format viability based on target OS version and patch level.

Guide me through:
1. Payload format selection and rationale — evaluate viability of each format for the target environment:
   - Office macros (only viable if MOTW bypass exists or internal delivery)
   - HTA, LNK files, ISO/IMG containers (partially mitigated in Windows 11)
   - MSI installers, ClickOnce, OneNote embedded files, PDF
   - Recommend the most viable format(s) for [TARGET_OS] version and patch level
2. Payload generation with msfvenom or custom tooling
3. Obfuscation techniques for the specific AV/EDR
4. Delivery mechanism (email attachment, watering hole, USB)
5. Execution chain from user click to shell
6. Sandbox evasion techniques to include
```
_Use when: Crafting client-side attacks for social engineering delivery._

---

**#028 - Container Escape Methodology**

```
I have access to a container on [CONTAINER_RUNTIME] (Docker/Podman/containerd) during an authorized assessment. Container details:

[PASTE_CONTAINER_INFO: capabilities, mounts, user, kernel version]

Develop an escape strategy:
1. Check for privileged mode and dangerous capabilities
2. Test mounted socket access (docker.sock)
3. Kernel exploit applicability based on version
4. Filesystem mount abuse opportunities
5. Network-based escapes (host network mode)
6. Exact commands for each escape technique
7. Post-escape pivoting steps
```
_Use when: Testing container isolation during cloud/infrastructure pentests._

---

### Advanced Techniques

**#029 - Custom Payload Obfuscation**

```
I have a [LANGUAGE] payload that is detected by [AV/EDR_PRODUCT]. The payload:

[PASTE_PAYLOAD_OR_DESCRIBE_FUNCTIONALITY]

Suggest obfuscation approaches:
1. String encryption/encoding techniques specific to [LANGUAGE]
2. Control flow obfuscation methods
3. API call obfuscation (syscall direct invocation, dynamic resolution)
4. Memory-only execution techniques
5. Entropy reduction to avoid heuristic detection
6. Testing methodology to validate evasion
```
_Use when: Bypassing specific security products during authorized testing._

---

**#030 - NTLM Relay Attack Setup**

```
During an authorized internal assessment, I've identified potential NTLM relay targets. Network details:

- SMB signing status: [SIGNING_STATUS_PER_HOST]
- Identified services: [SERVICE_LIST]
- Current position: [ATTACKER_IP_AND_SEGMENT]

Plan the relay attack:
1. Identify the best relay targets (SMB, LDAP, HTTP, MSSQL)
2. Exact ntlmrelayx.py configuration for each target type
3. Coercion methods to trigger authentication (PetitPotam, PrinterBug, etc.)
4. Post-relay actions (user creation, DCSync, shell)
5. Multi-relay setup for maximum impact
6. Cleanup steps after successful relay
```
_Use when: Exploiting NTLM relay vulnerabilities in Windows environments._

---

**#031 - Cloud Penetration Test Scope Builder**

```
I am planning a cloud penetration test for [ORGANIZATION] on [AWS/AZURE/GCP]. Known cloud footprint:

[PASTE_KNOWN_ASSETS]

Build the scoping document:
1. Enumerate testable services by cloud provider
2. Identify provider-specific restrictions and approval requirements
3. Map applicable attack techniques per service
4. Define success criteria for the engagement
5. List required permissions/credentials from the client
6. Create the cloud-specific Rules of Engagement addendum
```
_Use when: Scoping cloud-specific penetration testing engagements._

---

**#032 - Purple Team Exercise Scenario Design**

```
Design a purple team exercise for [ORGANIZATION] testing detection of [MITRE_TECHNIQUE_IDS]. Environment:
- SIEM: [SIEM_PLATFORM]
- EDR: [EDR_PRODUCT]
- Network monitoring: [NSM_TOOLS]

For each technique:
1. Red team execution steps with exact tools and commands
2. Expected telemetry sources and log events
3. Blue team detection query/rule to write
4. Validation criteria (true positive confirmed)
5. Gap analysis if detection fails
6. Tuning recommendations for the detection rule
```
_Use when: Running collaborative red/blue team detection improvement exercises._

---

**#033 - Assumed Breach Scenario Planning**

```
Plan an assumed breach scenario for [TARGET_ORG] starting from:
- Initial access point: [COMPROMISED_ASSET]
- Provided credentials: [ACCESS_LEVEL]
- Objectives: [LIST_CROWN_JEWELS]

Create the engagement plan:
1. Day-by-day activity timeline for a [DURATION]-day engagement
2. Reconnaissance activities from the breach point
3. Privilege escalation milestones
4. Lateral movement waypoints toward objectives
5. Data access/exfiltration simulation plan
6. Daily deconfliction and status reporting schedule
```
_Use when: Planning assumed breach red team exercises._

---

**#034 - Thick Client Application Testing Guide**

```
I am authorized to test a thick client application: [APP_NAME] running on [OS]. Technology stack: [TECH_STACK].

Generate a testing methodology:
1. Static analysis approach (binary reverse engineering, config files, hardcoded creds)
2. Dynamic analysis (API interception, memory manipulation, debugging)
3. Network traffic analysis between client and server
4. Local storage and data protection assessment
5. Authentication and session management tests
6. Business logic abuse scenarios specific to thick clients
7. Recommended tools for each testing phase
```
_Use when: Assessing desktop/thick client applications._

---

**#035 - SCADA/ICS Penetration Testing Framework**

```
I am authorized to test an ICS/SCADA environment for [ORGANIZATION]. System details:
- Protocols in use: [MODBUS/DNP3/OPC/ETC]
- PLC/RTU models: [DEVICE_LIST]
- Network segmentation: [ARCHITECTURE_OVERVIEW]

Create a safe testing framework:
1. Passive reconnaissance techniques that won't disrupt operations
2. Protocol-specific vulnerability tests with safety constraints
3. Authentication and access control validation
4. Network segmentation verification tests
5. Firmware analysis methodology
6. Absolute do-not-touch items and safety abort triggers
7. ICS-specific reporting requirements
```
_Use when: Testing operational technology environments with extreme caution._

---

**#036 - Mobile Application Penetration Testing Checklist**

```
I am authorized to test the mobile application [APP_NAME] on [ANDROID/IOS]. The app communicates with [BACKEND_URL].

Generate a comprehensive testing checklist:
1. Static analysis: decompilation, hardcoded secrets, insecure storage
2. Network analysis: certificate pinning bypass, API traffic interception
3. Authentication: token handling, session management, biometric bypass
4. Data storage: keychain/keystore review, file system artifacts
5. Runtime manipulation: Frida scripts for key function hooks
6. Business logic tests specific to app functionality
7. Exact tool commands (objection, frida, jadx, apktool)
```
_Use when: Conducting mobile application security assessments._

---

**#037 - Ransomware Simulation Design**

```
Design a safe ransomware simulation for [ORGANIZATION]'s tabletop or controlled technical exercise. Purpose: testing backup/recovery and incident response.

Create:
1. Simulation scope and safety boundaries
2. Benign encryption simulation (specific test files only)
3. Ransom note template for realism
4. Communication channel simulation
5. Metrics to measure: detection time, response time, recovery time
6. Exercise injects and escalation scenarios
7. Post-exercise assessment criteria
8. Explicit exclusions to prevent any actual damage
```
_Use when: Testing ransomware resilience without real risk._

---

**#038 - Bypassing MFA Assessment**

```
During an authorized assessment, I need to test MFA implementation on [TARGET_APPLICATION] using [MFA_TYPE] (TOTP, SMS, push notification, FIDO2).

Develop test cases for:
1. MFA enrollment process weaknesses
2. Backup code / recovery flow vulnerabilities
3. Session management after MFA (can it be replayed?)
4. Real-time phishing / MFA fatigue attack feasibility
5. Downgrade attacks (forcing fallback to weaker factor)
6. Race conditions in verification endpoint
7. Impact assessment for each successful bypass
```
_Use when: Validating MFA implementations during web application assessments._

---

**#039 - Internal Network Segmentation Testing**

```
I am authorized to validate network segmentation for [ORGANIZATION]. Provided access in [ZONE_A], testing connectivity to [ZONE_B, ZONE_C, etc.].

Build the segmentation test plan:
1. Port scanning strategy between zones (targeted, not full range)
2. Protocol-specific tests (SMB, RDP, SSH, HTTP/S, database ports)
3. Application-layer bypass attempts (tunneling, encapsulation)
4. Firewall rule inference from test results
5. Results matrix template (source zone -> destination zone -> port -> allowed/denied)
6. Gap identification and risk-rating methodology
7. Recommendations for segmentation improvements
```
_Use when: Validating firewall rules and network segmentation controls._

---

**#040 - Post-Exploitation Evidence Collection**

```
I have completed exploitation phases in an authorized engagement. Compromised hosts:

[HOST_LIST_WITH_ACCESS_LEVELS]

Create an evidence collection and documentation plan:
1. Screenshot and screen recording requirements per finding
2. Command output logging (timestamps, exact commands)
3. Hash verification of accessed files (never exfiltrate real data)
4. Network traffic captures as evidence
5. Timeline reconstruction from post-exploitation activities
6. Chain-of-custody documentation template
7. Secure evidence storage and transfer procedures
```
_Use when: Preparing engagement evidence for the final report._

---

**#041 - Attack Surface Reduction Recommendations**

```
Based on the following pentest findings for [ORGANIZATION]:

[PASTE_FINDINGS_SUMMARY]

Generate prioritized attack surface reduction recommendations:
1. Quick wins (implementable in 1-2 days)
2. Short-term improvements (1-2 weeks)
3. Strategic changes (1-3 months)
4. For each recommendation: effort level, cost estimate, and risk reduction score
5. Dependencies between recommendations
6. Metrics to track improvement over time
```
_Use when: Translating pentest findings into a remediation roadmap._

---

**#042 - EDR Evasion Research Plan**

```
I need to test whether [EDR_PRODUCT] detects [SPECIFIC_TECHNIQUE] during an authorized red team exercise. The EDR version is [VERSION].

Create a research plan:
1. Document the technique's normal detection signature
2. Identify the telemetry sources the EDR uses for detection
3. List three evasion variants from least to most complex
4. Provide test execution steps in a controlled lab first
5. Success/failure criteria for each variant
6. Document findings for blue team detection improvement
```
_Use when: Researching detection gaps in endpoint security products._

---

**#043 - Supply Chain Attack Simulation**

```
Design a supply chain attack simulation for [ORGANIZATION]'s authorized security exercise:
- Software dependencies: [KEY_DEPENDENCIES]
- Build pipeline: [CI_CD_PLATFORM]
- Package management: [PACKAGE_MANAGERS]

Simulate:
1. Dependency confusion attack vectors
2. Typosquatting feasibility assessment
3. Build pipeline injection points
4. Compromised developer credential scenario
5. Detection capabilities at each supply chain stage
6. Realistic but safe proof-of-concept for each vector
```
_Use when: Testing software supply chain security posture._

---

**#044 - Cobalt Strike Malleable C2 Profile Review**

```
Review and improve this Cobalt Strike malleable C2 profile for an authorized red team engagement against [TARGET_ORG]:

[PASTE_PROFILE]

Analyze:
1. Does the traffic pattern match the claimed application?
2. Are there indicators that threat intelligence would catch?
3. Certificate and SSL configuration review
4. User-agent and header consistency
5. Staging and payload delivery profile adequacy
6. Suggest specific improvements for each section
7. Test the profile against common detection tools
```
_Use when: Hardening C2 communications before red team engagements._

---

**#045 - Zero-Day Discovery Methodology**

```
I am researching [APPLICATION_NAME] version [VERSION] for potential zero-day vulnerabilities during an authorized research program. Source access: [YES/NO].

Outline a structured discovery methodology:
1. Attack surface enumeration for this application
2. Fuzzing strategy: targets, tools (AFL++, LibFuzzer, custom), seed corpus
3. Static analysis approach: code auditing patterns, taint analysis
4. Vulnerability classes most likely for this application type
5. Proof-of-concept development workflow
6. Responsible disclosure timeline and coordination plan
```
_Use when: Conducting authorized vulnerability research on specific applications._

---

## 2. Blue Team / Defensive Security

### Log Analysis & Threat Hunting

**#046 - Suspicious Authentication Log Analysis**

```
Analyze the following authentication log entries from [LOG_SOURCE] for indicators of compromise:

[PASTE_LOG_ENTRIES]

Provide:
1. Identify anomalous patterns (time of day, geographic location, frequency)
2. Flag brute force, password spraying, or credential stuffing indicators
3. Check for impossible travel scenarios
4. Identify successful logins preceded by multiple failures
5. Correlate with known attack patterns (e.g., spray-then-lateral-move)
6. Recommend immediate actions for each finding
7. Provide SIEM query to find similar activity across all sources
```
_Use when: Reviewing authentication logs during threat hunting or alert triage._

---

**#047 - PowerShell Script Block Log Investigation**

```
I've collected the following PowerShell Script Block log entries (Event ID 4104) from [HOST_NAME]:

[PASTE_LOG_ENTRIES]

Analyze for malicious activity:
1. Decode any obfuscated or encoded commands
2. Identify AMSI bypass attempts
3. Flag known offensive tool signatures (Mimikatz, PowerView, Rubeus)
4. Detect reflective loading, download cradles, or living-off-the-land techniques
5. Map observed commands to MITRE ATT&CK techniques
6. Build an activity timeline for this host
7. Recommend containment steps based on findings
```
_Use when: Investigating potential PowerShell-based attacks._

---

**#048 - Threat Hunting Hypothesis Generator**

```
Generate threat hunting hypotheses for [ORGANIZATION] based on:
- Industry: [INDUSTRY]
- Recent threat intelligence: [RELEVANT_THREATS_OR_CAMPAIGNS]
- Available data sources: [LIST_OF_LOG_SOURCES]
- MITRE ATT&CK techniques of concern: [TECHNIQUE_IDS]

For each hypothesis:
1. Statement: "An adversary may be [doing X] via [technique Y]"
2. Data sources needed to validate
3. Specific search queries (Splunk/ELK/Sentinel syntax)
4. Expected indicators if hypothesis is true
5. False positive considerations
6. Escalation criteria if findings are suspicious
```
_Use when: Planning proactive threat hunting campaigns._

---

**#049 - DNS Log Anomaly Detection**

```
Analyze these DNS query logs from [DNS_SERVER] for signs of malicious activity:

[PASTE_DNS_LOGS]

Check for:
1. DNS tunneling indicators (high query volume, long subdomain strings, TXT record abuse)
2. DGA (Domain Generation Algorithm) patterns
3. Queries to known malicious or newly registered domains
4. Unusual query types (AAAA, TXT, NULL, CNAME chains)
5. Beaconing patterns (regular interval queries)
6. Data exfiltration via DNS (base64/hex encoded subdomains)
7. Provide detection rules for each identified pattern
```
_Use when: Hunting for DNS-based C2 or data exfiltration._

---

**#050 - Windows Event Log Forensic Analysis**

```
I have the following Windows Event Logs from a potentially compromised host [HOST_NAME]:

Security log highlights: [PASTE_EVENTS]
System log highlights: [PASTE_EVENTS]
Sysmon log highlights: [PASTE_EVENTS]

Perform forensic analysis:
1. Timeline reconstruction of adversary activity
2. Account compromise indicators (4625, 4624, 4672, 4768, 4769)
3. Lateral movement evidence (Type 3 logons, service installations)
4. Persistence indicators (scheduled tasks, services, registry)
5. Process execution chain analysis (Sysmon events 1, 3, 7, 8, 10)
6. Data staging or exfiltration indicators
7. IOCs extracted for organizational-wide sweep
```
_Use when: Conducting forensic analysis on a suspected compromised Windows host._

---

**#051 - Network Traffic Anomaly Investigation**

```
Our network monitoring has flagged anomalous traffic from [SOURCE_IP] to [DESTINATION_IP]. PCAP analysis summary:

[PASTE_TRAFFIC_SUMMARY_OR_ZEEK_LOGS]

Investigate:
1. Protocol analysis: is the traffic legitimate for the stated service?
2. Payload inspection: any encoded/encrypted data in unexpected protocols?
3. Beaconing analysis: calculate interval consistency and jitter
4. Volume analysis: unusual data transfer sizes?
5. Correlate with threat intelligence feeds
6. Compare with baseline traffic patterns for this host
7. Verdict: benign, suspicious, or malicious with confidence rating
```
_Use when: Investigating network-based alerts or anomalies._

---

**#052 - Email Header Analysis for Phishing Investigation**

```
Analyze these email headers from a suspected phishing email reported by [USER]:

[PASTE_FULL_EMAIL_HEADERS]

Determine:
1. True origin of the email (trace the Received headers)
2. SPF, DKIM, and DMARC validation results
3. Sender reputation and domain age
4. Header anomalies indicating spoofing
5. URL analysis for any links in the body
6. Attachment analysis recommendations
7. IOCs to block (sending IP, domain, URLs, file hashes)
8. Recommend organizational-wide search for similar messages
```
_Use when: Investigating reported phishing emails._

---

**#053 - Threat Hunting Playbook: Persistence Mechanisms**

```
Create a threat hunting playbook for detecting persistence mechanisms across our [WINDOWS/LINUX/MIXED] environment.

Data sources available: [LIST_SOURCES]

For each persistence technique (registry run keys, scheduled tasks, services, WMI subscriptions, startup folders, cron jobs, systemd units, SSH authorized_keys):
1. Detection query for our SIEM ([SIEM_PLATFORM])
2. Baseline: what does normal look like?
3. Red flags that indicate malicious persistence
4. Validation steps when a suspicious finding surfaces
5. Automated sweep to check all endpoints
6. Response actions for confirmed malicious persistence
```
_Use when: Building systematic persistence detection capabilities._

---

**#054 - Malware Triage Checklist**

```
I have a suspicious file [FILENAME] with hash [FILE_HASH] collected from [SOURCE_HOST]. File type: [FILE_TYPE].

Guide me through triage:
1. Static analysis steps: file metadata, strings extraction, PE/ELF header analysis
2. Hash lookups: VirusTotal, MalwareBazaar, Hybrid Analysis queries
3. Behavioral indicators to look for in sandbox results
4. YARA rule to detect this file and variants
5. Network indicators to extract (domains, IPs, URLs)
6. Organizational impact assessment questions
7. Containment steps based on preliminary findings
```
_Use when: First encounter with a suspicious file that needs rapid assessment._

---

**#055 - Linux Intrusion Detection Log Review**

```
Review these logs from a Linux server [HOSTNAME] suspected of compromise:

Auth log: [PASTE_RELEVANT_ENTRIES]
Audit log: [PASTE_RELEVANT_ENTRIES]
Syslog: [PASTE_RELEVANT_ENTRIES]
Command history: [PASTE_IF_AVAILABLE]

Analyze for:
1. Unauthorized SSH access (key-based and password-based)
2. Privilege escalation attempts (sudo abuse, exploit artifacts)
3. Unusual process execution and cron modifications
4. File system changes to sensitive directories (/etc, /root, /tmp)
5. Network connections to external hosts
6. Rootkit indicators (hidden files, modified binaries)
7. Timeline of attacker activity with confidence ratings
```
_Use when: Investigating suspected Linux server compromises._

---

### Incident Response

**#056 - Incident Response Playbook: Ransomware**

```
Create a ransomware incident response playbook for [ORGANIZATION]:

Environment:
- Endpoints: [COUNT] ([OS_TYPES])
- Backup solution: [BACKUP_SYSTEM]
- EDR: [EDR_PRODUCT]
- Network architecture: [BRIEF_DESCRIPTION]

Include:
1. Detection and initial assessment (first 30 minutes)
2. Containment strategy (network isolation procedures, exact steps)
3. Scope determination (identifying affected systems)
4. Evidence preservation steps before any remediation
5. Eradication: variant identification, decryptor availability check
6. Recovery: prioritized system restoration from backups
7. Communication templates (internal, executive, legal, media, law enforcement)
8. Post-incident review agenda
```
_Use when: Building or updating ransomware response procedures._

---

**#057 - Business Email Compromise Response Plan**

```
Create a BEC incident response plan. Scenario: [DESCRIBE_BEC_SCENARIO]. Known details:
- Compromised account: [ACCOUNT]
- Timeline of known activity: [TIMELINE]
- Financial impact: [AMOUNT_OR_UNKNOWN]

Response steps:
1. Immediate account containment (exact steps for [EMAIL_PLATFORM])
2. Mailbox audit: sent items, rules, forwarding, delegations
3. Lateral movement check: did attacker access other systems?
4. Financial fraud containment (bank notification procedures)
5. Scope assessment: other accounts tested or compromised
6. Evidence preservation for law enforcement
7. User notification and credential reset plan
8. Preventive controls to implement post-incident
```
_Use when: Responding to business email compromise incidents._

---

**#058 - Incident Severity Classification Matrix**

```
Create an incident severity classification matrix for [ORGANIZATION] with:

Asset inventory context:
- Crown jewels: [LIST_CRITICAL_ASSETS]
- Business-critical services: [LIST_SERVICES]
- Regulatory requirements: [COMPLIANCE_FRAMEWORKS]

Build:
1. Severity levels (P1-Critical through P4-Informational) with clear definitions
2. Classification criteria: data impact, system impact, business impact, scope
3. Response time SLAs per severity level
4. Escalation matrix per severity level (who gets notified, when)
5. Examples for each severity level relevant to our environment
6. Decision tree flowchart for quick classification during incident
7. Reclassification triggers (when to upgrade/downgrade)
```
_Use when: Establishing or refining incident classification standards._

---

**#059 - Containment Strategy Decision Tree**

```
Build a containment strategy decision tree for [INCIDENT_TYPE] affecting [SYSTEM_TYPE] in our environment.

Constraints:
- Business criticality of affected system: [HIGH/MEDIUM/LOW]
- Can the system go offline? [YES/NO/SCHEDULED_ONLY]
- Regulatory notification requirements: [REQUIREMENTS]

Decision tree should cover:
1. Full isolation vs. partial isolation vs. monitoring only
2. Network-level containment (VLAN change, firewall rules, DNS sinkhole)
3. Host-level containment (disable account, kill process, quarantine)
4. Evidence preservation before containment actions
5. Business stakeholder notification requirements
6. Rollback procedure if containment causes operational issues
7. Criteria for moving from containment to eradication
```
_Use when: Making real-time containment decisions during active incidents._

---

**#060 - Incident Communication Template Suite**

```
Create a suite of incident communication templates for [ORGANIZATION] for a [INCIDENT_TYPE] incident:

1. Initial internal notification (to CISO, IT leadership) - 15-minute template
2. Executive briefing update (for C-suite) - non-technical, impact-focused
3. Technical situation report (for IR team) - detailed, actionable
4. Employee notification (if credentials affected) - clear, no jargon
5. Customer notification (if data breach confirmed) - regulatory compliant
6. Regulatory notification draft (for [REGULATORY_BODY])
7. Media holding statement (if public disclosure required)
8. Post-incident all-hands summary

For each template, include placeholders for [TIMESTAMP], [IMPACT], [ACTIONS_TAKEN], [NEXT_STEPS].
```
_Use when: Preparing communication templates before or during incidents._

---

### Defense Strategy

**#061 - Defense-in-Depth Architecture Review**

```
Review our defense-in-depth architecture for gaps:

Current security stack:
- Perimeter: [FIREWALLS, WAF, IDS/IPS]
- Endpoint: [EDR/AV PRODUCTS]
- Network: [NSM, NDR TOOLS]
- Identity: [IAM, MFA SOLUTIONS]
- Data: [DLP, ENCRYPTION]
- Application: [SAST, DAST, RASP]
- Cloud: [CSPM, CWPP]
- Monitoring: [SIEM, SOAR]

Analyze:
1. Coverage gaps by MITRE ATT&CK tactic
2. Single points of failure in the defense chain
3. Overlapping coverage that could be consolidated
4. Missing visibility in specific attack paths
5. Integration gaps between tools
6. Priority investments ranked by risk reduction
```
_Use when: Annual security architecture review or after a significant incident._

---

**#062 - Detection Engineering Rule Development**

```
Write detection rules for [MITRE_TECHNIQUE_ID] - [TECHNIQUE_NAME] for our environment:
- SIEM: [SIEM_PLATFORM]
- EDR: [EDR_PRODUCT]
- Log sources available: [LOG_SOURCES]

For each rule:
1. Detection logic in the SIEM's native query language
2. Sigma rule (portable format)
3. Required data sources and fields
4. Tuning parameters to reduce false positives
5. Test cases: simulate the technique and verify detection
6. Severity and confidence rating
7. Runbook: what analysts should do when this rule fires
8. Known bypass techniques for this detection
```
_Use when: Building new detection capabilities for specific threats._

---

**#063 - Firewall Rule Audit Checklist**

```
Audit the following firewall rules for [FIREWALL_TYPE] at [NETWORK_BOUNDARY]:

[PASTE_FIREWALL_RULES_OR_SUMMARY]

Check for:
1. Overly permissive rules (any/any, broad CIDR ranges)
2. Rules with no business justification or expired change tickets
3. Shadowed rules (rules that never match due to ordering)
4. Rules allowing risky services (Telnet, FTP, RDP from internet)
5. Missing egress filtering
6. Rules violating segmentation policy
7. Unused rules (based on hit counts if available)
8. Recommended consolidation and cleanup actions
```
_Use when: Periodic firewall rule hygiene reviews._

---

**#064 - Endpoint Hardening Baseline Generator**

```
Generate an endpoint hardening baseline for [WINDOWS_VERSION/LINUX_DISTRO] in a [CORPORATE/SERVER/DEVELOPER] role:

Compliance framework: [CIS/STIG/CUSTOM]

Include:
1. OS configuration settings with registry keys / config file entries
2. Service disable list with rationale
3. Local firewall rules
4. Logging configuration (which events to capture)
5. Application allowlisting recommendations
6. Removable media and USB restrictions
7. PowerShell / script execution policies
8. Group Policy or configuration management implementation steps
9. Validation script outline to verify compliance
```
_Use when: Creating or updating endpoint hardening standards._

---

**#065 - Network Segmentation Design**

```
Design a network segmentation strategy for [ORGANIZATION]:

Current environment:
- Network topology: [DESCRIPTION]
- Critical assets: [LIST_WITH_LOCATIONS]
- User populations: [DEPARTMENTS/ROLES]
- Compliance requirements: [FRAMEWORKS]

Deliver:
1. Zone definitions with purpose and trust levels
2. Inter-zone traffic rules (what's allowed, what's blocked)
3. Micro-segmentation recommendations for crown jewels
4. Jump box / bastion host architecture
5. Monitoring points between zones
6. Zero-trust principles to overlay on segmentation
7. Migration plan from current state to target state
8. Validation testing methodology
```
_Use when: Designing or improving network segmentation architecture._

---

**#066 - Security Monitoring Gap Analysis**

```
Perform a monitoring gap analysis for [ORGANIZATION]:

Current logging:
[LIST_WHAT_IS_CURRENTLY_LOGGED_AND_WHERE]

Map against:
1. MITRE ATT&CK matrix: which techniques have detection coverage?
2. Critical assets: are all crown jewels monitored?
3. Kill chain stages: where are we blind?
4. Log retention: do we meet regulatory and investigation needs?
5. Alert fatigue assessment: what's the alert-to-incident ratio?
6. Prioritized gap list with effort-to-close estimates
7. Quick-win logging additions (high value, low effort)
8. 12-month monitoring improvement roadmap
```
_Use when: Assessing completeness of security monitoring coverage._

---

**#067 - Deception Technology Deployment Plan**

```
Design a deception/honeypot deployment plan for [ORGANIZATION]:

Environment:
- Network segments: [LIST]
- Common services: [SERVICES_IN_USE]
- Known adversary TTPs (if any): [TTPS]

Plan:
1. Honeypot types and placement strategy per segment
2. Honey tokens: fake credentials, documents, API keys - where to plant them
3. Honey accounts in Active Directory with monitoring
4. Canary files on file shares with access alerting
5. DNS canary deployment
6. Alert configuration: what to trigger on, how to avoid false positives
7. Maintenance schedule and rotation plan
8. Integration with SIEM and incident response workflow
```
_Use when: Adding deception-based detection to the security architecture._

---

**#068 - Security Awareness Training Content**

```
Create security awareness training content for [AUDIENCE: all employees / IT staff / executives / developers] at [ORGANIZATION]:

Focus topics: [PHISHING, SOCIAL_ENGINEERING, PASSWORD_HYGIENE, DATA_HANDLING, ETC]

Deliver:
1. Three real-world scenario-based modules (5 minutes each)
2. Quiz questions per module (5 questions each with explanations)
3. Quick-reference card for employees (printable one-pager)
4. Metrics to measure training effectiveness
5. Gamification elements (badges, leaderboards)
6. Monthly micro-learning email topics for 12 months
7. Customization hooks for industry-specific threats
```
_Use when: Building or refreshing security awareness programs._

---

**#069 - Zero Trust Architecture Assessment**

```
Assess [ORGANIZATION]'s readiness for Zero Trust Architecture:

Current state:
- Identity management: [IAM_SOLUTION]
- Network architecture: [CURRENT_STATE]
- Endpoint management: [MDM/UEM]
- Application access: [VPN/ZTNA/DIRECT]
- Data classification: [STATUS]

Evaluate:
1. Current Zero Trust maturity score (1-5) per pillar (Identity, Device, Network, Application, Data)
2. Gaps per pillar with specific findings
3. Priority initiatives per pillar
4. Quick wins achievable in 90 days
5. Technology requirements and vendor-neutral recommendations
6. Change management considerations
7. 18-month Zero Trust roadmap with milestones
```
_Use when: Planning or assessing Zero Trust transformation initiatives._

---

**#070 - Email Security Gateway Configuration Review**

```
Review our email security configuration for [EMAIL_SECURITY_PRODUCT]:

Current settings:
[PASTE_CONFIGURATION_SUMMARY]

Assess:
1. Anti-spoofing controls (SPF, DKIM, DMARC policy strength)
2. Attachment filtering rules (blocked types, sandboxing)
3. URL rewriting and time-of-click protection
4. Impersonation protection for executives and partners
5. Internal email security (east-west phishing)
6. Data loss prevention rules for email
7. Quarantine management and user release policies
8. Specific recommendations with configuration changes
```
_Use when: Auditing email security posture._

---

**#071 - SIEM Use Case Development Roadmap**

```
Develop a SIEM use case roadmap for [SIEM_PLATFORM] at [ORGANIZATION]:

Current use cases: [LIST_EXISTING]
Available log sources: [LIST_SOURCES]
Top threats: [THREAT_PROFILE]

Create:
1. Phase 1 (Month 1-3): Foundation use cases (authentication, malware, policy violations)
2. Phase 2 (Month 4-6): Threat-specific use cases mapped to top threats
3. Phase 3 (Month 7-12): Advanced analytics and behavioral detection
4. For each use case: data source requirements, detection logic outline, expected alert volume
5. Tuning process and false positive reduction strategy
6. Use case effectiveness metrics
7. Retirement criteria for underperforming use cases
```
_Use when: Building a structured SIEM detection roadmap._

---

**#072 - Backup and Recovery Security Review**

```
Assess the security of backup and recovery infrastructure for [ORGANIZATION]:

Current backup architecture:
- Solution: [BACKUP_PRODUCT]
- Storage: [ON-PREM/CLOUD/HYBRID]
- Schedule: [FREQUENCY]
- Retention: [POLICY]

Evaluate:
1. Backup integrity verification processes
2. Encryption at rest and in transit
3. Access control to backup systems and data
4. Immutability / air-gap status against ransomware
5. Recovery testing frequency and results
6. Backup account privilege separation
7. Monitoring of backup job failures and anomalies
8. Specific recommendations for ransomware resilience
```
_Use when: Validating backup security as part of ransomware readiness._

---

**#073 - Threat Intelligence Integration Plan**

```
Create a threat intelligence integration plan for [ORGANIZATION]:

Current tools: [SIEM, EDR, FIREWALL, PROXY, EMAIL_GATEWAY]
Current TI sources: [EXISTING_FEEDS]
Threat profile: [INDUSTRY_AND_LIKELY_ADVERSARIES]

Plan:
1. TI source evaluation: commercial, open-source, ISAC, government
2. Feed selection criteria (relevance, timeliness, actionability)
3. Integration architecture: how TI flows into each security tool
4. Automated IOC ingestion and blocking workflows
5. Analyst workflow for consuming strategic and tactical TI
6. TI metrics: how to measure the program's value
7. Information sharing participation plan (ISAC, trusted circles)
```
_Use when: Building or maturing a threat intelligence program._

---

**#074 - Vulnerability Management Program Design**

```
Design a vulnerability management program for [ORGANIZATION]:

Environment:
- Assets: [COUNT] across [TYPES: servers, workstations, cloud, containers]
- Current scanning: [TOOL_AND_FREQUENCY]
- Patching capability: [CURRENT_PROCESS]

Build:
1. Asset inventory and criticality classification scheme
2. Scanning schedule by asset type
3. Vulnerability severity-to-SLA mapping (Critical: X days, High: Y days, etc.)
4. Risk-based prioritization methodology (beyond just CVSS)
5. Exception and risk acceptance workflow
6. Metrics dashboard: mean time to remediate, overdue rates, coverage
7. Roles and responsibilities (RACI matrix)
8. Executive reporting template
```
_Use when: Establishing or overhauling vulnerability management processes._

---

**#075 - Security Tool Consolidation Analysis**

```
Analyze our security tool stack for consolidation opportunities:

Current tools:
[LIST_ALL_SECURITY_TOOLS_WITH_CATEGORY_AND_ANNUAL_COST]

Analyze:
1. Functional overlap between tools
2. Integration quality between tools (well-integrated vs. siloed)
3. Utilization assessment per tool (fully used, partially used, shelfware)
4. Consolidation candidates with risk assessment
5. Vendor lock-in considerations
6. Potential cost savings from consolidation
7. Feature gap analysis: what would we lose?
8. Migration plan for recommended consolidation
```
_Use when: Rationalizing the security tool portfolio during budget reviews._

---

**#076 - DNS Security Hardening Guide**

```
Create a DNS security hardening guide for [ORGANIZATION]:

DNS infrastructure:
- Internal DNS: [SERVERS/SERVICES]
- External DNS: [HOSTING_PROVIDER]
- Recursive resolvers: [CURRENT_CONFIG]

Harden:
1. DNSSEC implementation plan for external domains
2. DNS-over-HTTPS/TLS configuration for endpoints
3. DNS sinkholing for known malicious domains
4. Response policy zones (RPZ) configuration
5. DNS query logging and monitoring setup
6. Recursive resolver security (disable open resolving, rate limiting)
7. DNS tunneling detection and prevention
8. Registrar security (lock, MFA, notification alerts)
```
_Use when: Strengthening DNS infrastructure security._

---

**#077 - Insider Threat Detection Program**

```
Design an insider threat detection program for [ORGANIZATION]:

Context:
- Industry: [INDUSTRY]
- Employee count: [COUNT]
- Key data assets: [LIST_SENSITIVE_DATA]
- Existing DLP: [DLP_TOOLS]

Build:
1. Behavioral indicators to monitor (data access, working hours, resignation signals)
2. Technical indicators (USB usage, cloud upload, large downloads, email forwarding)
3. Detection rules for [SIEM/UBA_PLATFORM]
4. Privacy-compliant monitoring approach (legal review points)
5. Investigation workflow when indicators trigger
6. Cross-functional team structure (HR, Legal, Security, IT)
7. Case management and documentation requirements
8. Deterrence controls (banners, training, access reviews)
```
_Use when: Establishing insider threat detection capabilities._

---

**#078 - Patch Management Policy Draft**

```
Draft a patch management policy for [ORGANIZATION]:

Environment context:
- OS types: [LIST]
- Patch deployment tool: [TOOL]
- Change management process: [OVERVIEW]
- Compliance requirements: [FRAMEWORKS]

Policy should cover:
1. Patch classification aligned with vendor severity
2. SLA timelines by severity (emergency, critical, high, medium, low)
3. Testing requirements before deployment
4. Emergency patching process (bypass normal change management)
5. Exception and deferral process with risk acceptance
6. Automated vs. manual patching criteria
7. Metrics and compliance reporting
8. Roles and responsibilities
```
_Use when: Creating or updating organizational patch management policies._

---

**#079 - Security Architecture Review Checklist**

```
Create a security architecture review checklist for [PROJECT/APPLICATION]:

System description:
- Architecture type: [MONOLITH/MICROSERVICES/SERVERLESS]
- Data classification: [LEVELS]
- Integration points: [EXTERNAL_SYSTEMS]
- User types: [INTERNAL/EXTERNAL/BOTH]

Review checklist covering:
1. Authentication and authorization design
2. Data protection (at rest, in transit, in processing)
3. Network security controls and segmentation
4. Logging and monitoring integration
5. Secret management approach
6. Dependency and supply chain considerations
7. Resilience and availability security
8. Compliance requirement mapping
9. Threat model validation points
```
_Use when: Reviewing security architecture for new projects or major changes._

---

**#080 - Incident Lessons Learned Facilitator Guide**

```
Create a facilitation guide for an incident lessons learned / post-mortem session:

Incident summary: [BRIEF_DESCRIPTION]
Duration: [TIME_FROM_DETECTION_TO_RESOLUTION]
Teams involved: [LIST_TEAMS]

Guide:
1. Pre-session preparation checklist (timeline, evidence, metrics)
2. Session agenda with time allocations (90-minute format)
3. Blameless facilitation principles and ground rules
4. Question framework for each phase (detection, analysis, containment, eradication, recovery)
5. Action item template with owners and deadlines
6. Root cause analysis methodology (5 Whys, fishbone)
7. Metrics to capture (MTTD, MTTR, scope)
8. Follow-up tracking process
```
_Use when: Conducting post-incident review sessions._

---

**#081 - Security Metrics Dashboard Design**

```
Design a security metrics dashboard for [AUDIENCE: CISO / SOC Manager / Board]:

Available data sources: [SIEM, VM_SCANNER, EDR, TICKETING_SYSTEM, TRAINING_PLATFORM]

Create:
1. Top 10 metrics for this audience with definitions and calculation methods
2. Data visualization type for each metric (trend line, gauge, heat map)
3. Data source mapping: where each metric's data comes from
4. Refresh frequency per metric
5. Threshold definitions (green/yellow/red)
6. Drill-down structure from executive summary to operational detail
7. Benchmark comparisons (industry standards)
8. Monthly narrative template to accompany the dashboard
```
_Use when: Building security reporting dashboards for different stakeholders._

---

**#082 - Active Directory Security Hardening**

```
Create an Active Directory security hardening plan for [DOMAIN_NAME]:

Current state:
- Domain functional level: [LEVEL]
- Number of DCs: [COUNT]
- Current GPOs: [SUMMARY]
- Known issues: [LIST]

Hardening plan:
1. Tiered administration model implementation
2. Privileged access workstation (PAW) requirements
3. Service account security (gMSA migration plan)
4. Kerberos hardening (AES enforcement, delegation controls)
5. LDAP signing and channel binding
6. GPO security baseline (account policies, audit policies)
7. AdminSDHolder and KRBTGT rotation schedule
8. AD security monitoring rules to implement
9. Legacy protocol deprecation plan (NTLMv1, LLMNR, NetBIOS)
```
_Use when: Hardening Active Directory environments against modern attack techniques._

---

**#083 - Cloud-to-On-Prem Hybrid Security Architecture**

```
Design security controls for the hybrid connectivity between [CLOUD_PROVIDER] and our on-premises environment:

Connectivity: [VPN/EXPRESSROUTE/DIRECT_CONNECT]
Shared services: [LIST]
Identity integration: [AD_SYNC/FEDERATION]

Address:
1. Network security for hybrid connectivity (encryption, routing controls)
2. Identity boundary security (sync filtering, credential exposure)
3. DNS resolution across environments
4. Certificate management for hybrid trust
5. Monitoring blind spots in the hybrid gap
6. Incident response differences (cloud vs. on-prem procedures)
7. Data residency and flow controls
8. Break-glass access procedures for both environments
```
_Use when: Securing hybrid cloud architectures._

---

**#084 - Security Awareness Phishing Metrics Analysis**

```
Analyze our phishing simulation results and recommend improvements:

Campaign data:
- Total users targeted: [COUNT]
- Click rate: [PERCENTAGE]
- Credential submission rate: [PERCENTAGE]
- Report rate: [PERCENTAGE]
- Department breakdown: [DATA]
- Comparison to previous campaign: [PREVIOUS_METRICS]

Provide:
1. Risk assessment by department
2. Trend analysis (improving or declining)
3. Benchmark comparison with industry averages
4. Root cause analysis for high-risk departments
5. Targeted training recommendations per department
6. Next campaign design recommendations (difficulty escalation)
7. Executive summary for leadership
8. KPIs to track over the next 12 months
```
_Use when: Evaluating and improving security awareness programs._

---

**#085 - Application Allowlisting Policy**

```
Design an application allowlisting policy for [ORGANIZATION]:

Environment:
- Endpoint types: [WORKSTATIONS/SERVERS/BOTH]
- Management tool: [APPLOCKER/WDAC/THIRD_PARTY]
- User roles: [STANDARD/DEVELOPER/ADMIN]

Create:
1. Default deny policy with baseline allowed applications
2. Publisher-based rules for trusted vendors
3. Path-based rules for standard application locations
4. Hash-based rules for critical applications without signatures
5. Exception request process and approval workflow
6. Developer workstation special considerations
7. Rollout plan: audit mode -> warn mode -> enforce mode
8. Monitoring and incident handling for blocked applications
```
_Use when: Implementing application control policies._

---

**#086 - Secure Remote Access Architecture**

```
Design a secure remote access architecture for [ORGANIZATION]:

Requirements:
- Remote users: [COUNT]
- Device types: [MANAGED/BYOD/BOTH]
- Applications to access: [LIST]
- Compliance: [FRAMEWORKS]

Architecture:
1. ZTNA vs. VPN decision framework for each access scenario
2. Device posture assessment requirements
3. MFA implementation with conditional access policies
4. Session monitoring and recording for privileged access
5. Split tunnel vs. full tunnel decision criteria
6. Endpoint compliance checks before access grant
7. Bandwidth and performance considerations
8. Fallback access methods for emergencies
```
_Use when: Designing or modernizing remote access infrastructure._

---

**#087 - Security Operations Budget Justification**

```
Help me build a budget justification for security operations improvements:

Proposed investments:
[LIST_PROPOSED_TOOLS_OR_HEADCOUNT_WITH_COSTS]

Current gaps these address:
[LIST_CURRENT_GAPS]

Recent incidents (if applicable):
[LIST_INCIDENTS_AND_COSTS]

Create:
1. Risk-based justification for each investment
2. Cost of inaction analysis (potential breach costs)
3. ROI calculation framework per investment
4. Comparison with peer organization spending
5. Phased implementation to spread costs
6. Headcount vs. technology trade-off analysis
7. One-page executive summary for CFO/Board
8. Success metrics to demonstrate value post-investment
```
_Use when: Preparing security budget proposals for leadership approval._

---

## 3. SOC Operations

### SIEM Query Generation

**#088 - Splunk Query: Brute Force Detection**

```
Write a Splunk SPL query to detect brute force attacks against [AUTHENTICATION_SYSTEM]:

Data source: [INDEX_AND_SOURCETYPE]
Relevant fields: [LIST_FIELDS]

Requirements:
1. Threshold: [X] failed attempts from same source within [Y] minutes
2. Followed by a successful login (credential compromise indicator)
3. Exclude known service accounts: [LIST]
4. Exclude known scanner IPs: [LIST]
5. Include geographic enrichment if available
6. Format output: source IP, target account, failure count, success timestamp, geo location
7. Create an alert version with appropriate throttling
8. Provide the equivalent saved search configuration
```
_Use when: Building brute force detection in Splunk._

---

**#089 - Microsoft Sentinel KQL: Suspicious Process Execution**

```
Write a Microsoft Sentinel KQL query to detect suspicious process execution chains:

Detection goal: [DESCRIBE_SPECIFIC_BEHAVIOR]
Tables available: [SecurityEvent, DeviceProcessEvents, Sysmon, etc.]

The query should:
1. Identify parent-child process relationships matching the attack pattern
2. Filter out known legitimate occurrences (whitelist criteria: [KNOWN_LEGIT])
3. Enrich with user and device context
4. Calculate a risk score based on multiple factors
5. Include time-window correlation
6. Format as an Analytics Rule with entity mapping
7. Include hunting version (broader, more results for investigation)
8. Provide test instructions to validate detection
```
_Use when: Creating detection analytics in Microsoft Sentinel._

---

**#090 - Elastic SIEM Query: Data Exfiltration**

```
Write Elasticsearch/Kibana queries for detecting potential data exfiltration:

Data sources: [NETWORK_LOGS, ENDPOINT_LOGS, PROXY_LOGS]
Index patterns: [PATTERNS]

Create queries for:
1. Large outbound data transfers exceeding [THRESHOLD] in [TIMEFRAME]
2. Uploads to cloud storage services (categorize by service)
3. DNS-based exfiltration patterns (query length, volume, entropy)
4. Email attachment volume anomalies per user
5. USB device copy events exceeding normal baselines
6. After-hours data movement correlation
7. Combine into a composite alert with weighted scoring
8. Create a Kibana dashboard layout for visualization
```
_Use when: Building data exfiltration detection in Elastic SIEM._

---

**#091 - SIEM Query: Lateral Movement Detection**

```
Write [SIEM_PLATFORM] queries to detect lateral movement in a Windows domain:

Available log sources: [LIST]

Create detection queries for:
1. Pass-the-Hash: Type 3 logons with NTLM from non-standard sources
2. Pass-the-Ticket: Kerberos ticket reuse anomalies
3. RDP lateral movement between workstations (unusual patterns)
4. PSExec/SMB service installation on remote hosts
5. WMI remote process creation
6. WinRM remote command execution
7. Scheduled task creation on remote hosts
8. For each query: false positive tuning guidance and analyst investigation steps
```
_Use when: Detecting lateral movement techniques in Windows environments._

---

**#092 - SIEM Query: Privilege Escalation Detection**

```
Write [SIEM_PLATFORM] queries to detect privilege escalation attempts:

Environment: [WINDOWS/LINUX/BOTH]
Log sources: [LIST]

Detect:
1. New local admin account creation or group membership changes
2. Sudo abuse on Linux (unusual commands, unusual users)
3. Token manipulation / impersonation on Windows
4. Service configuration changes for privilege escalation
5. Scheduled task creation running as SYSTEM
6. Registry modifications for privilege escalation
7. Exploit indicators (unusual parent-child processes for known CVEs)
8. Provide severity ratings and investigation playbook links for each
```
_Use when: Building privilege escalation detection capabilities._

---

**#093 - SIEM Correlation Rule: Multi-Stage Attack**

```
Design a multi-stage SIEM correlation rule for [SIEM_PLATFORM] that links:

Stage 1: [INITIAL_ACCESS_INDICATOR]
Stage 2: [EXECUTION_INDICATOR]
Stage 3: [PERSISTENCE_OR_LATERAL_MOVEMENT_INDICATOR]

Requirements:
1. Time window between stages: [TIMEFRAME]
2. Correlation key: [HOST/USER/IP]
3. Minimum stages required to fire: [2 or 3]
4. Risk score escalation with each stage
5. False positive reduction: baseline exclusions
6. Alert enrichment: add context from threat intel, asset DB
7. Analyst workflow: what to investigate at each stage
8. Provide the correlation rule in the SIEM's native format
```
_Use when: Detecting complex multi-stage attacks through event correlation._

---

**#094 - Log Source Onboarding Checklist**

```
Create a log source onboarding checklist for adding [LOG_SOURCE_TYPE] to [SIEM_PLATFORM]:

Source details:
- System: [SYSTEM_NAME]
- Log format: [SYSLOG/JSON/CEF/OTHER]
- Expected volume: [EPS_ESTIMATE]
- Transport: [SYSLOG_TCP/API/AGENT/FILE]

Checklist:
1. Pre-onboarding: capacity assessment, parser availability, field mapping
2. Configuration: source system logging configuration with exact settings
3. Transport: collector/forwarder setup with exact configuration
4. Parsing: field extraction rules and CIM/data model mapping
5. Validation: test events, field verification, timestamp accuracy
6. Use cases: detection rules to enable with this new source
7. Dashboards: visibility panels to create
8. Documentation: source documentation template for SOC reference
```
_Use when: Adding new log sources to the SIEM in a structured way._

---

### Alert Analysis & Response

**#095 - Alert Triage Decision Framework**

```
Create an alert triage decision framework for SOC analysts handling [ALERT_TYPE] from [SECURITY_TOOL]:

Alert details:
[PASTE_SAMPLE_ALERT]

Framework:
1. Initial assessment questions (5 questions to ask within first 2 minutes)
2. Contextual data to gather (asset info, user info, recent activity)
3. Threat intelligence correlation steps
4. True positive vs. false positive decision criteria
5. If true positive: severity assignment and escalation path
6. If false positive: tuning recommendation to prevent recurrence
7. Documentation requirements regardless of outcome
8. Response time targets for each step
```
_Use when: Standardizing alert triage for specific alert types._

---

**#096 - SOC Analyst Investigation Notebook**

```
Create an investigation notebook template for a [INCIDENT_TYPE] investigation:

Initial alert:
[PASTE_ALERT_DETAILS]

Notebook structure:
1. Alert summary and initial hypothesis
2. Evidence collection checklist (logs to pull, systems to check)
3. Investigation timeline (chronological findings log)
4. IOC tracking table (IPs, domains, hashes, accounts)
5. Affected systems and users table
6. Containment actions taken (with timestamps)
7. Open questions and follow-up tasks
8. Current assessment and next steps
9. Escalation justification (if needed)
10. Final disposition and lessons learned
```
_Use when: Structuring SOC investigations for consistency and completeness._

---

**#097 - False Positive Reduction Analysis**

```
Analyze false positive patterns for [ALERT_RULE_NAME] in our SOC:

Data:
- Total alerts (last 30 days): [COUNT]
- Confirmed true positives: [COUNT]
- False positive rate: [PERCENTAGE]
- Common false positive causes: [LIST_IF_KNOWN]

Provide:
1. Root cause analysis of false positive patterns
2. Whitelist/exclusion recommendations with specific criteria
3. Rule logic modifications to improve precision
4. Threshold adjustments with impact analysis
5. Additional context fields that would help analysts differentiate
6. Time-based patterns (business hours vs. off-hours differences)
7. Expected false positive rate after tuning
8. Monitoring plan to verify tuning effectiveness
```
_Use when: Reducing alert fatigue by tuning noisy detection rules._

---

**#098 - SOC Runbook: Malware Alert Response**

```
Create a SOC runbook for responding to malware detection alerts from [EDR/AV_PRODUCT]:

Alert type: [MALWARE_DETECTION/BEHAVIORAL_ALERT/FILE_QUARANTINE]

Runbook:
1. Alert validation: confirm the detection is not a false positive
   - Check file hash against [THREAT_INTEL_SOURCES]
   - Verify file path and process context
2. Scope assessment: is it isolated or widespread?
   - Enterprise-wide hash search command
   - Network IOC sweep for related C2
3. Containment decision tree (isolate host, block hash, block network IOC)
4. Evidence collection before remediation
5. Remediation steps (clean, reimage, credential reset)
6. Verification: confirm malware is fully removed
7. Post-incident: update detection rules, block IOCs permanently
8. Ticket documentation requirements and SLA tracking
```
_Use when: Standardizing malware alert response for SOC analysts._

---

**#099 - SOC Runbook: Phishing Email Response**

```
Create a SOC runbook for user-reported phishing emails:

Email security platform: [PLATFORM]
Ticketing system: [SYSTEM]

Runbook:
1. Intake: log report, acknowledge to user within [SLA] minutes
2. Header analysis: sender verification, SPF/DKIM/DMARC results
3. URL analysis: sandbox detonation, reputation check, redirect chain
4. Attachment analysis: hash check, sandbox analysis if unknown
5. Scope: search mailboxes for similar messages (exact search syntax)
6. Containment: remove emails from all mailboxes (exact steps)
7. Block: add sender, URL, hash to blocklists
8. User notification: template for confirmed phishing vs. clean
9. IOC documentation and sharing with threat intel team
10. Metrics: track volume, response time, user reporting rate
```
_Use when: Building phishing response procedures for the SOC._

---

**#100 - Automated Triage Enrichment Workflow**

```
Design an automated alert enrichment workflow for [SOAR_PLATFORM]:

Trigger: New alert from [SECURITY_TOOL] with severity >= [THRESHOLD]

Enrichment steps:
1. IP reputation lookup: [THREAT_INTEL_APIS_TO_USE]
2. Domain/URL reputation: [SERVICES]
3. File hash lookup: [SERVICES]
4. Asset context: query [CMDB/ASSET_DB] for affected host details
5. User context: query [DIRECTORY_SERVICE] for user details and risk score
6. Recent alerts: query SIEM for related alerts on same host/user (24h)
7. Vulnerability context: query [VM_SCANNER] for host vulnerabilities
8. Aggregate results into enriched alert with risk score
9. Auto-close criteria (when to close as false positive without analyst)
10. Escalation criteria (when to page the on-call analyst)
```
_Use when: Building SOAR playbooks for automated alert enrichment._

---

**#101 - Alert Correlation Scenario Design**

```
Design alert correlation scenarios for [SIEM_PLATFORM] to detect [ATTACK_SCENARIO]:

Available alert sources:
[LIST_SECURITY_TOOLS_AND_ALERT_TYPES]

Correlation design:
1. Define the attack stages to correlate
2. Identify alerting sources for each stage
3. Correlation key selection (entity: user, host, IP)
4. Time window between stages
5. Minimum and maximum stage matches for firing
6. Risk score calculation formula
7. Expected true positive rate based on historical data
8. Analyst investigation guide when correlation fires
9. Suppression rules to prevent duplicate correlations
```
_Use when: Creating sophisticated multi-source alert correlation._

---

### Shift Operations & Reporting

**#102 - SOC Shift Handoff Report Template**

```
Generate a SOC shift handoff report template with the following sections:

Shift details:
- Shift: [DAY/SWING/NIGHT]
- Date: [DATE]
- Analyst(s): [NAMES]

Template:
1. Shift summary: key events and overall threat posture (3-5 sentences)
2. Active incidents: table with ID, severity, status, current actions, next steps
3. Escalated items: what was escalated, to whom, current status
4. Notable alerts: interesting but not yet escalated findings
5. Ongoing investigations: progress updates
6. Infrastructure issues: SIEM, tools, or data source problems
7. Items requiring follow-up by next shift (action items with priority)
8. Threat intelligence highlights relevant to our environment
9. Metrics: alerts handled, incidents opened, MTTD, MTTR
10. Freeform notes and observations
```
_Use when: Standardizing shift handoff communications in the SOC._

---

**#103 - SOC Daily Operations Report**

```
Generate a SOC daily operations report for [DATE]:

Pull metrics from:
- SIEM: [SIEM_PLATFORM]
- Ticketing: [TICKETING_SYSTEM]
- Threat Intel: [TI_SOURCES]

Report structure:
1. Executive summary (threat posture: Green/Yellow/Red with justification)
2. Alert volume by source, severity, and category (table format)
3. Incident summary: new, in-progress, resolved (with SLA compliance)
4. Notable events and investigations
5. Threat landscape update (relevant advisories, new IOCs)
6. Tool health status (data source availability, SIEM performance)
7. Analyst workload distribution
8. Action items and follow-ups
9. Week-over-week trend comparison
```
_Use when: Creating daily SOC status reports for management._

---

**#104 - Escalation Decision Matrix**

```
Create an escalation decision matrix for SOC analysts at [ORGANIZATION]:

Escalation paths:
- Tier 1 -> Tier 2: [CRITERIA]
- Tier 2 -> Tier 3/IR Team: [CRITERIA]
- IR Team -> Management: [CRITERIA]
- Any -> CISO/Executive: [CRITERIA]

Matrix:
1. Define clear escalation triggers by alert type and severity
2. Time-based escalation: auto-escalate if not resolved within [SLA]
3. Scope-based escalation: escalate when [X] hosts/users affected
4. Data-based escalation: escalate when sensitive data is involved
5. Uncertainty escalation: when to escalate if analyst is unsure
6. External escalation: when to involve law enforcement, legal, PR
7. De-escalation criteria
8. Communication templates for each escalation level
9. After-hours and weekend escalation modifications
```
_Use when: Clarifying when and how SOC analysts should escalate._

---

**#105 - Weekly SOC Performance Review**

```
Create a weekly SOC performance review report for [WEEK_DATE_RANGE]:

Data sources:
- Ticketing system: [SYSTEM]
- SIEM: [PLATFORM]
- HR/scheduling: [SYSTEM]

Report:
1. Key metrics summary table:
   - Total alerts processed
   - Alert-to-incident ratio
   - Mean Time to Detect (MTTD)
   - Mean Time to Respond (MTTR)
   - SLA compliance percentage
   - False positive rate by rule category
2. Trend analysis (4-week rolling comparison)
3. Top 10 noisiest alert rules with tuning status
4. Analyst performance metrics (anonymized/team level)
5. Coverage gaps (shifts with below-minimum staffing)
6. Detection rule changes made this week
7. Action items from previous week: status update
8. Recommendations for next week
```
_Use when: Weekly SOC operational reviews and continuous improvement._

---

**#106 - SOC Analyst Onboarding Checklist**

```
Create a SOC analyst onboarding checklist for a new [TIER_LEVEL] analyst at [ORGANIZATION]:

Tools to learn:
[LIST_SOC_TOOLS]

Checklist (organized by week):
Week 1:
1. Access provisioning for all SOC tools
2. Architecture overview: data flow, tool integration, network diagram
3. Alert handling procedures walkthrough
4. Shadow experienced analyst for [X] hours

Week 2:
5. Independent alert triage with review (start with low-severity)
6. Escalation procedures and communication protocols
7. Key runbooks review and practice

Week 3-4:
8. Handle alerts independently with spot checks
9. Investigation workflow practice (supervised)
10. Shift handoff procedure practice

Assessment:
11. Competency checklist with sign-off criteria
12. 30/60/90 day milestone definitions
```
_Use when: Onboarding new SOC team members._

---

**#107 - SOC Playbook: Insider Threat Alert**

```
Create a SOC playbook for handling insider threat alerts from [DLP/UBA_TOOL]:

Alert type: [DATA_EXFILTRATION/POLICY_VIOLATION/BEHAVIORAL_ANOMALY]

Playbook:
1. Initial assessment: validate alert is not a false positive
2. Sensitivity check: determine if this involves HR investigation (do NOT contact user)
3. Data collection: user activity logs, access logs, DLP events (last 30 days)
4. Behavioral analysis: compare with user baseline and peer group
5. Scope: check for similar activity by same user across all channels
6. Confidential escalation path (HR, Legal, management - NOT the user's manager initially)
7. Evidence preservation with chain of custody
8. Documentation: separate tracking from standard SOC tickets
9. Legal considerations and privacy requirements
10. Hand-off to investigations team if warranted
```
_Use when: Handling sensitive insider threat alerts that require careful procedures._

---

**#108 - Threat Briefing Generator**

```
Generate a threat briefing for [ORGANIZATION]'s security leadership:

Context:
- Industry: [INDUSTRY]
- Geography: [REGIONS_OF_OPERATION]
- Recent incidents: [ANY_RELEVANT_INCIDENTS]
- Current threat level: [LEVEL]

Briefing:
1. Executive summary (3-5 bullet points, business language)
2. Current threat landscape for [INDUSTRY] (specific threat actor groups)
3. Active campaigns targeting our sector (last 30 days)
4. New vulnerabilities affecting our technology stack: [TECH_STACK]
5. Geopolitical developments affecting cyber risk
6. Recommended defensive actions (priority ordered)
7. Changes to threat level recommendation (if any)
8. Intelligence gaps and collection priorities
```
_Use when: Preparing regular threat briefings for security leadership._

---

**#109 - SOC Tool Health Monitoring Checklist**

```
Create a SOC tool health monitoring checklist for daily verification:

Tools to monitor:
[LIST_ALL_SOC_TOOLS: SIEM, EDR, SOAR, TI_PLATFORM, etc.]

For each tool:
1. Availability check: is the console/API responsive?
2. Data freshness: are logs arriving within [X]-minute latency?
3. License status: any expiration warnings?
4. Storage/capacity: disk usage, license count, EPS utilization
5. Integration health: are automated workflows executing?
6. Alert pipeline: are alerts flowing from source to SIEM to SOAR?
7. Known issues log: open vendor tickets, pending updates
8. Backup verification: last successful backup timestamp
9. Create a checklist format that takes <15 minutes to complete
10. Escalation contacts for each tool if issues found
```
_Use when: Daily verification of SOC infrastructure health._

---

**#110 - Tabletop Exercise Scenario Design**

```
Design a tabletop exercise scenario for the SOC team at [ORGANIZATION]:

Scenario type: [RANSOMWARE/DATA_BREACH/APT/INSIDER_THREAT/SUPPLY_CHAIN]
Duration: [2/4 HOURS]
Participants: [ROLES_LIST]

Design:
1. Scenario narrative with realistic details (3-4 phases)
2. Phase 1 inject: initial detection (what alert fires, from what tool)
3. Phase 2 inject: scope expansion (additional findings surface)
4. Phase 3 inject: escalation trigger (data loss, media attention, executive involvement)
5. Phase 4 inject: resolution challenges (backup failure, legal complexity)
6. Discussion questions per phase
7. Expected decisions and actions per phase
8. Facilitator guide with teaching points
9. Post-exercise assessment criteria
10. Improvement action item template
```
_Use when: Running SOC readiness exercises and tabletop drills._

---

**#111 - SOC Metrics Definition Guide**

```
Define operational metrics for [ORGANIZATION]'s SOC:

SOC maturity level: [INITIAL/MANAGED/DEFINED/MEASURED/OPTIMIZING]

Define these metric categories:
1. Effectiveness metrics:
   - True positive rate, false positive rate, miss rate
   - Detection coverage by ATT&CK tactic
   - Time to detect (by severity level)

2. Efficiency metrics:
   - Alerts per analyst per shift
   - Mean time to triage
   - Automation ratio (auto-closed vs. manual)

3. Quality metrics:
   - Escalation accuracy (appropriate escalations)
   - Investigation completeness score
   - Ticket documentation quality

4. For each metric: formula, data source, collection frequency, target value, and improvement actions if below target
```
_Use when: Establishing or maturing SOC performance measurement._

---

**#112 - SOC Communication Protocol**

```
Establish SOC communication protocols for [ORGANIZATION]:

Communication tools: [SLACK/TEAMS/RADIO/PHONE/TICKETING]

Define:
1. Internal SOC communication channels and their purposes
2. Severity-based notification matrix (who gets notified at each severity)
3. External stakeholder communication triggers and templates
4. War room activation criteria and setup procedure
5. Real-time incident communication cadence (update frequency by severity)
6. After-hours communication procedures
7. Cross-team communication (SOC to IT, SOC to DevOps, SOC to Legal)
8. Information classification for SOC communications (what's shareable externally)
9. Communication tool failure fallback plan
10. Meeting cadence: daily standup, weekly review, monthly deep-dive
```
_Use when: Formalizing SOC communication standards._

---

**#113 - SOC Knowledge Base Article Template**

```
Create a SOC knowledge base article template for documenting [TOPIC_TYPE: tool procedure / investigation technique / common alert]:

Template:
1. Title and article ID
2. Purpose: when to use this article (one sentence)
3. Prerequisites: access, tools, knowledge required
4. Step-by-step procedure with screenshots placeholders
5. Expected outcomes at each step
6. Troubleshooting: common issues and solutions
7. Related articles and cross-references
8. Version history and last review date
9. Author and reviewer
10. Tags for searchability

Also create 3 sample articles for:
- [COMMON_ALERT_TYPE] investigation
- [TOOL_NAME] basic operations
- [FREQUENT_INVESTIGATION_SCENARIO]
```
_Use when: Building SOC documentation and knowledge management._

---

**#114 - After-Hours Incident Response Protocol**

```
Design an after-hours incident response protocol for [ORGANIZATION]:

Staffing model: [24x7/16x5_WITH_ON_CALL/8x5_WITH_ON_CALL]
On-call rotation: [TEAM_SIZE] analysts

Protocol:
1. After-hours alert handling criteria (what triggers a page vs. waits until morning)
2. On-call analyst response time SLAs by severity
3. Escalation paths when on-call analyst cannot resolve
4. Management notification criteria during off-hours
5. External resource activation (IR retainer, vendor support)
6. Decision authority: what can the on-call analyst decide independently?
7. Documentation requirements for after-hours incidents
8. Handoff procedure to the next business day SOC shift
9. Compensation and burnout mitigation for on-call staff
10. Quarterly on-call effectiveness review template
```
_Use when: Establishing or improving after-hours SOC coverage._

---

**#115 - SOAR Playbook: Account Compromise**

```
Design a SOAR playbook for automated account compromise response:

SOAR platform: [PLATFORM]
Identity provider: [IDP]
SIEM: [SIEM_PLATFORM]

Playbook steps:
1. Trigger: [SPECIFIC_ALERT_CONDITION]
2. Auto-enrich: user profile, manager, department, access level, risk score
3. Auto-investigate: login history (last 7 days), impossible travel check, device analysis
4. Auto-check: related alerts on same user (24h window)
5. Decision point: risk score threshold for auto-containment vs. analyst review
6. Auto-contain (if threshold met): disable account, revoke sessions, notify manager
7. Analyst review path: present enriched data, request verdict
8. Post-verdict actions: password reset, MFA re-enrollment, access review
9. Communication: automated notifications to user and manager
10. Metrics: track playbook execution time and accuracy
```
_Use when: Automating account compromise response with SOAR._

---

**#116 - SOC Capacity Planning Model**

```
Build a SOC capacity planning model for [ORGANIZATION]:

Current state:
- Analysts: [COUNT by tier]
- Alert volume: [DAILY_AVERAGE]
- Incident volume: [MONTHLY_AVERAGE]
- Growth rate: [ANNUAL_PERCENTAGE]

Model:
1. Calculate current analyst utilization rate
2. Alert handling time assumptions by type and severity
3. Investigation time assumptions by complexity
4. Non-alert work allocation (meetings, training, projects)
5. Coverage requirement calculation (24x7 vs. business hours)
6. Growth projection (12-month and 24-month)
7. Automation impact modeling (what if we automate X%)
8. Hiring vs. automation ROI comparison
9. Staffing recommendation with justification
10. Budget estimate for recommended model
```
_Use when: Planning SOC staffing and resource allocation._

---

**#117 - Purple Team Detection Validation Report**

```
Create a detection validation report from a purple team exercise:

Techniques tested: [LIST_MITRE_TECHNIQUE_IDS]
Tools used: [RED_TEAM_TOOLS]
Detection stack: [SIEM, EDR, NSM]

Report:
1. Executive summary: detection coverage percentage
2. Per-technique results table: technique, tool used, detected (Y/N), detection source, alert name, time to detect
3. Detection gap analysis: undetected techniques with root cause
4. Near-miss analysis: detected but low confidence or delayed
5. False negative investigation: why was it missed?
6. Remediation recommendations for each gap
7. New detection rules developed during exercise
8. Before/after detection coverage heat map (ATT&CK matrix)
9. 90-day follow-up validation plan
```
_Use when: Documenting detection validation exercise results._

---

**#118 - SOC Standard Operating Procedure Template**

```
Write a standard operating procedure (SOP) for [SOC_PROCESS]:

Process: [ALERT_HANDLING/INCIDENT_ESCALATION/EVIDENCE_COLLECTION/TOOL_MAINTENANCE]

SOP:
1. Purpose and scope
2. Roles and responsibilities
3. Prerequisites and access requirements
4. Detailed procedure steps (numbered, with decision points clearly marked)
5. Tools and resources needed at each step
6. Expected time to complete
7. Quality checks and verification steps
8. Exception handling procedures
9. Related SOPs and references
10. Review cycle: [QUARTERLY/ANNUALLY]
11. Version control table
12. Approval signatures section
```
_Use when: Formalizing SOC processes into documented procedures._

---

**#119 - Incident Post-Mortem Report Template**

```
Create an incident post-mortem report for incident [INCIDENT_ID]:

Incident: [BRIEF_DESCRIPTION]
Severity: [LEVEL]
Duration: [DETECTION_TO_RESOLUTION_TIME]

Report:
1. Incident summary (who, what, when, where, how, impact)
2. Timeline: detection, response, containment, eradication, recovery (exact timestamps)
3. Root cause analysis (technical root cause and contributing factors)
4. Impact assessment: systems affected, data exposed, business impact, cost
5. Response assessment: what worked well, what didn't
6. Detection assessment: how was it found, could it have been found sooner?
7. Containment assessment: was containment effective and timely?
8. Action items with owners, priority, and deadlines
9. Indicators of compromise (for sharing)
10. Lessons learned and systemic improvements
```
_Use when: Documenting incidents for organizational learning._

---

**#120 - Threat Intelligence Platform (TIP) Operations Playbook**

```
Design a Threat Intelligence Platform operations playbook for [ORGANIZATION] using [TIP_PLATFORM: MISP/OpenCTI/ThreatConnect/Anomali/etc.]:

1. Intelligence ingestion:
   - Feed configuration: commercial, open-source, ISAC, and internal feeds
   - Feed scoring and confidence calibration
   - Deduplication and normalization rules
   - Ingestion frequency and freshness requirements
2. Intelligence processing:
   - Automated enrichment workflows (VirusTotal, Shodan, PassiveDNS)
   - IOC aging and expiration policies
   - Correlation with internal telemetry (SIEM, EDR)
   - False positive reduction pipeline
3. Intelligence dissemination:
   - Automated export to SIEM/SOAR/EDR/firewall
   - Analyst briefing templates (daily/weekly)
   - Stakeholder-specific reporting (SOC, IR, executive)
4. Metrics: IOC match rate, mean time to ingest, actionable intelligence ratio
5. Quality assurance: periodic feed value assessment and pruning
```
_Use when: Standing up or improving threat intelligence platform operations._

---

**#121 - Forensic Evidence Handling SOP**

```
Create a forensic evidence handling standard operating procedure for the SOC at [ORGANIZATION]:

1. Evidence identification:
   - Types: disk images, memory dumps, network captures, log exports, cloud snapshots
   - Priority classification: critical (may be overwritten), standard, low
2. Collection procedures:
   - Chain of custody documentation template
   - Write-blocking requirements for physical media
   - Memory acquisition before disk (order of volatility)
   - Cloud evidence preservation (snapshot, API export, legal hold)
   - Hashing requirements (SHA-256 at minimum) at each transfer
3. Storage:
   - Secure evidence locker (physical and digital)
   - Encryption at rest requirements
   - Retention periods by incident severity
   - Access control and audit logging
4. Transfer procedures:
   - Internal handoff documentation
   - External transfer to law enforcement or legal counsel
   - Secure transport methods
5. Legal considerations: admissibility requirements, privacy law compliance for [JURISDICTION]
```
_Use when: Establishing or auditing forensic evidence handling procedures._

---

**#122 - SOC Technology Stack Evaluation**

```
Evaluate and recommend a SOC technology stack for [ORGANIZATION]:

Current environment:
- Size: [EMPLOYEE_COUNT]
- Industry: [INDUSTRY]
- Current tools: [LIST_EXISTING_TOOLS]
- Budget tier: [STARTUP/MID/ENTERPRISE]
- Cloud vs on-prem: [PREFERENCE]

Evaluate across categories:
1. SIEM: Splunk vs Microsoft Sentinel vs Elastic vs Chronicle vs QRadar
   - Log volume handling, cost model, query language, integration ecosystem
2. SOAR: Cortex XSOAR vs Sentinel Logic Apps vs Splunk SOAR vs Tines
3. EDR: CrowdStrike vs SentinelOne vs Defender for Endpoint vs Carbon Black
4. NDR: Darktrace vs Vectra vs ExtraHop vs Corelight
5. TIP: MISP vs OpenCTI vs Anomali vs Recorded Future
6. Vulnerability scanner: Tenable vs Qualys vs Rapid7 InsightVM
7. Integration requirements and API compatibility matrix
8. Total cost of ownership comparison (3-year projection)
9. Staffing requirements per stack option
10. Recommended stack with justification
```
_Use when: Planning SOC technology investments or migrations._

---

**#123 - Chronicle SIEM Detection Engineering**

```
Write detection rules for Google Chronicle SIEM targeting these threat scenarios in [ORGANIZATION]:

Using YARA-L 2.0 syntax, create rules for:
1. Brute-force authentication attempts (>=[THRESHOLD] failures in [TIMEFRAME])
2. Service account anomalous behavior (new IP, unusual time, privilege escalation)
3. Data exfiltration indicators (large outbound transfers to new destinations)
4. Lateral movement patterns (sequential logins across multiple hosts)
5. Malware beacon detection (periodic outbound connections with consistent intervals)

For each rule:
- YARA-L 2.0 rule with proper event variable matching
- UDM field mappings
- Alert severity and risk scoring
- Reference list usage for allowlisting
- Suggested response actions
- Tuning parameters to reduce false positives
```
_Use when: Building detection content in Google Chronicle SIEM._

---

**#124 - QRadar Offense Investigation Workflow**

```
Create a QRadar offense investigation workflow for the SOC at [ORGANIZATION]:

For each offense severity level (1-10):
1. Triage:
   - AQL queries to pull supporting events
   - Offense source/destination analysis
   - Magnitude component breakdown (relevance, severity, credibility)
   - Related offenses and historical correlation
2. Investigation:
   - Asset enrichment queries (asset database, vulnerability data)
   - Flow analysis for network context
   - Reference set cross-referencing (watchlists, known-bad IPs)
   - Custom AQL queries for common investigation patterns
3. Response actions:
   - Custom action scripts for containment
   - Integration with [SOAR_PLATFORM] for automated response
   - Offense tuning rules (building blocks, false positive suppression)
4. Performance:
   - Offense management best practices (closing, grouping, tuning)
   - Dashboard templates for offense volume and MTTR tracking
```
_Use when: Standardizing QRadar offense handling procedures._

---

**#125 - DFIR Toolkit and Procedure Guide**

```
Build a Digital Forensics and Incident Response toolkit guide for [ORGANIZATION]:

Toolkit components:
1. Acquisition tools:
   - Disk: FTK Imager, dd, KAPE, Arsenal Image Mounter
   - Memory: WinPmem, LiME, Magnet RAM Capture
   - Network: tcpdump, Wireshark, NetworkMiner
   - Cloud: AWS CLI snapshots, Az CLI, GCP disk export
2. Analysis tools:
   - Timeline: Plaso/log2timeline, SANS SIFT
   - Artifact parsing: Autopsy, Velociraptor, Eric Zimmerman tools
   - Memory analysis: Volatility 3, MemProcFS
   - Malware: YARA, Capa, PE-bear, Ghidra
3. Standard procedures:
   - Evidence acquisition checklist by source type
   - Analysis workflow per incident type ([RANSOMWARE/BEC/INSIDER/APT])
   - Artifact location reference for [WINDOWS/LINUX/MACOS]
   - Report template with findings, timeline, IOCs, recommendations
4. Jump bag contents: hardware, bootable media, documentation
5. Tool validation: annual testing and hash verification schedule
```
_Use when: Building or updating DFIR capabilities and toolkits._

---

**#126 - SOC Automation Maturity Roadmap**

```
Design a SOC automation maturity roadmap for [ORGANIZATION]:

Current state:
- SOC team size: [HEADCOUNT]
- SIEM: [PLATFORM]
- SOAR: [PLATFORM_OR_NONE]
- Automation level: [NONE/BASIC/INTERMEDIATE/ADVANCED]

Roadmap phases:
1. Phase 1 - Foundation (Month 1-3):
   - Top 10 repetitive tasks to automate first
   - Alert enrichment automation (IOC lookup, asset context, user context)
   - Ticket creation and routing automation
   - Estimated analyst time savings
2. Phase 2 - Playbook Automation (Month 3-6):
   - Phishing response end-to-end automation
   - Malware alert triage automation
   - User account compromise response automation
   - Integration APIs needed and implementation effort
3. Phase 3 - Advanced Orchestration (Month 6-12):
   - Cross-tool orchestration workflows
   - Automated threat hunting queries on schedule
   - Self-healing infrastructure responses
   - ML-assisted alert scoring and prioritization
4. Metrics per phase: time saved, MTTR reduction, analyst satisfaction
5. Risk assessment: automation failure modes and rollback procedures
```
_Use when: Planning progressive SOC automation improvements._

---

**#127 - Security Operations Metrics Dashboard**

```
Design a comprehensive SOC metrics and KPI dashboard for [ORGANIZATION]:

Executive-level metrics:
1. Mean Time to Detect (MTTD) by severity - trend over [TIMEFRAME]
2. Mean Time to Respond (MTTR) by severity - trend over [TIMEFRAME]
3. Mean Time to Contain (MTTC) - trend over [TIMEFRAME]
4. Alert volume: total, true positive rate, false positive rate
5. Incident volume by category and severity

Operational metrics:
6. Alert queue depth by analyst and shift
7. Escalation rate: L1 to L2, L2 to L3
8. Playbook execution success rate
9. Coverage gaps: log sources missing, detection rule coverage vs MITRE
10. Analyst utilization and burnout indicators (ticket volume per analyst)

Strategic metrics:
11. MITRE ATT&CK detection coverage heatmap
12. Dwell time trends
13. Repeat incident rate (same root cause)
14. Cost per incident by category
15. Data source health and ingestion lag

Include: recommended thresholds, alerting on metric degradation, and quarterly trend reporting format.
```
_Use when: Building or improving SOC performance measurement._

---

**#128 - Threat Hunting Campaign Framework**

```
Design a structured threat hunting campaign for [ORGANIZATION] targeting [THREAT_HYPOTHESIS]:

Campaign structure:
1. Hypothesis formation:
   - Threat actor profile: [APT_GROUP/THREAT_TYPE]
   - Expected TTPs (mapped to MITRE ATT&CK): [TECHNIQUE_IDS]
   - Data sources required: [LOG_TYPES]
   - Hypothesis statement: "We suspect [THREAT_ACTIVITY] may be occurring because [REASONING]"
2. Data collection:
   - SIEM queries to pull relevant events ([SIEM_PLATFORM] syntax)
   - EDR telemetry queries for endpoint indicators
   - Network traffic analysis queries
   - Time window: [LOOKBACK_PERIOD]
3. Analysis methodology:
   - Baseline establishment for normal activity
   - Statistical anomaly identification
   - Stack counting and long-tail analysis
   - Frequency analysis for beaconing detection
4. Documentation:
   - Findings log template (timestamp, source, finding, assessment)
   - New detection rules generated from hunting findings
   - Intelligence feedback loop to TIP
5. Campaign metrics: hours invested, findings count, detections created, coverage gaps identified
```
_Use when: Planning and executing structured threat hunting operations._

---

**#129 - SOC Runbook for Cloud Security Events**

```
Create SOC runbooks for handling cloud security events across [AWS/AZURE/GCP]:

Runbook 1 - Unauthorized API Call Spike:
- Detection criteria and alert threshold
- Investigation: CloudTrail/Activity Log/Audit Log queries
- Containment: IAM key disablement, role session revocation
- Escalation criteria

Runbook 2 - Public S3 Bucket/Storage Blob Exposure:
- Automated detection method
- Impact assessment: data classification of exposed content
- Remediation: access policy correction, exposure window determination
- Notification requirements (legal, compliance, affected parties)

Runbook 3 - Impossible Travel for Cloud Console Login:
- Detection logic (geo-velocity calculation)
- Verification steps (VPN, travel schedule, delegated access)
- Response: session termination, MFA reset, access review
- False positive documentation

Runbook 4 - Cryptocurrency Mining Detection:
- Instance type/usage anomaly detection
- Cost spike correlation
- Containment: instance isolation, key rotation
- Root cause: compromised credentials vs vulnerable application

For each: SLA targets, required access/permissions, communication templates.
```
_Use when: Standardizing SOC response to cloud-specific security events._

---

## 4. Cloud Security

### AWS Security

**#130 - AWS IAM Policy Security Review**

```
Review the following AWS IAM policy for security issues:

[PASTE_IAM_POLICY_JSON]

Analyze:
1. Overly permissive actions (wildcards, *.*)
2. Missing resource constraints (Resource: "*")
3. Missing condition constraints (IP restrictions, MFA requirements)
4. Privilege escalation paths (iam:*, sts:AssumeRole chains)
5. Cross-account access risks
6. Service-linked role implications
7. Recommended policy rewrites following least privilege
8. Comparison with AWS managed policy alternatives
9. Policy simulation: what would this policy allow an attacker to do?
```
_Use when: Reviewing IAM policies for least privilege compliance._

---

**#131 - AWS Security Hub Findings Triage**

```
Analyze and prioritize these AWS Security Hub findings:

[PASTE_FINDINGS_JSON_OR_SUMMARY]

For each finding:
1. Explain the security risk in business terms
2. Rate severity considering our environment context: [ENVIRONMENT_CONTEXT]
3. Provide exact remediation steps (AWS CLI or console instructions)
4. Identify quick-fix vs. architectural-change remediations
5. Check for dependencies between findings
6. Estimate remediation effort (hours)
7. Create a prioritized remediation plan (what to fix first)
8. Identify findings that can be auto-remediated vs. manual
```
_Use when: Working through Security Hub finding backlogs._

---

**#132 - AWS CloudTrail Log Investigation**

```
Analyze these AWS CloudTrail events for suspicious activity:

[PASTE_CLOUDTRAIL_EVENTS]

Investigate:
1. Identify unusual API calls (never-before-seen by this principal)
2. Check for credential compromise indicators (calls from new regions, IPs)
3. IAM manipulation events (CreateUser, AttachPolicy, CreateAccessKey)
4. Data access events (S3 GetObject, RDS snapshots, DynamoDB scans)
5. Security control modifications (SecurityGroup changes, GuardDuty disable)
6. Resource creation in unusual regions
7. Console vs. API access patterns
8. Timeline of events and attack narrative reconstruction
9. Recommended immediate actions based on findings
```
_Use when: Investigating potential AWS account compromise._

---

**#133 - AWS S3 Bucket Security Audit**

```
Audit S3 bucket security for our AWS account [ACCOUNT_ID]:

Current S3 inventory (or provide method to enumerate):
[BUCKET_LIST_OR_INSTRUCTIONS]

Check each bucket for:
1. Public access: ACLs, bucket policies, Block Public Access settings
2. Encryption: SSE-S3, SSE-KMS, or none
3. Logging: access logging and CloudTrail data events enabled?
4. Versioning: enabled for critical buckets?
5. Lifecycle policies: appropriate retention?
6. Cross-account access in bucket policies
7. MFA Delete configuration for sensitive buckets
8. VPC endpoint policies for private access
9. AWS CLI commands to check each setting
10. Remediation commands for each finding
```
_Use when: Auditing S3 security posture across an AWS account._

---

**#134 - AWS GuardDuty Finding Response**

```
Create response procedures for this AWS GuardDuty finding:

Finding type: [FINDING_TYPE]
Resource affected: [RESOURCE_ARN]
Details: [PASTE_FINDING_DETAILS]

Response:
1. Explain what this finding means in plain language
2. Determine if this is likely true positive or false positive
3. Immediate containment steps (specific AWS CLI commands)
4. Investigation steps: what additional logs/data to review
5. Root cause determination methodology
6. Remediation steps once root cause is identified
7. Prevention: how to stop this from recurring
8. GuardDuty tuning: should this finding type be suppressed?
```
_Use when: Responding to GuardDuty alerts in AWS environments._

---

**#135 - AWS Network Security Assessment**

```
Assess network security for AWS VPC [VPC_ID] in [REGION]:

Current architecture:
[DESCRIBE_OR_PASTE_VPC_CONFIGURATION]

Assess:
1. Security Group rules: identify overly permissive inbound/outbound rules
2. Network ACL review: unnecessary allow rules
3. VPC Flow Log analysis: unexpected traffic patterns
4. Internet Gateway and NAT Gateway exposure
5. VPC Peering and Transit Gateway security
6. PrivateLink and VPC Endpoint configurations
7. Route table analysis for unexpected routes
8. Provide exact AWS CLI commands to check each item
9. Remediation priorities ranked by risk
```
_Use when: Auditing AWS network security architecture._

---

### Azure Security

**#136 - Microsoft Entra ID Security Assessment**

```
Assess Microsoft Entra ID (formerly Azure AD) security for tenant [TENANT_NAME]:

Current configuration:
[PASTE_KEY_SETTINGS_OR_DESCRIBE]

Assess:
1. Conditional Access policies: coverage gaps and weaknesses
2. MFA enforcement: gaps by user type (admin, user, guest)
3. Legacy authentication: is it fully disabled?
4. Privileged roles: users with Global Admin, standing access issues
5. PIM configuration: just-in-time access, approval workflows
6. Guest user policies and access reviews
7. App registration security: overprivileged apps, expiring secrets
8. Sign-in risk and user risk policies
9. Provide PowerShell/Graph API commands for each check
10. Prioritized remediation roadmap
```
_Use when: Auditing Microsoft Entra ID security configuration._

---

**#137 - Azure Subscription Security Review**

```
Review security configuration for Azure subscription [SUBSCRIPTION_ID]:

Resources deployed:
[LIST_KEY_RESOURCES]

Review:
1. Microsoft Defender for Cloud score and recommendations
2. Network Security Groups: overly permissive rules
3. Storage account security: public access, encryption, network rules
4. Key Vault access policies and network restrictions
5. SQL database security: TDE, auditing, firewall rules
6. App Service security: HTTPS enforcement, authentication
7. AKS cluster security: RBAC, network policies, secrets management
8. Resource locks on critical resources
9. Azure Policy compliance status
10. Specific az CLI commands to check each item
```
_Use when: Comprehensive Azure subscription security review._

---

**#138 - Microsoft Sentinel Analytic Rules for Cloud Threats**

```
Write Microsoft Sentinel KQL analytic rules for detecting cloud-specific threats:

Threat scenarios:
1. Impossible travel: user signs in from geographically distant locations
2. Suspicious OAuth app consent: high-privilege app granted access
3. Privileged role assignment outside PIM
4. Mass file download from SharePoint/OneDrive
5. Azure resource deployment in non-approved regions
6. Key Vault secret mass access
7. Subscription-level RBAC changes
8. Virtual machine created and immediately exposed to internet

For each: KQL query, entity mapping, severity, and investigation guidance.
```
_Use when: Building cloud threat detection in Microsoft Sentinel._

---

### GCP Security

**#139 - GCP Organization Security Assessment**

```
Assess security posture for GCP organization [ORG_ID]:

Projects in scope: [PROJECT_LIST]
Services in use: [SERVICE_LIST]

Assess:
1. IAM policy review: overprivileged service accounts
2. Organization policies: required constraints
3. VPC firewall rules: overly permissive rules
4. GCS bucket permissions: public access, IAM vs. ACLs
5. Cloud Audit Log configuration
6. Security Command Center findings review
7. API key restrictions and rotation
8. Cloud KMS key management practices
9. BigQuery dataset access controls
10. Provide gcloud CLI commands for each check
```
_Use when: Auditing GCP organization security._

---

**#140 - GCP Workload Identity and Service Account Security**

```
Review GCP service account security for project [PROJECT_ID]:

Service accounts:
[LIST_OR_DESCRIBE]

Review:
1. Service accounts with Owner/Editor roles (overprivileged)
2. User-managed vs. default service accounts
3. Service account key management (age, rotation, external usage)
4. Workload Identity Federation opportunities (eliminate keys)
5. Cross-project service account usage
6. Service account impersonation chain risks
7. Unused service accounts (90+ days inactive)
8. Exact gcloud commands to check and remediate each issue
```
_Use when: Auditing GCP service account security._

---

### Multi-Cloud & Container Security

**#141 - Multi-Cloud Security Posture Comparison**

```
Compare security posture across our multi-cloud environment:

AWS accounts: [LIST]
Azure subscriptions: [LIST]
GCP projects: [LIST]

Compare:
1. Identity and access management maturity per cloud
2. Network security controls consistency
3. Data encryption standards alignment
4. Logging and monitoring coverage gaps per cloud
5. Incident response readiness per cloud (tools, procedures)
6. Compliance control mapping across clouds
7. Security tool coverage (CSPM, CWPP, CIEM) per cloud
8. Identified risks unique to each cloud provider
9. Unified security recommendations
10. Single-pane-of-glass monitoring strategy
```
_Use when: Assessing security consistency across multi-cloud environments._

---

**#142 - Kubernetes Security Audit**

```
Audit the security of Kubernetes cluster [CLUSTER_NAME] on [PLATFORM: EKS/AKS/GKE/self-managed]:

Cluster details:
[VERSION, NODE_COUNT, NAMESPACE_LIST]

Audit:
1. RBAC configuration: overprivileged roles and bindings
2. Pod Security Standards/Policies enforcement
3. Network Policies: namespace isolation, default deny
4. Secret management: are secrets encrypted at rest? External secrets integration?
5. Container image security: image scanning, registry security, signed images
6. Admission controllers: what's enforced (OPA/Gatekeeper, Kyverno)?
7. Service account token automounting
8. Host namespace and privileged container usage
9. Ingress/egress security controls
10. kubectl commands to check each item
11. Prioritized remediation actions
```
_Use when: Comprehensive Kubernetes cluster security review._

---

**#143 - Container Image Security Pipeline**

```
Design a container image security pipeline for [CI_CD_PLATFORM]:

Current workflow:
[DESCRIBE_BUILD_AND_DEPLOY_PROCESS]

Pipeline design:
1. Base image selection policy (approved base images, minimal images)
2. Dockerfile security linting (hadolint rules)
3. Dependency scanning (SCA) integration
4. Container image vulnerability scanning (Trivy/Grype/Snyk)
5. Secret detection in image layers
6. Image signing and verification (cosign/Notary)
7. Runtime security policy enforcement
8. Break-build criteria: what vulnerability levels block deployment?
9. Exception process for accepted risks
10. Monitoring deployed container vulnerabilities
```
_Use when: Building secure container image pipelines._

---

**#144 - Serverless Function Security Review**

```
Review security of serverless functions in [AWS_LAMBDA/AZURE_FUNCTIONS/GOOGLE_CLOUD_FUNCTIONS]:

Functions in scope:
[LIST_WITH_RUNTIMES_AND_TRIGGERS]

Review:
1. IAM/execution role permissions: least privilege assessment
2. Environment variables: sensitive data exposure
3. VPC configuration: network isolation
4. Trigger security: authentication on API Gateway/HTTP triggers
5. Input validation and injection vulnerabilities
6. Dependency vulnerabilities in function packages
7. Timeout and concurrency configurations (DoS protection)
8. Logging and tracing configuration
9. Cold start security implications
10. Remediation recommendations per function
```
_Use when: Auditing serverless function security._

---

**#145 - Cloud Infrastructure as Code Security Review**

```
Review this Infrastructure as Code template for security issues:

Template type: [TERRAFORM/CLOUDFORMATION/BICEP/PULUMI]
Template:
[PASTE_TEMPLATE_OR_KEY_SECTIONS]

Check for:
1. Hardcoded secrets or credentials
2. Overly permissive security groups/firewall rules
3. Public exposure of resources (S3, databases, VMs)
4. Missing encryption configurations
5. Missing logging and monitoring
6. Default or weak authentication settings
7. Missing resource tagging for security compliance
8. Privileged access configurations
9. Provide corrected code snippets for each issue
10. Recommend tfsec/checkov/cfn-nag rules to prevent these issues
```
_Use when: Security reviewing Infrastructure as Code before deployment._

---

**#146 - Cloud Cost and Security Optimization**

```
Identify security improvements that also reduce cloud costs in [CLOUD_PROVIDER]:

Current environment:
[DESCRIBE_KEY_RESOURCES_AND_ARCHITECTURE]

Analyze:
1. Unused resources that increase attack surface (idle VMs, unattached disks)
2. Overprivileged resources that could be right-sized
3. Public-facing resources that should be private (cost savings on data transfer)
4. Logging optimization: reduce noise while maintaining security value
5. Reserved capacity for security tools (cost predictability)
6. Consolidated security services vs. multiple point tools
7. Estimated savings per recommendation
8. Implementation priority considering both security and cost impact
```
_Use when: Aligning security improvement with cost optimization initiatives._

---

**#147 - Cloud Incident Response Preparation**

```
Prepare cloud-specific incident response capabilities for [CLOUD_PROVIDER]:

Environment:
- Account/subscription structure: [DESCRIPTION]
- Current IR tools: [LIST]
- Team cloud expertise: [BEGINNER/INTERMEDIATE/ADVANCED]

Prepare:
1. Pre-incident access: break-glass accounts, IR roles, cross-account access
2. Evidence collection procedures: log sources, API commands, forensic snapshots
3. Containment actions: network isolation, key rotation, policy changes (exact commands)
4. Forensic readiness: disk snapshots, memory acquisition from cloud VMs
5. IR automation: Lambda/Functions for auto-containment
6. Communication: cloud provider notification requirements
7. Recovery procedures: from snapshots, IaC redeployment
8. Tabletop scenario specific to cloud compromise
```
_Use when: Building cloud-specific IR capabilities._

---

**#148 - Service Mesh Security Configuration**

```
Review security configuration of [ISTIO/LINKERD/CONSUL_CONNECT] service mesh in cluster [CLUSTER_NAME]:

Current configuration:
[PASTE_KEY_CONFIGS_OR_DESCRIBE]

Review:
1. mTLS enforcement: is it enforced cluster-wide or permissive?
2. Authorization policies: deny-by-default between services?
3. External traffic ingress security
4. Egress control: is outbound traffic restricted?
5. Certificate management and rotation
6. Observability: distributed tracing security
7. Rate limiting and circuit breaker configurations
8. Service mesh control plane security
9. Exact configuration commands to harden each area
```
_Use when: Hardening service mesh security in Kubernetes environments._

---

**#149 - Cloud Database Security Audit**

```
Audit security for cloud database [DB_SERVICE] in [CLOUD_PROVIDER]:

Database details:
- Service: [RDS/AURORA/COSMOS_DB/CLOUD_SQL/etc.]
- Engine: [MYSQL/POSTGRES/MONGODB/etc.]
- Classification: [DATA_SENSITIVITY_LEVEL]

Audit:
1. Network exposure: public accessibility, VPC/VNet placement
2. Authentication: IAM auth vs. password-based, credential rotation
3. Encryption: at rest (KMS key management), in transit (TLS enforcement)
4. Access control: database-level permissions audit
5. Audit logging: query logging, connection logging
6. Backup security: encryption, cross-region, retention
7. High availability and disaster recovery security
8. Snapshot and export permissions
9. Exact CLI commands to check each setting
10. Remediation commands for findings
```
_Use when: Auditing cloud-hosted database security._

---

**#150 - Cloud Security Architecture for New Workload**

```
Design cloud security architecture for deploying [WORKLOAD_DESCRIPTION] on [CLOUD_PROVIDER]:

Requirements:
- Data classification: [LEVEL]
- Compliance: [FRAMEWORKS]
- Users: [INTERNAL/EXTERNAL/BOTH]
- Availability: [SLA_REQUIREMENT]

Architecture:
1. Network design: VPC/VNet layout, subnets, security groups
2. Identity: authentication, authorization, service identities
3. Data protection: encryption strategy, key management
4. Compute security: hardening, patching, runtime protection
5. Monitoring: logging, alerting, dashboards
6. Incident response integration
7. Backup and recovery with security controls
8. Cost estimate for security components
9. Diagram description of the architecture
10. Deployment checklist with security gates
```
_Use when: Designing secure cloud architectures for new deployments._

---

**#151 - Cloud Privilege Escalation Detection**

```
Build detection rules for cloud privilege escalation in [AWS/AZURE/GCP]:

Current detection stack: [SIEM/CLOUD_NATIVE_TOOLS]

Detect:
1. IAM policy attachment/modification (self-escalation)
2. Role assumption chain abuse
3. Service account key creation
4. Permission boundary removal
5. Conditional policy modification
6. Cross-account role manipulation
7. Token generation and abuse
8. For each: detection query, severity, investigation steps, and false positive guidance
```
_Use when: Building cloud-specific privilege escalation detection._

---

**#152 - Cloud Compliance Benchmark Automation**

```
Automate compliance checks for [CIS_BENCHMARK/SOC2/HIPAA/PCI] in [CLOUD_PROVIDER]:

Automation approach:
1. Map compliance controls to cloud-native services (Config/Policy/SCC)
2. Identify gaps where custom checks are needed
3. Write custom check logic for gaps (Python/CLI scripts)
4. Dashboard design for compliance status visualization
5. Automated remediation for low-risk findings
6. Alert configuration for high-risk non-compliance
7. Reporting automation for audit evidence
8. Drift detection: alerting when compliant resources become non-compliant
```
_Use when: Automating cloud compliance monitoring._

---

**#153 - Cloud Secrets Management Strategy**

```
Design a secrets management strategy for our cloud environment on [CLOUD_PROVIDERS]:

Current state:
- How secrets are stored now: [DESCRIPTION]
- Applications needing secrets: [LIST]
- Secret types: [API_KEYS, DB_PASSWORDS, CERTIFICATES, TOKENS]

Strategy:
1. Secret storage solution selection (Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager)
2. Secret rotation automation design
3. Application integration patterns (environment variables, mounted volumes, API)
4. Access control: which applications/people can access which secrets
5. Audit logging of all secret access
6. Emergency access procedures
7. Migration plan from current state
8. Secret sprawl detection (scanning for hardcoded secrets)
```
_Use when: Centralizing and securing secret management in cloud environments._

---

**#154 - Cloud WAF Configuration Review**

```
Review WAF configuration for [AWS_WAF/AZURE_WAF/CLOUDFLARE/CLOUD_ARMOR]:

Current rule configuration:
[PASTE_CONFIG_OR_DESCRIBE]

Protected resources: [LIST_OF_ENDPOINTS]

Review:
1. Rule coverage: OWASP Top 10 protection assessment
2. Custom rule effectiveness
3. Rate limiting configuration adequacy
4. Bot management and scraping prevention
5. Geographic restrictions (if applicable)
6. False positive assessment from recent logs
7. Managed rule group recommendations
8. Logging and monitoring integration
9. Performance impact assessment
10. Specific rule additions or modifications recommended
```
_Use when: Auditing and optimizing cloud WAF configurations._

---

**#155 - Cloud Forensic Readiness Assessment**

```
Assess forensic readiness of our [CLOUD_PROVIDER] environment:

Account structure: [DESCRIPTION]
Current logging: [WHAT_IS_ENABLED]

Assess:
1. Log completeness: are all critical log types enabled? (CloudTrail, VPC Flow Logs, DNS logs, etc.)
2. Log retention: do retention periods meet investigation needs?
3. Log integrity: tamper protection, centralized storage
4. Forensic tools: are investigation tools pre-deployed?
5. Evidence collection procedures: documented and tested?
6. Legal considerations: data preservation, jurisdiction
7. Gap analysis: what evidence would be unavailable in an incident?
8. Estimated cost of recommended log improvements
9. Forensic readiness improvement roadmap
```
_Use when: Ensuring cloud environments support forensic investigations._

---

**#156 - Cloud Network Microsegmentation Design**

```
Design a network microsegmentation strategy for [CLOUD_WORKLOAD]:

Current architecture:
[DESCRIBE_WORKLOAD_COMPONENTS_AND_COMMUNICATION_FLOWS]

Design:
1. Communication flow mapping: which components talk to which
2. Security group / NSG design per component
3. Network policy design for Kubernetes workloads (if applicable)
4. Service endpoint / Private Link configurations
5. East-west traffic monitoring
6. Deny-by-default implementation plan
7. Testing methodology to validate segmentation without breaking applications
8. Operational procedures for change management
```
_Use when: Implementing microsegmentation in cloud workloads._

---

**#157 - Cloud Identity Federation Security Review**

```
Review identity federation security between [IDP: Okta/PingFederate/ADFS/etc.] and [CLOUD_PROVIDER]:

Current federation configuration:
[DESCRIBE_SETUP]

Review:
1. SAML/OIDC configuration security (token lifetime, encryption)
2. Role mapping: are federated roles appropriately scoped?
3. Session management: duration, refresh, revocation
4. MFA enforcement through federation
5. Break-glass access: can you still access without federation?
6. Monitoring: federated login anomaly detection
7. Single point of failure: what if the IdP goes down?
8. Privilege escalation paths through federation configuration
9. Recommendations for hardening
```
_Use when: Auditing cloud identity federation configurations._

---

**#158 - Cloud CIEM Assessment**

```
Conduct a Cloud Infrastructure Entitlement Management assessment for [ORGANIZATION] across [AWS/AZURE/GCP/MULTI-CLOUD]:

1. Identity inventory:
   - Total identities (human, service, federated, cross-account)
   - Permissions granted vs permissions actually used (last [90/180/365] days)
   - Over-privileged identity identification with severity ranking
2. Entitlement analysis:
   - Permission gap analysis: granted minus used = excessive
   - Toxic permission combinations (e.g., iam:PassRole + lambda:CreateFunction)
   - Cross-account access paths and trust relationships
   - Service account key age and rotation status
3. Risk scoring:
   - Blast radius per identity (what can be accessed if compromised)
   - Dormant identities with active permissions
   - Identities without MFA that have console access
   - Third-party identities with elevated privileges
4. Remediation:
   - Right-sizing recommendations per identity
   - Just-in-time access implementation plan
   - Automated permission revocation workflows
5. CIEM tool evaluation: Tenable Cloud Security (formerly Ermetic) vs Microsoft Entra Permissions Management (formerly CloudKnox) vs CrowdStrike Falcon Cloud Security vs native tools (AWS IAM Access Analyzer, Azure Entra Permissions Management, GCP IAM Recommender)
```
_Use when: Assessing and reducing cloud identity and entitlement risks._

---

**#159 - Cloud Security Posture Management (CSPM) Evaluation**

```
Evaluate CSPM coverage and effectiveness for [ORGANIZATION] across [CLOUD_PROVIDERS]:

Current CSPM: [TOOL_OR_NONE]

1. Benchmark assessment:
   - CIS Benchmark compliance score per cloud account/subscription
   - Critical misconfiguration count and trending
   - Compliance framework mapping (PCI DSS, HIPAA, SOC 2, ISO 27001)
2. Coverage gaps:
   - Cloud services not monitored by current CSPM
   - Custom policy requirements not covered by default rules
   - Multi-cloud normalization gaps
3. Alert management:
   - Alert volume vs actionable findings ratio
   - Mean time to remediate CSPM findings
   - Auto-remediation rules in place vs needed
4. Integration requirements:
   - SIEM/SOAR integration for security event correlation
   - Ticketing system integration for remediation tracking
   - CI/CD pipeline integration for shift-left prevention
5. Tool comparison: Wiz (acquired Orca Security, March 2025) vs Prisma Cloud vs Aqua vs native (Security Hub, Defender for Cloud, SCC)
   - Feature matrix, cost model, deployment complexity, API coverage
```
_Use when: Evaluating or improving cloud security posture management._

---

**#160 - GCP Security Command Center Investigation**

```
Create investigation procedures using GCP Security Command Center for [ORGANIZATION]:

1. Finding triage workflows:
   - Critical findings: public bucket, firewall misconfiguration, leaked credentials
   - Severity-based SLA assignment and escalation
   - Finding suppression criteria and process
2. Threat detection:
   - Event Threat Detection rules and tuning
   - Container Threat Detection in GKE environments
   - Custom threat detection using Security Health Analytics
3. Investigation queries:
   - Cloud Logging queries for security events
   - VPC Flow Log analysis for network anomalies
   - Admin Activity and Data Access audit log correlation
4. Response automation:
   - Cloud Functions for automated remediation
   - Integration with Chronicle for SIEM correlation
   - Pub/Sub notification routing to SOC
5. Compliance monitoring:
   - CIS GCP Benchmark continuous assessment
   - Asset inventory and drift detection
   - Cross-project security posture comparison
```
_Use when: Operating GCP Security Command Center for security monitoring and response._

---

**#161 - Cloud Data Security Architecture**

```
Design a cloud data security architecture for [ORGANIZATION] handling [DATA_TYPES] in [CLOUD_PROVIDERS]:

1. Data classification:
   - Classification taxonomy (public, internal, confidential, restricted)
   - Automated classification using [AWS Macie/Azure Purview/GCP DLP]
   - Data flow mapping across cloud services and regions
2. Encryption strategy:
   - At-rest encryption: managed keys vs CMK vs BYOK vs HSM
   - In-transit encryption: TLS version requirements, certificate management
   - Key management: rotation policy, access controls, disaster recovery
3. Access controls:
   - Data-layer access policies (bucket policies, database ACLs, column-level security)
   - Data access monitoring and anomaly detection
   - Data loss prevention (DLP) rules and response actions
4. Data residency and sovereignty:
   - Regional storage requirements per data classification
   - Cross-border transfer controls and legal basis
   - Data residency monitoring and enforcement
5. Backup and recovery:
   - Immutable backup requirements
   - Cross-region replication security
   - Backup encryption and access control
   - Recovery testing schedule and validation
```
_Use when: Designing comprehensive data security for cloud environments._

---

**#162 - Cloud Workload Protection Platform Assessment**

```
Assess cloud workload protection needs for [ORGANIZATION]:

Workload inventory:
- VMs: [COUNT] across [PROVIDERS]
- Containers: [COUNT] clusters
- Serverless functions: [COUNT]
- Managed services: [LIST]

Assessment areas:
1. Runtime protection:
   - Process execution monitoring and anomaly detection
   - File integrity monitoring for cloud workloads
   - Network microsegmentation enforcement
   - Memory protection and exploit prevention
2. Vulnerability management:
   - OS and application vulnerability scanning coverage
   - Container image scanning in CI/CD and runtime
   - Serverless dependency scanning
   - Agentless vs agent-based scanning trade-offs
3. Compliance:
   - Workload compliance benchmarking (CIS, DISA STIG)
   - Configuration drift detection and remediation
   - Audit-ready evidence collection
4. Threat detection:
   - Workload-level IOC detection
   - Behavioral analysis and anomaly detection
   - Fileless attack detection capabilities
5. Tool evaluation: CrowdStrike Falcon Cloud vs Prisma Cloud Compute vs Aqua vs Sysdig Secure (note: Lacework was acquired by Fortinet in 2024)
```
_Use when: Evaluating cloud workload protection requirements and solutions._

---

**#163 - Cloud API Gateway Security Configuration**

```
Review and harden API gateway security configuration for [API_GATEWAY_SERVICE: AWS API Gateway/Azure API Management/GCP API Gateway/Kong]:

APIs to protect:
[API_LIST_WITH_ENDPOINTS]

Security review:
1. Authentication and authorization:
   - Auth method per endpoint (API key, OAuth 2.0, JWT, mTLS)
   - Authorization granularity (resource-level, operation-level)
   - Token validation and expiration policies
2. Rate limiting and throttling:
   - Per-client rate limits by API tier
   - Burst handling configuration
   - DDoS protection integration
3. Input validation:
   - Request schema validation (OpenAPI spec enforcement)
   - Payload size limits
   - Content-type restrictions
   - SQL injection, XSS, and command injection filtering
4. Logging and monitoring:
   - Access logging with security-relevant fields
   - Error rate monitoring and alerting
   - Anomalous usage pattern detection
5. Certificate and TLS:
   - Minimum TLS version enforcement
   - Certificate pinning for critical integrations
   - Custom domain security configuration
6. Recommendations ranked by risk and implementation effort
```
_Use when: Securing cloud API gateway configurations._

---

**#164 - Cloud FinOps Security Alignment**

```
Align cloud FinOps practices with security requirements for [ORGANIZATION]:

Cloud spend: [MONTHLY_SPEND]
Providers: [AWS/AZURE/GCP]

1. Cost anomaly as security indicator:
   - Cryptocurrency mining detection through cost spikes
   - Data exfiltration indicators from egress cost anomalies
   - Unauthorized resource creation from billing alerts
   - Alert thresholds and response procedures
2. Security vs cost trade-offs:
   - Encryption costs (CMK vs managed keys)
   - Logging retention costs vs security requirements
   - Multi-AZ/region for resilience vs budget
   - Reserved vs on-demand for security tooling
3. Resource tagging for security:
   - Mandatory security tags (data classification, owner, compliance scope)
   - Untagged resource detection and remediation
   - Tag-based access control policies
4. Waste elimination without security risk:
   - Safe decommissioning checklist (data retention, audit trail)
   - Idle resource identification that may be security infrastructure
   - Snapshot and backup cleanup criteria
5. Budget allocation: recommended security spend as percentage of total cloud spend
```
_Use when: Aligning cloud financial operations with security objectives._

---

**#165 - Cloud Disaster Recovery Security Review**

```
Review security controls for cloud disaster recovery at [ORGANIZATION]:

DR architecture:
- Primary region: [REGION]
- DR region: [REGION]
- RPO: [TARGET]
- RTO: [TARGET]
- DR strategy: [PILOT_LIGHT/WARM_STANDBY/MULTI_SITE/BACKUP_RESTORE]

Security review:
1. Data replication security:
   - Encryption in transit between regions
   - Replication integrity verification
   - Cross-region key management
2. DR environment security posture:
   - Are security controls replicated in DR (WAF, NACL, SG, IAM)?
   - Security tool coverage in DR region
   - Configuration drift between primary and DR
3. Failover security:
   - Authentication and access control during failover
   - DNS security for failover (DNSSEC, route verification)
   - Certificate validity in DR region
4. DR testing security:
   - Isolated testing to prevent data leakage
   - Access controls during DR tests
   - Post-test cleanup and verification
5. Recovery validation:
   - Security posture verification post-failover
   - Integrity checks on recovered data
   - Incident response procedures for DR scenarios
```
_Use when: Ensuring disaster recovery plans maintain security standards._

---

**#166 - Cloud-Native Application Protection Platform (CNAPP) Strategy**

```
Develop a CNAPP strategy for [ORGANIZATION]:

Application portfolio:
- Cloud-native apps: [COUNT]
- Containerized workloads: [COUNT]
- Serverless functions: [COUNT]
- IaC repositories: [COUNT]

Strategy components:
1. Shift-left security:
   - IaC scanning in CI/CD (Terraform, CloudFormation, Pulumi)
   - Container image scanning in build pipeline
   - Secrets detection in code repositories
   - SAST/DAST integration for cloud-native apps
2. Runtime protection:
   - CWPP for runtime workload protection
   - CSPM for configuration monitoring
   - KSPM for Kubernetes-specific posture management
   - API security monitoring
3. Cloud detection and response:
   - Cloud-native threat detection rules
   - Cross-layer correlation (code -> build -> deploy -> runtime)
   - Automated response playbooks
4. Governance:
   - Policy-as-code framework
   - Compliance continuous monitoring
   - Risk scoring and prioritization across application lifecycle
5. Vendor consolidation: single CNAPP vs best-of-breed evaluation
   - Wiz (acquired Orca Security, March 2025) vs Prisma Cloud vs native tools matrix
```
_Use when: Building a comprehensive cloud-native application security strategy._

---

**#167 - Cloud Zero Trust Network Architecture**

```
Design a Zero Trust network architecture for cloud workloads at [ORGANIZATION]:

Current state:
- Cloud providers: [LIST]
- Network architecture: [HUB_SPOKE/MESH/FLAT]
- Remote workforce: [PERCENTAGE]
- Existing security stack: [LIST]

Zero Trust design:
1. Identity-centric access:
   - Identity verification for every network request
   - Device posture assessment integration
   - Continuous authentication and session validation
   - Just-in-time network access provisioning
2. Microsegmentation:
   - Workload-to-workload segmentation policy
   - Service mesh implementation for east-west traffic control
   - Network policy enforcement (Kubernetes NetworkPolicy, cloud NSG)
   - Segmentation testing and validation
3. Encrypted communications:
   - mTLS for all service-to-service communication
   - Certificate lifecycle automation
   - Network traffic inspection for encrypted channels
4. Monitoring and analytics:
   - Network flow logging and analysis
   - Lateral movement detection
   - Access pattern anomaly detection
   - Network security posture scoring
5. Migration roadmap: phased implementation from highest-risk segments first
```
_Use when: Implementing Zero Trust networking principles in cloud environments._

---

## 5. OSINT / Reconnaissance

### Domain & IP Intelligence

**#168 - Domain Intelligence Report**

```
Compile a comprehensive OSINT intelligence report for [TARGET_DOMAIN]:

Research:
1. Domain registration: registrar, registration date, expiration, registrant details (WHOIS)
2. DNS records: A, AAAA, MX, TXT, NS, SOA, CNAME records and analysis
3. Subdomain enumeration: certificate transparency, passive DNS sources
4. Web technologies: CMS, frameworks, CDN, hosting provider
5. Email security: SPF, DKIM, DMARC records analysis
6. Historical data: web archive snapshots, DNS changes
7. SSL/TLS certificates: issuance history, SANs, expiration
8. Related domains: same registrant, same nameservers, same IP
9. Reputation: blacklists, threat intel mentions
10. Summary with risk indicators and investigation leads
```
_Use when: Starting domain-level intelligence gathering._

---

**#169 - IP Address Intelligence Analysis**

```
Analyze IP address [TARGET_IP] for threat intelligence:

Research:
1. Geolocation and ASN information
2. Reverse DNS and hosting provider identification
3. Port history from passive scanning databases (Shodan, Censys)
4. Threat intelligence reputation across multiple sources
5. Historical associations: domains hosted, certificates issued
6. Blacklist presence: Spamhaus, AbuseIPDB, etc.
7. Netblock analysis: what else is in this range?
8. BGP routing information and prefix history
9. Open source mentions: paste sites, forums, reports
10. Assessment: likely purpose and risk level of this IP
```
_Use when: Investigating suspicious IP addresses._

---

**#170 - Infrastructure Mapping from OSINT**

```
Map the external infrastructure of [TARGET_ORGANIZATION] using only passive OSINT:

Starting points:
- Primary domain: [DOMAIN]
- Known IP ranges: [IF_ANY]
- Known cloud providers: [IF_ANY]

Map:
1. All related domains and subdomains
2. IP address ranges and hosting providers
3. Cloud service identifiers (S3 buckets, Azure blobs, GCP storage)
4. CDN usage and origin identification
5. Email infrastructure (MX records, email gateway vendor)
6. VPN/remote access endpoints
7. Development/staging environments exposed
8. Third-party service integrations visible externally
9. Network diagram based on findings
10. Attack surface summary with risk ratings
```
_Use when: Mapping an organization's external attack surface._

---

**#171 - Certificate Transparency Intelligence**

```
Analyze certificate transparency logs for [TARGET_DOMAIN]:

Research:
1. All certificates issued for the domain and subdomains (crt.sh, Censys)
2. Certificate issuers and validation levels
3. Subdomain discovery from certificate SANs
4. Wildcard certificate usage and implications
5. Internal naming conventions revealed through cert names
6. Development/staging/test environments exposed
7. Historical certificate timeline (new services appearing)
8. Certificates for related/subsidiary domains
9. Expired certificates still in use
10. Intelligence summary and new investigation leads
```
_Use when: Mining certificate transparency for intelligence._

---

**#172 - DNS Passive Intelligence Gathering**

```
Conduct passive DNS intelligence gathering for [TARGET_DOMAIN]:

Techniques:
1. Query passive DNS databases for historical records (DNSDB, SecurityTrails, Microsoft Defender Threat Intelligence (formerly PassiveTotal/RiskIQ))
2. Identify all IP addresses the domain has resolved to historically
3. Identify all domains that have shared these IPs
4. Track DNS record changes over time
5. Identify mail server infrastructure and changes
6. Map CDN and cloud service migrations
7. Detect fast-flux or suspicious DNS patterns
8. Identify name server patterns and provider changes
9. Correlate with domain registration data
10. Build infrastructure change timeline
```
_Use when: Passive DNS research for investigation or reconnaissance._

---

**#173 - Shodan/Censys Intelligence Query Design**

```
Design targeted Shodan and Censys queries for intelligence on [TARGET_ORGANIZATION]:

Known details:
- Domain(s): [DOMAINS]
- IP ranges: [IF_KNOWN]
- Technologies: [IF_KNOWN]

Create queries for:
1. All services exposed by the organization
2. Specific technology stack discovery (by HTTP headers, banners)
3. SSL certificate-based asset discovery
4. Default credentials and misconfigurations
5. ICS/SCADA exposure (if applicable)
6. Database exposure (MongoDB, Elasticsearch, Redis)
7. Remote access services (RDP, VNC, SSH, Telnet)
8. Web application servers and versions
9. Compare results over time (trend analysis approach)
10. Risk summary of exposed attack surface
```
_Use when: Conducting internet-wide scan database research._

---

### Digital Footprint Analysis

**#174 - Corporate Digital Footprint Assessment**

```
Assess the digital footprint of [TARGET_ORGANIZATION]:

Research areas:
1. Social media presence: official accounts across platforms
2. Job postings: technology stack revealed, team structure
3. Code repositories: GitHub, GitLab (employee accounts, org repos)
4. Document metadata: publicly available documents (FOCA analysis approach)
5. Cloud storage exposure: misconfigured S3/Azure blobs/GCS
6. Paste site mentions: code, credentials, internal data
7. Dark web mentions: breach databases, forum discussions
8. Press releases and news: merger/acquisition targets, new deployments
9. Vendor relationships visible through public references
10. Risk summary with specific actionable findings
```
_Use when: Comprehensive digital footprint assessment of an organization._

---

**#175 - Employee OSINT for Security Assessment**

```
Conduct an OSINT assessment of employees at [TARGET_ORGANIZATION] for an authorized security engagement:

Focus areas:
1. Email address format discovery and enumeration
2. LinkedIn profile analysis: roles, technologies, team structure
3. Conference presentations and published papers
4. GitHub/Stack Overflow activity: code snippets, internal details leaked
5. Social media footprint: business travel patterns, location sharing
6. Credential breach database checks (Have I Been Pwned methodology)
7. Personal website/blog analysis
8. Professional network relationships
9. Compile employee list with role, email, and social profiles
10. Social engineering viability assessment per target

Note: This is for authorized assessment only. Adhere to legal boundaries and engagement scope.
```
_Use when: Authorized employee OSINT for social engineering planning._

---

**#176 - Data Leak Detection Methodology**

```
Design a methodology to detect data leaks for [ORGANIZATION]:

Data assets of concern:
- Internal documents: [TYPES]
- Source code: [REPO_NAMES]
- Credentials: [SYSTEMS]
- Customer data: [DESCRIPTION]

Detection plan:
1. GitHub/GitLab public repository monitoring (dorks and API search)
2. Paste site monitoring (Pastebin, GitHub Gist, Rentry, dpaste, etc.)
3. Dark web monitoring approach (forums, marketplaces)
4. Google dorking for exposed internal documents
5. Cloud storage bucket enumeration for company data
6. Social media monitoring for inadvertent disclosures
7. Automated monitoring tool recommendations
8. Alert triage workflow for detected leaks
9. Response procedures when a leak is confirmed
10. Metrics: monitoring coverage and response time
```
_Use when: Building data leak detection capabilities._

---

**#177 - Brand Impersonation Detection**

```
Design a brand impersonation detection program for [ORGANIZATION]:

Brand assets:
- Primary domain: [DOMAIN]
- Product names: [PRODUCTS]
- Executive names: [KEY_EXECUTIVES]
- Logo and brand elements: [DESCRIPTION]

Monitor for:
1. Lookalike domain registration (typosquatting, homograph attacks)
2. Fake social media profiles impersonating company or executives
3. Fraudulent mobile apps using company branding
4. Phishing sites mimicking company login pages
5. Impersonation in email campaigns (spoofing without DMARC enforcement)
6. Fake job postings using company name
7. Counterfeit products or services using brand
8. Automated detection tool recommendations per category
9. Takedown procedures for each impersonation type
10. Legal escalation framework
```
_Use when: Protecting brand integrity from impersonation attacks._

---

**#178 - Google Dorking Playbook**

```
Create a comprehensive Google dorking playbook for investigating [TARGET_DOMAIN] as part of an authorized security assessment.

Authorization: This playbook is for authorized security assessments and defensive reconnaissance only. Adhere to applicable laws and organizational policies. Do not access or download data you are not authorized to view.

Dork categories and queries:
1. Sensitive files: site:[DOMAIN] filetype:pdf|doc|xls|ppt confidential
2. Login portals: site:[DOMAIN] inurl:login|admin|portal
3. Exposed configuration: site:[DOMAIN] filetype:xml|conf|env|yaml
4. Error messages revealing infrastructure: site:[DOMAIN] "error" "stack trace" "SQL syntax"
5. Directory listings: site:[DOMAIN] intitle:"index of"
6. Exposed APIs: site:[DOMAIN] inurl:api|swagger|graphql
7. Backup files: site:[DOMAIN] filetype:bak|old|backup
8. Internal documents: site:[DOMAIN] inurl:internal|intranet|wiki
9. Cloud storage: site:s3.amazonaws.com "[COMPANY_NAME]"
10. GitHub/code leaks: site:github.com "[COMPANY_NAME]" password|secret|key

For each: explanation of what it finds and risk level.
```
_Use when: Conducting authorized Google dorking reconnaissance for defensive assessments._

---

**#179 - Supply Chain OSINT Investigation**

```
Investigate the supply chain of [TARGET_ORGANIZATION] through OSINT:

Known details:
- Industry: [INDUSTRY]
- Products/services: [DESCRIPTION]

Research:
1. Technology vendors identified through job postings and public docs
2. SaaS services detected via DNS (MX records, CNAME delegations)
3. CDN and cloud infrastructure providers
4. Security vendor stack (from SSL headers, privacy policies)
5. Payment processors and financial service integrations
6. Third-party scripts and analytics on their web properties
7. Subcontractor and partner relationships
8. Open source dependency usage (from public repos)
9. Supply chain risk assessment per identified vendor
10. Recommendations for supply chain security monitoring
```
_Use when: Assessing third-party risk through OSINT._

---

### Threat Actor Profiling

**#180 - Threat Actor Profile Development**

```
Develop a threat actor profile for [THREAT_ACTOR_NAME_OR_CAMPAIGN]:

Research:
1. Names and aliases (multiple naming conventions: Mandiant, CrowdStrike, Microsoft, MITRE)
2. Attribution: suspected nation-state or criminal group affiliation
3. Active period: first observed, last observed, activity trend
4. Motivation: espionage, financial, hacktivism, disruption
5. Target sectors and geographic focus
6. TTPs mapped to MITRE ATT&CK framework
7. Known tools and malware families
8. Infrastructure patterns (C2, domains, IP ranges)
9. Notable campaigns and operations
10. Detection and mitigation recommendations specific to this actor
11. Intelligence gaps and assessment confidence levels
```
_Use when: Building threat profiles for intelligence-informed defense._

---

**#181 - Campaign Analysis Report**

```
Analyze the cyber campaign [CAMPAIGN_NAME/DESCRIPTION]:

Known indicators:
[PASTE_AVAILABLE_IOCS_AND_TTPS]

Analysis:
1. Campaign overview: timeline, scope, objectives
2. Initial access vector analysis
3. Malware analysis summary (if applicable)
4. Infrastructure analysis: C2 servers, domains, hosting patterns
5. TTP evolution: how has the campaign changed over time?
6. Victimology: who is being targeted and why?
7. Attribution assessment (with confidence level)
8. Relationship to other known campaigns
9. Predictive analysis: likely next steps or targets
10. Defensive recommendations per campaign stage
11. IOCs formatted for ingestion (STIX/OpenIOC format)
```
_Use when: Analyzing active threat campaigns._

---

**#182 - Dark Web Intelligence Collection Plan**

```
Design a dark web intelligence collection plan for [ORGANIZATION]:

Collection priorities:
- Stolen credentials for [DOMAINS]
- Discussions about [ORGANIZATION_OR_INDUSTRY]
- Data breach material
- Exploit marketplace monitoring

Plan:
1. Collection platforms: forums, marketplaces, paste sites, chat channels
2. Keyword list for monitoring (organization-specific and industry-specific)
3. Access methodology: Tor, I2P, dedicated services
4. OPSEC requirements for analyst safety
5. Automated vs. manual collection trade-offs
6. Tool recommendations (paid services vs. DIY)
7. Triage workflow for collected intelligence
8. Reporting template for actionable findings
9. Legal and ethical boundaries
10. Metrics: collection volume, actionable finds rate
```
_Use when: Establishing dark web monitoring capabilities._

---

**#183 - Threat Intelligence Requirements Document**

```
Create a threat intelligence requirements (TIR) document for [ORGANIZATION]:

Context:
- Industry: [INDUSTRY]
- Geography: [OPERATIONS_LOCATIONS]
- Current threat concerns: [LIST]
- Stakeholders: [SOC, IR, EXECUTIVE, RISK]

Document:
1. Priority intelligence requirements (PIRs) per stakeholder
2. Specific information requirements (SIRs) per PIR
3. Collection sources mapped to each SIR
4. Intelligence cycle: collection, processing, analysis, dissemination
5. Reporting formats and frequency per stakeholder
6. Feedback mechanism for requirement refinement
7. Success metrics for the intelligence program
8. Annual review process for updating requirements
```
_Use when: Formalizing threat intelligence program requirements._

---

**#184 - OSINT Investigation Report Template**

```
Create an OSINT investigation report for [INVESTIGATION_SUBJECT]:

Investigation type: [INCIDENT_SUPPORT/THREAT_ASSESSMENT/DUE_DILIGENCE]
Scope: [DEFINE_BOUNDARIES]
Time period: [DATE_RANGE]

Report structure:
1. Investigation summary: objective, scope, methodology, key findings
2. Subject overview: identifier details, known associations
3. Digital footprint: domains, IPs, social media, repositories
4. Infrastructure analysis: hosting, services, geographic distribution
5. Behavioral patterns: activity timing, communication preferences
6. Relationships: connected entities, shared infrastructure
7. Threat assessment: risk level with supporting evidence
8. Intelligence gaps and suggested further research
9. All sources cited with timestamps
10. Confidence assessment per finding (confirmed, likely, possible)
11. Appendix: raw data, screenshots, tool output
```
_Use when: Documenting OSINT investigation findings formally._

---

**#185 - Geopolitical Cyber Threat Assessment**

```
Assess geopolitical cyber threats relevant to [ORGANIZATION]:

Organization profile:
- Industry: [INDUSTRY]
- Headquarters: [COUNTRY]
- Operations: [COUNTRIES_OF_OPERATION]
- Key dependencies: [SUPPLY_CHAIN_COUNTRIES]

Assess:
1. Nation-state threat actors targeting our industry and regions
2. Current geopolitical tensions affecting cyber risk
3. Regulatory and sanctions implications for cyber operations
4. Hacktivism risks based on organizational profile and positions
5. Critical infrastructure dependencies in conflict-prone regions
6. Supply chain risks from geopolitically sensitive sourcing
7. Specific threat scenarios (3-5) ranked by likelihood and impact
8. Recommended defensive posture adjustments
9. Intelligence gaps requiring monitoring
```
_Use when: Assessing geopolitical cyber risk for strategic planning._

---

**#186 - Malware OSINT Research Guide**

```
Guide me through OSINT research on malware sample [HASH/NAME]:

Research steps:
1. Multi-engine AV scan results analysis (VirusTotal, Hybrid Analysis)
2. Behavioral analysis report review (sandbox results)
3. Code similarity analysis with known malware families
4. Network infrastructure analysis (C2 domains, IPs, protocols)
5. YARA rule development for detection
6. Historical campaign association
7. Threat actor attribution based on TTP analysis
8. Industry reporting cross-reference (vendor blogs, papers)
9. Related sample discovery through pivot analysis
10. Defensive IOC package creation
11. MITRE ATT&CK mapping of observed behaviors
```
_Use when: Researching malware samples using open source intelligence._

---

**#187 - Social Media Intelligence (SOCMINT) Collection**

```
Design a social media intelligence collection plan for [INVESTIGATION_PURPOSE]:

Target: [INDIVIDUAL/ORGANIZATION/TOPIC]
Platforms: [X (TWITTER)/LINKEDIN/FACEBOOK/INSTAGRAM/REDDIT/TELEGRAM/etc.]

Collection plan:
1. Platform-specific search strategies and query syntax
2. Account identification and verification methodology
3. Network mapping: connections, interactions, mentions
4. Content analysis: topics, sentiment, timing patterns
5. Geolocation extraction from posts and metadata
6. Image analysis: EXIF data, reverse image search
7. Temporal patterns: activity timeline, posting schedule
8. Tool recommendations per platform (APIs, scrapers, analyzers)
9. OPSEC considerations for the analyst
10. Evidence preservation: archiving and chain of custody
```
_Use when: Conducting social media intelligence operations._

---

**#188 - Attack Surface Discovery Automation**

```
Design an automated external attack surface discovery workflow for [ORGANIZATION]:

Starting inputs:
- Root domains: [LIST]
- Known IP ranges: [LIST]
- Organization name: [NAME]

Automation pipeline:
1. Subdomain enumeration: passive (CT logs, DNS aggregators) + active (brute force)
2. Port scanning: top ports on discovered assets
3. Service identification and version detection
4. Web technology fingerprinting
5. Cloud asset discovery (S3 buckets, Azure blobs, etc.)
6. Vulnerability correlation with discovered versions
7. Change detection: alert on new assets or services
8. Output: structured asset inventory with risk scoring
9. Tool chain: exact tools and orchestration approach
10. Scheduling: how often to run and how to track changes
```
_Use when: Building continuous external attack surface monitoring._

---

**#189 - Disinformation Campaign Analysis**

```
Analyze a potential disinformation campaign targeting [ORGANIZATION/TOPIC]:

Observed activity:
[DESCRIBE_OBSERVED_SOCIAL_MEDIA_ACTIVITY_OR_CONTENT]

Analysis:
1. Narrative identification: what stories/claims are being pushed?
2. Source analysis: account characteristics, creation dates, behavior patterns
3. Amplification network: coordination between accounts
4. Content analysis: originality, copy patterns, timing coordination
5. Platform spread: which platforms, cross-posting patterns
6. Target audience analysis: who is being influenced?
7. Attribution assessment: state-sponsored, commercial, organic
8. Impact assessment: reach, engagement, narrative adoption
9. Counter-narrative recommendations
10. Monitoring plan for ongoing tracking
```
_Use when: Investigating organized disinformation targeting your organization._

---

**#190 - Cryptocurrency OSINT Investigation**

```
Investigate cryptocurrency activity for [WALLET_ADDRESS/TRANSACTION_ID]:

Blockchain: [BITCOIN/ETHEREUM/OTHER]

Investigation steps:
1. Wallet address analysis: balance, transaction history, first/last seen
2. Transaction graph: incoming and outgoing flows
3. Clustering: identify related addresses (same entity)
4. Exchange attribution: identify deposits/withdrawals to known exchanges
5. Mixer/tumbler usage detection
6. Cross-chain analysis (if applicable)
7. Connection to known illicit addresses (sanctions lists, darknet)
8. Temporal analysis: timing patterns in transactions
9. Value analysis: amounts, conversion rates at time of transaction
10. Tools: Block explorers (Blockchain.com, Blockchair), Etherscan, Arkham Intelligence, Crystal Blockchain, Chainalysis (if available)
```
_Use when: Investigating cryptocurrency transactions in cyber investigations._

---

**#191 - Physical Infrastructure OSINT**

```
Conduct OSINT on the physical infrastructure of [TARGET_ORGANIZATION] as part of an authorized security engagement.

Authorization: This assessment must be conducted within the scope of an authorized security engagement. All information gathered must be from publicly available sources. Physical surveillance or on-site observation requires separate authorization. Adhere to all applicable laws and organizational policies.

Research:
1. Office locations: addresses, building details, satellite imagery analysis
2. Data center locations: owned, collocated, cloud regions
3. Network infrastructure: BGP ASN, IP allocations, peering arrangements
4. Physical security observations: publicly visible cameras, access controls (from street view)
5. Tenant information: who else occupies the same buildings?
6. Delivery and vendor patterns: publicly observable
7. Emergency services and utility connections
8. Public records: building permits, planning applications
9. Employee reviews mentioning physical security
10. Risk assessment of physical infrastructure exposure
```
_Use when: Physical infrastructure intelligence for authorized comprehensive assessments._

---

**#192 - Competitive Intelligence Security Assessment**

```
Assess the cybersecurity posture of [COMPETITOR/TARGET] using only public information:

Assessment areas:
1. External attack surface summary (domains, IPs, services)
2. Security technology stack (from headers, job postings, vendor references)
3. Security team maturity indicators (certifications, conference talks, blog posts)
4. Compliance certifications (SOC 2, ISO 27001 - publicly stated)
5. Past incident history (breach disclosures, news articles)
6. Bug bounty or vulnerability disclosure program
7. Security patents or research publications
8. Third-party security ratings (BitSight, SecurityScorecard - public)
9. Overall security maturity assessment (1-5 scale with justification)
10. Comparative analysis if assessing multiple organizations
```
_Use when: Due diligence, competitive analysis, or M&A security assessment._

---

**#193 - OSINT Workflow Automation Design**

```
Design an automated OSINT workflow for continuous monitoring of [MONITORING_TARGETS]:

Requirements:
- Targets: [DOMAINS/BRANDS/KEYWORDS/EXECUTIVES]
- Alert triggers: [WHAT_SHOULD_TRIGGER_NOTIFICATION]
- Update frequency: [REAL_TIME/DAILY/WEEKLY]

Design:
1. Data collection layer: APIs, scrapers, RSS feeds
2. Processing layer: deduplication, enrichment, correlation
3. Storage: database design for collected intelligence
4. Analysis: automated tagging, sentiment analysis, risk scoring
5. Alerting: notification rules and channels
6. Visualization: dashboard requirements
7. Tool stack recommendation (open source and commercial)
8. Operational procedures: analyst review workflow
9. Data retention and privacy considerations
10. Cost estimate for the recommended solution
```
_Use when: Building automated OSINT monitoring pipelines._

---

**#194 - Email Infrastructure Investigation**

```
Investigate the email infrastructure of [TARGET_DOMAIN]:

Analysis:
1. MX record analysis: providers, priorities, redundancy
2. SPF record parsing: authorized sending sources
3. DKIM selector discovery and key analysis
4. DMARC policy: enforcement level, reporting addresses
5. BIMI record: brand authentication
6. Email gateway identification (from headers or MX records)
7. Cloud email provider identification (O365, Google Workspace, etc.)
8. Historical email infrastructure changes
9. Email security control effectiveness assessment
10. Email spoofing viability assessment based on findings
```
_Use when: Investigating email security posture through OSINT._

---

**#195 - Wireless Network OSINT**

```
Conduct wireless network OSINT for [TARGET_LOCATION]:

Passive research:
1. WiGLE database queries for the target area
2. Historical wireless network mapping
3. SSID naming convention analysis
4. Encryption protocol usage assessment
5. Hidden network detection from historical data
6. Vendor identification from MAC OUI analysis
7. Access point density and coverage estimation
8. Guest network identification
9. IoT device wireless presence
10. Risk assessment from wireless exposure
```
_Use when: Pre-engagement wireless reconnaissance using passive sources._

---

**#196 - AI-Generated Deepfake Detection in OSINT**

```
Develop a deepfake detection methodology for OSINT investigations at [ORGANIZATION]:

Detection targets:
- Audio deepfakes (voice cloning in vishing, CEO fraud)
- Video deepfakes (impersonation in video calls, social media)
- Image manipulation (forged documents, fake profiles)
- Text deepfakes (AI-generated social engineering content)

Methodology:
1. Visual analysis:
   - Facial inconsistency detection (blinking, lip sync, lighting)
   - Metadata analysis (creation tools, editing history, EXIF anomalies)
   - Reverse image search across deepfake databases
   - GAN artifact detection techniques
2. Audio analysis:
   - Voice pattern analysis against known authentic samples
   - Spectral analysis for synthesis artifacts
   - Background noise consistency checks
   - Compression artifact analysis
3. Text analysis:
   - AI-generated text detection (perplexity scoring, burstiness analysis)
   - Writing style comparison against known authentic communications
   - Linguistic consistency checks across messages
4. Tools: [LIST_DETECTION_TOOLS: Microsoft Video Authenticator, Sensity, Deepware, etc.]
5. Response procedures: escalation path, evidence preservation, legal considerations
6. Training: analyst capability building for deepfake recognition
```
_Use when: Detecting AI-generated fake content during OSINT investigations._

---

**#197 - IoT and Device OSINT Reconnaissance**

```
Conduct IoT and connected device OSINT for [TARGET_ORGANIZATION]:

Authorized reconnaissance scope:
[DEFINE_SCOPE]

1. Internet-facing device discovery:
   - Shodan queries for IoT protocols (MQTT, CoAP, AMQP, Modbus)
   - Censys searches for industrial control systems
   - Device firmware version identification from banners
   - Default credential exposure assessment
2. Consumer IoT exposure:
   - Smart building system discovery (BACnet, KNX)
   - IP camera and NVR exposure assessment
   - Printer and MFP discovery with SNMP enumeration
   - VoIP system exposure analysis
3. Protocol analysis:
   - Unencrypted protocol usage (Telnet, FTP, HTTP on IoT)
   - MQTT broker open access assessment
   - UPnP/SSDP exposure analysis
4. Vendor intelligence:
   - Known vulnerability mapping per device vendor/model
   - Firmware update availability and patch gap analysis
   - Vendor end-of-life and support status
5. Risk assessment: device-by-device exposure severity, network segmentation verification
6. Reporting: prioritized findings with remediation recommendations
```
_Use when: Mapping IoT device exposure for authorized security assessments._

---

**#198 - Breach Credential Analysis Methodology**

```
Conduct breach credential analysis for [TARGET_ORGANIZATION]:

Authorization: [CONFIRM_LEGAL_AUTHORIZATION]
Domain(s): [DOMAIN_LIST]

Methodology:
1. Credential exposure discovery:
   - Check breach databases (Have I Been Pwned API, intelligence platforms)
   - Dark web marketplace monitoring for organization credentials
   - Paste site monitoring (Pastebin, GitHub Gist, etc.)
   - Stealer log analysis for corporate credential exposure
2. Analysis:
   - Unique email addresses exposed: count and role classification
   - Password pattern analysis (common patterns, reuse indicators)
   - Credential age assessment (exposure date vs last password change)
   - MFA coverage assessment for exposed accounts
3. Risk assessment:
   - Active credentials: cross-reference with current directory
   - Privileged account exposure (admin, service accounts, executives)
   - Third-party service credential exposure (SaaS, cloud consoles)
   - Password reuse probability across corporate and personal accounts
4. Remediation:
   - Forced password reset priority list
   - MFA enforcement recommendations
   - Credential monitoring service implementation
   - User notification and awareness communication
5. Ongoing monitoring setup and alerting configuration
```
_Use when: Assessing organizational credential exposure from data breaches._

---

**#199 - OSINT for Merger and Acquisition Due Diligence**

```
Conduct cybersecurity OSINT due diligence for M&A target [TARGET_COMPANY]:

1. External attack surface assessment:
   - Domain and IP infrastructure mapping
   - SSL/TLS certificate inventory and configuration assessment
   - Exposed services and version analysis
   - Cloud infrastructure footprint identification
2. Reputation and incident history:
   - Historical breach notifications and regulatory actions
   - Dark web mentions and threat actor interest
   - Media coverage of security incidents
   - Lawsuit and regulatory filing analysis
3. Technology and security posture indicators:
   - Security header analysis across web properties
   - Email security configuration (SPF, DKIM, DMARC)
   - Job posting analysis for security maturity indicators
   - Vendor and partner ecosystem risk indicators
4. Intellectual property exposure:
   - Source code repository exposure (GitHub, GitLab, Bitbucket)
   - Credential and API key leakage
   - Sensitive document exposure (Google dorking)
5. Risk scoring: overall cyber risk profile for M&A decision-making
6. Integration risk: potential security gaps during integration period
```
_Use when: Performing cybersecurity due diligence on acquisition targets._

---

**#200 - Social Engineering Pretext OSINT**

```
Conduct authorized OSINT to assess social engineering exposure for [TARGET_ORGANIZATION]:

Authorization: [CONFIRM_AUTHORIZED_ASSESSMENT]

1. Employee information gathering:
   - Organizational structure mapping from LinkedIn and corporate site
   - Key personnel identification (executives, IT, finance, HR)
   - Email format confirmation and address enumeration
   - Social media presence and oversharing assessment
   - Professional conference attendance and speaking engagements
2. Organizational intelligence:
   - Technology vendor relationships (job postings, case studies, press releases)
   - Internal project names and terminology from public sources
   - Physical office locations and access patterns
   - Recent organizational changes (mergers, layoffs, leadership changes)
3. Pretext development assessment:
   - Vendor impersonation viability (known vendors from public info)
   - Authority-based pretexts (identified leadership and reporting structure)
   - Urgency-based pretexts (identified business deadlines, events)
   - Technical pretexts (identified technology stack and common issues)
4. Exposure risk rating per attack vector (phishing, vishing, physical)
5. Recommendations for reducing social engineering surface
   Note: Adhere to all legal boundaries including GDPR, CCPA, and local privacy laws.
```
_Use when: Assessing social engineering exposure through authorized OSINT._

---

**#201 - Open Source Software Supply Chain OSINT**

```
Conduct supply chain OSINT for open source dependencies used by [TARGET_ORGANIZATION]:

Known technology stack:
[LIST_KNOWN_TECHNOLOGIES]

1. Dependency enumeration:
   - Public repository dependency file analysis (package.json, requirements.txt, go.mod, pom.xml)
   - Container image layer analysis for base images and packages
   - JavaScript bundle analysis for client-side dependencies
   - CDN and third-party script inventory
2. Vulnerability intelligence:
   - Known CVEs in identified dependencies
   - Maintainer compromise risk (typosquatting, maintainer account takeover history)
   - Project health indicators (last commit, maintainer count, bus factor)
   - License compliance risks
3. Supply chain attack indicators:
   - Dependency confusion attack surface
   - Recently added maintainers or ownership transfers
   - Anomalous release patterns
   - Build process integrity (signed releases, reproducible builds)
4. Risk scoring: per-dependency risk matrix (vulnerability, maintainer, popularity)
5. Monitoring: continuous dependency intelligence collection setup
```
_Use when: Assessing open source supply chain risks through OSINT._

---

**#202 - Cloud Infrastructure OSINT**

```
Conduct cloud infrastructure OSINT for [TARGET_ORGANIZATION]:

Known domains: [DOMAIN_LIST]

1. Cloud provider identification:
   - DNS analysis for cloud provider indicators (CNAME, A records)
   - SSL certificate analysis for cloud-issued certificates
   - HTTP response header analysis for cloud service fingerprints
   - IP range mapping to cloud provider ASNs
2. Cloud resource discovery:
   - S3 bucket enumeration (naming pattern analysis, DNS CNAME)
   - Azure Blob storage discovery
   - GCS bucket enumeration
   - Cloud function and API endpoint discovery
3. Cloud configuration intelligence:
   - Public snapshot and AMI identification
   - Exposed Elasticsearch, Kibana, and database instances
   - Publicly accessible Kubernetes dashboards
   - Cloud metadata service exposure indicators
4. Shadow IT detection:
   - Unauthorized SaaS usage indicators
   - Developer personal cloud accounts with corporate data
   - Unmanaged cloud deployments
5. Risk assessment and prioritized findings report
```
_Use when: Mapping cloud infrastructure exposure through OSINT techniques._

---

**#203 - Geopolitical Threat Landscape Monitoring**

```
Design a geopolitical threat landscape monitoring program for [ORGANIZATION] operating in [REGIONS]:

1. Intelligence requirements:
   - Nation-state threat actor activity relevant to [INDUSTRY]
   - Geopolitical events impacting cyber threat landscape
   - Sanctions and regulatory changes affecting operations
   - Hacktivist campaigns targeting [INDUSTRY/REGION]
2. Source configuration:
   - Government advisories (CISA, ENISA, NCSC, CERT teams)
   - Threat intelligence vendor feeds
   - Academic and think tank publications
   - Social media monitoring for emerging threats
   - Dark web monitoring for targeted threat activity
3. Analysis framework:
   - Threat actor capability-intent-opportunity assessment
   - Impact mapping to organizational assets and operations
   - Probability and timeline estimation
   - Scenario development for high-impact threats
4. Reporting:
   - Daily threat brief for SOC (tactical indicators)
   - Weekly strategic brief for security leadership
   - Quarterly geopolitical risk assessment for board
5. Response triggers: threshold criteria for activating heightened security posture
```
_Use when: Building geopolitical cyber threat monitoring capabilities._

---

**#204 - OSINT Automation Pipeline Design**

```
Design an automated OSINT collection and analysis pipeline for [ORGANIZATION]:

Intelligence requirements:
[LIST_PRIORITY_INTELLIGENCE_REQUIREMENTS]

Pipeline components:
1. Collection:
   - Automated domain and certificate monitoring (Certificate Transparency, DNS changes)
   - Continuous credential exposure monitoring (breach databases, paste sites)
   - Social media monitoring for brand mentions and threat indicators
   - Dark web automated crawling and alerting
   - RSS/API integration for vulnerability advisories
2. Processing:
   - Data normalization and deduplication
   - Automated IOC extraction (domains, IPs, hashes, emails)
   - Entity resolution and correlation
   - Confidence scoring for each data point
3. Analysis:
   - Automated alerting rules and thresholds
   - Trend analysis and anomaly detection
   - Cross-source correlation and enrichment
   - Natural language processing for threat report summarization
4. Dissemination:
   - STIX/TAXII formatted output for SIEM/TIP integration
   - Slack/Teams notifications for critical findings
   - Automated report generation (daily/weekly)
5. Tools: SpiderFoot, Recon-ng, theHarvester, Maltego, custom scripts
6. Maintenance: pipeline health monitoring, source freshness checks
```
_Use when: Building automated OSINT collection and processing capabilities._

---

**#205 - Physical Security OSINT Assessment**

```
Conduct physical security OSINT assessment for [TARGET_LOCATION]:

Authorization: [CONFIRM_AUTHORIZED_ASSESSMENT]

1. Location intelligence:
   - Satellite and street-level imagery analysis (Google Earth, Maps)
   - Building layout and access point identification
   - Parking and vehicle access analysis
   - Adjacent building and tenant analysis
2. Security control identification:
   - Visible camera placement and coverage estimation
   - Access control system identification (brand, type)
   - Guard patrol patterns from public observation
   - Barrier and perimeter analysis
3. Operational intelligence:
   - Business hours and shift patterns from public sources
   - Delivery and vendor access patterns
   - Employee badge visibility and tailgating risk
   - Visitor management process indicators
4. Digital-physical convergence:
   - WiFi network presence near facility (WiGLE data)
   - Bluetooth and IoT device detection potential
   - Physical network access points (external ports, demarc)
5. Social intelligence:
   - Employee social media posts with location data
   - Public events and open-door occasions
   - Construction or renovation activity
6. Risk assessment: physical intrusion path analysis with difficulty ratings
```
_Use when: Assessing physical security posture through authorized OSINT._

---

## 6. GRC / Compliance

### Policy Development

**#206 - Information Security Policy Framework**

```
Draft a comprehensive information security policy framework for [ORGANIZATION]:

Context:
- Size: [EMPLOYEE_COUNT]
- Industry: [INDUSTRY]
- Compliance requirements: [ISO_27001/NIST/SOC2/HIPAA/PCI/GDPR]
- Current maturity: [INITIAL/DEVELOPING/DEFINED/MANAGED/OPTIMIZING]

Framework:
1. Information Security Policy (umbrella policy)
2. Acceptable Use Policy
3. Access Control Policy
4. Data Classification and Handling Policy
5. Incident Response Policy
6. Business Continuity and Disaster Recovery Policy
7. Third-Party Risk Management Policy
8. Change Management Policy
9. For each policy: purpose, scope, key requirements, roles, review cycle
10. Policy hierarchy and relationship diagram
11. Implementation roadmap and training requirements
```
_Use when: Building or restructuring the security policy framework._

---

**#207 - ISO 27001 Statement of Applicability Generator**

```
Generate an ISO 27001:2022 Statement of Applicability (SoA) for [ORGANIZATION]:

Context:
- Scope: [ISMS_SCOPE]
- Excluded controls: [JUSTIFIED_EXCLUSIONS]
- Existing controls: [WHAT'S_ALREADY_IMPLEMENTED]

For each Annex A control (A.5 through A.8):
1. Control reference and name
2. Applicability: Yes/No with justification for exclusions
3. Implementation status: Implemented / Partially / Planned / Not implemented
4. Implementation description (one paragraph)
5. Evidence references
6. Control owner
7. Gap notes for partially or not-implemented controls
8. Priority for remediation (if gap exists)
```
_Use when: Creating or updating the ISO 27001 Statement of Applicability._

---

**#208 - NIST Cybersecurity Framework Assessment**

```
Conduct a NIST CSF 2.0 assessment for [ORGANIZATION]:

Current state information:
[DESCRIBE_CURRENT_SECURITY_PROGRAM]

For each function (Govern, Identify, Protect, Detect, Respond, Recover):
1. Category-level maturity assessment (Tier 1-4)
2. Current profile: what's implemented today
3. Target profile: where we need to be (based on [RISK_APPETITE])
4. Gaps between current and target
5. Prioritized actions to close gaps
6. Quick wins per function
7. Resource requirements (budget, people, technology)
8. 12-month implementation roadmap
9. Metrics to track progress per function
```
_Use when: Conducting NIST CSF assessments or maturity evaluations._

---

**#209 - Data Classification Policy**

```
Draft a data classification policy for [ORGANIZATION]:

Context:
- Data types: [LIST_KEY_DATA_TYPES]
- Regulatory requirements: [GDPR/HIPAA/PCI/CCPA/etc.]
- Current classification: [EXISTS/NONE]

Policy:
1. Classification levels: Public, Internal, Confidential, Restricted (customize names)
2. Definition of each level with clear criteria
3. Examples of data for each level
4. Handling requirements per level:
   - Storage (encryption, access controls)
   - Transmission (email, file sharing, physical)
   - Retention and disposal
   - Sharing with third parties
5. Labeling requirements
6. Classification responsibilities (data owners, custodians, users)
7. Reclassification procedures
8. Exceptions process
9. Enforcement and monitoring
10. Training requirements
```
_Use when: Creating or updating data classification standards._

---

**#210 - Privacy Impact Assessment Template**

```
Create a Privacy Impact Assessment (PIA) template for [PROJECT/SYSTEM]:

System description: [WHAT_IT_DOES]
Personal data processed: [DATA_TYPES]
Data subjects: [WHO: employees, customers, public]
Legal basis: [CONSENT/LEGITIMATE_INTEREST/CONTRACT/LEGAL_OBLIGATION]

PIA sections:
1. Project description and data flow diagram
2. Personal data inventory: what data, from whom, for what purpose
3. Legal basis assessment per data type
4. Necessity and proportionality assessment
5. Data subject rights implementation
6. Data protection measures (technical and organizational)
7. Third-party data sharing and transfer mechanisms
8. Data retention and deletion procedures
9. Risk assessment: likelihood and impact of privacy harms
10. Mitigation measures for identified risks
11. DPIA requirement determination (under GDPR Article 35)
12. Recommendations and approval sign-off
```
_Use when: Conducting privacy assessments for new projects or systems._

---

**#211 - GDPR Compliance Checklist**

```
Create a GDPR compliance checklist for [ORGANIZATION]:

Context:
- EU presence: [DESCRIPTION]
- Data processing activities: [OVERVIEW]
- Current compliance status: [ASSESSMENT]

Checklist organized by GDPR articles:
1. Lawful basis documentation (Art. 6) per processing activity
2. Data processing records (Art. 30): complete ROPA template
3. Data subject rights procedures (Art. 15-22): SAR, erasure, portability
4. Consent management (Art. 7): collection, storage, withdrawal
5. Data protection by design (Art. 25): technical and organizational measures
6. DPIA procedures (Art. 35): when and how to conduct
7. Data breach notification (Art. 33-34): procedures and templates
8. DPO appointment assessment (Art. 37-39)
9. International transfer mechanisms (Art. 44-49): SCCs, adequacy
10. Third-party processor agreements (Art. 28): required clauses
11. For each: status, responsible party, evidence required, deadline
```
_Use when: Assessing and improving GDPR compliance posture._

---

**#212 - Third-Party Risk Management Policy**

```
Draft a third-party risk management policy for [ORGANIZATION]:

Context:
- Number of third parties: [ESTIMATE]
- Critical third parties: [LIST]
- Industry requirements: [REGULATIONS]

Policy:
1. Third-party classification: critical, high, medium, low risk tiers
2. Due diligence requirements per tier
3. Security questionnaire framework (SIG, CAIQ, custom)
4. Minimum security requirements per tier
5. Contractual security requirements and SLA expectations
6. Ongoing monitoring approach per tier
7. Incident notification requirements
8. Right to audit clauses
9. Fourth-party (subcontractor) risk management
10. Offboarding and data return/destruction procedures
11. Escalation path for non-compliant vendors
12. Annual review and reassessment process
```
_Use when: Establishing or maturing third-party risk management._

---

### Risk Assessment

**#213 - Risk Assessment Workshop Facilitation Guide**

```
Create a facilitation guide for a cybersecurity risk assessment workshop at [ORGANIZATION]:

Scope: [ASSESSMENT_SCOPE]
Participants: [DEPARTMENT_HEADS, IT_LEADERSHIP, SECURITY_TEAM]
Duration: [HALF_DAY/FULL_DAY]
Methodology: [ISO_27005/NIST_800-30/FAIR/CUSTOM]

Guide:
1. Pre-workshop preparation: data gathering, participant briefing
2. Opening: objectives, scope, methodology overview (30 min)
3. Asset and process identification exercise
4. Threat identification exercise (per asset group)
5. Vulnerability and control assessment
6. Likelihood and impact scoring (calibrated scales)
7. Risk calculation and heat map creation
8. Risk treatment discussion: accept, mitigate, transfer, avoid
9. Prioritization exercise for treatment plans
10. Action item capture with owners and deadlines
11. Workshop materials: templates, scales, voting tools
12. Post-workshop deliverable outline
```
_Use when: Facilitating organizational risk assessment workshops._

---

**#214 - Quantitative Risk Analysis (FAIR)**

```
Conduct a FAIR (Factor Analysis of Information Risk) assessment for:

Risk scenario: [DESCRIBE_SCENARIO]
Asset at risk: [ASSET]
Threat community: [THREAT_ACTOR_TYPE]

FAIR analysis:
1. Loss Event Frequency (LEF):
   - Threat Event Frequency: how often does this threat act against this asset?
   - Vulnerability: given a threat event, how likely is it to succeed?
2. Loss Magnitude (LM):
   - Primary loss: productivity, response cost, replacement cost
   - Secondary loss: regulatory fines, reputation damage, legal liability
3. Data sources for estimates (industry benchmarks, internal data)
4. Monte Carlo simulation parameters (min, most likely, max for each factor)
5. Expected annual loss range (5th to 95th percentile)
6. Risk treatment ROI analysis: cost of control vs. risk reduction
7. Comparison with alternative risk scenarios
8. Executive summary with dollar-denominated risk statement
```
_Use when: Quantifying cyber risk in financial terms for business decision-making._

---

**#215 - Business Impact Analysis (BIA) for Cybersecurity**

```
Conduct a Business Impact Analysis for [ORGANIZATION]'s critical processes:

Processes in scope:
[LIST_CRITICAL_BUSINESS_PROCESSES]

For each process:
1. Process description and owner
2. Supporting IT systems and dependencies
3. Impact categories: financial, operational, regulatory, reputational
4. Maximum Tolerable Downtime (MTD)
5. Recovery Time Objective (RTO) and Recovery Point Objective (RPO)
6. Impact over time graph (hour 1, 4, 8, 24, 48, 1 week)
7. Workaround / manual fallback availability
8. Interdependencies with other processes
9. Peak periods and seasonal considerations
10. Priority ranking for recovery
11. Resource requirements for recovery (people, technology, facilities)
12. Gap analysis: current recovery capability vs. required
```
_Use when: Conducting BIA for business continuity and disaster recovery planning._

---

**#216 - Cyber Insurance Application Support**

```
Prepare supporting documentation for a cyber insurance application for [ORGANIZATION]:

Application areas:
1. Security program overview: governance, team, budget
2. Technical controls summary: endpoint, network, cloud, identity
3. Incident response capabilities: team, retainer, playbooks, testing frequency
4. Vulnerability management program: scanning, patching SLAs, metrics
5. Access control and identity management: MFA coverage, PAM, SSO
6. Data protection: encryption, classification, DLP
7. Backup and recovery: strategy, testing, ransomware resilience
8. Third-party risk management program
9. Security awareness training program
10. Previous incident history (last 3 years)
11. Compliance certifications and audit results
12. Talking points for underwriter questions

For each area: current state summary, supporting evidence, and improvement plans.
```
_Use when: Preparing for cyber insurance applications or renewals._

---

**#217 - Risk Register Template**

```
Create a cybersecurity risk register for [ORGANIZATION]:

Template columns:
1. Risk ID and title
2. Risk description: threat, vulnerability, asset, impact
3. Risk category: technical, operational, compliance, strategic
4. Inherent risk: likelihood (1-5) x impact (1-5) = risk score
5. Existing controls and their effectiveness
6. Residual risk: adjusted likelihood x impact
7. Risk owner and treatment owner
8. Treatment plan: accept, mitigate, transfer, avoid
9. Treatment actions with deadlines
10. Status: open, in treatment, accepted, closed
11. Last review date and next review date
12. Trend: increasing, stable, decreasing

Populate with 10 common cybersecurity risks for [INDUSTRY] as examples.
```
_Use when: Establishing or refreshing the cybersecurity risk register._

---

**#218 - Supply Chain Risk Assessment Framework**

```
Create a supply chain risk assessment framework for [ORGANIZATION]:

Supply chain context:
- Critical vendors: [COUNT]
- Technology dependencies: [KEY_DEPENDENCIES]
- Industry: [INDUSTRY]

Framework:
1. Supply chain threat taxonomy (compromise, disruption, failure)
2. Vendor criticality scoring methodology
3. Risk assessment questionnaire per vendor tier
4. Technical assessment requirements (penetration tests, SOC 2 reports)
5. Continuous monitoring indicators per vendor
6. Concentration risk analysis (single points of failure)
7. Software Bill of Materials (SBOM) requirements
8. Incident notification and response coordination requirements
9. Exit strategy and business continuity for critical vendors
10. Annual reassessment process and cadence
```
_Use when: Building supply chain risk management capabilities._

---

### Audit & Compliance

**#219 - SOC 2 Type II Audit Preparation Checklist**

```
Create a SOC 2 Type II audit preparation checklist for [ORGANIZATION]:

Trust Services Criteria in scope: [SECURITY/AVAILABILITY/PROCESSING_INTEGRITY/CONFIDENTIALITY/PRIVACY]
Audit period: [DATE_RANGE]
Auditor: [FIRM_NAME]

Checklist:
1. Pre-audit:
   - Control documentation inventory and completeness check
   - Evidence collection calendar (what's needed, when, from whom)
   - Gap self-assessment against criteria
   - Remediation of known gaps before audit period

2. Per criterion: specific controls, evidence requirements, and responsible parties

3. Operational:
   - Policy review currency (all policies current and approved)
   - Access reviews completion status
   - Change management ticket completeness
   - Incident management records
   - Vulnerability management evidence
   - Business continuity testing evidence

4. Logistics: auditor access, interview scheduling, document sharing platform
```
_Use when: Preparing for SOC 2 audit engagements._

---

**#220 - PCI DSS v4.0 Gap Assessment**

```
Conduct a PCI DSS v4.0 gap assessment for [ORGANIZATION]:

Cardholder data environment:
- Processing method: [E-COMMERCE/POS/MOTO/PROCESSOR]
- SAQ type: [SAQ_TYPE] or [ROC]
- Current PCI status: [COMPLIANT/IN_PROGRESS/NEW]

For each applicable requirement (1-12):
1. Requirement summary and intent
2. Current implementation status: compliant / partial / non-compliant
3. Evidence available
4. Gap description for non-compliant items
5. New v4.0 requirements: implementation status for requirements that became mandatory March 2025 (formerly future-dated)
6. Remediation plan with effort estimate
7. Compensating control options if direct compliance isn't feasible
8. Testing procedures for validation
9. Priority: critical path vs. parallel workstream
10. Overall compliance percentage and target date
```
_Use when: Assessing PCI DSS v4.0 compliance posture._

---

**#221 - HIPAA Security Rule Compliance Review**

```
Review HIPAA Security Rule compliance for [ORGANIZATION]:

Healthcare context:
- Entity type: [COVERED_ENTITY/BUSINESS_ASSOCIATE]
- ePHI systems: [LIST]
- Current safeguards: [OVERVIEW]

Review each safeguard category:
1. Administrative Safeguards (§164.308):
   - Risk analysis and management
   - Workforce security and training
   - Information access management
   - Contingency plan
   - Evaluation

2. Physical Safeguards (§164.310):
   - Facility access controls
   - Workstation and device security

3. Technical Safeguards (§164.312):
   - Access controls and audit controls
   - Integrity and transmission security

For each: required vs. addressable, current status, gap, remediation action, evidence needed.
```
_Use when: Assessing HIPAA Security Rule compliance._

---

**#222 - Security Compliance Evidence Collection Guide**

```
Create an evidence collection guide for [COMPLIANCE_FRAMEWORK] audit at [ORGANIZATION]:

Audit scope: [SCOPE]
Audit period: [DATE_RANGE]

For each control area:
1. Control description
2. Evidence type required (document, screenshot, configuration, report, interview)
3. Specific evidence items to collect
4. Source system for each evidence item
5. Responsible person for collection
6. Collection deadline
7. Quality criteria (what makes evidence acceptable)
8. Common auditor questions and how to answer
9. Evidence naming and organization convention
10. Secure storage requirements for evidence
11. Evidence freshness requirements (how recent is acceptable)
```
_Use when: Organizing evidence collection for compliance audits._

---

**#223 - Regulatory Change Impact Assessment**

```
Assess the impact of [NEW_REGULATION_OR_AMENDMENT] on [ORGANIZATION]:

Regulation details:
- Name: [REGULATION_NAME]
- Effective date: [DATE]
- Key requirements: [SUMMARY]

Impact assessment:
1. Applicability analysis: does this regulation apply to us, and to what extent?
2. Current compliance status against new requirements
3. Gap analysis: what new controls or processes are needed?
4. Data processing impact: changes to how we handle data
5. Technology impact: new tools or configurations needed
6. Process impact: new or modified processes
7. People impact: training, hiring, role changes
8. Third-party impact: vendor requirements and contract updates
9. Timeline: what must be done by when?
10. Budget estimate for compliance
11. Risk of non-compliance: penalties and enforcement history
12. Recommended action plan with milestones
```
_Use when: Assessing impact of new or changed regulations._

---

**#224 - Internal Audit Cybersecurity Scope**

```
Define the scope for an internal cybersecurity audit at [ORGANIZATION]:

Audit area: [AREA: Access Management / Vulnerability Management / Incident Response / etc.]
Previous audit findings: [LIST_IF_AVAILABLE]

Scope document:
1. Audit objective and purpose
2. Scope boundaries: systems, processes, and timeframe
3. Audit criteria: standards, policies, and procedures to audit against
4. Audit methodology: interviews, document review, technical testing
5. Sample selection strategy
6. Control testing procedures (detailed test steps)
7. Audit team and resource requirements
8. Timeline and milestones
9. Deliverables: report format, rating criteria, response timeline
10. Stakeholder communication plan
11. Conflict of interest declarations
```
_Use when: Planning internal cybersecurity audits._

---

**#225 - Vendor Security Assessment Questionnaire**

```
Create a vendor security assessment questionnaire for [VENDOR_TIER: Critical/High/Standard]:

Data shared with vendor: [DATA_TYPES]
Access to systems: [YES_NO_DESCRIPTION]

Questionnaire sections:
1. Organization and governance: security team, CISO, certifications
2. Access control: authentication, authorization, privileged access
3. Data protection: encryption, classification, handling, retention
4. Network security: segmentation, monitoring, firewall management
5. Endpoint security: EDR, patching, hardening
6. Vulnerability management: scanning, remediation SLAs
7. Incident response: procedures, notification SLAs, past incidents
8. Business continuity: DR capabilities, RPO/RTO
9. Third-party management: subcontractor oversight
10. Compliance: certifications, audit reports, regulatory compliance
11. Cloud security (if applicable): shared responsibility, configuration
12. Scoring rubric per section with pass/fail criteria
```
_Use when: Evaluating vendor security posture._

---

**#226 - Security Exception Request Process**

```
Design a security exception/risk acceptance process for [ORGANIZATION]:

Process:
1. Exception request form template:
   - Policy/standard being excepted
   - Business justification
   - Compensating controls proposed
   - Duration of exception
   - Risk assessment by requestor
2. Risk assessment by security team (using standard methodology)
3. Approval authority matrix by risk level
4. Condition requirements (monitoring, compensating controls, review date)
5. Documentation and tracking in risk register
6. Periodic review cadence (quarterly for high, annually for low)
7. Revocation criteria (when does the exception automatically expire?)
8. Reporting: dashboard for active exceptions by team/category
9. Escalation for overdue reviews or expired exceptions
```
_Use when: Establishing a formal process for security policy exceptions._

---

**#227 - Compliance Dashboard Design**

```
Design a compliance dashboard for [ORGANIZATION] tracking [FRAMEWORKS]:

Frameworks: [ISO_27001/SOC2/PCI/HIPAA/GDPR/NIST/etc.]

Dashboard:
1. Overall compliance score per framework (percentage)
2. Control status breakdown: compliant, partially compliant, non-compliant, not assessed
3. Overdue items: controls past their remediation deadline
4. Upcoming deadlines: certifications, audits, renewals
5. Trend: compliance posture over the last 12 months
6. Risk distribution: heat map of residual risks
7. Evidence collection status: percentage complete for next audit
8. Third-party compliance: vendor assessment status
9. Training compliance: percentage of employees with current training
10. Drill-down: per-department or per-system compliance view
11. Data sources for each metric
12. Refresh frequency and automation approach
```
_Use when: Building compliance monitoring dashboards._

---

**#228 - Security Awareness Training Compliance Report**

```
Generate a security awareness training compliance report for [ORGANIZATION]:

Training program details:
- Platform: [TRAINING_PLATFORM]
- Required modules: [LIST]
- Completion deadline: [DATE]
- Phishing simulation frequency: [MONTHLY/QUARTERLY]

Report:
1. Overall completion rate (target: [TARGET]%)
2. Completion by department (table)
3. Overdue users: list by manager for escalation
4. Module-specific completion rates
5. Knowledge assessment scores by department
6. Phishing simulation trends (click rate, report rate)
7. Repeat offenders: users failing multiple simulations
8. New hire training timeliness
9. Comparison with previous period
10. Recommendations for improvement
11. Executive summary for CISO
```
_Use when: Reporting on security training compliance._

---

**#229 - Board-Level Cybersecurity Report**

```
Create a board-level cybersecurity report for [ORGANIZATION]'s [QUARTER/YEAR]:

Context:
- Security budget: [AMOUNT]
- Key initiatives: [LIST]
- Major incidents: [IF_ANY]
- Industry benchmarks: [AVAILABLE_DATA]

Report (max 5 pages):
1. Executive summary: security posture in 3 bullet points
2. Risk dashboard: top 5 risks with trend arrows
3. Key metrics: MTTD, MTTR, incidents by severity, compliance status
4. Investment effectiveness: what security investments delivered
5. Threat landscape: industry-specific threats in business language
6. Regulatory update: compliance status and upcoming requirements
7. Key initiatives: progress against security roadmap
8. Incidents: summary of significant events (impact, response, lessons)
9. Resource assessment: team capacity vs. demand
10. Budget request or forecast (if applicable)
11. Recommended actions requiring board input/approval
```
_Use when: Preparing cybersecurity reports for board of directors._

---

**#230 - Security Policy Review and Update Process**

```
Design a security policy review and update process for [ORGANIZATION]:

Current policy inventory: [COUNT] policies
Review status: [LAST_REVIEW_DATES]

Process:
1. Policy inventory with metadata (owner, last review, next review, framework mapping)
2. Annual review calendar: stagger reviews across the year
3. Review trigger events (regulatory change, incident, reorg, technology change)
4. Review process steps: draft, SME review, legal review, approval, publish
5. Stakeholder approval workflow per policy type
6. Version control and change tracking requirements
7. Communication plan when policies change
8. Employee acknowledgment tracking
9. Exception process for policies pending update
10. Metrics: percentage of policies current, average age, overdue count
```
_Use when: Establishing systematic policy review and maintenance._

---

**#231 - Incident Notification Regulatory Mapping**

```
Map incident notification requirements across applicable regulations for [ORGANIZATION]:

Applicable regulations: [LIST: GDPR, HIPAA, PCI, state breach laws, SEC, NIS2, etc.]

For each regulation:
1. What constitutes a notifiable incident
2. Notification timeline (72 hours, 60 days, etc.)
3. Who must be notified (regulator, data subjects, other)
4. Required content in notification
5. Notification method (portal, letter, email)
6. Record-keeping requirements
7. Penalties for non-notification
8. Exceptions (risk assessment showing no harm)
9. Cross-reference with other notification obligations
10. Create a single incident decision tree that maps any incident to all applicable notification requirements
```
_Use when: Mapping incident notification obligations across regulations._

---

**#232 - Security Budget Allocation Framework**

```
Create a security budget allocation framework for [ORGANIZATION]:

Total security budget: [AMOUNT]
Current allocation: [BREAKDOWN_IF_KNOWN]
Key priorities: [LIST]

Framework:
1. Budget categories: people, technology, services, training, compliance
2. Allocation methodology: risk-based prioritization
3. Mandatory spending: compliance, license renewals, existing contracts
4. Discretionary spending: new investments, improvements
5. ROI evaluation criteria for new investments
6. Benchmarking against industry spending (by percentage of IT budget)
7. Multi-year planning: capital vs. operational expenses
8. Contingency budget for incidents and emergencies
9. Make vs. buy analysis framework
10. Budget tracking and reallocation process
11. Value demonstration metrics for each investment
```
_Use when: Planning and justifying security budget allocation._

---

**#233 - Security Maturity Assessment Report**

```
Conduct a cybersecurity maturity assessment for [ORGANIZATION] using [CMM/NIST/C2M2/custom]:

Domains to assess:
1. Governance and strategy
2. Risk management
3. Asset management
4. Identity and access management
5. Threat and vulnerability management
6. Security monitoring and incident response
7. Data protection
8. Supply chain security
9. Resilience and recovery
10. Security culture and awareness

For each domain:
- Current maturity level (1-5 with descriptors)
- Evidence supporting the rating
- Target maturity level
- Gap description
- Improvement actions ranked by effort and impact
- Timeline to reach target
- Overall maturity score and peer comparison
```
_Use when: Baseline or periodic cybersecurity maturity assessments._

---

**#234 - NIS2 Directive Compliance Assessment**

```
Conduct a NIS2 Directive compliance assessment for [ORGANIZATION] operating in [EU_MEMBER_STATES]:

Entity classification:
- Sector: [ENERGY/TRANSPORT/BANKING/HEALTH/DIGITAL_INFRASTRUCTURE/ICT_SERVICE/PUBLIC_ADMIN/OTHER]
- Classification: [ESSENTIAL/IMPORTANT]
- Size: [EMPLOYEES] employees, [REVENUE] annual turnover

Assessment areas:
1. Governance (Article 20):
   - Management body cybersecurity training and accountability
   - Risk management measures approval and oversight
   - Personal liability awareness for management
2. Risk management measures (Article 21):
   - Policies on risk analysis and information system security
   - Incident handling procedures and capabilities
   - Business continuity and crisis management
   - Supply chain security including third-party assessments
   - Security in network and information systems acquisition, development, maintenance
   - Vulnerability handling and disclosure
   - Cybersecurity hygiene practices and training
   - Cryptography and encryption policies
   - Human resources security and access control
   - Multi-factor authentication and secure communications
3. Incident reporting (Article 23):
   - 24-hour early warning capability
   - 72-hour incident notification process
   - Final report within one month
   - Notification to affected service recipients
4. Supervision and enforcement:
   - Audit readiness for [ESSENTIAL: proactive / IMPORTANT: reactive] supervision
   - Penalty exposure calculation (max 10M EUR or 2% turnover for essential entities)
5. Gap analysis with remediation roadmap and priority ranking
```
_Use when: Assessing compliance with the EU NIS2 Directive._

---

**#235 - DORA Compliance Assessment for Financial Entities**

```
Conduct a DORA (Digital Operational Resilience Act) compliance assessment for [FINANCIAL_ENTITY]:

Entity type: [CREDIT_INSTITUTION/INVESTMENT_FIRM/INSURANCE/PAYMENT_PROVIDER/CRYPTO_ASSET_PROVIDER/OTHER]

Assessment areas:
1. ICT Risk Management Framework (Chapter II):
   - ICT risk management governance structure
   - ICT risk management framework documentation
   - Digital operational resilience strategy
   - ICT systems inventory and classification
   - Protection and prevention measures
   - Detection mechanisms for anomalous activities
   - Response and recovery plans with RTO/RPO targets
   - Learning and evolving from incidents
2. ICT-Related Incident Management (Chapter III):
   - Incident classification methodology (major vs non-major criteria)
   - Major incident reporting to competent authorities
   - Voluntary notification of significant cyber threats
   - Communication plans for clients and counterparts
3. Digital Operational Resilience Testing (Chapter IV):
   - Basic testing: vulnerability scanning, network security, gap analysis
   - Advanced testing: Threat-Led Penetration Testing (TLPT) requirements
   - Testing frequency and scope requirements
   - Tester qualification and independence requirements
4. ICT Third-Party Risk Management (Chapter V):
   - Register of all ICT third-party service providers
   - Contractual arrangement requirements (exit strategies, audit rights, sub-outsourcing)
   - Concentration risk assessment for critical ICT third parties
   - Oversight framework compliance
5. Information Sharing (Chapter VI):
   - Cyber threat intelligence sharing arrangements
   - Information exchange participation
6. Remediation roadmap with regulatory deadlines
```
_Use when: Assessing compliance with EU DORA regulation for financial sector entities._

---

**#236 - SEC Cyber Incident Disclosure Rules Compliance**

```
Assess compliance with SEC cybersecurity disclosure rules for [PUBLIC_COMPANY]:

Regulatory basis: SEC Final Rules (S7-09-22), effective December 2023

1. Incident Disclosure (Form 8-K, Item 1.05):
   - Materiality determination process and framework
   - 4-business-day disclosure timeline from materiality determination
   - Required disclosure content: nature, scope, timing, impact
   - Aggregation analysis: related incidents that are material in aggregate
   - Attorney General delay request process for national security/public safety
   - Internal communication and escalation for materiality assessment
2. Annual Disclosure (Form 10-K, Regulation S-K Item 106):
   - Risk management and strategy description
   - Board of directors oversight of cybersecurity risk
   - Management's role and expertise in cybersecurity
   - Third-party assessor/consultant engagement disclosure
   - Integration with overall risk management program
3. Process and governance:
   - Materiality assessment committee composition and charter
   - Incident-to-disclosure workflow with timeline tracking
   - Legal privilege considerations during incident investigation
   - Disclosure controls and procedures for cybersecurity
   - Inline XBRL tagging compliance for cybersecurity disclosures
4. Gap analysis: current vs required disclosure capabilities
5. Template: draft 8-K language for common incident types
```
_Use when: Ensuring compliance with SEC cybersecurity incident disclosure requirements._

---

**#237 - Post-Quantum Cryptography Readiness Assessment**

```
Assess post-quantum cryptography (PQC) readiness for [ORGANIZATION]:

1. Cryptographic inventory:
   - Public key cryptography usage audit (RSA, ECC, DH across all systems)
   - Certificate inventory: algorithms, key sizes, expiration dates
   - VPN and TLS configuration audit for quantum-vulnerable ciphers
   - Code signing and software update mechanisms
   - Key management infrastructure (PKI, HSM, KMS) assessment
   - Data at rest encryption algorithms in use
2. Risk assessment:
   - "Harvest now, decrypt later" exposure: data with long confidentiality requirements
   - Regulatory requirements for PQC migration ([INDUSTRY]-specific)
   - Timeline estimation: when quantum computing threatens current cryptography
   - Critical data classification by quantum vulnerability urgency
3. NIST PQC standards readiness:
   - ML-KEM (FIPS 203) implementation readiness for key encapsulation
   - ML-DSA (FIPS 204) implementation readiness for digital signatures
   - SLH-DSA (FIPS 205) readiness for stateless hash-based signatures
   - Hybrid approach evaluation (classical + PQC during transition)
4. Migration roadmap:
   - Priority system ranking (highest-sensitivity first)
   - Vendor support assessment for PQC algorithms
   - Testing plan for PQC performance impact
   - Budget estimation for cryptographic migration
   - Timeline: phased migration with milestones
5. Crypto-agility: architecture changes to enable faster future algorithm transitions
```
_Use when: Planning migration to post-quantum cryptographic algorithms._

---

**#238 - Supply Chain Security and SBOM Analysis Framework**

```
Design a supply chain security program with SBOM analysis for [ORGANIZATION]:

1. SBOM program establishment:
   - SBOM generation for internal software (CycloneDX or SPDX format)
   - SBOM collection requirements for vendor/third-party software
   - SBOM ingestion and storage infrastructure
   - Automated SBOM analysis pipeline
2. Vulnerability management through SBOM:
   - Continuous vulnerability matching against NVD, OSV, GitHub Advisory
   - VEX (Vulnerability Exploitability eXchange) document creation and consumption
   - Dependency tree analysis for transitive vulnerability impact
   - End-of-life component identification and tracking
3. Supply chain risk assessment:
   - Critical supplier identification and tiering
   - Vendor security assessment integration with SBOM data
   - Open source component risk scoring (maintainer health, funding, fork risk)
   - License compliance verification
4. Supply chain attack detection:
   - Dependency confusion monitoring
   - Unexpected dependency changes between builds
   - Typosquatting detection for package names
   - Build provenance verification (SLSA framework)
   - Signed package verification
5. Regulatory alignment:
   - EO 14028 SBOM requirements (US federal)
   - EU CRA (Cyber Resilience Act) SBOM obligations
   - FDA SBOM requirements for medical devices
   - Industry-specific supply chain security standards
6. Metrics: SBOM coverage, vulnerability backlog, mean time to remediate supply chain issues
```
_Use when: Building software supply chain security capabilities with SBOM analysis._

---

**#239 - CMMC Assessment Preparation**

```
Prepare for CMMC (Cybersecurity Maturity Model Certification) assessment at [ORGANIZATION]:

Target level: [LEVEL_1/LEVEL_2/LEVEL_3]
CUI categories handled: [LIST]
Current compliance: [NIST_800_171_SCORE/SPRS_SCORE]

Assessment preparation:
1. Scoping:
   - CUI boundary definition and data flow mapping
   - In-scope assets, systems, and networks
   - Shared services and cloud service considerations
   - Out-of-scope justification documentation
2. Practice implementation (Level 2 - 110 practices):
   - Access Control (AC): [STATUS per practice]
   - Awareness and Training (AT): [STATUS]
   - Audit and Accountability (AU): [STATUS]
   - Configuration Management (CM): [STATUS]
   - Identification and Authentication (IA): [STATUS]
   - Incident Response (IR): [STATUS]
   - Maintenance (MA): [STATUS]
   - Media Protection (MP): [STATUS]
   - Personnel Security (PS): [STATUS]
   - Physical Protection (PE): [STATUS]
   - Risk Assessment (RA): [STATUS]
   - Security Assessment (CA): [STATUS]
   - System and Communications Protection (SC): [STATUS]
   - System and Information Integrity (SI): [STATUS]
3. Documentation:
   - System Security Plan (SSP) completeness review
   - Plan of Action and Milestones (POA&M) status
   - Policy and procedure documentation per domain
   - Evidence collection and organization
4. Assessment readiness:
   - Mock assessment using CMMC assessment guide
   - Assessor interview preparation for key personnel
   - Evidence presentation methodology
5. Timeline: gap remediation schedule aligned with contract requirements
```
_Use when: Preparing for CMMC certification assessment._

---

**#240 - Cybersecurity Regulatory Landscape Tracker**

```
Create a cybersecurity regulatory tracking framework for [ORGANIZATION] operating in [JURISDICTIONS]:

1. Regulatory inventory:
   - Current regulations applicable by jurisdiction
   - Upcoming regulations with effective dates and transition periods
   - Industry-specific requirements (financial, healthcare, critical infrastructure, defense)
   - Cross-border data transfer requirements
2. Regulation-by-regulation tracking:
   For each regulation:
   - Regulation name, jurisdiction, effective date
   - Compliance status: [COMPLIANT/PARTIALLY/NON-COMPLIANT/NOT_ASSESSED]
   - Key requirements summary
   - Responsible owner within organization
   - Next assessment date
   - Gap count and remediation progress
3. Change management:
   - Regulatory change monitoring sources and frequency
   - Impact assessment template for new/changed regulations
   - Compliance implementation workflow
   - Board and management notification triggers
4. Cross-regulation mapping:
   - Common control identification across regulations
   - Unified control framework to reduce compliance duplication
   - Evidence reuse strategy across audits
5. Reporting: quarterly regulatory compliance dashboard for leadership
```
_Use when: Managing compliance across multiple cybersecurity regulations._

---

**#241 - Privacy Engineering Assessment**

```
Assess privacy engineering practices for [ORGANIZATION] developing [PRODUCT/SERVICE]:

Privacy regulations in scope: [GDPR/CCPA/LGPD/PIPA/OTHER]

1. Privacy by design:
   - Data minimization: is only necessary data collected?
   - Purpose limitation: are data uses clearly defined and constrained?
   - Storage limitation: are retention periods enforced?
   - Privacy-preserving architecture patterns in use
   - Default privacy settings assessment
2. Technical controls:
   - Anonymization and pseudonymization implementation review
   - Consent management platform assessment
   - Data subject rights automation (access, deletion, portability)
   - Privacy-preserving analytics (differential privacy, federated learning)
   - Cross-border data transfer mechanisms (SCCs, adequacy decisions)
3. Data protection impact assessment:
   - High-risk processing activity identification
   - DPIA methodology and documentation completeness
   - Residual risk assessment and mitigation
4. Third-party data processing:
   - Processor agreement compliance review
   - Sub-processor management and notification
   - International transfer impact assessments
5. Incident response:
   - Breach notification process per regulation (72-hour GDPR, varies by US state)
   - Data subject notification criteria and templates
   - Regulatory authority notification procedures
6. Metrics: privacy request SLA compliance, DPIA completion rate, breach response time
```
_Use when: Evaluating privacy engineering practices and regulatory compliance._

---

**#242 - Cyber Risk Quantification for Board Reporting**

```
Develop a cyber risk quantification model for board-level reporting at [ORGANIZATION]:

Industry: [INDUSTRY]
Annual revenue: [REVENUE]
Previous incidents: [INCIDENT_HISTORY]

1. Risk scenario development:
   - Top 10 cyber risk scenarios by potential impact
   - Per scenario: threat actor, attack vector, affected assets, business impact
   - Probability estimation using historical data and threat intelligence
   - Financial impact modeling (direct costs, regulatory fines, reputation damage, litigation)
2. Quantification methodology:
   - FAIR (Factor Analysis of Information Risk) application per scenario
   - Monte Carlo simulation for loss distribution
   - Annual Loss Expectancy (ALE) calculation per scenario
   - Aggregate risk exposure calculation
3. Risk appetite alignment:
   - Board-defined risk appetite statement mapping
   - Risk tolerance thresholds per risk category
   - Scenarios exceeding risk appetite identification
   - Recommended risk treatment (mitigate, transfer, accept, avoid)
4. Investment analysis:
   - Security control effectiveness modeling
   - Cost-benefit analysis for proposed security investments
   - ROI calculation for risk reduction initiatives
   - Insurance vs control investment trade-off analysis
5. Board presentation:
   - Executive summary dashboard (risk heatmap, trend, vs appetite)
   - Scenario cards with financial impact ranges (90% confidence interval)
   - Comparison to industry benchmarks and peers
   - Recommended actions with investment requirements
```
_Use when: Quantifying cyber risk for board-level communication and decision-making._

---

**#243 - International Data Transfer Compliance Framework**

```
Design an international data transfer compliance framework for [ORGANIZATION]:

Data flows:
- Origin countries: [LIST]
- Destination countries: [LIST]
- Data categories: [PERSONAL/SENSITIVE/HEALTH/FINANCIAL/EMPLOYEE]
- Transfer mechanisms: [LIST_SERVICES_AND_METHODS]

Framework components:
1. Transfer mapping:
   - Complete data flow inventory with classification
   - Third-party and sub-processor transfer identification
   - Cloud service data residency assessment
   - Backup and DR cross-border data flows
2. Legal basis assessment per transfer:
   - Adequacy decisions applicability
   - Standard Contractual Clauses (SCCs) requirements
   - Binding Corporate Rules (BCRs) applicability
   - Supplementary measures needed per Schrems II
3. Transfer Impact Assessments (TIA):
   - Destination country surveillance law assessment
   - Technical supplementary measures (encryption, pseudonymization)
   - Organizational supplementary measures (transparency reports, access policies)
   - Contractual supplementary measures
4. Technical controls:
   - Data residency enforcement in cloud configurations
   - Transfer logging and monitoring
   - Encryption requirements for data in transit
5. Ongoing compliance:
   - Regulatory change monitoring for transfer mechanisms
   - Annual TIA review schedule
   - Data subject transparency requirements
6. Documentation: transfer register, TIA reports, supplementary measures evidence
```
_Use when: Managing compliance for international personal data transfers._

---

## 7. Vulnerability Analysis

### CVE Analysis

**#244 - CVE Impact Assessment**

```
Analyze [CVE_ID] and assess its impact on our environment:

CVE details: [CVE_ID] - [BRIEF_DESCRIPTION_IF_KNOWN]

Analysis:
1. Vulnerability description in plain language
2. CVSS score breakdown (base, temporal, environmental for our context)
3. Affected products and versions
4. Attack vector: how is it exploited? (network, local, physical)
5. Exploitation requirements: authentication, user interaction, complexity
6. Known exploits: is there public exploit code? Active exploitation in the wild?
7. Impact: confidentiality, integrity, availability
8. Our exposure: which of our systems run affected software?
9. Compensating controls: what existing defenses mitigate this?
10. Remediation: patch availability, workarounds, configuration changes
11. Priority recommendation: patch immediately / schedule / monitor
12. Communication: who needs to know and what do they need to do?
```
_Use when: Rapidly assessing new CVE impact on your environment._

---

**#245 - Zero-Day Vulnerability Response Plan**

```
Create a response plan for zero-day vulnerability [CVE_ID_OR_DESCRIPTION] affecting [PRODUCT]:

Known details:
[PASTE_ADVISORY_OR_DETAILS]

Response plan:
1. Immediate assessment: identify all instances of affected product in our environment
2. Exposure analysis: which instances are internet-facing or high-risk?
3. Temporary mitigations: network-level blocks, WAF rules, configuration changes
4. Monitoring: detection rules for exploitation attempts
5. Vendor communication: track vendor response and patch timeline
6. Business communication: notify asset owners and leadership
7. Compensating controls implementation with exact steps
8. Patch deployment plan (when patch becomes available)
9. Verification: how to confirm mitigation is effective
10. Timeline: hour-by-hour response plan for first 72 hours
```
_Use when: Responding to zero-day vulnerability disclosures._

---

**#246 - Vulnerability Trending Analysis**

```
Analyze vulnerability trends for [ORGANIZATION] over the past [TIME_PERIOD]:

Data available:
- Vulnerability scanner: [SCANNER]
- Historical scan data: [DATE_RANGE]
- Asset count: [COUNT]

Analysis:
1. Total vulnerability count trend over time (by severity)
2. Mean time to remediate (MTTR) by severity level and trend
3. SLA compliance rate trend (are we getting better or worse?)
4. Top 10 recurring vulnerability types (systemic issues)
5. Asset types with highest vulnerability density
6. Teams/departments with best and worst remediation performance
7. Patch lag analysis: time from patch release to deployment
8. Risk score trend: are we reducing actual risk?
9. Root cause analysis for systemic vulnerabilities
10. Recommendations for process improvements based on trends
11. Forecasting: projected risk if current trends continue
```
_Use when: Analyzing vulnerability management program effectiveness over time._

---

**#247 - Exploit Prediction Analysis**

```
Predict the exploitability of [CVE_ID] based on available information:

CVE details:
[PASTE_CVE_DETAILS]

Analysis:
1. CVSS exploitability sub-score analysis
2. EPSS (Exploit Prediction Scoring System) score and percentile
3. Historical exploitation pattern for this vulnerability class
4. Affected software prevalence and internet exposure
5. Complexity of exploit development
6. Availability of exploit frameworks or modules
7. Threat actor interest indicators (dark web chatter, proof of concepts)
8. Time since disclosure vs. average time-to-exploit for this type
9. Vendor patch availability and adoption rate
10. Overall exploitation likelihood rating: Critical / High / Medium / Low
11. Recommended response urgency based on prediction
```
_Use when: Prioritizing vulnerabilities based on likely exploitation._

---

**#248 - CVE Batch Analysis for Monthly Patch Cycle**

```
Analyze this month's CVE batch for patch prioritization:

CVE list:
[PASTE_LIST_OF_CVE_IDS_OR_PATCH_BULLETIN]

For each CVE, provide a one-line summary with:
- Severity: Critical/High/Medium/Low
- Exploitation: Active/PoC/Theoretical/None known
- Affected product and versions
- Our exposure: [HIGH/MEDIUM/LOW/UNKNOWN]
- Action: Patch immediately / Next cycle / Monitor / Accept risk

Then:
1. Sort by recommended priority
2. Group by deployment wave (emergency, week 1, week 2, scheduled)
3. Identify dependencies between patches
4. Flag patches requiring reboot or downtime
5. Highlight patches that may cause compatibility issues
6. Create the patch deployment schedule
```
_Use when: Monthly vulnerability review and patch cycle planning._

---

### Patch Prioritization

**#249 - Risk-Based Patch Prioritization Model**

```
Design a risk-based patch prioritization model for [ORGANIZATION]:

Environment:
- Asset count: [COUNT] across [TYPES]
- Average monthly patch volume: [COUNT]
- Patching capacity: [HOW_MANY_CAN_BE_PATCHED_PER_CYCLE]

Model:
1. Risk scoring formula incorporating:
   - CVSS base score
   - EPSS exploitation probability
   - Asset criticality (business importance)
   - Asset exposure (internet-facing, internal, isolated)
   - Compensating controls effectiveness
   - Threat intelligence overlay (active exploitation)
2. Priority tiers with SLA definitions
3. Automated scoring implementation approach
4. Exception handling for high-risk but hard-to-patch systems
5. Patch deferral criteria and risk acceptance process
6. Metrics to measure model effectiveness
7. Quarterly model calibration process
```
_Use when: Implementing risk-based vulnerability prioritization._

---

**#250 - Emergency Patch Deployment Plan**

```
Create an emergency patch deployment plan for [CVE_ID] affecting [PRODUCT] across [COUNT] systems:

Urgency factors:
- Active exploitation: [YES/NO]
- Exposure: [INTERNET_FACING/INTERNAL/BOTH]
- System criticality: [CRITICAL/HIGH/MEDIUM]

Plan:
1. Pre-deployment:
   - Test patch in [LAB/STAGING] environment (max [X] hours)
   - Compatibility verification with [KEY_APPLICATIONS]
   - Rollback procedure documentation
2. Deployment phases:
   - Phase 1 (0-4h): Internet-facing critical systems
   - Phase 2 (4-12h): Internal critical systems
   - Phase 3 (12-24h): High-priority systems
   - Phase 4 (24-72h): Remaining systems
3. Change management: emergency change process steps
4. Verification: how to confirm patch is applied and effective
5. Communication: stakeholder notifications at each phase
6. Metrics: track deployment progress hourly
7. Fallback: if patch causes issues, exact rollback steps
```
_Use when: Deploying critical patches under time pressure._

---

**#251 - Legacy System Vulnerability Management**

```
Create a vulnerability management strategy for legacy systems at [ORGANIZATION]:

Legacy systems:
[LIST_LEGACY_SYSTEMS_WITH_OS_VERSIONS_AND_BUSINESS_FUNCTION]

Strategy:
1. Risk assessment per legacy system (vulnerability density vs. business criticality)
2. Compensating controls matrix:
   - Network segmentation and access restrictions
   - Application-level controls (WAF, reverse proxy)
   - Enhanced monitoring and logging
   - File integrity monitoring
3. Virtual patching approach (WAF rules, IPS signatures)
4. Risk acceptance documentation template
5. Retirement roadmap with milestones and dependencies
6. Business case for modernization per system
7. Interim hardening measures (disable unnecessary services, restrict access)
8. Regulatory compliance implications of running unsupported systems
9. Insurance impact assessment
10. Executive communication on legacy risk
```
_Use when: Managing vulnerability risk in systems that cannot be easily patched._

---

**#252 - Patch Compliance Reporting**

```
Design a patch compliance reporting framework for [ORGANIZATION]:

Environment:
- Patch management tool: [TOOL]
- Compliance requirements: [FRAMEWORKS]
- Reporting audience: [IT_OPS, SECURITY, EXECUTIVES, AUDITORS]

Framework:
1. Compliance metrics:
   - Patch coverage: percentage of assets scanned and managed
   - SLA compliance: percentage patched within required timeframe by severity
   - Outstanding critical/high vulnerabilities aging report
   - Remediation velocity: patches deployed per day/week
2. Dashboard design per audience
3. Automated reporting cadence and distribution
4. Non-compliance escalation triggers and workflow
5. Exception tracking and aging
6. Audit evidence generation for [FRAMEWORK]
7. Trend analysis: improving or declining compliance
8. Benchmarking against internal and external standards
```
_Use when: Building patch management reporting and accountability._

---

### Vulnerability Assessment

**#253 - Web Application Vulnerability Assessment Report**

```
Write a vulnerability assessment report for web application [APP_NAME]:

Findings:
[LIST_VULNERABILITIES_WITH_DETAILS]

For each finding, write:
1. Title (concise, descriptive)
2. Severity: Critical / High / Medium / Low / Informational (with CVSS if applicable)
3. Description: what the vulnerability is (technical but clear)
4. Impact: what an attacker could achieve by exploiting it
5. Affected URL/parameter/component
6. Steps to reproduce (numbered, exact)
7. Evidence: describe screenshots/request-response pairs to include
8. Remediation: specific fix with code examples where possible
9. References: CWE, OWASP, vendor documentation
10. Verification: how to confirm the fix works

Also include:
- Executive summary with overall risk rating
- Methodology description
- Scope and limitations
- Risk rating distribution chart
```
_Use when: Writing professional web application vulnerability assessment reports._

---

**#254 - Network Vulnerability Scan Results Analysis**

```
Analyze these network vulnerability scan results from [SCANNER]:

[PASTE_SCAN_SUMMARY_OR_KEY_FINDINGS]

Analysis:
1. Remove false positives: identify likely false positives with reasoning
2. Deduplicate: group related findings by root cause
3. Prioritize by risk: combine CVSS with asset criticality and exposure
4. Quick wins: vulnerabilities fixable with configuration changes
5. Systemic issues: vulnerabilities affecting many systems (same root cause)
6. Per-system risk summary for critical assets
7. Remediation roadmap with effort estimates
8. Expected risk reduction per remediation phase
9. Metrics: vulnerability counts by severity, asset type, department
10. Comparison with previous scan (if data available)
```
_Use when: Making scan results actionable for remediation teams._

---

**#255 - Infrastructure Vulnerability Assessment Scope**

```
Define the scope for an infrastructure vulnerability assessment of [ORGANIZATION]:

Environment:
- Network segments: [LIST]
- Total IP addresses: [RANGES]
- System types: [SERVERS, WORKSTATIONS, NETWORK_DEVICES, IOT]
- Excluded systems: [CRITICAL_SYSTEMS_REQUIRING_CAREFUL_HANDLING]

Scope document:
1. In-scope networks and IP ranges
2. Out-of-scope systems with justification
3. Scanning methodology: authenticated vs. unauthenticated
4. Scan types: network, web application, database, configuration
5. Scanning schedule (avoid production impact during business hours)
6. Credential requirements for authenticated scanning
7. Scan tool configurations and plugins
8. Performance controls: rate limiting, concurrent connections
9. Escalation contacts during scanning
10. Deliverable format and timeline
11. Success criteria and quality metrics
```
_Use when: Scoping infrastructure vulnerability assessments._

---

**#256 - Container Vulnerability Assessment**

```
Assess container vulnerabilities across our [CONTAINER_ENVIRONMENT]:

Environment:
- Registry: [REGISTRY]
- Runtime: [DOCKER/CONTAINERD/CRIO]
- Orchestration: [K8S/ECS/SWARM]
- Image count: [ESTIMATE]

Assessment:
1. Base image vulnerability analysis: which base images have critical CVEs?
2. Dependency vulnerability analysis: language-specific package vulnerabilities
3. Configuration vulnerability analysis: Dockerfile best practices
4. Runtime vulnerability analysis: running container security posture
5. Prioritization by:
   - Internet-facing vs. internal containers
   - Data sensitivity of containerized applications
   - Exploit availability for discovered CVEs
6. Remediation strategy: base image updates, dependency patches, rebuilds
7. Pipeline integration: shift-left vulnerability detection
8. Continuous monitoring approach for running containers
```
_Use when: Assessing vulnerabilities in containerized environments._

---

**#257 - API Vulnerability Assessment Checklist**

```
Create a comprehensive API vulnerability assessment checklist for [API_NAME]:

API details:
- Type: [REST/GraphQL/gRPC/SOAP]
- Authentication: [API_KEY/OAuth/JWT/BASIC]
- Documentation: [SWAGGER/OpenAPI_AVAILABLE? YES/NO]

Checklist (per OWASP API Top 10 2023):
1. Broken Object Level Authorization (BOLA): IDOR test cases
2. Broken Authentication: token weaknesses, credential stuffing
3. Broken Object Property Level Authorization: mass assignment, excessive data exposure
4. Unrestricted Resource Consumption: rate limiting, pagination
5. Broken Function Level Authorization: privilege escalation
6. Unrestricted Access to Sensitive Business Flows: business logic abuse
7. Server Side Request Forgery: SSRF test cases
8. Security Misconfiguration: headers, CORS, error handling
9. Improper Inventory Management: shadow APIs, versioning
10. Unsafe Consumption of APIs: third-party API trust
For each: specific test cases, tools to use, and pass/fail criteria.
```
_Use when: Systematically testing API security._

---

**#258 - Vulnerability Disclosure Program Design**

```
Design a vulnerability disclosure program (VDP) or bug bounty program for [ORGANIZATION]:

Context:
- Public-facing assets: [DESCRIPTION]
- Security maturity: [LEVEL]
- Budget for bounties: [AMOUNT_OR_NONE_VDP_ONLY]

Program design:
1. Program type: VDP (no bounties) vs. bug bounty (with rewards)
2. Scope: in-scope assets and testing types
3. Out-of-scope: exclusions and prohibited testing
4. Safe harbor / legal protection language
5. Severity-to-bounty mapping (if bounty program)
6. Submission process: reporting channel, required information
7. Response SLAs: acknowledgment, triage, resolution, disclosure
8. Triage workflow for incoming reports
9. Communication templates for each response stage
10. Metrics: submissions, valid findings, average response time
11. Platform recommendation: HackerOne, Bugcrowd, self-hosted
12. Launch plan and researcher communication strategy
```
_Use when: Establishing external vulnerability reporting channels._

---

### Vulnerability Reporting

**#259 - Executive Vulnerability Summary**

```
Write an executive vulnerability summary for [ORGANIZATION]'s [TIME_PERIOD]:

Data:
- Critical vulnerabilities: [COUNT]
- High vulnerabilities: [COUNT]
- Total assets scanned: [COUNT]
- SLA compliance: [PERCENTAGES]
- Key changes since last period: [CHANGES]

Summary (1-2 pages max):
1. Overall risk posture statement (improved/stable/degraded)
2. Key metrics with trend arrows vs. previous period
3. Top 3 vulnerability risks requiring attention (business language)
4. SLA performance by team/department
5. Remediation velocity: are we fixing faster than new vulns appear?
6. Critical items requiring executive decision or support
7. Budget or resource constraints affecting remediation
8. Upcoming risks: known EOL systems, major patch releases
9. Recommendations (3 max, specific, actionable)
10. Appendix: detailed metrics for reference
```
_Use when: Reporting vulnerability status to non-technical leadership._

---

**#260 - Vulnerability Assessment Comparison Report**

```
Write a comparative vulnerability assessment report between scans:

Previous scan: [DATE] - [SCAN_ID]
Current scan: [DATE] - [SCAN_ID]

Compare:
1. New vulnerabilities: appeared since last scan (by severity)
2. Resolved vulnerabilities: fixed since last scan (by severity)
3. Persistent vulnerabilities: still present (aging analysis)
4. Regressed: previously fixed but reappeared
5. Net change: are we improving or declining?
6. By asset type: which system types improved/degraded most?
7. By team: which remediation teams are most/least effective?
8. Root cause of persistent vulnerabilities
9. Root cause of regressions
10. Recommendations for systemic improvement
11. Target metrics for next assessment period
```
_Use when: Demonstrating vulnerability management progress over time._

---

**#261 - Penetration Test Findings Remediation Tracker**

```
Create a remediation tracker for penetration test findings from [ENGAGEMENT_NAME]:

Findings:
[LIST_FINDINGS_WITH_SEVERITY_AND_AFFECTED_SYSTEMS]

Tracker:
1. Finding ID, title, severity, CVSS score
2. Affected systems/applications
3. Remediation owner (person and team)
4. Remediation SLA based on severity
5. Remediation approach: patch, configuration, architecture change, accept
6. Current status: not started, in progress, completed, verified, accepted
7. Target completion date
8. Actual completion date
9. Verification: retest needed, retest date, retest result
10. Dependencies on other findings or projects
11. Escalation: items past SLA with reason
12. Dashboard view: overall progress percentage, SLA compliance
```
_Use when: Tracking remediation of penetration test findings._

---

**#262 - Vulnerability Root Cause Analysis**

```
Conduct a root cause analysis for recurring vulnerability [VULNERABILITY_TYPE] across [ORGANIZATION]:

Occurrence data:
- Times found in last 12 months: [COUNT]
- Systems affected: [LIST]
- Previous remediation actions: [WHAT_WAS_DONE]

Analysis:
1. Pattern identification: where and why does this keep appearing?
2. Root causes: configuration management, deployment pipeline, human error, design flaw
3. Contributing factors: training gaps, tool gaps, process gaps
4. Remediation that worked vs. remediation that didn't
5. Systemic fix recommendations:
   - Preventive controls (stop it from being introduced)
   - Detective controls (find it faster)
   - Corrective controls (fix it automatically)
6. Investment required for systemic fix
7. Expected reduction in occurrence after systemic fix
8. Implementation plan with responsible parties
9. Success metrics and measurement plan
```
_Use when: Addressing vulnerabilities that keep recurring despite patches._

---

**#263 - SBOM Vulnerability Analysis**

```
Analyze the Software Bill of Materials (SBOM) for [APPLICATION_NAME] for vulnerability exposure:

SBOM format: [SPDX/CycloneDX]
SBOM: [PASTE_OR_REFERENCE_LOCATION]

Analysis:
1. Total dependency count (direct and transitive)
2. Dependency tree depth analysis
3. Known vulnerabilities per dependency (CVE mapping)
4. Critical and high severity vulnerabilities requiring immediate action
5. End-of-life or unmaintained dependencies
6. License risk analysis (if relevant)
7. Dependency update availability (which vulns have patches?)
8. Update risk assessment (breaking changes in updates)
9. Prioritized remediation list (fix effort vs. risk reduction)
10. Dependency reduction opportunities
11. Alternative dependency recommendations for high-risk components
12. Continuous monitoring strategy for the SBOM
```
_Use when: Analyzing software supply chain risk through SBOM._

---

**#264 - Automated Vulnerability Remediation Playbook**

```
Design automated vulnerability remediation playbooks for [ORGANIZATION]:

Playbook 1: Auto-patch operating system vulnerabilities
- Trigger: [VM_SCANNER] reports critical OS vulnerability on non-production server
- Actions: validate, snapshot, patch, verify, close ticket
- Guardrails: production exclusion, change window respect, rollback on failure

Playbook 2: Auto-remediate cloud misconfigurations
- Trigger: [CSPM] reports [SPECIFIC_MISCONFIGURATION_TYPE]
- Actions: validate, fix configuration, verify, notify owner, close ticket
- Guardrails: protected resource exclusion, approval for production

Playbook 3: Auto-block vulnerable dependencies
- Trigger: [SCA_TOOL] reports critical dependency vulnerability in CI/CD
- Actions: block build, notify developer, suggest fix version, track SLA

For each playbook: decision logic, automation platform, testing plan, and exception handling.
```
_Use when: Automating vulnerability remediation for common, repeatable scenarios._

---

**#265 - Vulnerability Intelligence Feed Evaluation**

```
Evaluate vulnerability intelligence feeds and sources for [ORGANIZATION]:

Current sources: [LIST]
Requirements: [WHAT_WE_NEED_TO_KNOW_AND_HOW_FAST]

Evaluate:
1. NVD: coverage, timeliness, enrichment quality
2. Vendor advisories: key vendor advisory programs to follow
3. Commercial feeds: [CANDIDATES] - coverage, cost, integration
4. CISA KEV (Known Exploited Vulnerabilities): integration approach
5. EPSS: exploit prediction scoring integration
6. Social media / researcher disclosures: monitoring approach
7. Dark web exploit marketplace monitoring
8. Comparative matrix: source vs. timeliness vs. coverage vs. cost
9. Integration architecture: how feeds flow into VM tools and SIEM
10. Metric: time from disclosure to our awareness (goal: < [X] hours)
```
_Use when: Optimizing vulnerability intelligence sources and timeliness._

---

**#266 - Vulnerability Scan Configuration Optimization**

```
Optimize vulnerability scanning configuration for [SCANNER] at [ORGANIZATION]:

Current configuration:
- Scan frequency: [FREQUENCY]
- Scan type: [AUTHENTICATED/UNAUTHENTICATED]
- Targets: [SCOPE]
- Performance issues: [IF_ANY]

Optimize:
1. Credential management: secure storage and rotation for scan credentials
2. Scan policy tuning: remove irrelevant checks, add targeted checks
3. Performance optimization: concurrent hosts, port ranges, timing
4. Scan scheduling: align with maintenance windows, avoid business impact
5. Scope accuracy: ensure complete asset coverage, no blind spots
6. False positive management: validated exclusions list
7. Integration: automated ticket creation, SIEM correlation
8. Compliance scanning: specific profiles for PCI, CIS benchmarks
9. Reporting optimization: relevant reports for each stakeholder
10. Quality assurance: periodic scan accuracy validation
```
_Use when: Improving vulnerability scanning effectiveness and efficiency._

---

**#267 - Application Security Testing Integration**

```
Design an application security testing strategy integrated into the SDLC for [ORGANIZATION]:

Development environment:
- Languages: [LANGUAGES]
- CI/CD: [PLATFORM]
- Repository: [GIT_PLATFORM]
- Deployment: [TARGET_ENVIRONMENT]

Strategy:
1. IDE plugins: real-time security linting for developers
2. Pre-commit hooks: secret detection, security linting
3. SAST integration: tool, configuration, and break-build criteria
4. SCA integration: dependency scanning and policy enforcement
5. DAST integration: automated testing in staging/QA
6. IAST integration (if applicable): runtime analysis
7. Container scanning in build pipeline
8. IaC scanning for infrastructure definitions
9. Security gate criteria per pipeline stage
10. Developer training on addressing findings
11. False positive management workflow
12. Metrics: vulnerabilities found per stage, fix rates, mean time to fix
```
_Use when: Implementing shift-left security testing._

---

**#268 - Vulnerability Remediation SLA Framework**

```
Design a vulnerability remediation SLA framework for [ORGANIZATION]:

Considerations:
- Regulatory requirements: [FRAMEWORKS]
- Business risk tolerance: [APPETITE]
- Current remediation capacity: [ESTIMATE]

Framework:
1. Severity classification alignment (scanner severity vs. organizational risk)
2. SLA timelines:
   - Critical + Active exploitation: [24 hours / 72 hours]
   - Critical: [7 days / 14 days]
   - High: [30 days]
   - Medium: [90 days]
   - Low: [180 days / next maintenance cycle]
3. Adjustment factors: internet-facing vs. internal, data sensitivity
4. Escalation procedures for SLA breaches
5. Exception process with compensating controls
6. Measurement methodology (when does the clock start?)
7. Reporting: compliance dashboard design
8. Accountability: RACI for remediation
9. Continuous improvement: quarterly SLA review based on performance
10. Incentive/penalty framework for teams
```
_Use when: Establishing vulnerability remediation expectations and accountability._

---

**#269 - Configuration Vulnerability Assessment**

```
Conduct a configuration vulnerability assessment for [SYSTEM_TYPE: Windows Server / Linux / Network Device / Database]:

Target: [SYSTEM_NAME_AND_VERSION]
Benchmark: [CIS_BENCHMARK_VERSION / STIG / CUSTOM]

Assessment:
1. Hardening benchmark selection and justification
2. Automated scanning tool and configuration
3. Manual checks for items not covered by automation
4. Results analysis: categorize findings by:
   - Authentication and access control
   - Audit and logging
   - Network configuration
   - Service hardening
   - File system permissions
   - Cryptographic settings
5. Business impact assessment per finding
6. Remediation priority and grouping
7. Change management requirements for remediation
8. Verification testing after hardening
9. Baseline documentation for future comparison
```
_Use when: Assessing system configuration against security benchmarks._

---

**#270 - Third-Party Component Vulnerability Management**

```
Design a third-party component vulnerability management process for [ORGANIZATION]:

Software portfolio:
- Applications using third-party components: [COUNT]
- Primary package managers: [NPM/MAVEN/PIP/NUGET/etc.]
- Current process: [DESCRIBE]

Process:
1. Component inventory: how to discover and catalog all third-party components
2. SBOM generation and maintenance approach
3. Vulnerability monitoring: continuous scanning of component versions
4. Alert triage: who gets notified and how
5. Patch availability tracking
6. Update testing requirements
7. Emergency update process for critical vulnerabilities
8. End-of-life component identification and migration planning
9. Developer responsibilities vs. security team responsibilities
10. Metrics: component vulnerability density, update currency, mean time to patch
```
_Use when: Establishing processes for managing third-party software risk._

---

**#271 - Vulnerability Simulation and Testing**

```
Design a vulnerability simulation exercise for [ORGANIZATION]:

Purpose: validate detection and response for [VULNERABILITY_TYPE]
Environment: [TARGET_ENVIRONMENT]

Exercise:
1. Vulnerability scenario selection: realistic, relevant to our environment
2. Safe simulation approach: how to simulate without causing harm
3. Detection expectations: what should trigger and from which tool
4. Response expectations: what the SOC/IR team should do
5. Timeline: when to inject, when to observe, when to reveal
6. Measurement criteria: detection time, response quality, remediation
7. Participant briefing requirements
8. Safety controls and abort procedures
9. Post-exercise analysis and scoring
10. Improvement actions based on results
```
_Use when: Testing vulnerability detection and response capabilities._

---

**#272 - Mobile Application Vulnerability Report**

```
Write a mobile application vulnerability report for [APP_NAME] on [ANDROID/IOS]:

Findings:
[LIST_FINDINGS]

Report structure:
1. Executive summary with overall risk rating
2. Methodology: tools used, test types, OWASP MASTG reference
3. For each finding:
   - Title and severity (CVSS)
   - OWASP MASVS category
   - Description with technical details
   - Impact on users and business
   - Steps to reproduce with device/OS details
   - Proof of concept (describe screenshots/screen recordings)
   - Remediation with platform-specific code guidance
   - References
4. Positive findings: what the app does well
5. Appendix: tool output, configuration details
```
_Use when: Writing mobile application security assessment reports._

---

**#273 - Vulnerability Management Program Maturity Assessment**

```
Assess the maturity of [ORGANIZATION]'s vulnerability management program:

Current capabilities:
[DESCRIBE_CURRENT_VM_PRACTICES]

Assessment against these maturity dimensions:
1. Asset discovery and inventory: completeness, accuracy, automation
2. Scanning coverage: breadth, depth, frequency, authentication
3. Prioritization: CVSS-only vs. risk-based, threat intelligence integration
4. Remediation: SLAs, tracking, accountability, verification
5. Reporting: stakeholder-appropriate, trend analysis, benchmarking
6. Automation: scanning, ticketing, patching, verification
7. Integration: SIEM, SOAR, CMDB, change management
8. Governance: policies, procedures, roles, metrics
9. Continuous improvement: feedback loops, process optimization
10. Rate each dimension 1-5, identify top 3 improvement priorities, create 12-month roadmap
```
_Use when: Evaluating and improving vulnerability management program maturity._

---

**#274 - IoT Device Vulnerability Assessment**

```
Assess vulnerabilities in IoT devices at [ORGANIZATION]:

IoT inventory:
- Device types: [LIST: cameras, sensors, printers, HVAC, badge readers, etc.]
- Count: [ESTIMATE]
- Network placement: [SEGMENTED/FLAT]

Assessment:
1. Device inventory and firmware version cataloging
2. Default credential check per device type
3. Network exposure analysis: what's accessible from where
4. Known CVEs per device model and firmware version
5. Communication protocol analysis: encrypted, authenticated?
6. Update mechanism: can firmware be updated, how, securely?
7. Physical security: USB ports, debug interfaces, reset buttons
8. Data sensitivity: what data do these devices process/store
9. Segmentation verification: are IoT devices properly isolated
10. Prioritized remediation plan
11. Risk acceptance criteria for unpatchable devices
```
_Use when: Assessing IoT device security in enterprise environments._

---

**#275 - GraphQL API Security Testing**

```
Conduct a GraphQL API security assessment for [APPLICATION] during an authorized test:

GraphQL endpoint: [URL]
Schema access: [INTROSPECTION_ENABLED/SCHEMA_FILE/BLIND]

Testing methodology:
1. Reconnaissance:
   - Introspection query to enumerate types, queries, mutations, subscriptions
   - Schema analysis for sensitive fields (password, token, SSN, internal IDs)
   - Deprecated field identification (may bypass newer security controls)
   - Custom scalar type analysis
2. Authorization testing:
   - Broken Object Level Authorization (BOLA): access other users' data via ID manipulation
   - Horizontal privilege escalation through nested query relationships
   - Mutation authorization: can unauthorized users modify data?
   - Field-level authorization: sensitive fields accessible without proper roles?
   - Subscription authorization: unauthorized real-time data access
3. Injection and input attacks:
   - SQL injection through GraphQL variables and arguments
   - NoSQL injection in resolver implementations
   - OS command injection through input fields
   - Path traversal in file-related queries
4. Denial of Service:
   - Deeply nested query attacks (query depth analysis)
   - Batch query abuse (query complexity analysis)
   - Alias-based attack amplification
   - Circular fragment attacks
   - Resource exhaustion through large result sets
5. Information disclosure:
   - Verbose error messages exposing stack traces or schema details
   - Debug mode detection
   - Introspection in production environments
6. Reporting: findings mapped to OWASP GraphQL security guidelines
```
_Use when: Testing GraphQL API security during authorized assessments._

---

**#276 - Firmware Vulnerability Analysis**

```
Conduct firmware vulnerability analysis for [DEVICE_TYPE] at [ORGANIZATION]:

Device details:
- Manufacturer: [VENDOR]
- Model: [MODEL]
- Firmware version: [VERSION]
- Firmware source: [DOWNLOADED/EXTRACTED_FROM_DEVICE]

Analysis methodology:
1. Firmware extraction and unpacking:
   - Binary analysis tool chain (binwalk, firmware-mod-kit, ubi_reader)
   - File system extraction and structure analysis
   - Compression and encryption identification
2. Static analysis:
   - Hardcoded credentials search (strings, grep patterns)
   - Cryptographic key material in firmware
   - Certificate analysis (self-signed, expired, shared across devices)
   - Configuration file analysis for insecure defaults
   - Known vulnerable library identification (busybox, openssl versions)
3. Binary analysis:
   - Architecture identification and disassembly
   - Dangerous function usage (strcpy, sprintf, system, exec)
   - Buffer overflow potential in custom binaries
   - Authentication bypass logic analysis
4. Network service analysis:
   - Embedded web server vulnerability assessment
   - API endpoint discovery and testing
   - Update mechanism security (signed updates, TLS verification)
   - Debug interfaces (UART, JTAG, SSH backdoors)
5. CVE correlation:
   - Component version to CVE mapping
   - SBOM generation from firmware contents
   - Patch gap analysis for known vulnerabilities
6. Reporting: vulnerability findings with CVSS scoring and remediation recommendations
```
_Use when: Analyzing firmware security of IoT, embedded, or network devices._

---

**#277 - Hardware Vulnerability Assessment**

```
Assess hardware-level vulnerability exposure for [ORGANIZATION]:

Infrastructure scope:
- CPU vendors and generations: [LIST]
- Server models: [LIST]
- Network equipment: [LIST]
- Endpoint hardware: [LIST]

Assessment areas:
1. Speculative execution vulnerabilities:
   - Spectre (V1, V2, BHI, BHB variants) exposure per CPU model
   - Meltdown and MDS (Microarchitectural Data Sampling) exposure
   - Retbleed, Downfall, Inception, and newer variants
   - Microcode update status per system
   - OS and hypervisor mitigation deployment status
   - Performance impact assessment of applied mitigations
2. Platform security:
   - TPM version and configuration (1.2 vs 2.0, enabled, measured boot)
   - Secure Boot configuration and key management
   - Intel ME/AMD PSP firmware version and known vulnerabilities
   - BMC/IPMI firmware version and access controls
3. Supply chain integrity:
   - Hardware provenance verification
   - Firmware integrity measurement
   - Component authenticity verification
   - Counterfeit component risk assessment
4. Physical attack surface:
   - Debug port accessibility (JTAG, SWD, UART)
   - Cold boot attack mitigations
   - DMA attack surface (Thunderbolt, FireWire, PCIe)
5. Prioritized remediation: firmware updates, microcode patches, configuration changes
```
_Use when: Assessing hardware-level vulnerabilities across infrastructure._

---

**#278 - Vulnerability Chaining Analysis**

```
Conduct vulnerability chaining analysis for [ORGANIZATION] infrastructure:

Input data:
- Vulnerability scan results: [PASTE_OR_DESCRIBE_FINDINGS]
- Network topology: [DESCRIBE_SEGMENTATION]
- Asset criticality: [LIST_CRITICAL_ASSETS]

Analysis:
1. Individual vulnerability assessment:
   - Classify each vulnerability by type, location, and CVSS score
   - Identify vulnerabilities that are low-risk individually but high-risk in combination
   - Map vulnerabilities to MITRE ATT&CK techniques
2. Chain identification:
   - Initial access chains: external vulnerability -> internal foothold
   - Lateral movement chains: pivot paths across network segments
   - Privilege escalation chains: user -> admin -> domain admin paths
   - Data access chains: paths to critical data stores
3. Attack path modeling:
   - Build attack trees from external-facing to crown jewel assets
   - Calculate composite risk scores for each chain
   - Identify common links (vulnerabilities appearing in multiple chains)
   - Determine minimum viable attack paths
4. Chain-breaking prioritization:
   - Identify vulnerabilities whose remediation breaks the most chains
   - Cost-benefit analysis: single patch vs multiple chain elimination
   - Compensating controls for chains that cannot be immediately broken
5. Reporting: attack path diagrams, chain risk scores, prioritized remediation that maximizes risk reduction
```
_Use when: Analyzing how individual vulnerabilities combine into high-impact attack paths._

---

**#279 - Browser Extension Security Assessment**

```
Assess browser extension security for [ORGANIZATION]:

Extension inventory:
- Approved extensions: [LIST]
- Discovered unauthorized extensions: [LIST]
- Browser: [CHROME/EDGE/FIREFOX]
- Management: [MDM/GPO/UNMANAGED]

Assessment:
1. Permission analysis:
   - Extensions with high-risk permissions (tabs, webRequest, cookies, storage, <all_urls>)
   - Permission scope vs actual functionality need
   - Content script injection scopes (which sites can extensions modify)
   - Background service worker capabilities
2. Supply chain risk:
   - Developer/publisher reputation and verification
   - Update frequency and last update date
   - User count and review analysis
   - Open source vs closed source code
   - Historical security incidents per extension
3. Data exfiltration risk:
   - Extensions with network access permissions
   - Data collection disclosed in privacy policy vs actual behavior
   - Cross-origin request capabilities
   - Local storage and cookie access
4. Policy enforcement:
   - Browser extension management policy creation/review
   - Allowlist/blocklist implementation via group policy or MDM
   - Runtime monitoring for extension behavior anomalies
   - Extension installation approval workflow
5. Remediation: unauthorized extension removal, policy enforcement, approved alternatives
```
_Use when: Auditing browser extension security across the organization._

---

**#280 - Vulnerability Correlation with Threat Intelligence**

```
Correlate vulnerability data with threat intelligence for [ORGANIZATION]:

Inputs:
- Vulnerability scan data: [SCAN_SOURCE: Tenable/Qualys/Rapid7/etc.]
- Threat intelligence feeds: [TI_SOURCES]
- CISA KEV catalog
- Industry: [INDUSTRY]

Correlation methodology:
1. Active exploitation correlation:
   - Match internal vulnerabilities against CISA Known Exploited Vulnerabilities catalog
   - Cross-reference with active exploitation reports from threat intel vendors
   - Identify vulnerabilities with public exploit code (Exploit-DB, Metasploit, GitHub)
   - EPSS scoring integration for exploitation probability
2. Threat actor relevance:
   - Map vulnerabilities to TTPs of threat actors targeting [INDUSTRY]
   - Identify vulnerabilities exploited by [SPECIFIC_THREAT_ACTORS] relevant to organization
   - Assess vulnerabilities in the context of current campaigns and advisories
3. Weaponization timeline:
   - Track time from CVE publication to public exploit availability
   - Estimate time to weaponization for unpatched critical vulnerabilities
   - Historical analysis of similar vulnerability exploitation timelines
4. Prioritization matrix:
   - Combined score: CVSS + EPSS + CISA KEV + threat actor relevance + asset criticality
   - Risk-adjusted priority ranking
   - SLA assignment based on combined scoring
5. Reporting: threat-informed vulnerability priority list with intelligence context
```
_Use when: Enhancing vulnerability prioritization with threat intelligence context._

---

**#281 - Vulnerability Assessment for CI/CD Pipelines**

```
Assess vulnerability exposure in CI/CD pipeline infrastructure at [ORGANIZATION]:

Pipeline stack:
- Source control: [GITHUB/GITLAB/BITBUCKET/AZURE_DEVOPS]
- CI/CD platform: [JENKINS/GITHUB_ACTIONS/GITLAB_CI/CIRCLECI/AZURE_PIPELINES]
- Artifact registry: [LIST]
- Deployment targets: [LIST]

Assessment areas:
1. Source control security:
   - Branch protection and code review enforcement
   - Secrets in repository history (git-secrets, truffleHog scan)
   - Dependency file tampering detection
   - Webhook security configuration
2. Build pipeline security:
   - Runner/agent security posture (isolation, patching, access)
   - Pipeline definition injection vulnerabilities (command injection in CI scripts)
   - Environment variable and secret management
   - Third-party action/plugin security review
   - Build reproducibility and provenance (SLSA level assessment)
3. Artifact security:
   - Container image vulnerability scanning in pipeline
   - Artifact signing and verification
   - Registry access control and vulnerability scanning
   - Dependency proxy/cache poisoning risk
4. Deployment security:
   - Deployment credential management and rotation
   - Deployment approval gates and separation of duties
   - Rollback capability and security verification post-deploy
   - Infrastructure as Code scanning in pipeline
5. Supply chain integrity:
   - Software Bill of Materials generation in pipeline
   - Third-party dependency vulnerability scanning
   - License compliance checking
6. Findings with remediation recommendations and implementation priority
```
_Use when: Assessing security vulnerabilities in CI/CD pipeline infrastructure._

---

**#282 - Network Protocol Vulnerability Assessment**

```
Conduct a network protocol vulnerability assessment for [ORGANIZATION]:

Network scope:
- Internal network segments: [LIST]
- External-facing services: [LIST]
- Legacy systems: [LIST]

Assessment areas:
1. Deprecated protocol detection:
   - SSLv2, SSLv3, TLS 1.0, TLS 1.1 usage
   - SMBv1, NTLMv1 usage
   - Telnet, FTP, HTTP (unencrypted) for sensitive operations
   - SNMP v1/v2c (community strings in cleartext)
   - Unencrypted LDAP (port 389) vs LDAPS (port 636)
2. Protocol misconfiguration:
   - TLS cipher suite analysis (weak ciphers, key exchange, MAC)
   - Certificate validation issues (expired, self-signed, wrong CN, weak signing)
   - DNS security: DNSSEC deployment, DNS over HTTPS/TLS
   - SMTP security: STARTTLS enforcement, SPF/DKIM/DMARC
3. Protocol-level attacks:
   - ARP spoofing/poisoning susceptibility
   - VLAN hopping potential
   - LLMNR/NBT-NS/mDNS poisoning exposure
   - DHCPv6 attack surface
   - BGP hijacking risk for public-facing infrastructure
4. Authentication protocols:
   - Kerberos configuration (encryption types, ticket lifetime)
   - RADIUS/TACACS+ deployment and security
   - 802.1X implementation assessment
5. Remediation priority: protocol upgrade plan with compatibility impact assessment
```
_Use when: Identifying vulnerable network protocols across the environment._

---

**#283 - Vulnerability Impact Simulation**

```
Design and execute vulnerability impact simulations for [ORGANIZATION]:

Target vulnerabilities:
[LIST_CRITICAL_VULNERABILITIES_TO_SIMULATE]

Simulation framework:
1. Pre-simulation:
   - Define simulation scope and boundaries
   - Identify affected systems and data
   - Establish baseline metrics (availability, integrity, confidentiality)
   - Obtain authorization and notify stakeholders
2. Impact modeling per vulnerability:
   - Confidentiality impact: what data could be accessed
   - Integrity impact: what data or systems could be modified
   - Availability impact: what services could be disrupted
   - Blast radius: lateral impact from initial compromise
   - Business process impact: which business functions are affected
3. Simulation scenarios:
   - Scenario A: single vulnerability exploitation in isolation
   - Scenario B: vulnerability chain exploitation (combined with [RELATED_VULNS])
   - Scenario C: mass exploitation (worm-like propagation scenario)
   - For each: timeline estimation, detection likelihood, containment difficulty
4. Financial impact estimation:
   - Downtime costs per affected system
   - Data breach costs (notification, legal, regulatory fines)
   - Remediation and recovery costs
   - Reputation damage estimation
5. Results: impact report for each scenario, ROI justification for remediation investment
```
_Use when: Quantifying the real-world impact of vulnerabilities for prioritization._

---

**#284 - API Security Vulnerability Deep Dive**

```
Conduct a deep-dive API vulnerability assessment for [APPLICATION_NAME]:

API specifications:
- API type: [REST/GraphQL/gRPC/SOAP]
- Documentation: [OPENAPI_SPEC/SWAGGER/MANUAL]
- Authentication: [API_KEY/OAUTH2/JWT/BASIC/NONE]
- Number of endpoints: [COUNT]

Assessment against OWASP API Security Top 10 2023:
1. API1:2023 - Broken Object Level Authorization
   - Test object ID enumeration across all endpoints
   - Verify authorization for every data access path
2. API2:2023 - Broken Authentication
   - Token validation, expiration, and refresh security
   - Credential stuffing protection assessment
3. API3:2023 - Broken Object Property Level Authorization
   - Mass assignment testing on creation/update endpoints
   - Excessive data exposure in responses
4. API4:2023 - Unrestricted Resource Consumption
   - Rate limiting effectiveness per endpoint
   - Payload size and complexity limits
5. API5:2023 - Broken Function Level Authorization
   - Administrative function access from regular user context
   - HTTP method tampering (GET vs PUT vs DELETE)
6. API6:2023 - Unrestricted Access to Sensitive Business Flows
   - Business logic abuse (automated purchasing, scraping)
7. API7:2023 - Server Side Request Forgery
   - SSRF through URL parameters, webhooks, file imports
8. API8:2023 - Security Misconfiguration
   - CORS policy, error handling, unnecessary HTTP methods
9. API9:2023 - Improper Inventory Management
   - Shadow API and deprecated endpoint discovery
10. API10:2023 - Unsafe Consumption of APIs
    - Third-party API integration security
11. Additional: JWT vulnerabilities (algorithm confusion, key exposure, claim tampering)
```
_Use when: Conducting thorough API security assessments against current standards._

---

**#285 - Vulnerability Management Automation Framework**

```
Design a vulnerability management automation framework for [ORGANIZATION]:

Current tools:
- Scanner: [TOOL]
- Ticketing: [TOOL]
- CMDB: [TOOL]
- Patch management: [TOOL]

Automation framework:
1. Discovery and scanning automation:
   - Continuous asset discovery and scan scheduling
   - Authenticated vs unauthenticated scan orchestration
   - New asset auto-enrollment for scanning
   - Scan result deduplication and normalization
2. Prioritization automation:
   - Automated CVSS + EPSS + CISA KEV + asset criticality scoring
   - Business context enrichment from CMDB
   - Threat intelligence correlation for active exploitation indicators
   - Auto-assignment to remediation owners based on asset ownership
3. Remediation workflow automation:
   - Automatic ticket creation with SLA assignment
   - Patch availability verification
   - Change request auto-generation for patch deployment
   - Remediation verification scanning after patch window
4. Exception management:
   - Automated exception request workflow
   - Compensating control documentation requirements
   - Exception expiration and re-review automation
   - Risk acceptance approval routing
5. Reporting automation:
   - Real-time dashboard generation
   - Automated SLA compliance reporting
   - Executive summary auto-generation (weekly/monthly)
   - Trend analysis and prediction
6. Integration architecture: API connections between all tools with data flow diagram
```
_Use when: Automating vulnerability management lifecycle processes._

---

## 8. AI Agent Security (2026 Trending)

### LLM Vulnerability Testing

**#286 - Prompt Injection Vulnerability Assessment**

```
Design a prompt injection vulnerability assessment for [AI_APPLICATION]:

Application details:
- LLM provider: [OPENAI/ANTHROPIC/GOOGLE/OPEN_SOURCE]
- Application type: [CHATBOT/AGENT/RAG_SYSTEM/CODE_ASSISTANT]
- User input handling: [DIRECT/PREPROCESSED/FILTERED]
- System prompt: [AVAILABLE/UNKNOWN]

Assessment plan:
1. Direct prompt injection test cases:
   - System prompt extraction attempts (10 variations)
   - Instruction override attempts (10 variations)
   - Role manipulation attempts (5 variations)
   - Output format manipulation (5 variations)
2. Indirect prompt injection test cases:
   - Injected content in retrieved documents (RAG poisoning)
   - Malicious instructions in user-provided files
   - Hidden instructions in web pages the AI browses
   - Cross-plugin/tool injection scenarios
3. Severity rating per successful injection
4. Remediation recommendations for each vulnerability class
5. Automated test harness design for regression testing
```
_Use when: Testing AI applications for prompt injection vulnerabilities._

---

**#287 - LLM Jailbreak Detection System Design**

```
Design a jailbreak detection system for [AI_APPLICATION]:

Current guardrails: [DESCRIBE_EXISTING_SAFETY_MEASURES]

System design:
1. Jailbreak taxonomy: categories of known jailbreak techniques
   - Persona-based (DAN, roleplay)
   - Encoding-based (Base64, ROT13, markdown manipulation)
   - Multi-turn progressive (gradual boundary pushing)
   - Language-based (translation, code comments)
   - Context manipulation (hypothetical, educational framing)
2. Detection approaches:
   - Input classifier: ML model for jailbreak attempt detection
   - Output classifier: detect when the model has been jailbroken
   - Behavioral analysis: conversation pattern anomalies
3. Response strategy: block, redirect, alert, log
4. Red team testing methodology for the detection system itself
5. False positive management: legitimate queries that resemble jailbreaks
6. Metrics: detection rate, false positive rate, latency impact
7. Continuous update process as new jailbreak techniques emerge
```
_Use when: Building defenses against LLM jailbreak attacks._

---

**#288 - AI Red Team Exercise Design**

```
Design an AI red team exercise for [AI_SYSTEM]:

System description:
- Purpose: [WHAT_THE_AI_DOES]
- Users: [WHO_USES_IT]
- Data access: [WHAT_DATA_CAN_IT_ACCESS]
- Actions: [WHAT_ACTIONS_CAN_IT_TAKE]
- Safety measures: [CURRENT_GUARDRAILS]

Exercise plan:
1. Threat model: who would attack this AI and why?
2. Attack categories to test:
   - Prompt injection (direct and indirect)
   - Data extraction (training data, system prompts, user data)
   - Capability abuse (using AI tools for unintended purposes)
   - Denial of service (resource exhaustion, infinite loops)
   - Output manipulation (generating harmful, biased, or false content)
   - Privilege escalation (accessing unauthorized tools or data)
3. Test case library: 20+ specific attack scenarios
4. Success criteria for each test case
5. Severity classification for successful attacks
6. Report template for AI red team findings
7. Remediation guidance per vulnerability category
```
_Use when: Conducting structured security testing of AI systems._

---

**#289 - LLM Output Validation Framework**

```
Design an output validation framework for [AI_APPLICATION]:

Application context:
- Output types: [TEXT/CODE/SQL/API_CALLS/STRUCTURED_DATA]
- Risk level: [HIGH/MEDIUM/LOW] - what could go wrong with bad output?
- Downstream actions: [WHAT_HAPPENS_WITH_AI_OUTPUT]

Framework:
1. Content safety validation:
   - Harmful content detection (violence, illegal activities, PII)
   - Hallucination detection (factual accuracy checks)
   - Bias detection (protected characteristics)
2. Technical safety validation:
   - Code output: injection vulnerabilities, unsafe functions, malware patterns
   - SQL output: injection patterns, destructive queries, unauthorized access
   - API calls: parameter validation, authorization checking
3. Business logic validation:
   - Output within expected ranges and formats
   - Consistency with previous outputs and context
   - Compliance with business rules
4. Implementation: pre-output filters, post-output checks, human-in-the-loop criteria
5. Monitoring: output quality metrics, anomaly alerting
6. Feedback loop: improving validation based on detected issues
```
_Use when: Building safety layers around AI system outputs._

---

**#290 - AI Model Security Testing Checklist**

```
Create a security testing checklist for deploying [MODEL_NAME] in production:

Deployment context:
- Hosting: [SELF_HOSTED/API/CLOUD_ML_SERVICE]
- Fine-tuning: [YES/NO - with what data?]
- Integration: [HOW_DOES_IT_CONNECT_TO_OTHER_SYSTEMS]

Checklist:
1. Model provenance: verified source, integrity hash, supply chain audit
2. Training data security: poisoning risk, PII in training data, license compliance
3. Input validation: character limits, encoding handling, rate limiting
4. Prompt injection resistance: test suite execution and results
5. Output filtering: safety classifiers, PII scrubbing, format validation
6. Authentication and authorization: who can access, permission levels
7. Data isolation: user data segregation, context window management
8. Logging: input/output logging with PII handling, audit trail
9. Resource management: cost controls, compute limits, timeout handling
10. Adversarial robustness: perturbation testing for critical decisions
11. Monitoring: performance degradation, drift detection, abuse detection
12. Incident response: AI-specific incident procedures
```
_Use when: Security review before deploying AI models to production._

---

**#291 - Training Data Poisoning Assessment**

```
Assess training data poisoning risks for [AI_SYSTEM]:

Training pipeline:
- Data sources: [LIST_SOURCES]
- Data processing: [PREPROCESSING_STEPS]
- Fine-tuning frequency: [HOW_OFTEN]
- Data volume: [SIZE]

Assessment:
1. Data source trust analysis: controllability and integrity of each source
2. Poisoning vectors:
   - Direct data manipulation (if attacker can modify training data)
   - Indirect poisoning (SEO, content manipulation on scraped sources)
   - Label flipping attacks
   - Backdoor insertion (trigger patterns)
3. Impact scenarios: what would poisoned models do differently?
4. Detection methods:
   - Statistical analysis of training data anomalies
   - Model behavior testing for backdoor triggers
   - Output comparison with baseline model
5. Prevention controls:
   - Data provenance tracking
   - Data validation and sanitization pipeline
   - Human review sampling
   - Canary data for integrity monitoring
6. Monitoring: detecting model drift due to poisoning post-deployment
```
_Use when: Evaluating and mitigating training data poisoning risks._

---

### AI Supply Chain Security

**#292 - AI Model Supply Chain Audit**

```
Audit the supply chain for AI models used by [ORGANIZATION]:

AI inventory:
[LIST_AI_MODELS_AND_THEIR_SOURCES]

Audit:
1. Model provenance:
   - Who created the model? Organizational trust level?
   - Where was it trained? What data was used?
   - Has the model been modified since original release?
   - Hash verification of model weights
2. Distribution channel security:
   - Downloaded from official source vs. mirror?
   - Transport encryption during download
   - Integrity verification (checksums, signatures)
3. Dependency analysis:
   - ML framework version and vulnerabilities
   - Python/library dependencies and CVEs
   - CUDA/GPU driver security
4. Fine-tuning data security:
   - Data sourcing, classification, handling
   - PII and sensitive data in fine-tuning sets
5. Third-party API dependencies:
   - API provider security posture
   - Data handling and retention by provider
   - SLA and incident notification terms
6. Risk rating per model and remediation recommendations
```
_Use when: Auditing AI model supply chain risks._

---

**#293 - AI/ML Pipeline Security Architecture**

```
Design a secure AI/ML pipeline for [ORGANIZATION]:

Pipeline stages:
- Data collection -> Processing -> Training -> Evaluation -> Deployment -> Monitoring

Security requirements per stage:
1. Data collection:
   - Source authentication and integrity verification
   - PII detection and handling
   - Data access controls and audit logging
2. Data processing:
   - Secure compute environment (isolated, restricted network)
   - Data transformation integrity verification
   - Intermediate data encryption
3. Training:
   - Training environment isolation
   - Reproducibility: fixed seeds, logged parameters
   - Resource access controls (GPU clusters, storage)
4. Evaluation:
   - Adversarial testing integration
   - Bias and fairness testing
   - Security benchmark testing
5. Deployment:
   - Model signing and verification
   - Canary deployment with security monitoring
   - Rollback procedures
6. Monitoring:
   - Input/output anomaly detection
   - Model drift monitoring
   - Abuse detection
7. End-to-end: access control, audit logging, incident response
```
_Use when: Designing secure MLOps pipelines._

---

**#294 - Open Source LLM Security Evaluation**

```
Evaluate the security of open source LLM [MODEL_NAME] before organizational deployment:

Model details:
- Source: [HUGGING_FACE/GITHUB/OTHER]
- Parameters: [SIZE]
- Intended use: [USE_CASE]

Evaluation:
1. Source credibility: maintainer reputation, contribution history, funding
2. Model card analysis: documented limitations, safety testing, biases
3. License compliance: usage restrictions, commercial viability
4. Known vulnerabilities: CVEs, security advisories, reported issues
5. Community security: responsible disclosure process, security response history
6. Safety benchmarks: existing safety evaluation results
7. Custom safety testing:
   - Harmful content generation resistance
   - PII leakage from training data
   - Prompt injection susceptibility
   - Instruction following fidelity
8. Deployment security requirements
9. Ongoing monitoring and update strategy
10. Risk acceptance documentation
```
_Use when: Evaluating open source LLMs for organizational use._

---

**#295 - AI Vendor Security Assessment**

```
Assess the security posture of AI vendor [VENDOR_NAME] providing [SERVICE_TYPE]:

Assessment areas:
1. Data handling:
   - Where is our data processed and stored?
   - Data retention: is our input/output data used for training?
   - Data isolation: can other customers access our data?
   - Encryption: at rest, in transit, in processing
2. Model security:
   - How are models protected from extraction?
   - What safety testing has been performed?
   - How are model updates managed and communicated?
3. API security:
   - Authentication mechanisms
   - Rate limiting and abuse prevention
   - Input/output logging and retention
4. Compliance:
   - SOC 2 / ISO 27001 certifications
   - GDPR/CCPA compliance for data processing
   - AI-specific regulations compliance (EU AI Act)
5. Incident response:
   - AI-specific incident notification procedures
   - Model failure response SLA
6. Contractual:
   - Data processing agreement adequacy
   - Liability for AI output errors
   - Exit strategy and data portability
```
_Use when: Evaluating AI service providers for security risks._

---

**#296 - AI Dependency Vulnerability Scanning**

```
Design an AI-specific dependency vulnerability scanning process for [ORGANIZATION]:

AI tech stack:
- ML frameworks: [PYTORCH/TENSORFLOW/JAX/etc.]
- Libraries: [TRANSFORMERS/LANGCHAIN/LLAMAINDEX/etc.]
- Infrastructure: [NVIDIA_DRIVERS/CUDA/DOCKER/K8S]

Process:
1. Dependency inventory: comprehensive list of AI-specific dependencies
2. Vulnerability scanning: tools that cover AI/ML libraries (not just standard SCA)
3. Known vulnerability patterns in AI frameworks:
   - Deserialization vulnerabilities (pickle, model loading)
   - Path traversal in model loading
   - Code execution in notebook environments
   - GPU memory exposure between users
4. Supply chain attacks specific to AI:
   - Malicious models on model hubs
   - Typosquatting in pip/conda packages
   - Compromised model weights
5. Automated scanning pipeline integration
6. Alert triage workflow for AI-specific vulnerabilities
7. Emergency response plan for critical AI framework CVEs
```
_Use when: Securing AI software dependencies._

---

### AI-Powered Threat Detection

**#297 - AI-Powered Anomaly Detection System Design**

```
Design an AI-powered anomaly detection system for [SECURITY_DOMAIN: network traffic / user behavior / application logs]:

Current monitoring:
- Data sources: [LIST]
- Volume: [EVENTS_PER_SECOND]
- Current detection: [RULE_BASED/SIGNATURE/NONE]

System design:
1. Data pipeline: collection, preprocessing, feature engineering
2. Model selection:
   - Unsupervised: Isolation Forest, Autoencoder, DBSCAN
   - Semi-supervised: One-class SVM, Variational Autoencoder
   - Supervised (if labeled data exists): classifier approach
3. Feature engineering for security-relevant features
4. Training methodology: baseline period, data requirements
5. Detection threshold tuning: balancing detection rate vs. false positives
6. Alert generation: severity scoring, context enrichment
7. Analyst feedback loop: how analyst verdicts improve the model
8. Model performance monitoring and retraining triggers
9. Integration with existing SIEM/SOAR
10. Explainability: how to help analysts understand why an alert fired
```
_Use when: Building ML-based anomaly detection for security operations._

---

**#298 - AI-Assisted Threat Hunting Queries**

```
Generate AI-assisted threat hunting hypotheses and queries for [ENVIRONMENT]:

Available data:
- Endpoint telemetry: [EDR_PRODUCT]
- Network data: [NDR/FLOW/PCAP]
- Identity data: [IAM/DIRECTORY]
- Cloud logs: [CLOUD_PROVIDER]

Generate hunting hypotheses using AI-enhanced analysis:
1. User behavior anomaly hunting:
   - "Find users whose access patterns deviate significantly from their peer group in the last 30 days"
   - Provide the analytical approach and query framework
2. Process execution anomaly hunting:
   - "Identify processes that are statistically unusual for their parent process"
   - Feature extraction and scoring methodology
3. Network communication anomaly hunting:
   - "Find internal hosts communicating with destinations their similar peers never contact"
   - Baseline computation and deviation detection approach
4. For each: data requirements, analytical method, expected output, investigation steps
5. How to use LLMs to summarize and prioritize hunting results
```
_Use when: Enhancing threat hunting with AI-driven analysis._

---

**#299 - LLM-Based Log Analysis Assistant**

```
Design a LLM-based log analysis assistant for [SOC_TEAM]:

Purpose: help analysts investigate security events faster

Design:
1. System prompt engineering for the log analysis assistant:
   - Role definition, capabilities, limitations
   - Output format standardization
   - Confidence level communication
2. Input pipeline:
   - How to feed logs to the LLM (chunking, summarization, RAG)
   - Context window management for large log volumes
   - PII handling before LLM processing
3. Analysis capabilities:
   - Log summarization and timeline reconstruction
   - Anomaly identification and explanation
   - IOC extraction and correlation
   - Attack technique classification (MITRE mapping)
4. Safety guardrails:
   - Preventing hallucinated IOCs or false conclusions
   - Confidence scoring requirements
   - Human verification requirements
5. Integration: how it fits into analyst workflow
6. Accuracy measurement and continuous improvement
```
_Use when: Building AI-powered tools to assist security analysts._

---

**#300 - AI-Enhanced Phishing Detection**

```
Design an AI-enhanced phishing detection system for [ORGANIZATION]:

Current email security: [EXISTING_TOOLS]
Email volume: [DAILY_COUNT]

System design:
1. Feature engineering for phishing detection:
   - Header analysis features (sender reputation, authentication results)
   - Content analysis features (urgency language, brand impersonation)
   - URL analysis features (domain age, redirect chains, visual similarity)
   - Attachment analysis features (file type, embedded content)
   - Behavioral features (sender-recipient relationship history)
2. Model architecture:
   - Real-time classification model for inbound email
   - Ensemble approach: combine multiple model types
   - Confidence scoring and threshold management
3. Training data:
   - Labeled phishing corpus development
   - Ongoing training from user reports and analyst verdicts
4. Integration with existing email security gateway
5. User reporting feedback loop
6. Performance metrics: detection rate, false positive rate, user impact
7. Handling zero-day phishing (previously unseen campaigns)
```
_Use when: Building or improving AI-driven phishing detection._

---

**#301 - AI for Vulnerability Prioritization**

```
Design an AI-powered vulnerability prioritization system for [ORGANIZATION]:

Current VM data:
- Scanner: [TOOL]
- Average monthly vulnerability count: [COUNT]
- Current prioritization: [CVSS_ONLY/BASIC_RISK_BASED]

System design:
1. Feature engineering:
   - CVSS score components
   - EPSS exploitation probability
   - Asset criticality (from CMDB)
   - Asset exposure (network position)
   - Threat intelligence overlay (active exploitation campaigns)
   - Compensating controls effectiveness
   - Historical remediation patterns
2. Model type: gradient boosted trees / neural network for risk scoring
3. Training approach:
   - Labeling: which vulnerabilities actually led to incidents?
   - Feature importance analysis
4. Output: prioritized list with explainable risk scores
5. Integration with patch management workflow
6. Analyst override and feedback mechanism
7. Model performance tracking (did we prioritize the right things?)
8. Comparison metrics: AI-prioritized vs. CVSS-only prioritization
```
_Use when: Moving beyond CVSS to intelligent vulnerability prioritization._

---

### Securing AI Agents in Production

**#302 - AI Agent Security Architecture**

```
Design a security architecture for an AI agent [AGENT_NAME] that can [DESCRIBE_CAPABILITIES]:

Agent capabilities:
- Tools it can use: [LIST_TOOLS: database queries, API calls, file operations, web browsing]
- Data it can access: [LIST_DATA_SOURCES]
- Actions it can take: [LIST_ACTIONS]
- User interaction model: [DIRECT_CHAT/AUTOMATED/HUMAN_IN_LOOP]

Security architecture:
1. Identity and authentication:
   - Agent identity: unique credentials per agent instance
   - User authentication: how users authenticate to the agent
   - Tool authentication: how the agent authenticates to downstream tools
2. Authorization:
   - Least privilege per tool and data source
   - Per-user permission scoping (agent inherits user's permissions)
   - Action-level authorization (which users can trigger which actions)
3. Input security:
   - Prompt injection defenses (input sanitization, instruction hierarchy)
   - Rate limiting per user
   - Content filtering on user inputs
4. Output security:
   - Output validation before action execution
   - Human approval for high-risk actions
   - PII filtering in responses
5. Monitoring:
   - All agent actions logged with full context
   - Anomaly detection on agent behavior
   - Cost and resource usage monitoring
6. Isolation:
   - Agent execution environment sandboxing
   - Network segmentation for agent infrastructure
   - Data boundary enforcement
```
_Use when: Designing security controls for AI agents with tool access._

---

**#303 - AI Agent Permissions and Guardrails Framework**

```
Create a permissions and guardrails framework for AI agents at [ORGANIZATION]:

Agent types in use:
[LIST_AGENTS_AND_THEIR_FUNCTIONS]

Framework:
1. Permission tiers:
   - Tier 1 (Read-only): query data, generate reports
   - Tier 2 (Limited write): create tickets, send notifications
   - Tier 3 (Operational): modify configurations, deploy changes
   - Tier 4 (Critical): access sensitive data, financial transactions
2. Guardrails per tier:
   - Input validation rules
   - Action confirmation requirements (auto, notify, approve)
   - Rate limits and budget caps
   - Time-of-day restrictions
   - Scope boundaries (which systems, which data)
3. Escalation triggers: when must the agent hand off to a human?
4. Kill switch: how to immediately disable an agent
5. Audit trail requirements per tier
6. Permission review cadence and process
7. Incident scenarios: what to do when an agent acts unexpectedly
```
_Use when: Establishing governance for AI agents across the organization._

---

**#304 - AI Agent Monitoring and Observability**

```
Design a monitoring and observability system for AI agents in production at [ORGANIZATION]:

Agents to monitor:
[LIST_AGENTS_WITH_FUNCTIONS]

Monitoring dimensions:
1. Operational monitoring:
   - Request/response latency and error rates
   - Token usage and cost tracking
   - Availability and uptime
   - Queue depth and processing backlog
2. Security monitoring:
   - Prompt injection attempt detection
   - Jailbreak attempt detection
   - Unauthorized action attempts
   - Data exfiltration attempts through agent
   - Anomalous tool usage patterns
3. Quality monitoring:
   - Output accuracy and relevance scoring
   - Hallucination detection rate
   - User satisfaction metrics
   - Task completion rate
4. Compliance monitoring:
   - PII handling compliance
   - Data boundary adherence
   - Policy compliance in agent responses
5. Alerting rules for each monitoring dimension
6. Dashboard design for AI operations team
7. Incident response playbook for agent-specific incidents
```
_Use when: Building observability for AI agents in production._

---

**#305 - Secure Tool-Use Implementation for AI Agents**

```
Design secure tool-use implementation for an AI agent that needs to use [LIST_TOOLS]:

Tools:
[DESCRIBE_EACH_TOOL_AND_ITS_CAPABILITIES]

Security implementation:
1. Tool registration and authentication:
   - API key management for each tool
   - OAuth/service account setup
   - Credential rotation procedures
2. Input validation per tool:
   - Parameter type and range validation
   - Injection prevention for each tool's input format
   - Maximum payload size limits
3. Output validation per tool:
   - Expected response format validation
   - Sensitive data detection in tool responses
   - Error handling for tool failures
4. Permission boundaries:
   - Read vs. write access per tool
   - Resource-level access controls
   - Time-based access restrictions
5. Transaction management:
   - Rollback capabilities for write operations
   - Idempotency requirements
   - Conflict resolution
6. Monitoring:
   - Tool usage audit logging
   - Anomaly detection on usage patterns
   - Cost tracking per tool
7. Failure modes:
   - Graceful degradation when tools are unavailable
   - Fallback behavior specifications
   - Human escalation triggers
```
_Use when: Implementing secure tool integration for AI agents._

---

**#306 - AI Agent Incident Response Playbook**

```
Create an incident response playbook for AI agent-related security incidents:

Agent inventory: [LIST_PRODUCTION_AGENTS]

Incident categories:
1. Prompt injection exploitation:
   - Detection indicators
   - Containment: disable agent, block user, preserve logs
   - Investigation: analyze conversation history, identify injection vector
   - Remediation: patch input validation, update guardrails
   - Recovery: re-enable with enhanced controls

2. Data leakage through agent:
   - Detection: PII in outputs, unauthorized data access patterns
   - Containment: disable agent, assess data exposure scope
   - Investigation: audit all agent interactions for the time period
   - Notification: data breach assessment for regulatory reporting
   - Remediation: tighten data access, improve output filtering

3. Agent performing unauthorized actions:
   - Detection: action logging anomalies, permission violations
   - Containment: kill switch activation, rollback actions
   - Investigation: root cause (prompt injection, misconfiguration, model drift)
   - Remediation: permission adjustment, guardrail enhancement

4. Model compromise or supply chain attack:
   - Detection: model behavior change, unexpected outputs
   - Containment: roll back to known-good model version
   - Investigation: model provenance verification
   - Remediation: re-validate model integrity

For each: severity classification, escalation path, communication template.
```
_Use when: Building IR capabilities for AI agent security incidents._

---

**#307 - AI Agent Penetration Testing Methodology**

```
Design a penetration testing methodology for AI agents deployed at [ORGANIZATION]:

Agent under test: [AGENT_NAME]
Capabilities: [WHAT_IT_CAN_DO]
Security controls: [EXISTING_DEFENSES]

Testing methodology:
1. Reconnaissance:
   - System prompt extraction techniques
   - Capability enumeration through probing
   - Tool and data source discovery
2. Prompt injection attacks:
   - Direct injection: 20 test cases (instruction override, role manipulation)
   - Indirect injection: 10 test cases (via documents, web pages, database records)
   - Multi-turn attacks: 10 test cases (gradual boundary erosion)
3. Authorization testing:
   - Privilege escalation through tool chaining
   - Cross-user data access attempts
   - Permission boundary bypass
4. Data extraction:
   - Training data extraction attempts
   - System prompt and configuration extraction
   - Other users' conversation data extraction
5. Denial of service:
   - Resource exhaustion attacks
   - Infinite loop triggers
   - Cost amplification attacks
6. Business logic abuse:
   - Using the agent for unintended purposes
   - Manipulating agent decisions for attacker benefit
7. Report template with AI-specific severity ratings
```
_Use when: Penetration testing AI agent deployments._

---

**#308 - Responsible AI Security Policy**

```
Draft a Responsible AI Security Policy for [ORGANIZATION]:

AI usage:
- Internal AI tools: [LIST]
- Customer-facing AI: [LIST]
- AI development: [YES/NO]

Policy sections:
1. Purpose and scope: what AI systems and activities this covers
2. AI governance structure: roles, responsibilities, review boards
3. AI risk classification: how to categorize AI by risk level
4. Security requirements per risk level:
   - Low risk: basic logging, annual review
   - Medium risk: enhanced monitoring, quarterly testing
   - High risk: continuous monitoring, human oversight, external audit
5. Data requirements: training data governance, user data handling
6. Testing requirements: security testing, bias testing, safety testing
7. Incident management: AI-specific incident classification and response
8. Third-party AI: vendor assessment requirements
9. Employee AI use: acceptable use guidelines, approved tools
10. Regulatory compliance: EU AI Act, NIST AI RMF alignment
11. Training: AI security awareness for developers and users
12. Review and update cadence
```
_Use when: Establishing organizational AI security governance._

---

**#309 - EU AI Act Compliance Assessment**

```
Assess [ORGANIZATION]'s AI systems against EU AI Act requirements:

AI system inventory:
[LIST_AI_SYSTEMS_WITH_DESCRIPTIONS]

Assessment:
1. Risk classification per system:
   - Unacceptable risk: is any system in this category?
   - High risk: Annex III assessment per system
   - Limited risk: transparency obligation assessment
   - Minimal risk: voluntary requirements
2. For high-risk systems:
   - Risk management system requirements (Art. 9)
   - Data governance requirements (Art. 10)
   - Technical documentation (Art. 11)
   - Record-keeping (Art. 12)
   - Transparency and information to users (Art. 13)
   - Human oversight provisions (Art. 14)
   - Accuracy, robustness, cybersecurity (Art. 15)
3. Gap analysis per system
4. Compliance roadmap with deadlines
5. Resource requirements for compliance
6. Vendor compliance requirements
```
_Use when: Assessing AI system compliance with the EU AI Act._

---

**#310 - AI Agent Data Loss Prevention**

```
Design a data loss prevention strategy for AI agents at [ORGANIZATION]:

Data at risk:
- PII types: [LIST]
- Confidential business data: [CATEGORIES]
- Regulated data: [TYPES_AND_REGULATIONS]

DLP strategy:
1. Input DLP:
   - Detect and handle PII in user inputs before LLM processing
   - Sensitive document upload handling
   - Data classification of input content
2. Context DLP:
   - RAG retrieval filtering based on user permissions
   - Database query result redaction
   - API response filtering before LLM processing
3. Output DLP:
   - PII detection in agent responses
   - Confidential data detection in outputs
   - Code/credential leak prevention in generated content
4. Storage DLP:
   - Conversation history retention and purging
   - Log data PII handling
   - Fine-tuning data governance
5. Monitoring:
   - DLP violation alerting and tracking
   - Volume analysis: how much sensitive data flows through agents
6. Implementation: tool recommendations and architecture
```
_Use when: Preventing data loss through AI agent channels._

---

**#311 - Multi-Agent System Security**

```
Design security architecture for a multi-agent system at [ORGANIZATION]:

System:
- Agent count: [NUMBER]
- Agent types: [LIST_WITH_CAPABILITIES]
- Communication pattern: [HIERARCHICAL/MESH/PIPELINE]
- Orchestration: [FRAMEWORK]

Security architecture:
1. Agent identity and authentication:
   - Unique identity per agent
   - Inter-agent authentication mechanism
   - Trust hierarchy between agents
2. Communication security:
   - Message encryption between agents
   - Message integrity verification
   - Replay attack prevention
3. Authorization:
   - Which agents can communicate with which
   - What actions each agent can request of others
   - Permission delegation rules (can an agent grant permissions?)
4. Consensus and validation:
   - How to handle conflicting agent outputs
   - Voting/verification for critical decisions
   - Disagreement escalation to humans
5. Isolation:
   - Agent sandbox boundaries
   - Shared resource access controls
   - Failure isolation (one compromised agent doesn't compromise all)
6. Monitoring:
   - Inter-agent communication logging
   - Behavioral anomaly detection per agent
   - System-level health monitoring
7. Incident response for multi-agent compromise scenarios
```
_Use when: Securing multi-agent AI architectures._

---

**#312 - AI Model Access Control Design**

```
Design an access control system for AI models at [ORGANIZATION]:

Models:
[LIST_MODELS_WITH_CAPABILITIES_AND_DATA_ACCESS]

Access control design:
1. Model-level access:
   - Who can use which models (role-based)
   - API key management and rotation
   - Usage quotas per user/team
2. Capability-level access:
   - Which model features are available to which users
   - Tool access control per user role
   - Fine-grained permission for model capabilities
3. Data-level access:
   - RAG data source permissions per user
   - Query filtering based on user authorization
   - Output redaction based on user clearance
4. Administrative access:
   - Model deployment and update permissions
   - Configuration change authorization
   - Monitoring and log access
5. Audit:
   - Access logging for all interactions
   - Regular access review process
   - Segregation of duties enforcement
6. Integration with existing IAM ([IAM_PLATFORM])
```
_Use when: Implementing fine-grained access control for AI systems._

---

**#313 - Adversarial Machine Learning Defense**

```
Design defenses against adversarial machine learning attacks for [ML_SYSTEM]:

System details:
- Model type: [CLASSIFICATION/DETECTION/NLP/GENERATION]
- Input type: [IMAGES/TEXT/TABULAR/MULTI_MODAL]
- Business criticality: [HIGH/MEDIUM/LOW]

Defenses:
1. Evasion attacks (adversarial examples):
   - Input preprocessing defenses (squeezing, smoothing, compression)
   - Adversarial training: generating and training on adversarial examples
   - Detection: identifying adversarial inputs before classification
   - Ensemble methods: multiple models with diversity
2. Poisoning attacks:
   - Data sanitization pipeline
   - Anomaly detection in training data
   - Certified robust training methods
3. Model extraction attacks:
   - Query rate limiting and monitoring
   - Watermarking model outputs
   - API response perturbation
4. Model inversion / membership inference:
   - Differential privacy in training
   - Output confidence score limiting
   - Access control on prediction API
5. Testing: how to validate defenses with adversarial testing
6. Monitoring: detecting adversarial attacks in production
```
_Use when: Hardening ML systems against adversarial attacks._

---

**#314 - AI-Specific Threat Modeling**

```
Conduct a threat model for AI system [SYSTEM_NAME]:

System description:
- Purpose: [WHAT_IT_DOES]
- Architecture: [COMPONENTS_AND_DATA_FLOW]
- Users: [WHO_INTERACTS_WITH_IT]
- Data: [WHAT_DATA_IT_PROCESSES]

Threat model (STRIDE adapted for AI):
1. Spoofing:
   - Can users impersonate other users to the AI?
   - Can external content impersonate trusted instructions?
   - Can a compromised model impersonate a legitimate model?
2. Tampering:
   - Can training data be tampered with?
   - Can model weights be modified?
   - Can inputs be manipulated to change outputs?
3. Repudiation:
   - Are AI actions attributable to the requesting user?
   - Is there sufficient logging of AI decisions?
4. Information Disclosure:
   - Can the AI leak training data, system prompts, or user data?
   - Can model extraction reveal proprietary knowledge?
5. Denial of Service:
   - Can the AI be overwhelmed or made unavailable?
   - Can it be forced into expensive computation loops?
6. Elevation of Privilege:
   - Can users make the AI perform actions beyond their authorization?
   - Can the AI be tricked into escalating its own privileges?

For each threat: risk rating, existing mitigations, recommended additional controls.
```
_Use when: Systematic threat modeling for AI systems._

---

**#315 - AI Safety Testing in CI/CD Pipeline**

```
Design AI safety testing integration into the CI/CD pipeline for [AI_APPLICATION]:

Pipeline: [CI_CD_PLATFORM]
AI components: [MODELS, PROMPTS, TOOLS, GUARDRAILS]

Testing stages:
1. Pre-commit:
   - Prompt template linting (security rules)
   - Hardcoded credential detection in AI configs
   - System prompt change review requirements
2. Build stage:
   - Model integrity verification (hash check against registry)
   - Dependency vulnerability scanning (ML-specific packages)
   - Configuration validation
3. Test stage:
   - Automated prompt injection test suite execution
   - Safety benchmark testing (toxicity, bias, refusal)
   - Tool-use security test suite
   - Regression testing against known vulnerabilities
   - Performance/cost boundary testing
4. Staging:
   - Red team testing window
   - Human evaluation of sample outputs
   - Load testing with security monitoring
5. Production:
   - Canary deployment with enhanced monitoring
   - A/B comparison with previous version
   - Automated rollback triggers
6. Continuous:
   - Production safety monitoring
   - Drift detection
   - User feedback integration
```
_Use when: Integrating AI security testing into development pipelines._

---

**#316 - RAG System Security Assessment**

```
Assess the security of a Retrieval-Augmented Generation (RAG) system [SYSTEM_NAME]:

RAG architecture:
- Vector database: [SOLUTION]
- Embedding model: [MODEL]
- LLM: [MODEL]
- Document sources: [LIST]
- Users: [WHO_USES_IT]

Assessment:
1. Document ingestion security:
   - Can malicious documents be ingested containing prompt injections?
   - Is document source verified and trusted?
   - Are documents sanitized before embedding?
2. Retrieval security:
   - Access control: do retrieval results respect user permissions?
   - Can retrieval be manipulated to surface specific content?
   - Semantic search poisoning risks
3. Generation security:
   - Indirect prompt injection via retrieved content
   - Hallucination risks: generating false info not in sources
   - Citation accuracy and verifiability
4. Data security:
   - Vector database access controls
   - Embedding reversal risks (can embeddings leak source content?)
   - Cross-tenant data leakage in multi-tenant RAG
5. Infrastructure:
   - API security for RAG endpoints
   - Cost and resource management
6. Testing plan: specific test cases for each risk area
```
_Use when: Evaluating security of RAG-based AI systems._

---

**#317 - AI Governance Framework for Security Teams**

```
Create an AI governance framework for the security team at [ORGANIZATION]:

Current AI usage in security:
[LIST_AI_TOOLS_USED_BY_SECURITY_TEAM]

Framework:
1. AI tool inventory and classification:
   - What AI tools do we use and for what purpose?
   - What data do they have access to?
   - What decisions do they influence?
2. Risk assessment per tool:
   - Data sensitivity exposure
   - Decision impact criticality
   - Vendor risk
3. Acceptable use guidelines:
   - What data can/cannot be entered into AI tools
   - When to use AI assistance vs. manual analysis
   - How to validate AI-generated outputs
4. Quality assurance:
   - Accuracy measurement for AI-assisted decisions
   - Regular calibration against human-only results
5. Training requirements:
   - AI tool security awareness
   - Prompt engineering for security professionals
   - Recognizing AI limitations and errors
6. Vendor management:
   - AI vendor security assessment requirements
   - Data processing agreements
   - Incident notification requirements
7. Continuous improvement:
   - AI tool effectiveness metrics
   - New tool evaluation process
   - Deprecation criteria
```
_Use when: Governing the security team's own use of AI tools._

---

**#318 - Agentic Workflow Security Patterns**

```
Document security patterns for common agentic AI workflows at [ORGANIZATION]:

Pattern 1: Database Query Agent
- Security pattern: parameterized queries only, read-only connection, result row limits, PII redaction on output
- Anti-patterns: direct SQL from LLM output, write access, unlimited result sets

Pattern 2: Code Execution Agent
- Security pattern: sandboxed execution, no network access, resource limits, output validation
- Anti-patterns: unrestricted code execution, persistent file system access, network access

Pattern 3: Email/Communication Agent
- Security pattern: approval workflow for external sends, recipient validation, content review, rate limiting
- Anti-patterns: auto-send without review, bulk sending, arbitrary recipient addressing

Pattern 4: Document Processing Agent
- Security pattern: input sanitization, malware scanning, size limits, format validation
- Anti-patterns: processing untrusted files without scanning, unrestricted file types

Pattern 5: Web Browsing Agent
- Security pattern: URL allowlisting, content sanitization, no credential storage, session isolation
- Anti-patterns: unrestricted browsing, auto-following redirects to any domain, cookie persistence

For each pattern: implementation checklist, testing requirements, and monitoring approach.
```
_Use when: Implementing standard security patterns for AI agent capabilities._

---

**#319 - AI Compliance and Audit Trail Design**

```
Design an AI audit trail system for [ORGANIZATION] to meet compliance and investigation needs:

Requirements:
- Regulations: [EU_AI_ACT/NIST_AI_RMF/INDUSTRY_SPECIFIC]
- AI systems: [LIST]
- Retention: [PERIOD]

Audit trail design:
1. What to log per AI interaction:
   - Timestamp, user identity, session ID
   - Input (with PII handling considerations)
   - Model version, system prompt version
   - Retrieved context (for RAG systems)
   - Output (with PII handling)
   - Tool calls and their results
   - Token usage and cost
   - Safety filter triggers
2. What to log per AI system change:
   - Model updates, prompt changes, config changes
   - Who approved, when, what was the testing result
3. Storage:
   - Tamper-proof logging architecture
   - Retention and purging policies
   - Access control for audit logs
4. Analysis:
   - Audit query capabilities
   - Regular audit report generation
   - Anomaly detection on audit data
5. Compliance mapping: how this meets each regulation's requirements
```
_Use when: Building compliant audit trails for AI systems._

---

**#320 - AI Incident Classification and Response Matrix**

```
Create an AI-specific incident classification and response matrix for [ORGANIZATION]:

Classification:
| Category | Description | Severity | Response SLA | Example |
|---|---|---|---|---|
| AI-SEC-1 | Prompt injection with data access | Critical | 30 min | Agent returns other users' data via injection |
| AI-SEC-2 | Model jailbreak (harmful output) | High | 1 hour | Agent generates harmful content |
| AI-SEC-3 | Unauthorized action execution | Critical | 30 min | Agent modifies production database without approval |
| AI-SEC-4 | Data leakage through AI | High | 1 hour | PII in model output not caught by filters |
| AI-SEC-5 | Model supply chain compromise | Critical | 30 min | Downloaded model contains backdoor |
| AI-SEC-6 | Cost/resource abuse | Medium | 4 hours | Agent in infinite loop consuming API credits |
| AI-SEC-7 | Bias/fairness incident | High | 4 hours | AI discriminates in customer-facing decision |
| AI-SEC-8 | Hallucination with business impact | Medium | 4 hours | Agent provides false information acted upon |

For each category: detection method, containment steps, investigation procedures, remediation, communication requirements.
```
_Use when: Classifying and responding to AI-specific security incidents._

---

**#321 - Prompt Engineering Security Guide**

```
Create a prompt engineering security guide for developers at [ORGANIZATION]:

Guide:
1. System prompt security:
   - Do: use clear instruction hierarchy, separate system/user context
   - Don't: include secrets, API keys, or database schemas in system prompts
   - Template: secure system prompt structure with [EXAMPLES]
2. Input handling:
   - Do: sanitize user inputs, enforce character limits, validate formats
   - Don't: concatenate user input directly into system prompts
   - Template: safe input injection pattern with [EXAMPLES]
3. Output handling:
   - Do: validate output format, check for PII, enforce response boundaries
   - Don't: execute AI-generated code without validation
   - Template: output validation pipeline with [EXAMPLES]
4. Context management:
   - Do: scope context to minimum necessary, implement permission checks
   - Don't: include full database contents in context, share cross-user context
5. Common vulnerability patterns:
   - Prompt injection via user input: [5 EXAMPLES WITH FIXES]
   - Indirect injection via retrieved content: [3 EXAMPLES WITH FIXES]
   - Data exfiltration via output channels: [3 EXAMPLES WITH FIXES]
6. Testing requirements before deployment
7. Security review checklist for new prompts
```
_Use when: Training developers on secure AI application development._

---

**#322 - AI Model Versioning and Rollback Security**

```
Design a secure model versioning and rollback system for [ORGANIZATION]:

AI systems:
[LIST_SYSTEMS_WITH_UPDATE_FREQUENCY]

System design:
1. Model registry:
   - Version naming convention
   - Metadata requirements per version (hash, training data version, test results)
   - Access control to model registry
2. Version validation:
   - Security test suite that must pass before version promotion
   - Safety benchmark comparison with previous version
   - Performance regression testing
   - Approval workflow for version promotion
3. Deployment:
   - Blue/green deployment with security monitoring
   - Canary rollout with anomaly detection
   - Feature flags for gradual rollout
4. Rollback:
   - Automated rollback triggers (safety score drop, error rate spike)
   - Manual rollback procedure (< 5 minutes)
   - Data consistency handling during rollback
   - Communication template for rollback events
5. Audit:
   - Full history of model versions in production
   - Reason tracking for each version change
   - Compliance evidence for model lifecycle management
```
_Use when: Managing AI model versions with security controls._

---

**#323 - AI Security Maturity Model**

```
Assess AI security maturity for [ORGANIZATION] across these dimensions:

Dimension 1: AI Governance (1-5)
- Level 1: No formal AI governance
- Level 3: AI inventory, policies, risk classification
- Level 5: Comprehensive AI governance with continuous monitoring

Dimension 2: AI Threat Management (1-5)
- Level 1: No AI-specific threat management
- Level 3: Prompt injection testing, basic guardrails
- Level 5: Continuous AI red teaming, adaptive defenses

Dimension 3: AI Data Security (1-5)
- Level 1: No AI-specific data controls
- Level 3: Training data governance, PII handling
- Level 5: Differential privacy, comprehensive DLP for AI

Dimension 4: AI Monitoring (1-5)
- Level 1: No AI-specific monitoring
- Level 3: Input/output logging, basic anomaly detection
- Level 5: Real-time safety monitoring, automated response

Dimension 5: AI Supply Chain (1-5)
- Level 1: No model provenance tracking
- Level 3: Model verification, dependency scanning
- Level 5: Complete supply chain attestation, continuous validation

For each dimension: current level assessment, evidence, target level, and improvement roadmap.
```
_Use when: Assessing and benchmarking organizational AI security maturity._

---

---

## Quick Reference Index

### By Skill Level

**Beginner-Friendly Prompts:** #046, #052, #054, #088, #095, #096, #102, #168, #178, #206, #244, #253
**Intermediate Prompts:** #001-#006, #047-#051, #056-#060, #089-#094, #130-#140, #169-#177, #207-#218, #245-#256
**Advanced Prompts:** #007-#045, #061-#087, #097-#129, #141-#167, #180-#205, #219-#243, #257-#285, #286-#323

### By Use Frequency

**Daily SOC Use:** #046, #047, #052, #054, #088-#100, #102-#105, #120-#129, #244, #248
**Weekly Planning:** #048, #061, #066, #097, #103, #105, #108, #259, #260
**Monthly/Quarterly Reviews:** #074, #081, #105, #116, #117, #229, #246, #252, #273
**Project-Based:** #001-#045, #056-#060, #130-#167, #206-#243, #253-#285, #286-#323

---

*cybersec-mcp | Version 1.0 | May 2026*
*Total prompts: 323*
*Categories: 8*
*Built for security professionals who use AI every day.*

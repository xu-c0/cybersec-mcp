// CyberPrompt 300+ — Scenario Workflow Definitions

const SCENARIOS = [
  {
    id: 'web-app-pentest',
    name: 'Web App Penetration Test',
    icon: 'globe',
    description: 'End-to-end web application penetration testing workflow from recon through reporting.',
    variables: [
      { key: 'TARGET_DOMAIN', label: 'Target Domain', placeholder: 'e.g. example.com' },
      { key: 'TARGET_WEB_APP', label: 'Target Web App URL', placeholder: 'e.g. https://app.example.com' },
      { key: 'TARGET_APP', label: 'Application Name', placeholder: 'e.g. ExampleApp v2.1' },
      { key: 'DB_TYPE', label: 'Database Type', placeholder: 'e.g. MySQL, PostgreSQL' }
    ],
    steps: [
      { phase: 'Reconnaissance', promptId: 1, description: 'Enumerate subdomains to map the attack surface.' },
      { phase: 'Attack Surface Mapping', promptId: 4, description: 'Map discovered endpoints and prioritize testing targets.' },
      { phase: 'Technology Fingerprinting', promptId: 5, description: 'Identify services, versions, and technologies in use.' },
      { phase: 'API Security Testing', promptId: 12, description: 'Test API endpoints for authentication, authorization, and injection flaws.' },
      { phase: 'Exploitation', promptId: 7, description: 'Exploit confirmed vulnerabilities with structured methodology.' },
      { phase: 'Post-Exploitation', promptId: 40, description: 'Collect evidence and document findings thoroughly.' },
      { phase: 'Reporting', promptId: 25, description: 'Structure the final deliverable with actionable recommendations.' }
    ]
  },
  {
    id: 'incident-response',
    name: 'Incident Response',
    icon: 'siren',
    description: 'Structured incident response workflow from detection through lessons learned.',
    variables: [
      { key: 'ORGANIZATION', label: 'Organization Name', placeholder: 'e.g. Acme Corp' },
      { key: 'INCIDENT_TYPE', label: 'Incident Type', placeholder: 'e.g. Ransomware, BEC, Data Breach' },
      { key: 'SIEM_PLATFORM', label: 'SIEM Platform', placeholder: 'e.g. Splunk, Sentinel, Elastic' },
      { key: 'EDR_PRODUCT', label: 'EDR Product', placeholder: 'e.g. CrowdStrike, SentinelOne' }
    ],
    steps: [
      { phase: 'Detection & Triage', promptId: 95, description: 'Triage the initial alert and determine if it is a true positive.' },
      { phase: 'Log Investigation', promptId: 46, description: 'Analyze authentication and system logs for indicators of compromise.' },
      { phase: 'Severity Classification', promptId: 58, description: 'Classify the incident severity and determine response level.' },
      { phase: 'Containment', promptId: 59, description: 'Execute containment strategy to limit the blast radius.' },
      { phase: 'Eradication & Recovery', promptId: 56, description: 'Follow the ransomware/incident playbook for eradication and recovery.' },
      { phase: 'Communications', promptId: 60, description: 'Draft internal, executive, and external communications.' },
      { phase: 'Lessons Learned', promptId: 80, description: 'Facilitate a blameless post-mortem to drive improvements.' }
    ]
  },
  {
    id: 'cloud-audit',
    name: 'Cloud Security Audit',
    icon: 'cloud',
    description: 'Comprehensive cloud security audit covering IAM, networking, storage, compute, and compliance.',
    variables: [
      { key: 'CLOUD_PROVIDER', label: 'Cloud Provider', placeholder: 'e.g. AWS, Azure, GCP' },
      { key: 'ACCOUNT_ID', label: 'Account / Subscription ID', placeholder: 'e.g. 123456789012' },
      { key: 'REGION', label: 'Primary Region', placeholder: 'e.g. us-east-1, eastus' }
    ],
    steps: [
      { phase: 'IAM Review', promptId: 120, description: 'Review IAM policies for least privilege and escalation paths.' },
      { phase: 'Network Security', promptId: 125, description: 'Assess VPC/VNet configuration, security groups, and network ACLs.' },
      { phase: 'Storage Security', promptId: 123, description: 'Audit storage bucket permissions, encryption, and access logging.' },
      { phase: 'Database Security', promptId: 139, description: 'Audit cloud database configurations for exposure and encryption.' },
      { phase: 'Logging & Monitoring', promptId: 145, description: 'Assess forensic readiness and logging completeness.' },
      { phase: 'Compliance', promptId: 142, description: 'Automate compliance benchmark checks for your framework.' }
    ]
  },
  {
    id: 'bug-bounty-recon',
    name: 'Bug Bounty Recon',
    icon: 'target',
    description: 'Structured reconnaissance workflow for bug bounty hunting.',
    variables: [
      { key: 'TARGET_DOMAIN', label: 'Target Domain', placeholder: 'e.g. target.com' },
      { key: 'TARGET_ORGANIZATION', label: 'Target Organization', placeholder: 'e.g. Target Inc.' }
    ],
    steps: [
      { phase: 'Subdomain Enumeration', promptId: 1, description: 'Enumerate subdomains using passive and active techniques.' },
      { phase: 'Port Scanning', promptId: 2, description: 'Analyze open ports and identify running services.' },
      { phase: 'Technology Fingerprinting', promptId: 153, description: 'Use Shodan/Censys to discover exposed services and technologies.' },
      { phase: 'OSINT Gathering', promptId: 148, description: 'Compile domain intelligence including DNS, WHOIS, and certificates.' },
      { phase: 'Attack Surface Mapping', promptId: 4, description: 'Map discovered endpoints and prioritize vulnerability testing.' },
      { phase: 'Vulnerability Assessment', promptId: 253, description: 'Document and report findings with clear reproduction steps.' }
    ]
  },
  {
    id: 'compliance-audit',
    name: 'Compliance Audit (ISO 27001)',
    icon: 'clipboard-check',
    description: 'ISO 27001 compliance audit workflow from scoping through documentation.',
    variables: [
      { key: 'ORGANIZATION', label: 'Organization Name', placeholder: 'e.g. Acme Corp' },
      { key: 'COMPLIANCE_FRAMEWORK', label: 'Framework', placeholder: 'e.g. ISO 27001, SOC 2, PCI DSS' }
    ],
    steps: [
      { phase: 'Scope Definition', promptId: 207, description: 'Generate the Statement of Applicability and define ISMS scope.' },
      { phase: 'Gap Analysis', promptId: 208, description: 'Conduct maturity assessment against the NIST CSF framework.' },
      { phase: 'Risk Assessment', promptId: 213, description: 'Facilitate a risk assessment workshop with stakeholders.' },
      { phase: 'Controls Review', promptId: 222, description: 'Collect and organize evidence for each control area.' },
      { phase: 'Policy Framework', promptId: 206, description: 'Draft or review the information security policy framework.' },
      { phase: 'Maturity Report', promptId: 233, description: 'Produce the overall security maturity assessment report.' }
    ]
  },
  {
    id: 'threat-hunting',
    name: 'Threat Hunting',
    icon: 'radar',
    description: 'Proactive threat hunting workflow from hypothesis generation through response.',
    variables: [
      { key: 'ORGANIZATION', label: 'Organization Name', placeholder: 'e.g. Acme Corp' },
      { key: 'SIEM_PLATFORM', label: 'SIEM Platform', placeholder: 'e.g. Splunk, Sentinel, Elastic' },
      { key: 'INDUSTRY', label: 'Industry', placeholder: 'e.g. Finance, Healthcare, Technology' }
    ],
    steps: [
      { phase: 'Hypothesis Generation', promptId: 48, description: 'Generate threat hunting hypotheses based on threat intelligence.' },
      { phase: 'Data Collection', promptId: 91, description: 'Write SIEM queries to detect lateral movement indicators.' },
      { phase: 'DNS Analysis', promptId: 49, description: 'Analyze DNS logs for tunneling, DGA, and beaconing patterns.' },
      { phase: 'Persistence Detection', promptId: 53, description: 'Hunt for persistence mechanisms across endpoints.' },
      { phase: 'Investigation', promptId: 50, description: 'Perform forensic analysis on suspected compromised hosts.' },
      { phase: 'Detection Engineering', promptId: 62, description: 'Write detection rules for confirmed threat patterns.' }
    ]
  },
  {
    id: 'ai-security',
    name: 'AI Security Assessment',
    icon: 'bot',
    description: 'Comprehensive AI security assessment from inventory through monitoring.',
    variables: [
      { key: 'ORGANIZATION', label: 'Organization Name', placeholder: 'e.g. Acme Corp' },
      { key: 'AI_APPLICATION', label: 'AI Application Name', placeholder: 'e.g. CustomerBot, CodeAssist' },
      { key: 'AI_SYSTEM', label: 'AI System Description', placeholder: 'e.g. RAG-based chatbot with database access' }
    ],
    steps: [
      { phase: 'Model Inventory', promptId: 292, description: 'Audit the AI model supply chain and provenance.' },
      { phase: 'Prompt Injection Testing', promptId: 286, description: 'Test for direct and indirect prompt injection vulnerabilities.' },
      { phase: 'Data Pipeline Security', promptId: 316, description: 'Assess RAG system security including retrieval and generation.' },
      { phase: 'Access Control', promptId: 303, description: 'Establish permissions and guardrails framework for AI agents.' },
      { phase: 'Threat Modeling', promptId: 314, description: 'Conduct AI-specific threat modeling using STRIDE adaptation.' },
      { phase: 'Monitoring', promptId: 304, description: 'Design monitoring and observability for AI agents in production.' }
    ]
  }
];

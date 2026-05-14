// cybersec-mcp — Internationalization (i18n)

const I18N = {
  en: {
    // Sidebar
    sidebarBrand: 'Cybersecurity AI Toolkit',
    categories: 'Categories',
    totalPrompts: 'Total Prompts',
    allPrompts: 'Dashboard',

    // Search & Filters
    searchPlaceholder: 'Search prompts... (Ctrl+K)',
    allLevels: 'All Levels',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',

    // Home - Hero
    heroDesc: 'The ultimate AI prompt collection for cybersecurity professionals. Select a scenario, browse categories, or search across all {count} prompts.',

    // Value Stats
    valueStat1Number: 'Instant',
    valueStat1Label: 'Expert-Level Output',
    valueStat1Desc: 'Skip the trial-and-error \u2014 get structured, actionable results from your first prompt',
    valueStat2Label: 'Battle-Tested Prompts',
    valueStat2Desc: 'Covering 8 security domains from Red Team to AI Agent Security',
    valueStat3Label: 'Ready-Made Workflows',
    valueStat3Desc: 'Complete scenario chains \u2014 just fill in the variables and go',

    // Before/After Demo
    seeTheDifference: 'See the Difference',
    beforeVsAfter: 'Before vs After',
    withoutCyberPrompt: 'Without cybersec-mcp',
    withCyberPrompt: 'With cybersec-mcp',

    // Demo cards
    demoTitle1: 'Incident Response Triage',
    demoTitle2: 'Cloud Security Audit',
    demoTitle3: 'Vulnerability Report',
    demoBefore1Prompt: 'Help me respond to a security incident.',
    demoBefore1Result: 'Generic advice about incident response frameworks. Vague steps. No actionable commands. You spend time crafting follow-up questions.',
    demoBefore1Time: 'Multiple iterations needed',
    demoAfter1Prompt: 'Our SIEM flagged unusual outbound traffic from [HOST] to [DEST_IP] on port 443. Analyze: 1) IOC extraction 2) Lateral movement check 3) Containment steps 4) Evidence preservation commands...',
    demoAfter1Result: 'Structured triage with specific SIEM queries, forensic commands (volatility, tcpdump), containment playbook, and evidence chain-of-custody template. Ready to execute immediately.',
    demoAfter1Time: 'Single prompt, ready to use',
    demoBefore2Prompt: 'Review my AWS security.',
    demoBefore2Result: 'High-level checklist of AWS best practices. No specific commands. No priority ranking. Misses your actual architecture context.',
    demoBefore2Time: 'Extensive back-and-forth',
    demoAfter2Prompt: 'Audit IAM policies in [AWS_ACCOUNT]. Check: 1) Overprivileged roles 2) Unused credentials >90d 3) Cross-account trust 4) Policy simulator commands 5) Remediation priority...',
    demoAfter2Result: 'AWS CLI commands ready to paste, IAM policy analysis framework, specific CIS benchmark mappings, risk-ranked findings with exact remediation steps.',
    demoAfter2Time: 'One prompt, actionable output',
    demoBefore3Prompt: 'Write a vulnerability report for a SQL injection.',
    demoBefore3Result: 'Generic template with placeholder text. Missing CVSS scoring details, proof-of-concept structure, or business impact context.',
    demoBefore3Time: 'Repeated refinements',
    demoAfter3Prompt: 'Write a pentest finding for [VULN_TYPE] in [APP_NAME] at endpoint [URL]. Include: CVSS 4.0 vector, reproduction steps, HTTP request/response evidence, business impact, and prioritized remediation...',
    demoAfter3Result: 'Professional finding with CVSS 4.0 calculated, structured PoC, exact HTTP traces, risk-to-business mapping, short/mid/long-term fix recommendations. Client-ready quality.',
    demoAfter3Time: 'One prompt, client-ready',

    // Scenarios
    scenarioWorkflows: 'Scenario Workflows',
    scenarios: 'scenarios',
    stepsInWorkflow: 'steps in workflow',

    // Categories section
    browseByCategory: 'Browse by Category',
    categoriesCount: 'categories',

    // Scenario detail
    back: 'Back',
    backToHome: 'Back to Home',
    customizeVariables: 'Customize Variables',
    workflowSteps: 'Workflow Steps',
    copyEntireWorkflow: 'Copy Entire Workflow',

    // Prompt cards
    copy: 'Copy',
    copied: 'Copied!',

    // Search results
    searchResults: 'Search Results',
    showingResultsFor: 'Showing results for',
    noPromptsFound: 'No prompts found',
    noPromptsFoundDesc: 'Try adjusting your search terms or filters.',
    prompts: 'prompts',
    results: 'results',
    result: 'result',
    prompt: 'prompt',

    // Theme
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',

    // Toast
    promptCopied: 'Prompt copied to clipboard',
    workflowCopied: 'Entire workflow copied to clipboard',

    // Category names
    'cat.red-team': 'Red Team / Offensive Security',
    'cat.blue-team': 'Blue Team / Defensive Security',
    'cat.soc-ops': 'SOC Operations',
    'cat.cloud-security': 'Cloud Security',
    'cat.osint': 'OSINT / Reconnaissance',
    'cat.grc': 'GRC / Compliance',
    'cat.vuln-analysis': 'Vulnerability Analysis',
    'cat.ai-security': 'AI Agent Security',

    // Category descriptions
    'catDesc.red-team': 'Penetration testing, exploitation, social engineering, and attack simulation prompts.',
    'catDesc.blue-team': 'Log analysis, incident response, defense strategy, and security architecture prompts.',
    'catDesc.soc-ops': 'SIEM queries, alert triage, shift operations, and SOC workflow prompts.',
    'catDesc.cloud-security': 'AWS, Azure, GCP, multi-cloud, container, and serverless security prompts.',
    'catDesc.osint': 'Domain intelligence, digital footprint, threat actor profiling, and recon automation.',
    'catDesc.grc': 'Policy, risk assessment, audit, compliance frameworks, and governance prompts.',
    'catDesc.vuln-analysis': 'CVE analysis, patch prioritization, vulnerability assessment, and reporting prompts.',
    'catDesc.ai-security': 'LLM testing, AI supply chain, agent security, and responsible AI governance.',

    // Scenario names
    'scenario.web-app-pentest': 'Web App Penetration Test',
    'scenario.incident-response': 'Incident Response',
    'scenario.cloud-audit': 'Cloud Security Audit',
    'scenario.bug-bounty-recon': 'Bug Bounty Recon',
    'scenario.compliance-audit': 'Compliance Audit (ISO 27001)',
    'scenario.threat-hunting': 'Threat Hunting',
    'scenario.ai-security': 'AI Security Assessment',

    // Scenario descriptions
    'scenarioDesc.web-app-pentest': 'End-to-end web application penetration testing workflow from recon through reporting.',
    'scenarioDesc.incident-response': 'Structured incident response workflow from detection through lessons learned.',
    'scenarioDesc.cloud-audit': 'Comprehensive cloud security audit covering IAM, networking, storage, compute, and compliance.',
    'scenarioDesc.bug-bounty-recon': 'Structured reconnaissance workflow for bug bounty hunting.',
    'scenarioDesc.compliance-audit': 'ISO 27001 compliance audit workflow from scoping through documentation.',
    'scenarioDesc.threat-hunting': 'Proactive threat hunting workflow from hypothesis generation through response.',
    'scenarioDesc.ai-security': 'Comprehensive AI security assessment from inventory through monitoring.'
  },

  ko: {
    sidebarBrand: '\uC0AC\uC774\uBC84\uBCF4\uC548 AI \uD234\uD0B7',
    categories: '\uCE74\uD14C\uACE0\uB9AC',
    totalPrompts: '\uCD1D \uD504\uB86C\uD504\uD2B8',
    allPrompts: '대시보드',

    searchPlaceholder: '\uD504\uB86C\uD504\uD2B8 \uAC80\uC0C9... (Ctrl+K)',
    allLevels: '\uBAA8\uB4E0 \uB808\uBCA8',
    beginner: '\uCD08\uAE09',
    intermediate: '\uC911\uAE09',
    advanced: '\uACE0\uAE09',

    heroDesc: '\uC0AC\uC774\uBC84\uBCF4\uC548 \uC804\uBB38\uAC00\uB97C \uC704\uD55C \uCD5C\uACE0\uC758 AI \uD504\uB86C\uD504\uD2B8 \uBAA8\uC74C\uC9D1. \uC2DC\uB098\uB9AC\uC624\uB97C \uC120\uD0DD\uD558\uAC70\uB098 \uCE74\uD14C\uACE0\uB9AC\uB97C \uD0D0\uC0C9\uD558\uAC70\uB098 {count}\uAC1C \uD504\uB86C\uD504\uD2B8\uB97C \uAC80\uC0C9\uD558\uC138\uC694.',

    valueStat1Number: '\uC989\uC2DC',
    valueStat1Label: '\uC804\uBB38\uAC00 \uC218\uC900 \uACB0\uACFC\uBB3C',
    valueStat1Desc: '\uC2DC\uD589\uCC29\uC624 \uC5C6\uC774 \uCCAB \uD504\uB86C\uD504\uD2B8\uBD80\uD130 \uCCB4\uACC4\uC801\uC774\uACE0 \uC2E4\uD589 \uAC00\uB2A5\uD55C \uACB0\uACFC\uB97C \uC5BB\uC73C\uC138\uC694',
    valueStat2Label: '\uAC80\uC99D\uB41C \uD504\uB86C\uD504\uD2B8',
    valueStat2Desc: '\uB808\uB4DC\uD300\uBD80\uD130 AI \uC5D0\uC774\uC804\uD2B8 \uBCF4\uC548\uAE4C\uC9C0 8\uAC1C \uBCF4\uC548 \uB3C4\uBA54\uC778 \uCEE4\uBC84',
    valueStat3Label: '\uC989\uC2DC \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC6CC\uD06C\uD50C\uB85C\uC6B0',
    valueStat3Desc: '\uBCC0\uC218\uB9CC \uCC44\uC6B0\uBA74 \uBC14\uB85C \uC2E4\uD589\uD560 \uC218 \uC788\uB294 \uC644\uC131\uB41C \uC2DC\uB098\uB9AC\uC624 \uCCB4\uC778',

    seeTheDifference: '\uCC28\uC774\uB97C \uD655\uC778\uD558\uC138\uC694',
    beforeVsAfter: '\uC0AC\uC6A9 \uC804 vs \uC0AC\uC6A9 \uD6C4',
    withoutCyberPrompt: 'cybersec-mcp \uC5C6\uC774',
    withCyberPrompt: 'cybersec-mcp \uC0AC\uC6A9 \uC2DC',

    demoTitle1: '\uC778\uC2DC\uB358\uD2B8 \uB300\uC751 \uD2B8\uB9AC\uC544\uC9C0',
    demoTitle2: '\uD074\uB77C\uC6B0\uB4DC \uBCF4\uC548 \uAC10\uC0AC',
    demoTitle3: '\uCDE8\uC57D\uC810 \uBCF4\uACE0\uC11C',
    demoBefore1Prompt: '\uBCF4\uC548 \uC778\uC2DC\uB358\uD2B8\uC5D0 \uB300\uC751\uD558\uB294 \uAC78 \uB3C4\uC640\uC918.',
    demoBefore1Result: '\uC77C\uBC18\uC801\uC778 \uC778\uC2DC\uB358\uD2B8 \uB300\uC751 \uD504\uB808\uC784\uC6CC\uD06C \uC870\uC5B8. \uBAA8\uD638\uD55C \uB2E8\uACC4. \uC2E4\uD589 \uAC00\uB2A5\uD55C \uBA85\uB839\uC5B4 \uC5C6\uC74C. \uCD94\uAC00 \uC9C8\uBB38\uC744 \uB9CC\uB4DC\uB294 \uB370 \uC2DC\uAC04\uC744 \uC18C\uBAA8.',
    demoBefore1Time: '\uC5EC\uB7EC \uBC88\uC758 \uBC18\uBCF5\uC774 \uD544\uC694',
    demoAfter1Prompt: 'Our SIEM flagged unusual outbound traffic from [HOST] to [DEST_IP] on port 443. Analyze: 1) IOC extraction 2) Lateral movement check 3) Containment steps 4) Evidence preservation commands...',
    demoAfter1Result: 'SIEM \uCFFC\uB9AC, \uD3EC\uB80C\uC2DD \uBA85\uB839\uC5B4(volatility, tcpdump), \uBD09\uC1C4 \uD50C\uB808\uC774\uBD81, \uC99D\uAC70 \uBCF4\uAD00 \uD15C\uD50C\uB9BF\uC774 \uD3EC\uD568\uB41C \uCCB4\uACC4\uC801 \uD2B8\uB9AC\uC544\uC9C0. \uC989\uC2DC \uC2E4\uD589 \uAC00\uB2A5.',
    demoAfter1Time: '\uD55C \uBC88\uC758 \uD504\uB86C\uD504\uD2B8\uB85C \uBC14\uB85C \uC0AC\uC6A9',
    demoBefore2Prompt: 'AWS \uBCF4\uC548\uC744 \uAC80\uD1A0\uD574\uC918.',
    demoBefore2Result: 'AWS \uBAA8\uBC94 \uC0AC\uB840 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uC218\uC900. \uAD6C\uCCB4\uC801\uC778 \uBA85\uB839\uC5B4 \uC5C6\uC74C. \uC6B0\uC120\uC21C\uC704 \uC5C6\uC74C. \uC2E4\uC81C \uC544\uD0A4\uD14D\uCC98 \uBB38\uB9E5 \uBD80\uC871.',
    demoBefore2Time: '\uAD11\uBC94\uC704\uD55C \uCD94\uAC00 \uC9C8\uBB38 \uD544\uC694',
    demoAfter2Prompt: 'Audit IAM policies in [AWS_ACCOUNT]. Check: 1) Overprivileged roles 2) Unused credentials >90d 3) Cross-account trust 4) Policy simulator commands 5) Remediation priority...',
    demoAfter2Result: '\uBC14\uB85C \uBD99\uC5EC\uB123\uC744 \uC218 \uC788\uB294 AWS CLI \uBA85\uB839\uC5B4, IAM \uC815\uCC45 \uBD84\uC11D \uD504\uB808\uC784\uC6CC\uD06C, CIS \uBCA4\uCE58\uB9C8\uD06C \uB9E4\uD551, \uC704\uD5D8\uB3C4 \uC21C\uC704 \uAC1C\uC120 \uBC29\uC548.',
    demoAfter2Time: '\uD55C \uBC88\uC758 \uD504\uB86C\uD504\uD2B8\uB85C \uC2E4\uD589 \uAC00\uB2A5',
    demoBefore3Prompt: 'SQL \uC778\uC81D\uC158\uC5D0 \uB300\uD55C \uCDE8\uC57D\uC810 \uBCF4\uACE0\uC11C\uB97C \uC791\uC131\uD574\uC918.',
    demoBefore3Result: '\uD50C\uB808\uC774\uC2A4\uD640\uB354 \uD14D\uC2A4\uD2B8\uAC00 \uC788\uB294 \uC77C\uBC18 \uD15C\uD50C\uB9BF. CVSS \uC810\uC218 \uC138\uBD80 \uC0AC\uD56D, PoC \uAD6C\uC870, \uBE44\uC988\uB2C8\uC2A4 \uC601\uD5A5 \uBB38\uB9E5 \uBD80\uC871.',
    demoBefore3Time: '\uBC18\uBCF5\uC801\uC778 \uC218\uC815\uC774 \uD544\uC694',
    demoAfter3Prompt: 'Write a pentest finding for [VULN_TYPE] in [APP_NAME] at endpoint [URL]. Include: CVSS 4.0 vector, reproduction steps, HTTP request/response evidence, business impact, and prioritized remediation...',
    demoAfter3Result: 'CVSS 4.0 \uC810\uC218 \uACC4\uC0B0, \uCCB4\uACC4\uC801 PoC, HTTP \uD2B8\uB808\uC774\uC2A4, \uBE44\uC988\uB2C8\uC2A4 \uC704\uD5D8 \uB9E4\uD551, \uB2E8\uAE30/\uC911\uAE30/\uC7A5\uAE30 \uAC1C\uC120\uC548\uC774 \uD3EC\uD568\uB41C \uC804\uBB38 \uBCF4\uACE0\uC11C. \uACE0\uAC1D \uC81C\uCD9C \uD488\uC9C8.',
    demoAfter3Time: '\uD55C \uBC88\uC758 \uD504\uB86C\uD504\uD2B8\uB85C \uBCF4\uACE0\uC11C \uC644\uC131',

    scenarioWorkflows: '\uC2DC\uB098\uB9AC\uC624 \uC6CC\uD06C\uD50C\uB85C\uC6B0',
    scenarios: '\uAC1C \uC2DC\uB098\uB9AC\uC624',
    stepsInWorkflow: '\uB2E8\uACC4 \uC6CC\uD06C\uD50C\uB85C\uC6B0',

    browseByCategory: '\uCE74\uD14C\uACE0\uB9AC\uBCC4 \uD0D0\uC0C9',
    categoriesCount: '\uAC1C \uCE74\uD14C\uACE0\uB9AC',

    back: '\uB4A4\uB85C',
    backToHome: '\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30',
    customizeVariables: '\uBCC0\uC218 \uC124\uC815',
    workflowSteps: '\uC6CC\uD06C\uD50C\uB85C\uC6B0 \uB2E8\uACC4',
    copyEntireWorkflow: '\uC804\uCCB4 \uC6CC\uD06C\uD50C\uB85C\uC6B0 \uBCF5\uC0AC',

    copy: '\uBCF5\uC0AC',
    copied: '\uBCF5\uC0AC \uC644\uB8CC!',

    searchResults: '\uAC80\uC0C9 \uACB0\uACFC',
    showingResultsFor: '\uAC80\uC0C9\uC5B4',
    noPromptsFound: '\uD504\uB86C\uD504\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4',
    noPromptsFoundDesc: '\uAC80\uC0C9\uC5B4\uB098 \uD544\uD130\uB97C \uC870\uC815\uD574 \uBCF4\uC138\uC694.',
    prompts: '\uAC1C \uD504\uB86C\uD504\uD2B8',
    results: '\uAC1C \uACB0\uACFC',
    result: '\uAC1C \uACB0\uACFC',
    prompt: '\uAC1C \uD504\uB86C\uD504\uD2B8',

    darkMode: '\uB2E4\uD06C \uBAA8\uB4DC',
    lightMode: '\uB77C\uC774\uD2B8 \uBAA8\uB4DC',

    promptCopied: '\uD504\uB86C\uD504\uD2B8\uAC00 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4',
    workflowCopied: '\uC804\uCCB4 \uC6CC\uD06C\uD50C\uB85C\uC6B0\uAC00 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4',

    'cat.red-team': '\uB808\uB4DC\uD300 / \uACF5\uACA9 \uBCF4\uC548',
    'cat.blue-team': '\uBE14\uB8E8\uD300 / \uBC29\uC5B4 \uBCF4\uC548',
    'cat.soc-ops': 'SOC \uC6B4\uC601',
    'cat.cloud-security': '\uD074\uB77C\uC6B0\uB4DC \uBCF4\uC548',
    'cat.osint': 'OSINT / \uC815\uBCF4 \uC218\uC9D1',
    'cat.grc': 'GRC / \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4',
    'cat.vuln-analysis': '\uCDE8\uC57D\uC810 \uBD84\uC11D',
    'cat.ai-security': 'AI \uC5D0\uC774\uC804\uD2B8 \uBCF4\uC548',

    'catDesc.red-team': '\uBAA8\uC758 \uCE68\uD22C, \uC775\uC2A4\uD50C\uB85C\uC787, \uC0AC\uD68C\uACF5\uD559, \uACF5\uACA9 \uC2DC\uBBAC\uB808\uC774\uC158 \uD504\uB86C\uD504\uD2B8.',
    'catDesc.blue-team': '\uB85C\uADF8 \uBD84\uC11D, \uC778\uC2DC\uB358\uD2B8 \uB300\uC751, \uBC29\uC5B4 \uC804\uB7B5, \uBCF4\uC548 \uC544\uD0A4\uD14D\uCC98 \uD504\uB86C\uD504\uD2B8.',
    'catDesc.soc-ops': 'SIEM \uCFFC\uB9AC, \uC54C\uB9BC \uD2B8\uB9AC\uC544\uC9C0, \uAD50\uB300 \uC6B4\uC601, SOC \uC6CC\uD06C\uD50C\uB85C\uC6B0 \uD504\uB86C\uD504\uD2B8.',
    'catDesc.cloud-security': 'AWS, Azure, GCP, \uBA40\uD2F0\uD074\uB77C\uC6B0\uB4DC, \uCEE8\uD14C\uC774\uB108, \uC11C\uBC84\uB9AC\uC2A4 \uBCF4\uC548 \uD504\uB86C\uD504\uD2B8.',
    'catDesc.osint': '\uB3C4\uBA54\uC778 \uC778\uD154\uB9AC\uC804\uC2A4, \uB514\uC9C0\uD138 \uD48D\uD504\uB9B0\uD2B8, \uC704\uD611 \uD589\uC704\uC790 \uD504\uB85C\uD30C\uC77C\uB9C1, \uC815\uCC30 \uC790\uB3D9\uD654.',
    'catDesc.grc': '\uC815\uCC45, \uC704\uD5D8 \uD3C9\uAC00, \uAC10\uC0AC, \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4 \uD504\uB808\uC784\uC6CC\uD06C, \uAC70\uBC84\uB10C\uC2A4 \uD504\uB86C\uD504\uD2B8.',
    'catDesc.vuln-analysis': 'CVE \uBD84\uC11D, \uD328\uCE58 \uC6B0\uC120\uC21C\uC704, \uCDE8\uC57D\uC810 \uD3C9\uAC00, \uBCF4\uACE0\uC11C \uD504\uB86C\uD504\uD2B8.',
    'catDesc.ai-security': 'LLM \uD14C\uC2A4\uD2B8, AI \uACF5\uAE09\uB9DD, \uC5D0\uC774\uC804\uD2B8 \uBCF4\uC548, \uCC45\uC784\uC788\uB294 AI \uAC70\uBC84\uB10C\uC2A4.',

    'scenario.web-app-pentest': '\uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBAA8\uC758 \uCE68\uD22C',
    'scenario.incident-response': '\uC778\uC2DC\uB358\uD2B8 \uB300\uC751',
    'scenario.cloud-audit': '\uD074\uB77C\uC6B0\uB4DC \uBCF4\uC548 \uAC10\uC0AC',
    'scenario.bug-bounty-recon': '\uBC84\uADF8 \uBC14\uC6B4\uD2F0 \uC815\uCC30',
    'scenario.compliance-audit': '\uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4 \uAC10\uC0AC (ISO 27001)',
    'scenario.threat-hunting': '\uC704\uD611 \uD5CC\uD305',
    'scenario.ai-security': 'AI \uBCF4\uC548 \uD3C9\uAC00',

    'scenarioDesc.web-app-pentest': '\uC815\uCC30\uBD80\uD130 \uBCF4\uACE0\uC11C\uAE4C\uC9C0 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBAA8\uC758 \uCE68\uD22C \uC804\uCCB4 \uC6CC\uD06C\uD50C\uB85C\uC6B0.',
    'scenarioDesc.incident-response': '\uD0D0\uC9C0\uBD80\uD130 \uAD50\uD6C8 \uB3C4\uCD9C\uAE4C\uC9C0 \uCCB4\uACC4\uC801\uC778 \uC778\uC2DC\uB358\uD2B8 \uB300\uC751 \uC6CC\uD06C\uD50C\uB85C\uC6B0.',
    'scenarioDesc.cloud-audit': 'IAM, \uB124\uD2B8\uC6CC\uD06C, \uC2A4\uD1A0\uB9AC\uC9C0, \uCEF4\uD4E8\uD305, \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4\uB97C \uD3EC\uAD04\uD558\uB294 \uD074\uB77C\uC6B0\uB4DC \uBCF4\uC548 \uAC10\uC0AC.',
    'scenarioDesc.bug-bounty-recon': '\uBC84\uADF8 \uBC14\uC6B4\uD2F0 \uD5CC\uD305\uC744 \uC704\uD55C \uCCB4\uACC4\uC801\uC778 \uC815\uCC30 \uC6CC\uD06C\uD50C\uB85C\uC6B0.',
    'scenarioDesc.compliance-audit': 'ISO 27001 \uBC94\uC704 \uC124\uC815\uBD80\uD130 \uBB38\uC11C\uD654\uAE4C\uC9C0 \uCEF4\uD50C\uB77C\uC774\uC5B8\uC2A4 \uAC10\uC0AC \uC6CC\uD06C\uD50C\uB85C\uC6B0.',
    'scenarioDesc.threat-hunting': '\uAC00\uC124 \uC218\uB9BD\uBD80\uD130 \uB300\uC751\uAE4C\uC9C0 \uB2A5\uB3D9\uC801 \uC704\uD611 \uD5CC\uD305 \uC6CC\uD06C\uD50C\uB85C\uC6B0.',
    'scenarioDesc.ai-security': '\uC778\uBCA4\uD1A0\uB9AC\uBD80\uD130 \uBAA8\uB2C8\uD130\uB9C1\uAE4C\uC9C0 \uD3EC\uAD04\uC801\uC778 AI \uBCF4\uC548 \uD3C9\uAC00.'
  },

  ja: {
    sidebarBrand: '\u30B5\u30A4\u30D0\u30FC\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3 AI \u30C4\u30FC\u30EB\u30AD\u30C3\u30C8',
    categories: '\u30AB\u30C6\u30B4\u30EA',
    totalPrompts: '\u30D7\u30ED\u30F3\u30D7\u30C8\u7DCF\u6570',
    allPrompts: 'ダッシュボード',

    searchPlaceholder: '\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u691C\u7D22... (Ctrl+K)',
    allLevels: '\u5168\u30EC\u30D9\u30EB',
    beginner: '\u521D\u7D1A',
    intermediate: '\u4E2D\u7D1A',
    advanced: '\u4E0A\u7D1A',

    heroDesc: '\u30B5\u30A4\u30D0\u30FC\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u5C02\u9580\u5BB6\u306E\u305F\u3081\u306E\u6700\u5F37AI\u30D7\u30ED\u30F3\u30D7\u30C8\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3002\u30B7\u30CA\u30EA\u30AA\u3092\u9078\u629E\u3001\u30AB\u30C6\u30B4\u30EA\u3092\u95B2\u89A7\u3001\u307E\u305F\u306F{count}\u4EF6\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u691C\u7D22\u3057\u3066\u304F\u3060\u3055\u3044\u3002',

    valueStat1Number: '\u5373\u5EA7',
    valueStat1Label: '\u5C02\u9580\u5BB6\u30EC\u30D9\u30EB\u306E\u51FA\u529B',
    valueStat1Desc: '\u8A66\u884C\u932F\u8AA4\u3092\u30B9\u30AD\u30C3\u30D7\u2014\u6700\u521D\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u304B\u3089\u4F53\u7CFB\u7684\u3067\u5B9F\u7528\u7684\u306A\u7D50\u679C\u3092\u53D6\u5F97',
    valueStat2Label: '\u5B9F\u8A3C\u6E08\u307F\u30D7\u30ED\u30F3\u30D7\u30C8',
    valueStat2Desc: '\u30EC\u30C3\u30C9\u30C1\u30FC\u30E0\u304B\u3089AI\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u307E\u30678\u3064\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u9818\u57DF\u3092\u30AB\u30D0\u30FC',
    valueStat3Label: '\u3059\u3050\u4F7F\u3048\u308B\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC',
    valueStat3Desc: '\u5909\u6570\u3092\u57CB\u3081\u308B\u3060\u3051\u3067\u3059\u3050\u5B9F\u884C\u3067\u304D\u308B\u5B8C\u6210\u3055\u308C\u305F\u30B7\u30CA\u30EA\u30AA\u30C1\u30A7\u30FC\u30F3',

    seeTheDifference: '\u9055\u3044\u3092\u78BA\u8A8D',
    beforeVsAfter: '\u5C0E\u5165\u524D vs \u5C0E\u5165\u5F8C',
    withoutCyberPrompt: 'cybersec-mcp\u306A\u3057',
    withCyberPrompt: 'cybersec-mcp\u3042\u308A',

    demoTitle1: '\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u5BFE\u5FDC\u30C8\u30EA\u30A2\u30FC\u30B8',
    demoTitle2: '\u30AF\u30E9\u30A6\u30C9\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB',
    demoTitle3: '\u8106\u5F31\u6027\u30EC\u30DD\u30FC\u30C8',
    demoBefore1Prompt: '\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u3078\u306E\u5BFE\u5FDC\u3092\u624B\u4F1D\u3063\u3066\u3002',
    demoBefore1Result: '\u4E00\u822C\u7684\u306A\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u5BFE\u5FDC\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u52A9\u8A00\u3002\u66D6\u6627\u306A\u30B9\u30C6\u30C3\u30D7\u3002\u5B9F\u884C\u53EF\u80FD\u306A\u30B3\u30DE\u30F3\u30C9\u306A\u3057\u3002\u8FFD\u52A0\u8CEA\u554F\u306E\u4F5C\u6210\u306B\u6642\u9593\u3092\u6D88\u8CBB\u3002',
    demoBefore1Time: '\u4F55\u5EA6\u3082\u7E70\u308A\u8FD4\u3057\u304C\u5FC5\u8981',
    demoAfter1Prompt: 'Our SIEM flagged unusual outbound traffic from [HOST] to [DEST_IP] on port 443. Analyze: 1) IOC extraction 2) Lateral movement check 3) Containment steps 4) Evidence preservation commands...',
    demoAfter1Result: 'SIEM\u30AF\u30A8\u30EA\u3001\u30D5\u30A9\u30EC\u30F3\u30B8\u30C3\u30AF\u30B3\u30DE\u30F3\u30C9\uFF08volatility, tcpdump\uFF09\u3001\u5C01\u3058\u8FBC\u3081\u30D7\u30EC\u30A4\u30D6\u30C3\u30AF\u3001\u8A3C\u62E0\u4FDD\u5168\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u542B\u3080\u4F53\u7CFB\u7684\u306A\u30C8\u30EA\u30A2\u30FC\u30B8\u3002\u5373\u5B9F\u884C\u53EF\u80FD\u3002',
    demoAfter1Time: '\u4E00\u5EA6\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3067\u3059\u3050\u4F7F\u3048\u308B',
    demoBefore2Prompt: 'AWS\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3092\u30EC\u30D3\u30E5\u30FC\u3057\u3066\u3002',
    demoBefore2Result: 'AWS\u30D9\u30B9\u30C8\u30D7\u30E9\u30AF\u30C6\u30A3\u30B9\u306E\u9AD8\u30EC\u30D9\u30EB\u30C1\u30A7\u30C3\u30AF\u30EA\u30B9\u30C8\u3002\u5177\u4F53\u7684\u306A\u30B3\u30DE\u30F3\u30C9\u306A\u3057\u3002\u512A\u5148\u9806\u4F4D\u306A\u3057\u3002\u5B9F\u969B\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u4E0D\u8DB3\u3002',
    demoBefore2Time: '\u5E83\u7BC4\u306A\u3084\u308A\u53D6\u308A\u304C\u5FC5\u8981',
    demoAfter2Prompt: 'Audit IAM policies in [AWS_ACCOUNT]. Check: 1) Overprivileged roles 2) Unused credentials >90d 3) Cross-account trust 4) Policy simulator commands 5) Remediation priority...',
    demoAfter2Result: '\u305D\u306E\u307E\u307E\u8CBC\u308A\u4ED8\u3051\u53EF\u80FD\u306AAWS CLI\u30B3\u30DE\u30F3\u30C9\u3001IAM\u30DD\u30EA\u30B7\u30FC\u5206\u6790\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3001CIS\u30D9\u30F3\u30C1\u30DE\u30FC\u30AF\u30DE\u30C3\u30D4\u30F3\u30B0\u3001\u30EA\u30B9\u30AF\u30E9\u30F3\u30AF\u4ED8\u304D\u6539\u5584\u7B56\u3002',
    demoAfter2Time: '\u4E00\u5EA6\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3067\u5B9F\u7528\u7684\u306A\u51FA\u529B',
    demoBefore3Prompt: 'SQL\u30A4\u30F3\u30B8\u30A7\u30AF\u30B7\u30E7\u30F3\u306E\u8106\u5F31\u6027\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u3044\u3066\u3002',
    demoBefore3Result: '\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u30C6\u30AD\u30B9\u30C8\u306E\u6C4E\u7528\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3002CVSS\u30B9\u30B3\u30A2\u306E\u8A73\u7D30\u3001PoC\u69CB\u9020\u3001\u30D3\u30B8\u30CD\u30B9\u5F71\u97FF\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u4E0D\u8DB3\u3002',
    demoBefore3Time: '\u7E70\u308A\u8FD4\u3057\u306E\u4FEE\u6B63\u304C\u5FC5\u8981',
    demoAfter3Prompt: 'Write a pentest finding for [VULN_TYPE] in [APP_NAME] at endpoint [URL]. Include: CVSS 4.0 vector, reproduction steps, HTTP request/response evidence, business impact, and prioritized remediation...',
    demoAfter3Result: 'CVSS 4.0\u30B9\u30B3\u30A2\u8A08\u7B97\u6E08\u307F\u3001\u4F53\u7CFB\u7684\u306APoC\u3001HTTP\u30C8\u30EC\u30FC\u30B9\u3001\u30D3\u30B8\u30CD\u30B9\u30EA\u30B9\u30AF\u30DE\u30C3\u30D4\u30F3\u30B0\u3001\u77ED\u671F/\u4E2D\u671F/\u9577\u671F\u306E\u6539\u5584\u63D0\u6848\u3092\u542B\u3080\u5C02\u9580\u30EC\u30DD\u30FC\u30C8\u3002\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u7D0D\u54C1\u54C1\u8CEA\u3002',
    demoAfter3Time: '\u4E00\u5EA6\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3067\u30EC\u30DD\u30FC\u30C8\u5B8C\u6210',

    scenarioWorkflows: '\u30B7\u30CA\u30EA\u30AA\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC',
    scenarios: '\u30B7\u30CA\u30EA\u30AA',
    stepsInWorkflow: '\u30B9\u30C6\u30C3\u30D7\u306E\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC',

    browseByCategory: '\u30AB\u30C6\u30B4\u30EA\u5225\u306B\u95B2\u89A7',
    categoriesCount: '\u30AB\u30C6\u30B4\u30EA',

    back: '\u623B\u308B',
    backToHome: '\u30DB\u30FC\u30E0\u306B\u623B\u308B',
    customizeVariables: '\u5909\u6570\u306E\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA',
    workflowSteps: '\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u30B9\u30C6\u30C3\u30D7',
    copyEntireWorkflow: '\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u5168\u4F53\u3092\u30B3\u30D4\u30FC',

    copy: '\u30B3\u30D4\u30FC',
    copied: '\u30B3\u30D4\u30FC\u5B8C\u4E86\uFF01',

    searchResults: '\u691C\u7D22\u7D50\u679C',
    showingResultsFor: '\u691C\u7D22\u30AD\u30FC\u30EF\u30FC\u30C9',
    noPromptsFound: '\u30D7\u30ED\u30F3\u30D7\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093',
    noPromptsFoundDesc: '\u691C\u7D22\u30AD\u30FC\u30EF\u30FC\u30C9\u3084\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002',
    prompts: '\u4EF6\u306E\u30D7\u30ED\u30F3\u30D7\u30C8',
    results: '\u4EF6\u306E\u7D50\u679C',
    result: '\u4EF6\u306E\u7D50\u679C',
    prompt: '\u4EF6\u306E\u30D7\u30ED\u30F3\u30D7\u30C8',

    darkMode: '\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9',
    lightMode: '\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9',

    promptCopied: '\u30D7\u30ED\u30F3\u30D7\u30C8\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F',
    workflowCopied: '\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u5168\u4F53\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F',

    'cat.red-team': '\u30EC\u30C3\u30C9\u30C1\u30FC\u30E0 / \u653B\u6483\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3',
    'cat.blue-team': '\u30D6\u30EB\u30FC\u30C1\u30FC\u30E0 / \u9632\u5FA1\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3',
    'cat.soc-ops': 'SOC\u904B\u7528',
    'cat.cloud-security': '\u30AF\u30E9\u30A6\u30C9\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3',
    'cat.osint': 'OSINT / \u5075\u5BDF',
    'cat.grc': 'GRC / \u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9',
    'cat.vuln-analysis': '\u8106\u5F31\u6027\u5206\u6790',
    'cat.ai-security': 'AI\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3',

    'catDesc.red-team': '\u30DA\u30CD\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3\u30C6\u30B9\u30C8\u3001\u30A8\u30AF\u30B9\u30D7\u30ED\u30A4\u30C8\u3001\u30BD\u30FC\u30B7\u30E3\u30EB\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u3001\u653B\u6483\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3002',
    'catDesc.blue-team': '\u30ED\u30B0\u5206\u6790\u3001\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u5BFE\u5FDC\u3001\u9632\u5FA1\u6226\u7565\u3001\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3002',
    'catDesc.soc-ops': 'SIEM\u30AF\u30A8\u30EA\u3001\u30A2\u30E9\u30FC\u30C8\u30C8\u30EA\u30A2\u30FC\u30B8\u3001\u30B7\u30D5\u30C8\u904B\u7528\u3001SOC\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3002',
    'catDesc.cloud-security': 'AWS\u3001Azure\u3001GCP\u3001\u30DE\u30EB\u30C1\u30AF\u30E9\u30A6\u30C9\u3001\u30B3\u30F3\u30C6\u30CA\u3001\u30B5\u30FC\u30D0\u30FC\u30EC\u30B9\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3002',
    'catDesc.osint': '\u30C9\u30E1\u30A4\u30F3\u30A4\u30F3\u30C6\u30EA\u30B8\u30A7\u30F3\u30B9\u3001\u30C7\u30B8\u30BF\u30EB\u30D5\u30C3\u30C8\u30D7\u30EA\u30F3\u30C8\u3001\u8105\u5A01\u30A2\u30AF\u30BF\u30FC\u30D7\u30ED\u30D5\u30A1\u30A4\u30EA\u30F3\u30B0\u3001\u5075\u5BDF\u81EA\u52D5\u5316\u3002',
    'catDesc.grc': '\u30DD\u30EA\u30B7\u30FC\u3001\u30EA\u30B9\u30AF\u8A55\u4FA1\u3001\u76E3\u67FB\u3001\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3001\u30AC\u30D0\u30CA\u30F3\u30B9\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3002',
    'catDesc.vuln-analysis': 'CVE\u5206\u6790\u3001\u30D1\u30C3\u30C1\u512A\u5148\u9806\u4F4D\u3001\u8106\u5F31\u6027\u8A55\u4FA1\u3001\u30EC\u30DD\u30FC\u30C8\u306E\u30D7\u30ED\u30F3\u30D7\u30C8\u3002',
    'catDesc.ai-security': 'LLM\u30C6\u30B9\u30C8\u3001AI\u30B5\u30D7\u30E9\u30A4\u30C1\u30A7\u30FC\u30F3\u3001\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3001\u8CAC\u4EFB\u3042\u308BAI\u30AC\u30D0\u30CA\u30F3\u30B9\u3002',

    'scenario.web-app-pentest': 'Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30DA\u30CD\u30C8\u30EC',
    'scenario.incident-response': '\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u5BFE\u5FDC',
    'scenario.cloud-audit': '\u30AF\u30E9\u30A6\u30C9\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB',
    'scenario.bug-bounty-recon': '\u30D0\u30B0\u30D0\u30A6\u30F3\u30C6\u30A3\u5075\u5BDF',
    'scenario.compliance-audit': '\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u76E3\u67FB (ISO 27001)',
    'scenario.threat-hunting': '\u30B9\u30EC\u30C3\u30C8\u30CF\u30F3\u30C6\u30A3\u30F3\u30B0',
    'scenario.ai-security': 'AI\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u8A55\u4FA1',

    'scenarioDesc.web-app-pentest': '\u5075\u5BDF\u304B\u3089\u30EC\u30DD\u30FC\u30C8\u307E\u3067\u306EWeb\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30DA\u30CD\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3\u30C6\u30B9\u30C8\u306E\u5168\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3002',
    'scenarioDesc.incident-response': '\u691C\u77E5\u304B\u3089\u6559\u8A13\u5C0E\u51FA\u307E\u3067\u306E\u4F53\u7CFB\u7684\u306A\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u5BFE\u5FDC\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3002',
    'scenarioDesc.cloud-audit': 'IAM\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3001\u30B9\u30C8\u30EC\u30FC\u30B8\u3001\u30B3\u30F3\u30D4\u30E5\u30FC\u30C6\u30A3\u30F3\u30B0\u3001\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u3092\u7DB2\u7F85\u3057\u305F\u30AF\u30E9\u30A6\u30C9\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u76E3\u67FB\u3002',
    'scenarioDesc.bug-bounty-recon': '\u30D0\u30B0\u30D0\u30A6\u30F3\u30C6\u30A3\u30CF\u30F3\u30C6\u30A3\u30F3\u30B0\u306E\u305F\u3081\u306E\u4F53\u7CFB\u7684\u306A\u5075\u5BDF\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3002',
    'scenarioDesc.compliance-audit': 'ISO 27001\u306E\u30B9\u30B3\u30FC\u30D7\u8A2D\u5B9A\u304B\u3089\u6587\u66F8\u5316\u307E\u3067\u306E\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u76E3\u67FB\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3002',
    'scenarioDesc.threat-hunting': '\u4EEE\u8AAC\u751F\u6210\u304B\u3089\u5BFE\u5FDC\u307E\u3067\u306E\u80FD\u52D5\u7684\u30B9\u30EC\u30C3\u30C8\u30CF\u30F3\u30C6\u30A3\u30F3\u30B0\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3002',
    'scenarioDesc.ai-security': '\u30A4\u30F3\u30D9\u30F3\u30C8\u30EA\u304B\u3089\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u307E\u3067\u306E\u5305\u62EC\u7684\u306AAI\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u8A55\u4FA1\u3002'
  }
};

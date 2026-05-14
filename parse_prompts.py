#!/usr/bin/env python3
"""Parse prompts-master.md and generate data.js"""
import re
import json

def parse_prompts(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract category ranges from TOC
    # 1. Red Team / Offensive Security (45 prompts: #001-#045)
    toc_pattern = r'\d+\.\s+\[(.+?)\].*?\((\d+)\s+prompts:\s+#(\d+)-#(\d+)\)'
    toc_matches = re.findall(toc_pattern, content)

    categories = []
    cat_id_map = {
        'Red Team / Offensive Security': 'red-team',
        'Blue Team / Defensive Security': 'blue-team',
        'SOC Operations': 'soc-ops',
        'Cloud Security': 'cloud-security',
        'OSINT / Reconnaissance': 'osint',
        'GRC / Compliance': 'grc',
        'Vulnerability Analysis': 'vuln-analysis',
        'AI Agent Security (2026 Trending)': 'ai-security',
    }
    cat_icon_map = {
        'red-team': 'target',
        'blue-team': 'shield',
        'soc-ops': 'monitor',
        'cloud-security': 'cloud',
        'osint': 'search',
        'grc': 'clipboard-check',
        'vuln-analysis': 'bug',
        'ai-security': 'bot',
    }
    cat_desc_map = {
        'red-team': 'Penetration testing, exploitation, social engineering, and attack simulation prompts.',
        'blue-team': 'Log analysis, incident response, defense strategy, and security architecture prompts.',
        'soc-ops': 'SIEM queries, alert triage, shift operations, and SOC workflow prompts.',
        'cloud-security': 'AWS, Azure, GCP, multi-cloud, container, and serverless security prompts.',
        'osint': 'Domain intelligence, digital footprint, threat actor profiling, and recon automation.',
        'grc': 'Policy, risk assessment, audit, compliance frameworks, and governance prompts.',
        'vuln-analysis': 'CVE analysis, patch prioritization, vulnerability assessment, and reporting prompts.',
        'ai-security': 'LLM testing, AI supply chain, agent security, and responsible AI governance.',
    }

    for name, count, start, end in toc_matches:
        cid = cat_id_map.get(name, name.lower().replace(' ', '-'))
        categories.append({
            'id': cid,
            'name': name.replace(' (2026 Trending)', ''),
            'icon': cat_icon_map.get(cid, 'file'),
            'description': cat_desc_map.get(cid, ''),
            'count': int(count),
            'start': int(start),
            'end': int(end),
        })

    print(f"Found {len(categories)} categories:")
    for c in categories:
        print(f"  {c['id']}: {c['name']} ({c['count']} prompts, #{c['start']:03d}-#{c['end']:03d})")

    # Parse individual prompts
    # Pattern: **#NNN - Title**
    # Then ``` ... ``` block
    # Then _Use when: ..._

    # Split by prompt headers
    prompt_pattern = r'\*\*#(\d{3})\s*-\s*(.+?)\*\*'

    # Find all prompts
    prompts = []
    current_subcategory = None

    lines = content.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i]

        # Track subcategory (### headers)
        subcat_match = re.match(r'^###\s+(.+)$', line.strip())
        if subcat_match:
            current_subcategory = subcat_match.group(1).strip()
            i += 1
            continue

        # Track category (## N. headers) to reset subcategory
        cat_match = re.match(r'^##\s+\d+\.\s+', line.strip())
        if cat_match:
            current_subcategory = None
            i += 1
            continue

        # Match prompt header
        prompt_match = re.match(r'\*\*#(\d{3})\s*-\s*(.+?)\*\*', line.strip())
        if prompt_match:
            prompt_id = int(prompt_match.group(1))
            title = prompt_match.group(2).strip()

            # Find the code block
            i += 1
            # Skip to ```
            while i < len(lines) and not lines[i].strip().startswith('```'):
                i += 1

            if i >= len(lines):
                break

            # Collect prompt text (skip opening ```)
            i += 1
            prompt_lines = []
            while i < len(lines) and not lines[i].strip().startswith('```'):
                prompt_lines.append(lines[i])
                i += 1

            prompt_text = '\n'.join(prompt_lines)
            # Strip leading/trailing whitespace but preserve internal structure
            prompt_text = prompt_text.strip()

            # Skip closing ```
            i += 1

            # Find "Use when" line
            use_when = ""
            while i < len(lines):
                uw_match = re.match(r'^_Use when:\s*(.+?)_?\s*$', lines[i].strip())
                if uw_match:
                    use_when = uw_match.group(1).rstrip('_').strip()
                    i += 1
                    break
                if lines[i].strip().startswith('**#') or lines[i].strip().startswith('##'):
                    break
                i += 1

            # Extract variables from prompt text
            variables = re.findall(r'\[([A-Z][A-Z0-9_/]+)\]', prompt_text)
            # Deduplicate while preserving order
            seen = set()
            unique_vars = []
            for v in variables:
                if v not in seen:
                    seen.add(v)
                    unique_vars.append(v)

            # Determine category
            cat_id = 'red-team'
            for c in categories:
                if c['start'] <= prompt_id <= c['end']:
                    cat_id = c['id']
                    break

            prompts.append({
                'id': prompt_id,
                'title': title,
                'category': cat_id,
                'subcategory': current_subcategory or '',
                'prompt': prompt_text,
                'useWhen': use_when,
                'variables': unique_vars,
            })
            continue

        i += 1

    print(f"\nParsed {len(prompts)} prompts total")

    # Verify continuity
    ids = [p['id'] for p in prompts]
    expected = list(range(1, 324))
    missing = [x for x in expected if x not in ids]
    if missing:
        print(f"WARNING: Missing prompt IDs: {missing}")

    return categories, prompts


def escape_js_string(s):
    """Escape a string for use in JS template literal (backtick)"""
    # In template literals, we need to escape backticks and ${
    s = s.replace('\\', '\\\\')
    s = s.replace('`', '\\`')
    s = s.replace('${', '\\${')
    return s


def generate_data_js(categories, prompts, output_path):
    lines = []
    lines.append('// cybersec-mcp — Prompts Data')
    lines.append('// Auto-generated from prompts-master.md')
    lines.append('')

    # CATEGORIES array
    lines.append('const CATEGORIES = [')
    for c in categories:
        # Fix AI Security name
        name = c['name']
        if c['id'] == 'ai-security':
            name = 'AI Agent Security'
        lines.append(f"  {{ id: '{c['id']}', name: '{name}', icon: '{c['icon']}', description: '{c['description']}', count: {c['count']}, promptRange: [{c['start']}, {c['end']}] }},")
    lines.append('];')
    lines.append('')

    # SKILL_LEVELS - build ranges based on new numbering
    # beginner: first few per category (entry-level ones)
    # We'll keep a similar pattern to the original
    lines.append('const SKILL_LEVELS = {')

    # For simplicity, replicate the pattern: specific beginner IDs, intermediate ranges, advanced ranges
    # Original logic: beginner = specific IDs at start of blue-team, soc-ops, osint, grc, vuln
    # Let's map proportionally
    beginner_ids = []
    intermediate_ranges = []
    advanced_ranges = []

    for c in categories:
        s, e = c['start'], c['end']
        count = c['count']
        # First ~15% = some beginner picks
        # Next ~35% = intermediate
        # Rest = advanced

        beg_end = s + max(1, count // 7) - 1  # ~14%
        int_end = s + max(2, count // 3) - 1   # ~33%

        # Add a few beginner IDs (first of category)
        beginner_ids.append(s)
        if count > 10:
            beginner_ids.append(s + 6)

        intermediate_ranges.append([s, int_end])
        advanced_ranges.append([int_end + 1, e])

    lines.append(f'  beginner: {json.dumps(sorted(beginner_ids))},')
    lines.append('  intermediate: [],')
    lines.append('  advanced: []')
    lines.append('};')

    # Fill intermediate and advanced
    lines.append('(function(){')
    lines.append(f'  const ranges = {json.dumps(intermediate_ranges)};')
    lines.append('  ranges.forEach(([s,e])=>{ for(let i=s;i<=e;i++) SKILL_LEVELS.intermediate.push(i); });')
    lines.append(f'  const ranges2 = {json.dumps(advanced_ranges)};')
    lines.append('  ranges2.forEach(([s,e])=>{ for(let i=s;i<=e;i++) SKILL_LEVELS.advanced.push(i); });')
    lines.append('})();')
    lines.append('')

    # Helper functions
    lines.append('function getSkillLevel(id) {')
    lines.append("  if (SKILL_LEVELS.beginner.includes(id)) return 'Beginner';")
    lines.append("  if (SKILL_LEVELS.intermediate.includes(id)) return 'Intermediate';")
    lines.append("  return 'Advanced';")
    lines.append('}')
    lines.append('')

    lines.append('function getCategoryForPrompt(id) {')
    for c in categories:
        lines.append(f"  if (id >= {c['start']} && id <= {c['end']}) return '{c['id']}';")
    lines.append("  return 'red-team';")
    lines.append('}')
    lines.append('')

    # PROMPTS array
    lines.append('const PROMPTS = [')
    for p in prompts:
        escaped_prompt = escape_js_string(p['prompt'])
        escaped_title = p['title'].replace("'", "\\'")
        escaped_subcat = p['subcategory'].replace("'", "\\'")
        escaped_usewhen = p['useWhen'].replace("'", "\\'")
        vars_str = json.dumps(p['variables'])

        lines.append('  {')
        lines.append(f"    id: {p['id']},")
        lines.append(f"    title: \"{escaped_title}\",")
        lines.append(f"    category: \"{p['category']}\",")
        lines.append(f"    subcategory: \"{escaped_subcat}\",")
        lines.append(f"    prompt: `{escaped_prompt}`,")
        lines.append(f"    useWhen: \"{escaped_usewhen}\",")
        lines.append(f"    variables: {vars_str}")
        lines.append('  },')

    lines.append('];')

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines) + '\n')

    print(f"\nGenerated {output_path} with {len(prompts)} prompts")


if __name__ == '__main__':
    import os
    base = os.path.dirname(os.path.abspath(__file__))
    categories, prompts = parse_prompts(os.path.join(base, 'content', 'prompts-master.md'))
    generate_data_js(categories, prompts, os.path.join(base, 'web-app', 'js', 'data.js'))

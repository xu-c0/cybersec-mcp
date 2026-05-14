#!/usr/bin/env python3
"""Build a clean, professional HTML reference guide for CyberPrompt 300+."""

import re
import os
import html as h

BASE = os.path.dirname(os.path.abspath(__file__))
MD_PATH = os.path.join(BASE, '..', 'content', 'prompts-master.md')
OUT_PATH = os.path.join(BASE, 'CyberPrompt300-Reference-Guide.html')

CATEGORIES = [
    {"num": 1, "id": "red-team", "name": "Red Team / Offensive Security", "lo": 1, "hi": 45},
    {"num": 2, "id": "blue-team", "name": "Blue Team / Defensive Security", "lo": 46, "hi": 87},
    {"num": 3, "id": "soc", "name": "SOC Operations", "lo": 88, "hi": 129},
    {"num": 4, "id": "cloud", "name": "Cloud Security", "lo": 130, "hi": 167},
    {"num": 5, "id": "osint", "name": "OSINT / Reconnaissance", "lo": 168, "hi": 205},
    {"num": 6, "id": "grc", "name": "GRC / Compliance", "lo": 206, "hi": 243},
    {"num": 7, "id": "vuln", "name": "Vulnerability Analysis", "lo": 244, "hi": 285},
    {"num": 8, "id": "ai", "name": "AI Agent Security", "lo": 286, "hi": 323},
]

def highlight_vars(text):
    return re.sub(r'\[([A-Z][A-Z0-9_/|. ]*)\]', r'<span class="var">\g<0></span>', text)

def parse_prompts(md_text):
    prompts = []
    pattern = r'\*\*#(\d{3})\s*-\s*(.*?)\*\*\s*\n\s*\n```\s*\n([\s\S]*?)```\s*\n\s*_(Use when:.*?)_'
    for m in re.finditer(pattern, md_text):
        prompts.append({
            "num": int(m.group(1)),
            "title": m.group(2).strip(),
            "code": m.group(3).strip(),
            "use_when": m.group(4).strip(),
        })
    return prompts

def build_html(prompts):
    cat_prompts = {}
    for c in CATEGORIES:
        cat_prompts[c["num"]] = [p for p in prompts if c["lo"] <= p["num"] <= c["hi"]]

    # TOC links
    toc_items = ""
    for c in CATEGORIES:
        count = len(cat_prompts[c["num"]])
        toc_items += f'''<a href="#{c["id"]}" class="toc-item">
            <span class="toc-num">{c["num"]:02d}</span>
            <span class="toc-name">{h.escape(c["name"])}</span>
            <span class="toc-dots"></span>
            <span class="toc-meta">{count} prompts &middot; #{c["lo"]:03d}&ndash;#{c["hi"]:03d}</span>
        </a>\n'''

    # Category sections
    cat_sections = ""
    for c in CATEGORIES:
        cards = ""
        for p in cat_prompts[c["num"]]:
            code_html = highlight_vars(h.escape(p["code"]))
            cards += f'''<div class="prompt" id="p{p["num"]:03d}">
                <div class="prompt-head">
                    <span class="prompt-id">#{p["num"]:03d}</span>
                    <span class="prompt-name">{h.escape(p["title"])}</span>
                </div>
                <pre class="prompt-body"><code>{code_html}</code></pre>
                <p class="prompt-note">{h.escape(p["use_when"])}</p>
            </div>\n'''

        count = len(cat_prompts[c["num"]])
        cat_sections += f'''<section class="category" id="{c["id"]}">
            <div class="cat-head">
                <h2>{h.escape(c["name"])}</h2>
                <span class="cat-meta">{count} prompts &middot; #{c["lo"]:03d}&ndash;#{c["hi"]:03d}</span>
            </div>
            {cards}
            <p class="back-top"><a href="#toc">&uarr; Back to Table of Contents</a></p>
        </section>\n'''

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CyberPrompt 300+ &mdash; Reference Guide</title>
<style>
*, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}

body {{
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    background: #ffffff;
    color: #1a1a1a;
    line-height: 1.7;
    font-size: 14px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}}

a {{ color: #2563eb; text-decoration: none; }}
a:hover {{ text-decoration: underline; }}

/* ---- Cover ---- */
.cover {{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 3rem;
    page-break-after: always;
}}
.cover-brand {{
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #6b7280;
    margin-bottom: 1.5rem;
}}
.cover h1 {{
    font-size: 2.8rem;
    font-weight: 700;
    color: #111;
    line-height: 1.2;
    margin-bottom: 0.8rem;
}}
.cover-sub {{
    font-size: 1.1rem;
    color: #4b5563;
    margin-bottom: 2.5rem;
    max-width: 520px;
}}
.cover-line {{
    width: 48px;
    height: 3px;
    background: #111;
    margin-bottom: 2.5rem;
}}
.cover-info {{
    display: flex;
    gap: 2.5rem;
}}
.cover-info div {{
    display: flex;
    flex-direction: column;
}}
.cover-info strong {{
    font-size: 1.6rem;
    color: #111;
}}
.cover-info span {{
    font-size: 0.8rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}}
.cover-ver {{
    margin-top: 3rem;
    font-size: 0.8rem;
    color: #9ca3af;
}}

/* ---- TOC ---- */
.toc {{
    padding: 3rem;
    max-width: 700px;
    margin: 0 auto;
    page-break-after: always;
}}
.toc h2 {{
    font-size: 1.4rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 0.3rem;
}}
.toc-desc {{
    color: #6b7280;
    font-size: 0.9rem;
    margin-bottom: 2rem;
}}
.toc-item {{
    display: flex;
    align-items: baseline;
    gap: 0.8rem;
    padding: 0.7rem 0;
    border-bottom: 1px solid #f0f0f0;
    color: #1a1a1a;
    text-decoration: none;
    transition: background 0.15s;
}}
.toc-item:hover {{
    background: #f9fafb;
}}
.toc-num {{
    font-weight: 700;
    font-size: 0.85rem;
    color: #9ca3af;
    min-width: 1.8rem;
}}
.toc-name {{
    font-weight: 600;
    font-size: 0.95rem;
}}
.toc-dots {{
    flex: 1;
    border-bottom: 1px dotted #d1d5db;
    margin: 0 0.3rem;
    align-self: center;
    height: 0;
}}
.toc-meta {{
    font-size: 0.8rem;
    color: #9ca3af;
    white-space: nowrap;
}}

/* ---- Category ---- */
.category {{
    padding: 2rem 3rem;
    max-width: 800px;
    margin: 0 auto;
    page-break-before: always;
}}
.cat-head {{
    border-bottom: 2px solid #111;
    padding-bottom: 0.8rem;
    margin-bottom: 2rem;
}}
.cat-head h2 {{
    font-size: 1.3rem;
    font-weight: 700;
    color: #111;
}}
.cat-meta {{
    font-size: 0.8rem;
    color: #6b7280;
}}

/* ---- Prompt ---- */
.prompt {{
    margin-bottom: 1.8rem;
    page-break-inside: avoid;
}}
.prompt-head {{
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
}}
.prompt-id {{
    font-family: 'Cascadia Code', 'JetBrains Mono', 'Consolas', monospace;
    font-size: 0.8rem;
    font-weight: 700;
    color: #6b7280;
}}
.prompt-name {{
    font-weight: 600;
    font-size: 0.95rem;
    color: #111;
}}
.prompt-body {{
    margin: 0;
    padding: 1rem 1.2rem;
    background: #f8f9fa;
    border: 1px solid #e5e7eb;
    border-left: 3px solid #2563eb;
    border-radius: 4px;
    font-family: 'Cascadia Code', 'JetBrains Mono', 'Consolas', monospace;
    font-size: 0.8rem;
    line-height: 1.75;
    color: #1a1a1a;
    white-space: pre-wrap;
    word-wrap: break-word;
}}
.prompt-body code {{ font-family: inherit; }}
.var {{
    background: #eff6ff;
    color: #2563eb;
    padding: 0.1rem 0.25rem;
    border-radius: 2px;
    font-weight: 500;
}}
.prompt-note {{
    margin-top: 0.4rem;
    font-size: 0.82rem;
    color: #6b7280;
    font-style: italic;
}}

/* ---- Back to top ---- */
.back-top {{
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #e5e7eb;
    font-size: 0.8rem;
}}

/* ---- Footer ---- */
.page-footer {{
    text-align: center;
    padding: 2rem;
    font-size: 0.75rem;
    color: #9ca3af;
    border-top: 1px solid #e5e7eb;
    margin-top: 2rem;
}}

/* ---- Print ---- */
@media print {{
    body {{ font-size: 11px; }}
    .cover {{ min-height: auto; padding: 6rem 3rem; }}
    .toc-item:hover {{ background: transparent; }}
    .back-top {{ display: none; }}
    a {{ color: #1a1a1a; }}
}}
</style>
</head>
<body>

<div class="cover">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="80" height="80" style="margin-bottom:1.5rem;">
      <defs>
        <linearGradient id="logo-h4g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34d399" stop-opacity="0.8"/><stop offset="100%" stop-color="#10b981" stop-opacity="0.6"/>
        </linearGradient>
        <linearGradient id="logo-h4g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.75"/><stop offset="100%" stop-color="#22d3ee" stop-opacity="0.55"/>
        </linearGradient>
        <linearGradient id="logo-h4g3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.7"/><stop offset="100%" stop-color="#6366f1" stop-opacity="0.5"/>
        </linearGradient>
        <linearGradient id="logo-h4g4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.5"/><stop offset="100%" stop-color="#3b82f6" stop-opacity="0.35"/>
        </linearGradient>
        <filter id="logo-h4shadow">
          <feDropShadow dx="0.8" dy="1.5" stdDeviation="1.2" flood-color="#000" flood-opacity="0.4"/>
        </filter>
        <filter id="logo-h4glow">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="32" cy="32" r="24" fill="#06b6d4" opacity="0.08" filter="url(#logo-h4glow)"/>
      <path d="M46,18 C39,11 26,11 19,18 C12,25 12,38 19,45 C26,52 39,52 46,46" fill="none" stroke="url(#logo-h4g4)" stroke-width="6" stroke-linecap="round" filter="url(#logo-h4shadow)" transform="translate(3,3)"/>
      <path d="M46,18 C39,11 26,11 19,18 C12,25 12,38 19,45 C26,52 39,52 46,46" fill="none" stroke="url(#logo-h4g3)" stroke-width="6" stroke-linecap="round" filter="url(#logo-h4shadow)" transform="translate(1.5,1.5)"/>
      <path d="M46,18 C39,11 26,11 19,18 C12,25 12,38 19,45 C26,52 39,52 46,46" fill="none" stroke="url(#logo-h4g2)" stroke-width="6" stroke-linecap="round" filter="url(#logo-h4shadow)" transform="translate(0,0)"/>
      <path d="M46,18 C39,11 26,11 19,18 C12,25 12,38 19,45 C26,52 39,52 46,46" fill="none" stroke="url(#logo-h4g1)" stroke-width="6" stroke-linecap="round" filter="url(#logo-h4shadow)" transform="translate(-1.5,-1.5)"/>
      <path d="M44,17 C38,12 27,12 21,18" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.3" transform="translate(-1.5,-1.5)"/>
      <circle cx="21" cy="16" r="1.8" fill="#fff" opacity="0.3"/>
      <circle cx="20" cy="15" r="0.7" fill="#fff" opacity="0.45"/>
      <line x1="17" y1="24" x2="17" y2="40" stroke="#fff" stroke-width="0.4" opacity="0.15" transform="translate(-1.5,-1.5)"/>
    </svg>
    <p class="cover-brand">Cybersecurity AI Toolkit</p>
    <h1>CyberPrompt 300+</h1>
    <p class="cover-sub">The complete AI prompt collection for cybersecurity professionals. 323 ready-to-use prompts across 8 security domains.</p>
    <div class="cover-line"></div>
    <div class="cover-info">
        <div><strong>323</strong><span>Prompts</span></div>
        <div><strong>8</strong><span>Categories</span></div>
    </div>
    <p class="cover-ver">Version 1.0 &middot; May 2026</p>
</div>

<div class="toc" id="toc">
    <h2>Table of Contents</h2>
    <p class="toc-desc">Click a category to jump directly to its prompts.</p>
    {toc_items}
</div>

{cat_sections}

<div class="page-footer">
    CyberPrompt 300+ &middot; Cybersecurity AI Toolkit &middot; Version 1.0 &middot; May 2026
</div>

</body>
</html>'''


if __name__ == '__main__':
    with open(MD_PATH, 'r', encoding='utf-8') as f:
        md = f.read()

    prompts = parse_prompts(md)
    print(f"Parsed {len(prompts)} prompts")

    out = build_html(prompts)
    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        f.write(out)

    size_kb = os.path.getsize(OUT_PATH) // 1024
    print(f"Generated {OUT_PATH} ({size_kb} KB)")

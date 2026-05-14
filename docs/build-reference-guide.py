#!/usr/bin/env python3
"""
Embed prompts-master.md into CyberPrompt300-Reference-Guide.html
for standalone offline use.

Usage: python build-reference-guide.py
"""
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)

INPUT_MD = os.path.join(PROJECT_DIR, "content", "prompts-master.md")
HTML_FILE = os.path.join(SCRIPT_DIR, "CyberPrompt300-Reference-Guide.html")

def main():
    # Read markdown
    with open(INPUT_MD, "r", encoding="utf-8") as f:
        md_content = f.read()

    # No escaping needed - <textarea> content is raw text in HTML
    # Only "</textarea>" in content would break it (verified: not present in source)

    # Read existing HTML
    with open(HTML_FILE, "r", encoding="utf-8") as f:
        html_content = f.read()

    # Replace the textarea content
    marker_start = '<textarea id="md-source" style="display:none;">'
    marker_end = '</textarea>'

    idx_start = html_content.find(marker_start)
    if idx_start == -1:
        print("ERROR: Could not find the md-source textarea in HTML.")
        return

    idx_start += len(marker_start)
    idx_end = html_content.find(marker_end, idx_start)
    if idx_end == -1:
        print("ERROR: Could not find closing </textarea> tag.")
        return

    new_html = html_content[:idx_start] + "\n" + md_content + "\n" + html_content[idx_end:]

    with open(HTML_FILE, "w", encoding="utf-8") as f:
        f.write(new_html)

    print(f"SUCCESS: Embedded {len(md_content):,} chars of markdown into HTML")
    print(f"HTML file size: {len(new_html):,} bytes ({len(new_html)//1024:,} KB)")
    print(f"Output: {HTML_FILE}")
    print()
    print("You can now open the HTML file in Chrome and use Print > Save as PDF")

if __name__ == "__main__":
    main()

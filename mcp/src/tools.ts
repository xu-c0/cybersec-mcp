import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  promptRange: [number, number];
}

interface Prompt {
  id: number;
  title: string;
  category: string;
  subcategory?: string;
  prompt: string;
  useWhen?: string;
  variables?: string[];
  skillLevel: string;
}

interface ScenarioVariable {
  key: string;
  label: string;
  placeholder: string;
}

interface ScenarioStep {
  phase: string;
  promptId: number;
  description: string;
}

interface Scenario {
  id: string;
  name: string;
  icon: string;
  description: string;
  variables: ScenarioVariable[];
  steps: ScenarioStep[];
}

const promptsData: { categories: Category[]; prompts: Prompt[] } = JSON.parse(
  readFileSync(join(__dirname, 'data', 'prompts.json'), 'utf-8')
);
const scenariosData: { scenarios: Scenario[] } = JSON.parse(
  readFileSync(join(__dirname, 'data', 'scenarios.json'), 'utf-8')
);

const { categories, prompts } = promptsData;
const { scenarios } = scenariosData;

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function substituteVariables(text: string, vars: Record<string, string> = {}): string {
  let out = text;
  for (const [key, value] of Object.entries(vars)) {
    if (value == null || value === '') continue;
    out = out.replace(new RegExp('\\[' + escapeRegex(key) + '\\]', 'g'), value);
  }
  return out;
}

function unfilledVariables(text: string): string[] {
  const set = new Set<string>();
  const re = /\[([A-Z0-9_/]+)\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) set.add(m[1]);
  return [...set];
}

const CATEGORY_IDS = categories.map((c) => c.id) as [string, ...string[]];
const SCENARIO_IDS = scenarios.map((s) => s.id) as [string, ...string[]];

export function registerTools(server: McpServer) {
  server.tool(
    'cybersec_list_categories',
    'List the 8 cybersecurity prompt categories with descriptions and prompt counts. Call this first to see what domains are covered before listing or fetching specific prompts.',
    {},
    async () => ({
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            categories.map((c) => ({
              id: c.id,
              name: c.name,
              description: c.description,
              count: prompts.filter((p) => p.category === c.id).length,
            })),
            null,
            2
          ),
        },
      ],
    })
  );

  server.tool(
    'cybersec_list_prompts',
    'Search and filter the prompt library. Returns prompt summaries (id, title, useWhen, variables) — up to 50 per call. Follow up with cybersec_get_prompt for the full text.',
    {
      category: z
        .enum(CATEGORY_IDS)
        .optional()
        .describe('Filter by category id (red-team, blue-team, soc-ops, cloud-security, osint, grc, vuln-analysis, ai-security).'),
      skill: z
        .enum(['beginner', 'intermediate', 'advanced'])
        .optional()
        .describe('Filter by skill level.'),
      search: z
        .string()
        .optional()
        .describe('Free-text search across title, useWhen, subcategory, and prompt body.'),
    },
    async ({ category, skill, search }) => {
      let results = prompts;
      if (category) results = results.filter((p) => p.category === category);
      if (skill) results = results.filter((p) => p.skillLevel === skill);
      if (search) {
        const q = search.toLowerCase();
        results = results.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            (p.useWhen ?? '').toLowerCase().includes(q) ||
            (p.subcategory ?? '').toLowerCase().includes(q) ||
            p.prompt.toLowerCase().includes(q)
        );
      }
      const shown = results.slice(0, 50);
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(
              {
                total: results.length,
                shown: shown.length,
                truncated: results.length > shown.length,
                results: shown.map((p) => ({
                  id: p.id,
                  title: p.title,
                  category: p.category,
                  skillLevel: p.skillLevel,
                  subcategory: p.subcategory ?? null,
                  useWhen: p.useWhen ?? null,
                  variables: p.variables ?? [],
                })),
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    'cybersec_get_prompt',
    'Get a specific prompt by id, with optional variable substitution. Returns the full prompt text ready to send to an LLM. Variables not provided remain as [PLACEHOLDERS] in the output and are listed under unfilledVariables.',
    {
      id: z.number().int().min(1).max(1000).describe('Prompt id (1–323 currently).'),
      variables: z
        .record(z.string())
        .optional()
        .describe('Object mapping variable name (without brackets) to value, e.g. { TARGET_DOMAIN: "example.com" }.'),
    },
    async ({ id, variables }) => {
      const p = prompts.find((x) => x.id === id);
      if (!p) {
        return {
          isError: true,
          content: [
            { type: 'text' as const, text: `No prompt with id ${id}. Use cybersec_list_prompts to find valid ids.` },
          ],
        };
      }
      const text = substituteVariables(p.prompt, variables);
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(
              {
                id: p.id,
                title: p.title,
                category: p.category,
                subcategory: p.subcategory ?? null,
                skillLevel: p.skillLevel,
                useWhen: p.useWhen ?? null,
                declaredVariables: p.variables ?? [],
                unfilledVariables: unfilledVariables(text),
                prompt: text,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    'cybersec_list_scenarios',
    'List all 7 scenario workflows — multi-step prompt chains for complete engagements (incident response, pentest, cloud audit, etc.). Each scenario takes variables and walks through chained phases.',
    {},
    async () => ({
      content: [
        {
          type: 'text' as const,
          text: JSON.stringify(
            scenarios.map((s) => ({
              id: s.id,
              name: s.name,
              description: s.description,
              stepCount: s.steps.length,
              variables: s.variables,
            })),
            null,
            2
          ),
        },
      ],
    })
  );

  server.tool(
    'cybersec_get_scenario',
    'Get a complete scenario workflow with every step expanded (phase, description, prompt text). Variables are substituted across all steps. Use this when the user describes a full engagement (incident, audit, hunt) rather than a single task.',
    {
      id: z
        .enum(SCENARIO_IDS)
        .describe('Scenario id (web-app-pentest, incident-response, cloud-audit, bug-bounty-recon, compliance-audit, threat-hunting, ai-security).'),
      variables: z
        .record(z.string())
        .optional()
        .describe('Object mapping variable name to value. See cybersec_list_scenarios for each scenario\'s expected variables.'),
    },
    async ({ id, variables }) => {
      const s = scenarios.find((x) => x.id === id);
      if (!s) {
        return {
          isError: true,
          content: [
            { type: 'text' as const, text: `No scenario with id ${id}. Use cybersec_list_scenarios to see options.` },
          ],
        };
      }
      const steps = s.steps.map((step, i) => {
        const p = prompts.find((pp) => pp.id === step.promptId);
        const promptText = p ? substituteVariables(p.prompt, variables) : null;
        return {
          step: i + 1,
          phase: step.phase,
          description: step.description,
          promptId: step.promptId,
          promptTitle: p ? p.title : null,
          unfilledVariables: promptText ? unfilledVariables(promptText) : [],
          prompt: promptText,
        };
      });
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(
              {
                id: s.id,
                name: s.name,
                description: s.description,
                declaredVariables: s.variables,
                steps,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );
}

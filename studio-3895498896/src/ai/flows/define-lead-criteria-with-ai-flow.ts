'use server';
/**
 * @fileOverview An AI-assisted tool for defining B2B lead criteria.
 *
 * - defineLeadCriteriaWithAI - A function that interprets natural language input
 *   to suggest structured lead criteria.
 * - DefineLeadCriteriaInput - The input type for the defineLeadCriteriaWithAI function.
 * - DefineLeadCriteriaOutput - The return type for the defineLeadCriteriaWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DefineLeadCriteriaInputSchema = z.object({
  naturalLanguageCriteria: z
    .string()
    .describe(
      'Natural language description of desired B2B lead criteria (e.g., target industries, company size, geographical focus, specific job roles, or exclusion criteria).'
    ),
});
export type DefineLeadCriteriaInput = z.infer<typeof DefineLeadCriteriaInputSchema>;

const DefineLeadCriteriaOutputSchema = z.object({
  industry: z
    .array(z.string())
    .describe('List of target industries or sectors.'),
  companySize: z
    .object({
      minEmployees: z.number().optional().describe('Minimum number of employees.'),
      maxEmployees: z.number().optional().describe('Maximum number of employees.'),
      minRevenueUSD: z.number().optional().describe('Minimum annual revenue in USD.'),
      maxRevenueUSD: z.number().optional().describe('Maximum annual revenue in USD.'),
    })
    .optional()
    .describe('Target company size criteria. If only one bound is specified, assume it is a minimum (e.g., "over 100 employees" means minEmployees = 100).'),
  geography: z
    .array(z.string())
    .describe('List of target geographical locations (e.g., countries, states, regions, cities).'),
  roles: z
    .array(z.string())
    .describe('List of target job roles, titles, or departments (e.g., "Head of Sales", "CMO", "IT Manager").'),
  exclusionCriteria: z
    .array(z.string())
    .optional()
    .describe('List of specific criteria to explicitly exclude from lead generation (e.g., "startups", "government entities").'),
  notes: z
    .string()
    .optional()
    .describe('Any additional unstructured notes or specific instructions extracted from the input.'),
  clarificationsNeeded: z
    .array(z.string())
    .optional()
    .describe(
      'List of specific clarifications or further details needed from the user to refine the criteria, if the input was ambiguous or incomplete.'
    ),
});
export type DefineLeadCriteriaOutput = z.infer<typeof DefineLeadCriteriaOutputSchema>;

export async function defineLeadCriteriaWithAI(
  input: DefineLeadCriteriaInput
): Promise<DefineLeadCriteriaOutput> {
  return defineLeadCriteriaWithAIFlow(input);
}

const defineLeadCriteriaPrompt = ai.definePrompt({
  name: 'defineLeadCriteriaPrompt',
  input: {schema: DefineLeadCriteriaInputSchema},
  output: {schema: DefineLeadCriteriaOutputSchema},
  prompt: `You are an AI assistant specialized in defining B2B lead criteria for a managed sales prospecting service called LeadMaster. Your goal is to extract structured lead criteria from natural language descriptions provided by potential clients.

Based on the user's input, provide the most accurate and comprehensive structured lead criteria. If any information is unclear, ambiguous, or missing, explicitly state what clarifications are needed in the 'clarificationsNeeded' field. Do not make assumptions where clarity is required. If the user mentions a single number for employees or revenue (e.g., "companies with over 50 employees"), assume it's a minimum.

Natural language criteria: {{{naturalLanguageCriteria}}}`,
});

const defineLeadCriteriaWithAIFlow = ai.defineFlow(
  {
    name: 'defineLeadCriteriaWithAIFlow',
    inputSchema: DefineLeadCriteriaInputSchema,
    outputSchema: DefineLeadCriteriaOutputSchema,
  },
  async input => {
    const {output} = await defineLeadCriteriaPrompt(input);
    return output!;
  }
);

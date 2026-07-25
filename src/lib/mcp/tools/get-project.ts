import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/lib/portfolio-data";

export default defineTool({
  name: "get_project",
  title: "Get project case study",
  description:
    "Returns the full UX case study for a portfolio project by slug: challenge, problem, design, process, solution, and results.",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe("The project slug, e.g. 'meowfy-app'. Use list_projects to discover slugs."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
      return {
        content: [{ type: "text", text: `No project found with slug "${slug}".` }],
        isError: true,
      };
    }
    const payload = {
      slug: project.slug,
      title: project.title,
      tagline: project.tagline,
      year: project.year,
      role: project.role,
      tools: project.tools,
      challenge: project.challenge,
      problem: project.problem,
      design: project.design,
      process: project.process,
      solution: project.solution,
      results: project.results,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: { project: payload },
    };
  },
});

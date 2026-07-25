import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/lib/portfolio-data";

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description:
    "Lists all UX/front-end case studies in the portfolio with slug, title, tagline, year, and role.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const summary = projects.map((p) => ({
      slug: p.slug,
      title: p.title,
      tagline: p.tagline,
      year: p.year,
      role: p.role,
      tools: p.tools,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: { projects: summary },
    };
  },
});

// keep z referenced for future input schemas
void z;

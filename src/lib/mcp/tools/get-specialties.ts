import { defineTool } from "@lovable.dev/mcp-js";
import { specialties } from "@/lib/portfolio-data";

export default defineTool({
  name: "get_specialties",
  title: "Get specialties",
  description: "Returns the portfolio owner's specialties/areas of expertise.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const clean = specialties.map((s) => ({ title: s.title, description: s.desc }));
    return {
      content: [{ type: "text", text: JSON.stringify(clean, null, 2) }],
      structuredContent: { specialties: clean },
    };
  },
});

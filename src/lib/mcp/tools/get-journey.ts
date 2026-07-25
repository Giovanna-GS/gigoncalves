import { defineTool } from "@lovable.dev/mcp-js";
import { journey } from "@/lib/portfolio-data";

export default defineTool({
  name: "get_journey",
  title: "Get professional journey",
  description:
    "Returns the portfolio owner's professional journey: work history, studies, and skills.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(journey, null, 2) }],
    structuredContent: { journey },
  }),
});

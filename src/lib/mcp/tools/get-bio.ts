import { defineTool } from "@lovable.dev/mcp-js";

const bio = {
  name: "meow.dev",
  headline: "Front-end dev migrando pra UX",
  location: "São Paulo, Brasil (remoto ok)",
  status: "Aberta pra oportunidades em UX",
  summary:
    "Front-end há 4 anos, hoje em transição pra UX — unindo o técnico com pesquisa e empatia. Ama pixels, gatos e docs bem escritas.",
};

export default defineTool({
  name: "get_bio",
  title: "Get bio",
  description:
    "Returns a short bio of the portfolio owner (name, headline, location, status, summary).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(bio, null, 2) }],
    structuredContent: { bio },
  }),
});

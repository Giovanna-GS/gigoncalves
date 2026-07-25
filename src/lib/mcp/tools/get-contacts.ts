import { defineTool } from "@lovable.dev/mcp-js";

const contacts = [
  { channel: "email", value: "oi@meow.dev", href: "mailto:oi@meow.dev" },
  { channel: "linkedin", value: "/in/meow", href: "https://linkedin.com/in/meow" },
  { channel: "github", value: "@meow", href: "https://github.com/meow" },
  { channel: "whatsapp", value: "+55 11 99999-9999", href: "https://wa.me/5511999999999" },
];

export default defineTool({
  name: "get_contacts",
  title: "Get contact info",
  description:
    "Returns the public contact channels for the portfolio owner (email, LinkedIn, GitHub, WhatsApp).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contacts, null, 2) }],
    structuredContent: { contacts },
  }),
});

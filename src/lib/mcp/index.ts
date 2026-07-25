import { defineMcp } from "@lovable.dev/mcp-js";
import listProjects from "./tools/list-projects";
import getProject from "./tools/get-project";
import getJourney from "./tools/get-journey";
import getSpecialties from "./tools/get-specialties";
import getContacts from "./tools/get-contacts";
import getBio from "./tools/get-bio";

export default defineMcp({
  name: "meow-dev-portfolio",
  title: "meow.dev — Portfolio",
  version: "0.1.0",
  instructions:
    "Public MCP server for the meow.dev portfolio. Use these tools to read the owner's bio, journey, specialties, contact channels, and UX/front-end case studies. All data is public and read-only.",
  tools: [listProjects, getProject, getJourney, getSpecialties, getContacts, getBio],
});

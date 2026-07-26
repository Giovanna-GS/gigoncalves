import project1Cover from "@/assets/project-1-cover.jpg";
import project1Wide from "@/assets/project-1-wide.jpg";
import project1Detail from "@/assets/project-1-detail.jpg";
import project2Cover from "@/assets/project-2-cover.jpg";
import project3Cover from "@/assets/project-3-cover.jpg";
import palettePlaceholder from "@/assets/palette.png";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  cover: string;
  wide: string;
  detail: string;
  palette: string;
  year: string;
  role: string;
  tools: string[];
  challenge: string;
  problem: string;
  design: string;
  process: string[];
  solution: string;
  results: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "meowfy-app",
    title: "Meowfy",
    tagline: "App de adoção de gatinhos com foco em match afetivo.",
    cover: project1Cover,
    wide: project1Wide,
    detail: project1Detail,
    palette: palettePlaceholder,
    year: "2025",
    role: "UX Designer & Front-end",
    tools: ["Figma", "React", "Framer Motion"],
    challenge:
      "Como aproximar tutores em potencial de ONGs pequenas, criando um fluxo de adoção que não parecesse um cadastro burocrático?",
    problem:
      "As plataformas atuais tratam adoção como e-commerce — cards frios, filtros técnicos e zero conexão emocional. ONGs relataram desistência de 68% no meio do formulário.",
    design:
      "A paleta gira em torno de rosa e lavanda para transmitir afeto, com preto e off-white dando contraste e legibilidade. A tipografia mistura uma fonte monoespaçada (código) com uma sans-serif limpa, reforçando a identidade de dev que ama design.",
    process: [
      "Entrevistas com 12 tutores e 4 ONGs parceiras",
      "Mapa de empatia + jornada atual do adotante",
      "Card sorting com potenciais features",
      "3 rodadas de wireframes e testes moderados",
    ],
    solution:
      "Um app com onboarding conversacional, cards estilo perfil (personalidade > raça) e um sistema de match que sugere gatos compatíveis com a rotina da pessoa.",
    results: [
      { label: "Conversão", value: "+42%" },
      { label: "Tempo de fluxo", value: "-3min" },
      { label: "NPS", value: "72" },
    ],
  },
  {
    slug: "petshop-checkout",
    title: "Petshop Checkout",
    tagline: "Redesign de checkout mobile para e-commerce pet.",
    cover: project2Cover,
    wide: project1Wide,
    detail: project1Detail,
    palette: palettePlaceholder,
    year: "2024",
    role: "UX/UI Designer",
    tools: ["Figma", "Maze", "Hotjar"],
    challenge: "Reduzir abandono no checkout mobile, que estava em 74%.",
    problem:
      "Fluxo de 6 telas com campos redundantes, sem indicadores claros de progresso e frete calculado só no final.",
    design:
      "Cores sóbrias e tons de cinza quente para não competir com os produtos pet. O rosa aparece como destaque nos botões principais e no indicador de progresso, criando ritmo visual sem exageros.",
    process: [
      "Análise heurística do fluxo existente",
      "Session replay de 200 usuários",
      "Testes A/B com dois protótipos",
    ],
    solution:
      "Checkout em página única com frete calculado no primeiro passo, autopreenchimento inteligente e resumo pinado no topo.",
    results: [
      { label: "Abandono", value: "-31%" },
      { label: "Ticket médio", value: "+18%" },
    ],
  },
  {
    slug: "dash-catlover",
    title: "CatLover Dashboard",
    tagline: "Painel administrativo para uma rede de petshops.",
    cover: project3Cover,
    wide: project1Wide,
    detail: project1Detail,
    palette: palettePlaceholder,
    year: "2024",
    role: "Front-end + UX",
    tools: ["React", "Figma", "Recharts"],
    challenge: "Unificar 3 sistemas legados em uma única interface pra franqueados.",
    problem:
      "Gestores usavam planilhas, WhatsApp e um ERP dos anos 2000 pra rodar a operação. Zero visibilidade consolidada.",
    design:
      "Dashboard precisava de densidade de informação sem cansaço visual. A paleta usa roxo para dados, rosa para alertas e preto só na tipografia, mantendo a interface limpa e escaneável.",
    process: [
      "Workshop de co-criação com 6 franqueados",
      "Auditoria dos 3 sistemas atuais",
      "Design system do zero em Figma",
    ],
    solution:
      "Dashboard com métricas em tempo real, filtros salvos e ações rápidas contextuais — desenhado desktop-first.",
    results: [
      { label: "Tempo de relatório", value: "-4h/semana" },
      { label: "Adoção interna", value: "94%" },
    ],
  },
];

export const journey = {
  work: [
    { year: "Nov 2024 → hoje", place: "Soluções Industriais", note: "Analista Front-end — interfaces responsivas, SEO, performance e IA aplicada a código e design." },
  ],
  study: [
    { year: "Previsão: Jun/2027", place: "Pós-graduação em UX — Belas Artes", note: "Especialização em User Experience." },
    { year: "Concluído: Jun/2025", place: "Análise e Desenv. de Sistemas — São Judas Tadeu", note: "Graduação em tecnologia." },
  ],
  skills: [
    { name: "Figma", icon: "Figma" },
    { name: "UX/UI Design", icon: "Palette" },
    { name: "Wireframing", icon: "PenTool" },
    { name: "Prototipagem", icon: "MousePointerClick" },
    { name: "HTML / CSS", icon: "Code" },
    { name: "JavaScript", icon: "Braces" },
    { name: "Acessibilidade", icon: "Accessibility" },
    { name: "IA Generativa", icon: "Sparkles" },
  ],
};

export const specialties = [
  {
    title: "UX/UI Design",
    desc: "Interfaces com hierarquia clara, usabilidade e um toque de personalidade — do wireframe ao pixel final.",
    icon: "Palette",
  },
  {
    title: "Front-end",
    desc: "HTML, CSS, JavaScript e PHP pra transformar design em produto funcional e responsivo.",
    icon: "Code",
  },
  {
    title: "UX Research",
    desc: "Entrevistas, testes de usabilidade e análise de dados pra guiar decisões de design.",
    icon: "Search",
  },
  {
    title: "IA + Design",
    desc: "Inteligência Generativa aplicada a código, exploração visual e produtividade no design.",
    icon: "Sparkles",
  },
];

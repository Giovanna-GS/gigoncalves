import project1Cover from "@/assets/project-1-cover.jpg";
import project1Wide from "@/assets/project-1-wide.jpg";
import project1Detail from "@/assets/project-1-detail.jpg";
import project2Cover from "@/assets/project-2-cover.jpg";
import project3Cover from "@/assets/project-3-cover.jpg";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  cover: string;
  wide: string;
  detail: string;
  year: string;
  role: string;
  tools: string[];
  challenge: string;
  problem: string;
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
    year: "2025",
    role: "UX Designer & Front-end",
    tools: ["Figma", "React", "Framer Motion"],
    challenge:
      "Como aproximar tutores em potencial de ONGs pequenas, criando um fluxo de adoção que não parecesse um cadastro burocrático?",
    problem:
      "As plataformas atuais tratam adoção como e-commerce — cards frios, filtros técnicos e zero conexão emocional. ONGs relataram desistência de 68% no meio do formulário.",
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
    year: "2024",
    role: "UX/UI Designer",
    tools: ["Figma", "Maze", "Hotjar"],
    challenge: "Reduzir abandono no checkout mobile, que estava em 74%.",
    problem:
      "Fluxo de 6 telas com campos redundantes, sem indicadores claros de progresso e frete calculado só no final.",
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
    year: "2024",
    role: "Front-end + UX",
    tools: ["React", "Figma", "Recharts"],
    challenge: "Unificar 3 sistemas legados em uma única interface pra franqueados.",
    problem:
      "Gestores usavam planilhas, WhatsApp e um ERP dos anos 2000 pra rodar a operação. Zero visibilidade consolidada.",
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
    { year: "2024 → hoje", place: "Freelance UX", note: "Projetos de UX e front-end para ONGs e startups pet." },
    { year: "2022 → 2024", place: "TechCorp", note: "Desenvolvedora front-end pleno (React + design system)." },
    { year: "2020 → 2022", place: "Agência Rosa", note: "Front-end júnior, WordPress e sites institucionais." },
  ],
  study: [
    { year: "2025", place: "Curso UX Design — Awari", note: "Especialização em UX Research e Design Systems." },
    { year: "2019 → 2023", place: "Bacharelado em Sistemas de Informação", note: "TCC sobre acessibilidade cognitiva." },
  ],
  skills: [
    { name: "Figma", icon: "Figma" },
    { name: "React", icon: "Atom" },
    { name: "TypeScript", icon: "Braces" },
    { name: "Tailwind", icon: "Wind" },
    { name: "UX Research", icon: "Search" },
    { name: "Prototipação", icon: "MousePointerClick" },
    { name: "Design System", icon: "Component" },
    { name: "Acessibilidade", icon: "Accessibility" },
  ],
};

export const specialties = [
  {
    title: "UX Research",
    desc: "Entrevistas, testes moderados, análise de sessão e síntese em insights acionáveis.",
    icon: "Search",
  },
  {
    title: "UI Design",
    desc: "Interfaces com hierarquia clara, componentes consistentes e um toque de personalidade.",
    icon: "Palette",
  },
  {
    title: "Front-end",
    desc: "React, TypeScript e CSS moderno pra transformar Figma em produto de verdade.",
    icon: "Code2",
  },
  {
    title: "Design System",
    desc: "Tokens, componentes documentados e a ponte entre design e código.",
    icon: "Component",
  },
];

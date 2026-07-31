import project1Cover from "@/assets/projeto-1/ong-1.png";
import project1Wide from "@/assets/projeto-1/ong-4.png";
import project1WideLiga from "@/assets/projeto-1/ong-3.png";
import project1Detail from "@/assets/projeto-1/ong-3.png";
import project1Palette from "@/assets/projeto-1/ong-2.png";
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
  results: { label: string; value: string }[] | string;
};

export const projects: Project[] = [
  {
    slug: "liga-das-patas",
    title: "Liga das Patas",
    tagline: "Uma plataforma de adoção criada para conectar pets resgatados a novas famílias.",
    cover: project1Cover,
    wide: project1WideLiga,
    detail: project1Wide,
    palette: project1Palette,
    year: "2025",
    role: "UX/UI Design",
    tools: ["Figma", "Pesquisa", "Identidade Visual", "Acessibilidade"],
    challenge:
      "A Liga das Patas é uma ONG criada com o propósito de ajudar pets resgatados a encontrarem uma nova chance de serem felizes por meio da adoção.\n\nMuitos desses animais passaram por situações difíceis, como abandono e maus-tratos, mas continuam demonstrando carinho, lealdade e amor.\n\nA partir desse contexto, o desafio do projeto foi criar uma plataforma de adoção acolhedora e intuitiva, capaz de apresentar os pets disponíveis, aproximar os usuários da causa animal e facilitar o processo de adoção.",
    problem:
      "As pesquisas revelaram que muitos usuários se sentiam inseguros durante o processo de adoção, principalmente por falta de informações sobre os pets, sua adaptação ao novo lar e as etapas da adoção.\n\nCom base nesses insights, o projeto buscou criar uma experiência mais clara, acolhedora e intuitiva, reduzindo dúvidas e aumentando a confiança dos futuros adotantes.",
    design:
      "O conceito visual\n\nA identidade visual da Liga das Patas foi inspirada na ideia de que cada pet resgatado é um super-herói.\n\nAs capas e o estilo dos personagens simbolizam coragem, superação e esperança, criando uma conexão emocional com o usuário e reforçando a missão da ONG de encontrar um novo lar para esses animais.\n\nDecisões visuais\n\nA identidade combina a Inter, utilizada pela sua legibilidade e clareza, com a Fredoka, escolhida para transmitir acolhimento e personalidade.\n\nA paleta une tons de roxo, que representam cuidado e confiança, e laranja, associado à alegria e energia, equilibrados pelo branco e preto para garantir contraste e boa legibilidade.",
    process: [
      "Pesquisa com personas e mapas de empatia para compreender necessidades dos usuários",
      "Análise de comportamentos e fontes de informação dos potenciais adotantes",
      "Estruturação do fluxo de navegação com caminhos claros para adoção, doação e voluntariado",
      "Organização da jornada do usuário com etapas simples e intuitivas",
    ],
    solution:
      "Foi desenvolvida uma plataforma de adoção para centralizar informações sobre a ONG e tornar a jornada de adoção mais simples e intuitiva.\n\nA interface reúne a apresentação da instituição, os pets disponíveis para adoção, informações detalhadas sobre cada animal, diferentes formas de doação e conteúdos de apoio, como o passo a passo da adoção e perguntas frequentes.\n\nAlém da experiência em desktop, o projeto também contou com uma versão responsiva para dispositivos móveis e seguiu boas práticas de acessibilidade, priorizando legibilidade, contraste, hierarquia visual, áreas de clique amplas e integração com o VLibras.",
    results:
      "O resultado foi uma plataforma de adoção intuitiva e acolhedora, desenvolvida para aproximar pessoas dos pets resgatados e facilitar toda a jornada de adoção.\n\nA identidade visual inspirada em super-heróis fortalece a conexão emocional com os animais, destacando suas histórias de coragem, superação e a importância de uma nova chance.\n\nO projeto busca unir informação, acessibilidade e empatia para incentivar adoções e ampliar o apoio à causa animal.",
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
    {
      year: "Nov 2024 → hoje",
      place: "Soluções Industriais",
      note: "Analista Front-end — interfaces responsivas, SEO, performance e IA aplicada a código e design.",
    },
  ],
  study: [
    {
      year: "Previsão: Jun/2027",
      place: "Pós-graduação em UX — Belas Artes",
      note: "Especialização em User Experience.",
    },
    {
      year: "Concluído: Jun/2025",
      place: "Análise e Desenv. de Sistemas — São Judas Tadeu",
      note: "Graduação em tecnologia.",
    },
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

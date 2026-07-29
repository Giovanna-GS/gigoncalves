import project1Cover from "@/assets/projeto-1/ong-1.png";
import project1Wide from "@/assets/projeto-1/ong-4.png";
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
    wide: project1Wide,
    detail: project1Detail,
    palette: project1Palette,
    year: "2025",
    role: "UX/UI Design",
    tools: ["Figma", "Pesquisa", "Identidade Visual", "Acessibilidade"],
    challenge:
      "A Liga das Patas é uma ONG criada com o propósito de ajudar pets resgatados a encontrarem uma nova chance de serem felizes por meio da adoção.\n\nMuitos desses animais passaram por situações difíceis, como abandono e maus-tratos, mas continuam demonstrando carinho, lealdade e amor.\n\nA partir desse contexto, o desafio do projeto foi criar uma plataforma de adoção acolhedora e intuitiva, capaz de apresentar os pets disponíveis, aproximar os usuários da causa animal e facilitar o processo de adoção.",
    problem:
      "O projeto parte da necessidade de tornar a jornada de adoção mais clara e acessível para quem deseja adotar um pet.\n\nDurante a pesquisa e a construção das personas e mapas de empatia, foram identificadas algumas inseguranças enfrentadas pelos usuários, como:\n\n• medo de o pet não se adaptar ao apartamento ou ambiente;\n• falta de informações sobre o comportamento do animal;\n• receio de não conseguir oferecer a rotina ideal para o pet;\n• medo de conflitos entre animais que já vivem na casa;\n• insegurança sobre o processo de adaptação;\n• dúvidas relacionadas ao processo de adoção.\n\nA partir dessas descobertas, o projeto buscou organizar as informações de forma mais clara e criar uma experiência que ajudasse o usuário a entender melhor a ONG, os animais e as etapas necessárias para realizar uma adoção.",
    design:
      "O conceito visual\n\nA identidade da Liga das Patas nasceu da ideia de representar os pets resgatados como super-heróis.\n\nA escolha parte da história desses animais: mesmo depois de passarem por situações difíceis, eles continuam demonstrando carinho, lealdade e amor.\n\nAs capas e o estilo amigável dos personagens representam coragem, superação e esperança.\n\nO conceito busca criar uma conexão emocional com o usuário e reforçar a missão da ONG de encontrar um lar para esses animais.\n\nA ideia é mostrar que cada pet possui sua própria história e que, apesar das dificuldades que enfrentou, ainda pode ter uma nova chance.\n\nDecisões visuais\n\nPara construir a identidade visual, foram escolhidas as fontes Inter e Fredoka.\n\nA Inter foi utilizada nos textos e informações da interface por apresentar um estilo neutro, moderno e legível, facilitando a leitura e a navegação.\n\nA Fredoka foi escolhida para títulos e destaques por suas formas arredondadas e divertidas, transmitindo acolhimento e leveza e combinando com a proposta dos pets como super-heróis.\n\nPaleta de cores\n\nAs cores foram pensadas para transmitir acolhimento, esperança e energia, refletindo a identidade da ONG e a história dos pets resgatados.\n\nOs tons de roxo representam cuidado, confiança e empatia.\n\nOs tons de laranja trazem alegria, carinho e ação.\n\nO branco e o preto ajudam a equilibrar a identidade visual, garantindo leveza, contraste e boa legibilidade no site.",
    process: [
      "Pesquisa com personas e mapas de empatia para compreender necessidades dos usuários",
      "Análise de comportamentos e fontes de informação dos potenciais adotantes",
      "Estruturação do fluxo de navegação com caminhos claros para adoção, doação e voluntariado",
      "Organização da jornada do usuário com etapas simples e intuitivas",
    ],
    solution:
      "A solução foi uma plataforma de adoção que reúne as principais informações e funcionalidades necessárias para acompanhar a jornada do usuário.\n\nHome\n\nA página inicial foi criada para apresentar a ONG, sua missão e os principais recursos da plataforma de forma clara e intuitiva.\n\nA Home também apresenta alguns pets em destaque, convidando o usuário a conhecer os animais disponíveis.\n\nAlém disso, conta com uma seção explicando como funciona o processo de adoção e um FAQ com perguntas frequentes, ajudando a esclarecer dúvidas comuns.\n\nTambém foi desenvolvida uma versão mobile da tela inicial, garantindo uma experiência adequada em diferentes dispositivos.\n\nAdoção\n\nA tela de adoção foi desenvolvida para facilitar a busca pelos pets disponíveis e incentivar o usuário a iniciar o processo de adoção.\n\nOs animais são apresentados em cards com informações como nome, idade, características e breve descrição.\n\nCada card direciona o usuário para a página de detalhes do pet, onde é possível conhecer melhor sua história, personalidade e informações relacionadas ao processo de adoção.\n\nSobre Nós\n\nA página Sobre Nós apresenta a história, missão, visão e valores da ONG.\n\nO objetivo é permitir que os usuários conheçam melhor a instituição e seu trabalho com os animais resgatados.\n\nEssa área também contribui para fortalecer a confiança dos visitantes e criar uma conexão maior com a causa animal.\n\nDoação\n\nA tela de doação reúne diferentes formas de contribuição de maneira simples e organizada.\n\nEntre as opções estão PIX, transferência bancária, Nota Fiscal Paulista e doação de produtos.\n\nA proposta é facilitar o apoio à ONG e mostrar como cada contribuição auxilia nos cuidados, alimentação e bem-estar dos pets resgatados.\n\nTambém foi prevista a integração com as redes sociais da ONG para acompanhar comprovantes de doações, campanhas e principais necessidades dos animais, trazendo mais transparência para o processo.\n\nAcessibilidade\n\nAlém da identidade visual e da usabilidade, também foram consideradas melhorias de acessibilidade para facilitar a experiência dos usuários.\n\nForam aplicadas decisões como tipografia com tamanhos maiores, contraste entre texto e fundo, botões e elementos interativos com áreas amplas de clique, estrutura visual organizada, hierarquia clara das informações e integração do VLibras para tradução do conteúdo para Libras.\n\nEssas escolhas foram pensadas para tornar a plataforma mais acessível e facilitar a navegação dos usuários.",
    results:
      "O resultado foi uma plataforma de adoção que reúne informação, acolhimento e facilidade de navegação em uma única experiência.\n\nA solução permite que o usuário conheça a ONG, explore os pets disponíveis, tenha acesso às informações dos animais e compreenda melhor como funciona o processo de adoção.\n\nAlém da adoção, a plataforma também apresenta formas de apoiar a ONG por meio de doações e voluntariado, ampliando as possibilidades de participação na causa.\n\nA identidade visual, baseada no conceito dos pets como super-heróis, contribui para criar uma conexão emocional com os animais e reforçar suas histórias de coragem e superação.\n\nO projeto busca, assim, aproximar os pets resgatados de pessoas que possam oferecer um lar, cuidado e uma nova chance de serem felizes.",
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

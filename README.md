# stardust.dev — Portfólio UX & Front-end

Portfólio pessoal com estética retro-futurista anos 2000, construído com TanStack Start, React, Tailwind CSS e TypeScript. Criado e hospedado via [Lovable](https://lovable.dev).

## Tech Stack

- **Framework:** TanStack Start (SSR com React 19)
- **Estilo:** Tailwind CSS v4 + custom CSS (starfield, CRT effects, polaroids, marquee)
- **UI:** Radix UI + Lucide Icons
- **Build:** Vite 8
- **Linguagem:** TypeScript

## Estrutura

```
src/
├── routes/
│   ├── __root.tsx          # Layout raiz + meta tags + fonts
│   ├── index.tsx           # Home (hero, sobre, projetos, jornada, galeria)
│   └── projetos.$slug.tsx  # Página individual de cada projeto (case study)
├── components/
│   ├── site-header.tsx     # Header do site
│   ├── site-footer.tsx     # Footer do site
│   └── star-icon.tsx       # Ícone vetorial de estrela
├── lib/
│   └── portfolio-data.ts   # Dados dos projetos, jornada e skills
├── assets/                 # Imagens (polaroids, capas)
└── styles.css              # Estilos globais + paleta galaxy + animações
```

## Como rodar no navegador

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Passo a passo

1. Abra o terminal na pasta do projeto:

```bash
cd gigoncalves
```

2. Instale as dependências:

```bash
npm install --legacy-peer-deps
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador:

```
http://localhost:3000
```

Pronto — o site vai abrir com hot reload.

### Build para produção

```bash
npm run build
npm run preview
```

## Projetos no portfólio

| Projeto | Ano | Papel | Stack |
|---------|-----|-------|-------|
| **Meowfy** | 2025 | UX Designer & Front-end | Figma, React, Framer Motion |
| **Petshop Checkout** | 2024 | UX/UI Designer | Figma, Maze, Hotjar |
| **CatLover Dashboard** | 2024 | Front-end + UX | React, Figma, Recharts |

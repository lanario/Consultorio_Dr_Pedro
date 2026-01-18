# Blog Dr. Pedro Lucas

Blog e site institucional do Consultório Odontológico Dr. Pedro Lucas, desenvolvido com Next.js 14, TypeScript e TailwindCSS.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript** (tipagem estática rigorosa)
- **React 18**
- **TailwindCSS** (estilização responsiva)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
├── app/
│   ├── globals.css      # Estilos globais com TailwindCSS
│   ├── layout.tsx       # Layout raiz da aplicação
│   └── page.tsx         # Página inicial
├── components/          # Componentes React reutilizáveis
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Section.tsx
├── types/               # Definições de tipos TypeScript
│   └── index.ts
└── template/            # Template HTML original (referência)
```

## 🎨 Componentes Principais

- **Hero**: Seção hero com call-to-action
- **Section**: Container reutilizável para seções
- **Card**: Card de conteúdo com badge opcional
- **Button**: Botão com variantes (primary/secondary)
- **Badge**: Badge de categoria
- **Footer**: Rodapé com copyright dinâmico

## 🛠️ Desenvolvimento

O projeto segue as melhores práticas:

- Server Components por padrão
- TypeScript estrito (sem uso de `any`)
- Componentes declarados com `function`
- TailwindCSS para estilização
- Design responsivo e mobile-first

## 📝 Próximos Passos

- [ ] Implementar roteamento para páginas de artigos
- [ ] Adicionar integração com CMS ou banco de dados
- [ ] Implementar sistema de busca de artigos
- [ ] Adicionar formulário de contato
- [ ] Otimizar imagens com next/image


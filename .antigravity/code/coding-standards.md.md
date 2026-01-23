# Coding Standards – MetalVale SaaS Dashboard

## Filosofia Geral
- Código limpo > código rápido
- Arquivos pequenos e focados (máximo ~150–180 linhas por arquivo de componente / página)
- Separação clara de responsabilidades
- TypeScript 100% (strict mode ativado)
- Prefira composição sobre herança
- Evite qualquer lógica de negócio dentro de componentes React

## Nomenclatura
- Componentes: PascalCase (ex: SalesOverviewCard.tsx)
- Hooks custom: use + camelCase (ex: useSalesMetrics.ts)
- Services / API clients: kebab-case ou camelCase (ex: ordersService.ts)
- Interfaces / tipos: PascalCase + sufixo quando fizer sentido (ex: Order, OrderStatus)
- Pastas: kebab-case (ex: components/, features/, services/)

## Estrutura de Pastas (obrigatória)
src/
├── app/                    # App Router do Next.js
│   ├── (dashboard)/        # Grupo de rotas sem /dashboard na URL
│   ├── layout.tsx
│   └── page.tsx            # landing ou redirect
├── components/
│   ├── ui/                 # componentes atômicos/shadcn/ui ou similares
│   ├── layout/             # Header, Sidebar, PageHeader, etc
│   └── features/           # blocos maiores de feature (ex: OrdersTable/)
├── features/               # domínios / módulos de negócio (recomendado)
│   ├── orders/
│   ├── products/
│   ├── customers/
│   └── dashboard/
├── hooks/
├── lib/
│   └── utils.ts            # cn(), formatCurrency(), etc
├── services/
│   ├── api/                # axios / fetch wrapper + interceptors
│   └── features/           # services por domínio (ordersService.ts)
├── types/
│   └── index.ts            # barrel file com todas as interfaces exportadas
└── mocks/                  # dados mockados temporários

## Regras de Arquitetura
1. **Componentes puros** → só recebem props + children + event handlers
2. **Hooks custom** → toda lógica de estado + side-effects + cálculos ficam em hooks
3. **Services** → abstraem chamadas HTTP / formatação / regras de negócio puras
4. **Single Source of Truth** para entidades → todas as interfaces ficam em `types/`
5. **Mocks primeiro** → use dados mockados realistas até integrar Supabase

## Padrões de Código Obrigatórios
- Use `cn` do class-variance-authority ou tailwind-merge
- Componentes server por padrão (exceto quando precisa de useState/useEffect)
- Evite 'use client' no topo de páginas — isole em componentes mínimos
- Prefira Server Components + async/await
- Use Suspense + loading states quando fizer fetch
- Erros de formulário → react-hook-form + zod
- Estilização → Tailwind CSS 100% (sem CSS modules ou styled-components)

## Commit / PR (não se aplica ao one-shot, mas bom ter)
- Commits atômicos e descritivos
- PRs com nome claro + link do card/ticket
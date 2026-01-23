# UI & Styling Guidelines – MetalVale Dashboard

## Paleta de Cores (obrigatória – não invente)
Vermelho Institucional   #EC1C24   (primary, accents, buttons principais)
Preto                     #231F20   (text-primary, backgrounds escuros)
Cinza escuro              #303030   (text-secondary, borders, bg-muted)
Branco                    #FFFFFF   (bg-base, text em fundo escuro)

## Cores Semânticas Sugeridas (adicione você)
success   #10B981
warning   #F59E0B
danger    #EF4444 (mas use #EC1C24 quando possível para consistência)
info      #3B82F6

## Tipografia (exata – não substitua)
Primary:   "ITC Avant Garde Gothic", sans-serif
  - Bold Condensed → títulos, cards headers, valores grandes
  - Medium Oblique → subtítulos chamativos

Secondary: "Josefin Sans", sans-serif
  - Light / Regular → corpo de texto, tabelas, labels

Fallbacks: system-ui, -apple-system, BlinkMacOS-system, sans-serif

Tamanhos sugeridos (escala tailwind aproximada):
- h1 / display:   3.5–4rem   font-bold-condensed
- h2 / section:   2.25rem
- h3 / card:      1.5rem
- body-lg:        1.125rem
- body:           1rem       Josefin Sans Regular
- small:          0.875rem

Line-height: 1.5–1.6 para textos longos

## Estilo Visual Geral do Dashboard
- Industrial + moderno
- Bordas levemente arredondadas (radius-md ~8px)
- Sombras sutis (shadow-sm ou shadow-md)
- Contraste alto (texto escuro em bg claro e vice-versa)
- Cards com fundo #FFFFFF ou #FAFAFA com border #E5E7EB
- Botões primários: bg-[#EC1C24] text-white hover:brightness-110
- Hover states: leve scale(1.02) + transição 150ms
- Ícones: lucide-react (preferencial) ou heroicons

## Componentes UI que devem existir
- Button (variants: primary-red, outline, ghost, destructive)
- Card (com header, content, footer)
- DataTable (com ordenação, filtro básico, paginação)
- MetricCard (valor grande + título + delta %)
- Sidebar (collapsible em mobile)
- PageHeader (título + actions)
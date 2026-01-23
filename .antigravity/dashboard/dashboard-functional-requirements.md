# Requisitos Funcionais Iniciais – MetalVale Dashboard (MVP One-Shot)

## Objetivo do MVP
Dashboard principal para dono / gerente da MetalVale ver visão geral do e-commerce + fábrica.

## Telas / Seções Principais (prioridade alta)
1. **Dashboard Home**
   - KPIs principais (4–6 cards):
     - Faturamento hoje / mês / vs mês anterior (%)
     - Pedidos hoje / pendentes / total mês
     - Ticket médio
     - Produtos mais vendidos (top 5)
     - Status estoque crítico (se houver integração futura)
   - Gráfico de faturamento (últimos 30 dias – linha ou barras)
   - Últimos 5–10 pedidos (tabela resumida)

2. **Pedidos (página separada)**
   - Tabela com: nº pedido, cliente, valor, status, data
   - Filtros: status, data, valor
   - Paginação + busca rápida

3. **Sidebar / Navegação**
   - Dashboard
   - Pedidos
   - Produtos (placeholder)
   - Clientes (placeholder)
   - Estoque (placeholder)
   - Relatórios (placeholder)

## Requisitos Não Funcionais
- Responsivo (mobile → sidebar vira hamburger)
- Loading states + skeletons
- Dados mockados realistas (use ~50 pedidos, valores entre R$120–R$12.000)
- Formato monetário: R$ 1.234,56
- Status de pedido com cores: Pendente (amarelo), Pago (verde), Enviado (azul), Entregue (verde-escuro), Cancelado (vermelho)

## Tom e Personalidade
- Forte, industrial, direto
- Valores grandes e em destaque (fonte Avant Garde Bold Condensed + vermelho quando positivo)
- Evite excesso de cores — mantenha vermelho como ponto focal
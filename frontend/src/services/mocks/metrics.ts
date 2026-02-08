import { Metric } from '@/types';
import { DollarSign, ShoppingBag, Clock, TrendingUp, Package } from 'lucide-react';

export const mockDashboardMetrics = {
  revenueToday: {
    title: 'Faturamento Hoje',
    value: 'R$ 12.450,00',
    delta: { value: 12.5, isPositive: true },
    icon: DollarSign,
  },
  revenueMonth: {
    title: 'Faturamento Mês',
    value: 'R$ 145.890,00',
    delta: { value: 8.2, isPositive: true },
    icon: TrendingUp,
  },
  ordersToday: {
    title: 'Pedidos Hoje',
    value: 12,
    icon: ShoppingBag,
  },
  pendingOrders: {
    title: 'Pedidos Pendentes',
    value: 8,
    icon: Clock,
  },
  avgTicket: {
    title: 'Ticket Médio',
    value: 'R$ 1.250,45',
    icon: DollarSign,
  },
  topProduct: {
    title: 'Top Produto',
    value: 'Viga I de Aço',
    icon: Package,
  },
};

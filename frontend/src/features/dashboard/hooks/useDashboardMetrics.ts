import { mockDashboardMetrics } from '@/services/mocks/metrics';
import { mockOrders } from '@/services/mocks/orders';
import { mockTopProducts } from '@/services/mocks/products';

export const useDashboardMetrics = () => {
  // In a real app, this would fetch data from an API
  // and handle loading/error states.
  
  return {
    metrics: Object.values(mockDashboardMetrics),
    recentOrders: mockOrders.slice(0, 10),
    topProducts: mockTopProducts,
    // Mock chart data for last 30 days
    chartData: Array.from({ length: 30 }).map((_, i) => ({
      date: `Day ${i + 1}`,
      revenue: Math.floor(Math.random() * 10000) + 2000,
    }))
  };
};

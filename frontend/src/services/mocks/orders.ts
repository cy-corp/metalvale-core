import { Order } from '@/types';
import { subDays, format } from 'date-fns';

const statuses: Order['status'][] = ['Pendente', 'Pago', 'Enviado', 'Entregue', 'Cancelado'];

export const mockOrders: Order[] = Array.from({ length: 40 }).map((_, i) => {
  const date = subDays(new Date(), Math.floor(Math.random() * 30));
  return {
    id: `ord-${i + 1}`,
    number: `MV-${1000 + i}`,
    customerName: [
      'Indústria de Metais Silva',
      'Construtora Souza',
      'Ferreira Autopeças',
      'Oficina do João',
      'Metalúrgica Vale',
      'Comércio de Ferragens Ltda',
      'Engenharia Martins'
    ][Math.floor(Math.random() * 7)],
    total: Math.random() * (12500 - 89.9) + 89.9,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    createdAt: format(date, 'yyyy-MM-dd HH:mm:ss'),
  };
});

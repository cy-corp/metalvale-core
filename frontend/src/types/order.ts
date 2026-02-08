export type OrderStatus = 'Pendente' | 'Pago' | 'Enviado' | 'Entregue' | 'Cancelado';

export interface Order {
  id: string;
  number: string;
  customerName: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

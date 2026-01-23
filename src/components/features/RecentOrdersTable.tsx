import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Order } from "@/types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface RecentOrdersTableProps {
    orders: Order[];
}

const statusVariants: Record<Order['status'], string> = {
    Pendente: "bg-warning/20 text-warning border-warning/50 hover:bg-warning/30",
    Pago: "bg-success/20 text-success border-success/50 hover:bg-success/30",
    Enviado: "bg-info/20 text-info border-info/50 hover:bg-info/30",
    Entregue: "bg-emerald-900/20 text-emerald-600 border-emerald-900/50 hover:bg-emerald-900/30",
    Cancelado: "bg-primary/20 text-primary border-primary/50 hover:bg-primary/30",
};

export function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
    return (
        <div className="rounded-md border border-border bg-card">
            <Table>
                <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                        <TableHead className="font-avant uppercase font-bold text-xs">Nº Pedido</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-xs">Cliente</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-xs">Valor</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-xs">Status</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-xs text-right">Data</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id} className="border-border hover:bg-muted/50 transition-colors cursor-pointer">
                            <TableCell className="font-bold font-josefin">{order.number}</TableCell>
                            <TableCell className="font-josefin text-muted-foreground">{order.customerName}</TableCell>
                            <TableCell className="font-bold font-avant text-primary">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total)}
                            </TableCell>
                            <TableCell>
                                <Badge variant="outline" className={statusVariants[order.status]}>
                                    {order.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right font-josefin text-xs text-muted-foreground">
                                {format(new Date(order.createdAt), "dd MMM, HH:mm", { locale: ptBR })}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

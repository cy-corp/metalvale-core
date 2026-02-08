import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Order } from "@/types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface RecentOrdersTableProps {
    orders: Order[];
}

const statusColors: Record<Order['status'], { dot: string; text: string }> = {
    Pendente: { dot: "bg-warning", text: "text-warning" },
    Pago: { dot: "bg-success", text: "text-success" },
    Enviado: { dot: "bg-info", text: "text-info" },
    Entregue: { dot: "bg-emerald-500", text: "text-emerald-600" },
    Cancelado: { dot: "bg-destructive", text: "text-destructive" },
};

export function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
    return (
        <div className="w-full">
            <Table>
                <TableHeader>
                    <TableRow className="border-border hover:bg-transparent px-4">
                        <TableHead className="font-avant uppercase font-bold text-[10px] tracking-widest text-muted-foreground pl-6">ID</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-[10px] tracking-widest text-muted-foreground">Client</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-[10px] tracking-widest text-muted-foreground">Value</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-[10px] tracking-widest text-muted-foreground">Status</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-[10px] tracking-widest text-muted-foreground text-right pr-6">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order, index) => (
                        <TableRow
                            key={order.id}
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animationFillMode: 'both'
                            }}
                            className="border-border/50 hover:bg-muted/50 transition-colors cursor-pointer group animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both"
                        >
                            <TableCell className="font-bold font-avant text-xs pl-6 text-secondary group-hover:text-primary transition-colors">
                                {order.number}
                            </TableCell>
                            <TableCell className="font-josefin text-sm text-muted-foreground font-medium">
                                {order.customerName}
                            </TableCell>
                            <TableCell className="font-bold font-avant text-sm text-secondary">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total)}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <div className={cn("h-1.5 w-1.5 rounded-full shrink-0", statusColors[order.status].dot)} />
                                    <span className={cn("text-[11px] font-bold font-avant uppercase tracking-tight", statusColors[order.status].text)}>
                                        {order.status}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right font-josefin text-[11px] text-muted-foreground pr-6 font-medium">
                                {format(new Date(order.createdAt), "dd MMM, HH:mm", { locale: ptBR })}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

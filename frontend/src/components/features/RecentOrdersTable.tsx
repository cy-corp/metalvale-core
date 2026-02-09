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
import { cn } from "@/lib/utils";

interface RecentOrdersTableProps {
    orders: Order[];
}

export function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
    return (
        <div className="w-full">
            <Table>
                <TableHeader>
                    <TableRow className="border-border/40 hover:bg-transparent px-8">
                        <TableHead className="font-avant uppercase font-bold text-[10px] tracking-[0.15em] text-muted-foreground pl-8 py-4">Data</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-[10px] tracking-[0.15em] text-muted-foreground py-4">Equipe</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-[10px] tracking-[0.15em] text-muted-foreground py-4">Status</TableHead>
                        <TableHead className="font-avant uppercase font-bold text-[10px] tracking-[0.15em] text-muted-foreground text-right pr-8 py-4">Período</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <TableRow
                                key={order.id}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animationFillMode: 'both'
                                }}
                                className="border-border/40 hover:bg-muted/40 transition-colors cursor-pointer group animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both"
                            >
                                <TableCell className="font-josefin text-[11px] pl-8 py-5 text-muted-foreground font-medium">
                                    {format(new Date(order.createdAt), "dd/MM/yyyy")}
                                </TableCell>
                                <TableCell className="font-josefin text-[11px] py-5 text-foreground font-semibold">
                                    {isEven ? "Completo" : "Industrial"}
                                </TableCell>
                                <TableCell className="py-5">
                                    <div className="flex items-center gap-2">
                                        <div className={cn(
                                            "h-1.5 w-1.5 rounded-full shrink-0",
                                            isEven ? "bg-primary" : "bg-success"
                                        )} />
                                        <span className={cn(
                                            "text-[10px] font-bold font-avant uppercase tracking-wide",
                                            isEven ? "text-primary" : "text-success"
                                        )}>
                                            {isEven ? "Negado" : "Desejado"}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right font-josefin text-[11px] text-muted-foreground pr-8 py-5 font-medium">
                                    {index + 1} {index + 1 === 1 ? 'dia atrás' : 'dias atrás'}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

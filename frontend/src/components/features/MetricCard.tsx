import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
    title: string;
    value: string | number;
    delta?: {
        value: number;
        isPositive: boolean;
    };
    icon: LucideIcon;
    className?: string;
    style?: React.CSSProperties;
}

export function MetricCard({ title, value, delta, icon: Icon, className, style }: MetricCardProps) {
    return (
        <Card
            className={cn("overflow-hidden border-border bg-card shadow-premium rounded-premium transition-all duration-300 hover:shadow-active group", className)}
            style={style}
        >
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground font-josefin tracking-tight">
                            {title}
                        </p>
                        <h3 className="text-3xl font-bold font-avant tracking-tighter text-secondary">
                            {value}
                        </h3>
                    </div>
                    <div className="rounded-xl bg-muted p-2.5 transition-colors duration-300 group-hover:bg-primary/5">
                        <Icon className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                    </div>
                </div>

                {delta && (
                    <div className="mt-4 flex items-center gap-1.5">
                        <div className={cn(
                            "flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold font-avant",
                            delta.isPositive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                        )}>
                            {delta.isPositive ? (
                                <ArrowUpRight className="h-3 w-3" />
                            ) : (
                                <ArrowDownRight className="h-3 w-3" />
                            )}
                            {delta.value}%
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground font-josefin uppercase tracking-wider">
                            vs mês anterior
                        </span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

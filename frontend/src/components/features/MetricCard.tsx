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
}

export function MetricCard({ title, value, delta, icon: Icon, className }: MetricCardProps) {
    return (
        <Card className={cn("overflow-hidden border-border transition-all hover:scale-[1.02] duration-150", className)}>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-muted-foreground font-josefin">
                        {title}
                    </p>
                    <div className="rounded-md bg-secondary/5 p-2 transition-colors group-hover:bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                    </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                    <div>
                        <h3 className="text-3xl font-bold font-avant tracking-tight text-primary uppercase">
                            {value}
                        </h3>
                        {delta && (
                            <div className="mt-1 flex items-center gap-1">
                                {delta.isPositive ? (
                                    <ArrowUpRight className="h-4 w-4 text-success" />
                                ) : (
                                    <ArrowDownRight className="h-4 w-4 text-destructive" />
                                )}
                                <span className={cn(
                                    "text-xs font-semibold",
                                    delta.isPositive ? "text-success" : "text-destructive"
                                )}>
                                    {delta.isPositive ? "+" : "-"}{delta.value}%
                                </span>
                                <span className="text-xs text-muted-foreground ml-1">vs mês ant.</span>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
    title: string;
    value: string | number;
    description?: string;
    cta?: {
        label: string;
        href: string;
    };
    delta?: {
        value: number;
        isPositive: boolean;
    };
    icon: LucideIcon;
    className?: string;
    style?: React.CSSProperties;
}

export function MetricCard({
    title,
    value,
    description,
    cta,
    delta,
    icon: Icon,
    className,
    style
}: MetricCardProps) {
    return (
        <Card
            className={cn("premium-card h-full", className)}
            style={style}
        >
            <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-2">
                    <p className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                        {title}
                    </p>
                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="flex items-baseline gap-2">
                    <h3 className="metric-value text-5xl">
                        {value}
                    </h3>
                    {delta && (
                        <div className={cn(
                            "flex items-center text-[10px] font-bold font-avant",
                            delta.isPositive ? "text-primary" : "text-destructive"
                        )}>
                            {delta.isPositive ? <ArrowUpRight size={14} strokeWidth={3} /> : <ArrowDownRight size={14} strokeWidth={3} />}
                            {delta.value}%
                        </div>
                    )}
                </div>

                {description && (
                    <p className="text-xs text-muted-foreground font-josefin mt-1">
                        {description}
                    </p>
                )}

                <div className="mt-8 pt-0">
                    {cta ? (
                        <a href={cta.href} className="text-[10px] font-bold font-avant uppercase tracking-widest text-primary hover:underline inline-flex items-center gap-1.5 transition-all">
                            {cta.label} <ArrowUpRight size={12} strokeWidth={3} />
                        </a>
                    ) : (
                        <div className="h-[14px]" />
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

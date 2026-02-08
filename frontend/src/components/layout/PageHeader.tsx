import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    actions?: React.ReactNode;
}

export function PageHeader({ title, subtitle, className, actions }: PageHeaderProps) {
    const currentDate = format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR });

    return (
        <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10", className)}>
            <div>
                <h1 className="text-4xl font-bold font-avant tracking-tighter text-secondary">
                    {title}
                </h1>
                {subtitle ? (
                    <p className="text-muted-foreground font-josefin text-lg mt-1.5 font-light">
                        {subtitle}
                    </p>
                ) : (
                    <p className="text-muted-foreground font-josefin mt-1.5 capitalize font-light">
                        {currentDate}
                    </p>
                )}
            </div>
            {actions && <div className="flex items-center gap-3 pb-1">{actions}</div>}
        </div>
    );
}

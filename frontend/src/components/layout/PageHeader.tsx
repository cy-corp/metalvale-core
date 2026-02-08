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
        <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8", className)}>
            <div>
                <h1 className="text-4xl font-bold font-avant tracking-tight text-secondary uppercase">
                    {title}
                </h1>
                {subtitle ? (
                    <p className="text-muted-foreground font-josefin text-lg mt-1">
                        {subtitle}
                    </p>
                ) : (
                    <p className="text-muted-foreground font-josefin mt-1 capitalize">
                        {currentDate}
                    </p>
                )}
            </div>
            {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>
    );
}

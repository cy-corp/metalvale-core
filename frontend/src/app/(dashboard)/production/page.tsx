"use client";

import { MetricCard } from "@/components/features/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Zap,
    Activity,
    Clock,
    CheckCircle2,
    Settings2,
    Factory
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductionPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold font-avant tracking-tight text-foreground">Controle de Produção</h1>
                    <p className="text-sm text-muted-foreground">Monitore o desempenho do chão de fábrica em tempo real.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="h-10 border-border/40 font-avant text-xs uppercase tracking-wider">
                        Logs de Máquina
                    </Button>
                    <Button className="h-10 bg-primary hover:bg-primary/90 text-white px-4 font-semibold font-avant text-xs uppercase tracking-wider">
                        Novo Lote
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="Eficiência Geral"
                    value="98.2%"
                    delta={{ value: 2.4, isPositive: true }}
                    description="Pontuação OEE"
                    icon={Zap}
                />
                <MetricCard
                    title="Máquinas Ativas"
                    value="8 / 10"
                    description="2 Em manutenção"
                    icon={Settings2}
                />
                <MetricCard
                    title="Produção por Hora"
                    value="1,240"
                    delta={{ value: 5.1, isPositive: true }}
                    description="Unidades por hora"
                    icon={Activity}
                />
                <MetricCard
                    title="Tempo de Parada"
                    value="12m"
                    delta={{ value: 18, isPositive: false }}
                    description="Últimas 24 horas"
                    icon={Clock}
                />
            </div>

            <Card className="premium-card bg-card overflow-hidden">
                <CardHeader className="px-8 pt-8 border-b border-border/40 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                            Linhas de Produção Ativas
                        </CardTitle>
                        <span className="flex items-center gap-1.5 text-[10px] font-bold font-avant uppercase tracking-widest text-emerald-500">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Ao Vivo
                        </span>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-border/40">
                        {[1, 2, 3].map((line) => (
                            <div key={line} className="px-8 py-6 flex items-center justify-between hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                        <Factory className="h-6 w-6 text-muted-foreground" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-semibold font-avant">Linha de Produção #{line}</h4>
                                        <p className="text-xs text-muted-foreground">Unidade de processamento principal - Lote AB-{1024 + line}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right">
                                        <p className="text-xs font-avant uppercase tracking-widest text-muted-foreground">Progresso</p>
                                        <p className="font-bold text-lg">75%</p>
                                    </div>
                                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-3/4" />
                                    </div>
                                    <Button variant="ghost" size="sm" className="font-avant text-[10px] uppercase tracking-widest text-muted-foreground">
                                        Detalhes
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}

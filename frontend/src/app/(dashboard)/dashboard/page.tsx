"use client";

import { MetricCard } from "@/components/features/MetricCard";
import { SalesChart } from "@/components/features/SalesChart";
import { RecentOrdersTable } from "@/components/features/RecentOrdersTable";
import { useDashboardMetrics } from "@/features/dashboard/hooks/useDashboardMetrics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    LayoutDashboard,
    Zap,
    Files,
    Activity,
    Box,
    CheckCircle2,
    Calendar,
    ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    const { recentOrders, chartData } = useDashboardMetrics();

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Top row: 2 Primary Metrics */}
            <div className="grid gap-6 md:grid-cols-2">
                <MetricCard
                    title="Receita Total"
                    value="R$ 1.2B"
                    delta={{ value: 5.4, isPositive: true }}
                    description="Projetos de vestuário"
                    icon={Files}
                    cta={{ label: "Ver toda receita", href: "#" }}
                    className="md:col-span-1"
                />
                <MetricCard
                    title="Eficiência Operacional"
                    value="96.5%"
                    icon={Zap}
                    description="Métricas de desempenho"
                    cta={{ label: "Explorar eficiência", href: "#" }}
                    className="md:col-span-1"
                />
            </div>

            {/* Middle row: 4 Secondary Metrics */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="Projetos Ativos"
                    value="32"
                    description="Projetos de vestuário"
                    icon={Files}
                    cta={{ label: "Alertas críticos", href: "#" }}
                />
                <MetricCard
                    title="Estoque de Material"
                    value="2.5M"
                    description="Estoque de vestuário"
                    icon={Box}
                    cta={{ label: "Estoque crítico", href: "#" }}
                />
                <MetricCard
                    title="Produção"
                    value="730K"
                    description="Produção de vestuário"
                    icon={Activity}
                    cta={{ label: "Ações necessárias", href: "#" }}
                />
                <MetricCard
                    title="Cumprimento de Pedidos"
                    value="40%"
                    description="Cumprimento de vestuário"
                    icon={CheckCircle2}
                    cta={{ label: "Ações necessárias", href: "#" }}
                />
            </div>

            {/* Bottom row: Trends and Data Table */}
            <div className="grid gap-6 lg:grid-cols-2">
                <Card className="premium-card bg-card overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between px-8 pt-8">
                        <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                            Tendências Mensais
                        </CardTitle>
                        <Button variant="ghost" size="sm" className="text-[10px] font-bold font-avant uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                            <Calendar size={12} className="text-primary" /> Mês <ChevronDown size={12} />
                        </Button>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 pt-4">
                        <SalesChart data={chartData} />
                    </CardContent>
                </Card>

                <Card className="premium-card bg-card overflow-hidden h-full flex flex-col">
                    <CardHeader className="px-8 pt-8 pb-4">
                        <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                            Tabela de Dados
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-1">
                        <RecentOrdersTable orders={recentOrders.slice(0, 4)} />
                        {/* Placeholder for "Show more..." link if needed, image shows 4 rows */}
                        <div className="p-4 mt-auto text-center border-t border-border/40">
                            <a href="#" className="text-[10px] font-bold font-avant uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Ver mais ...</a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

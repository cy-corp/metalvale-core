"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { MetricCard } from "@/components/features/MetricCard";
import { SalesChart } from "@/components/features/SalesChart";
import { RecentOrdersTable } from "@/components/features/RecentOrdersTable";
import { useDashboardMetrics } from "@/features/dashboard/hooks/useDashboardMetrics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

export default function DashboardPage() {
    const { metrics, recentOrders, chartData } = useDashboardMetrics();

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <PageHeader
                title="Dashboard"
                subtitle="Visão geral do e-commerce e produção"
                actions={
                    <>
                        <Button variant="outline" size="sm" className="hidden sm:flex border-border font-josefin">
                            <Filter className="mr-2 h-4 w-4" /> Filtros
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-josefin">
                            <Download className="mr-2 h-4 w-4" /> Exportar Relatório
                        </Button>
                    </>
                }
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {metrics.map((metric, index) => (
                    <MetricCard
                        key={metric.title}
                        {...metric}
                        className={index < 2 ? "xl:col-span-1" : "xl:col-span-1"}
                    />
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-7">
                <Card className="lg:col-span-4 border-border shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                            <CardTitle className="text-xl font-bold font-avant uppercase tracking-tight">
                                Faturamento nos Últimos 30 Dias
                            </CardTitle>
                            <p className="text-sm text-muted-foreground font-josefin mt-1">
                                Progresso diário de vendas do e-commerce
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-primary" />
                                <span className="text-xs font-josefin">Faturamento (R$)</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <SalesChart data={chartData} />
                    </CardContent>
                </Card>

                <Card className="lg:col-span-3 border-border shadow-sm overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold font-avant uppercase tracking-tight">
                            Últimos Pedidos
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-josefin mt-1">
                            Atividades recentes da fábrica e loja
                        </p>
                    </CardHeader>
                    <CardContent className="p-0">
                        <RecentOrdersTable orders={recentOrders} />
                        <div className="p-4 border-t border-border">
                            <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/5 font-bold font-josefin">
                                Ver Todos os Pedidos
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

"use client";

import { MetricCard } from "@/components/features/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DollarSign,
    TrendingUp,
    CreditCard,
    Wallet,
    ArrowUpRight,
    ArrowDownRight,
    Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinancePage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold font-avant tracking-tight text-foreground">Visão Geral Financeira</h1>
                    <p className="text-sm text-muted-foreground">Gerencie contas, receitas e despesas.</p>
                </div>
                <button className="h-10 bg-primary hover:bg-primary/90 text-white px-4 font-semibold font-avant text-xs uppercase tracking-wider flex items-center gap-2 rounded-md">
                    <Download className="h-4 w-4" /> Exportar Relatório
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="Receita Total"
                    value="R$ 1.2M"
                    delta={{ value: 14.2, isPositive: true }}
                    description="Receita mensal"
                    icon={TrendingUp}
                />
                <MetricCard
                    title="Lucro Líquido"
                    value="R$ 432K"
                    delta={{ value: 5.4, isPositive: true }}
                    description="Após impostos e operações"
                    icon={DollarSign}
                />
                <MetricCard
                    title="Contas a Receber"
                    value="R$ 210K"
                    description="Faturas pendentes"
                    icon={CreditCard}
                />
                <MetricCard
                    title="Margem Operacional"
                    value="36%"
                    delta={{ value: 2.1, isPositive: false }}
                    description="Base industrial"
                    icon={Wallet}
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="premium-card bg-card lg:col-span-2 overflow-hidden">
                    <CardHeader className="px-8 pt-8">
                        <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                            Transações Recentes
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-border/40">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="px-8 py-4 flex items-center justify-between hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i % 2 === 0 ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600' : 'bg-red-100 dark:bg-red-500/10 text-red-600'}`}>
                                            {i % 2 === 0 ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownRight className="h-5 w-5" />}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">Transação #{2034 + i}</p>
                                            <p className="text-xs text-muted-foreground">{i % 2 === 0 ? 'Pagamento Recebido' : 'Compra de Material'}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-bold ${i % 2 === 0 ? 'text-emerald-500' : 'text-foreground'}`}>
                                            {i % 2 === 0 ? '+' : '-'} R$ {(Math.random() * 5000 + 500).toFixed(2)}
                                        </p>
                                        <p className="text-[10px] text-muted-foreground uppercase font-avant">08 Fev 2026</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="premium-card bg-card overflow-hidden">
                    <CardHeader className="px-8 pt-8">
                        <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                            Receita por Setor
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-avant uppercase tracking-wider">
                                <span>Peças de Aço</span>
                                <span className="font-bold">65%</span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[65%]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-avant uppercase tracking-wider">
                                <span>Maquinário</span>
                                <span className="font-bold">20%</span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-zinc-600 w-[20%]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-avant uppercase tracking-wider">
                                <span>Consultoria</span>
                                <span className="font-bold">15%</span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-zinc-400 w-[15%]" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}

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
                    <h1 className="text-2xl font-bold font-avant tracking-tight text-foreground">Financial Overview</h1>
                    <p className="text-sm text-muted-foreground">Manage accounts, revenue, and expenditures.</p>
                </div>
                <Button className="h-10 bg-primary hover:bg-primary/90 text-white px-4 font-semibold font-avant text-xs uppercase tracking-wider flex items-center gap-2">
                    <Download className="h-4 w-4" /> Export Report
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="Total Revenue"
                    value="R$ 1.2M"
                    delta={{ value: 14.2, isPositive: true }}
                    description="Monthly revenue"
                    icon={TrendingUp}
                />
                <MetricCard
                    title="Net Profit"
                    value="R$ 432K"
                    delta={{ value: 5.4, isPositive: true }}
                    description="After tax & ops"
                    icon={DollarSign}
                />
                <MetricCard
                    title="Accounts Receivable"
                    value="R$ 210K"
                    description="Pending invoices"
                    icon={CreditCard}
                />
                <MetricCard
                    title="Operating Margin"
                    value="36%"
                    delta={{ value: 2.1, isPositive: false }}
                    description="Industrial baseline"
                    icon={Wallet}
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="premium-card bg-card lg:col-span-2 overflow-hidden">
                    <CardHeader className="px-8 pt-8">
                        <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                            Recent Transactions
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
                                            <p className="text-xs text-muted-foreground">{i % 2 === 0 ? 'Payment Received' : 'Material Purchase'}</p>
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
                            Revenue by Sector
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-avant uppercase tracking-wider">
                                <span>Steel Parts</span>
                                <span className="font-bold">65%</span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[65%]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-avant uppercase tracking-wider">
                                <span>Machinery</span>
                                <span className="font-bold">20%</span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-zinc-600 w-[20%]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-avant uppercase tracking-wider">
                                <span>Consulting</span>
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

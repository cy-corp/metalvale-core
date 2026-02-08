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
        <div className="space-y-10">
            <PageHeader
                title="Dashboard"
                subtitle="High-precision overview of e-commerce and industrial production"
                actions={
                    <>
                        <Button variant="outline" size="sm" className="hidden sm:flex border-border bg-white text-secondary font-avant font-semibold tracking-tight h-9 rounded-lg px-4 hover:bg-muted transition-colors">
                            <Filter className="mr-2 h-3.5 w-3.5" /> Filters
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-avant font-semibold tracking-tight h-9 rounded-lg px-4 shadow-active transition-all active:scale-95">
                            <Download className="mr-2 h-3.5 w-3.5" /> Export Report
                        </Button>
                    </>
                }
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {metrics.map((metric, index) => (
                    <MetricCard
                        key={metric.title}
                        {...metric}
                        className="animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
                        style={{ animationDelay: `${index * 100}ms` }}
                    />
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-7">
                <Card className="lg:col-span-4 border-border shadow-premium rounded-premium bg-card overflow-hidden transition-all duration-300 hover:shadow-active/5">
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <div>
                            <CardTitle className="text-xl font-bold font-avant tracking-tighter text-secondary">
                                Revenue Trends
                            </CardTitle>
                            <p className="text-xs text-muted-foreground font-josefin mt-1 uppercase tracking-widest font-medium">
                                Last 30 Days Activity
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <span className="text-[10px] font-bold font-avant uppercase tracking-wider text-muted-foreground">Sales (R$)</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <SalesChart data={chartData} />
                    </CardContent>
                </Card>

                <Card className="lg:col-span-3 border-border shadow-premium rounded-premium bg-card overflow-hidden">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold font-avant tracking-tighter text-secondary">
                            Live Activity
                        </CardTitle>
                        <p className="text-xs text-muted-foreground font-josefin mt-1 uppercase tracking-widest font-medium">
                            Recent Factory & Store Orders
                        </p>
                    </CardHeader>
                    <CardContent className="p-0">
                        <RecentOrdersTable orders={recentOrders} />
                        <div className="p-4 bg-muted/30">
                            <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/5 font-bold font-avant tracking-tight text-sm">
                                View Full Transaction History
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

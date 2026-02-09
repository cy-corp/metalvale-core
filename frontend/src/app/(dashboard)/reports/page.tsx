"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarChart3,
    PieChart,
    Calendar,
    Filter,
    FileText,
    TrendingUp,
    ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReportsPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold font-avant tracking-tight text-foreground">Analytics & Reports</h1>
                    <p className="text-sm text-muted-foreground">Comprehensive insights into industrial performance.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="h-10 border-border/40 font-avant text-xs uppercase tracking-wider flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" /> Last 30 Days <ChevronDown size={14} />
                    </Button>
                    <Button variant="outline" className="h-10 border-border/40 font-avant text-xs uppercase tracking-wider flex items-center gap-2">
                        <Filter className="h-4 w-4" /> Filters
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    { title: "Production Yield", icon: BarChart3, color: "text-primary" },
                    { title: "Inventory Turnover", icon: TrendingUp, color: "text-emerald-500" },
                    { title: "Market Distribution", icon: PieChart, color: "text-zinc-500" }
                ].map((report, i) => (
                    <Card key={i} className="premium-card bg-card hover:border-primary/20 transition-all cursor-pointer group">
                        <CardHeader className="px-8 pt-8">
                            <div className="flex items-center justify-between">
                                <report.icon className={`h-8 w-8 ${report.color}`} />
                                <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                                    <FileText className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                                </div>
                            </div>
                            <CardTitle className="pt-4 font-avant font-bold text-lg tracking-tight">
                                {report.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-8 pb-8">
                            <p className="text-sm text-muted-foreground">Standardized analysis of {report.title.toLowerCase()} metrics across all sectors.</p>
                            <div className="mt-6 flex items-center justify-between text-[10px] font-bold font-avant uppercase tracking-[0.2em] text-muted-foreground">
                                <span>Updated 2h ago</span>
                                <span className="p-1 px-2 border border-border/40 rounded-full">PDF + CSV</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="premium-card bg-card overflow-hidden">
                <CardHeader className="px-8 pt-8 border-b border-border/40">
                    <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                        Report Generation History
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="p-12 text-center space-y-4">
                        <div className="w-20 h-20 bg-muted rounded-2xl rotate-3 flex items-center justify-center mx-auto border border-border/40 shadow-sm">
                            <BarChart3 className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold font-avant text-lg text-foreground">Automated Reports</h3>
                            <p className="text-sm text-muted-foreground max-w-sm mx-auto">Configure your recurring reports to be delivered directly to your department heads.</p>
                        </div>
                        <div className="pt-4">
                            <Button className="h-10 bg-primary hover:bg-primary/90 text-white px-8 font-semibold font-avant text-xs uppercase tracking-wider">
                                Configure Automation
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

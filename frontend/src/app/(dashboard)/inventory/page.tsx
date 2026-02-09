"use client";

import { MetricCard } from "@/components/features/MetricCard";
import { RecentOrdersTable } from "@/components/features/RecentOrdersTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Package,
    AlertTriangle,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Filter,
    Box
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InventoryPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header with Search/Filter */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold font-avant tracking-tight">Inventory Management</h1>
                    <p className="text-sm text-muted-foreground">Track and manage your material stock levels.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search materials..." className="pl-9 h-10 bg-white/50 dark:bg-zinc-900/50 border-border/40" />
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10 border-border/40">
                        <Filter className="h-4 w-4" />
                    </Button>
                    <Button className="h-10 bg-primary hover:bg-primary/90 text-white px-4 font-semibold font-avant text-xs uppercase tracking-wider">
                        Quick Add
                    </Button>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="Total Stock Value"
                    value="R$ 4.2M"
                    delta={{ value: 12.5, isPositive: true }}
                    description="Inventory asset value"
                    icon={Package}
                />
                <MetricCard
                    title="Low Stock Items"
                    value="14"
                    description="Requires restock"
                    icon={AlertTriangle}
                    className="border-amber-500/20"
                />
                <MetricCard
                    title="Materials In"
                    value="842"
                    delta={{ value: 8.2, isPositive: true }}
                    description="This month"
                    icon={ArrowUpRight}
                />
                <MetricCard
                    title="Materials Out"
                    value="1,204"
                    delta={{ value: 3.1, isPositive: false }}
                    description="This month"
                    icon={ArrowDownRight}
                />
            </div>

            {/* Inventory Table Placeholder */}
            <Card className="premium-card bg-card overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between px-8 pt-8">
                    <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                        Material Inventory
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="p-8 text-center border-t border-border/40 space-y-4">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                            <Box className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold font-avant">No materials listed</h3>
                            <p className="text-sm text-muted-foreground max-w-xs mx-auto">Your inventory list will appear here once materials are added to the system.</p>
                        </div>
                        <Button variant="outline" className="font-avant text-xs uppercase tracking-wider">
                            Import CSV
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Package,
    Warehouse,
    Users,
    BarChart3,
    ChevronLeft,
    ChevronRight,
    LogOut,
    Settings,
} from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Package, label: "Estoque", href: "/inventory" },
    { icon: Warehouse, label: "Produção", href: "/production" },
    { icon: Users, label: "Financeiro", href: "/finance" },
    { icon: BarChart3, label: "Relatórios", href: "/reports" },
];

export function AppSidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    const activeIndex = useMemo(() => {
        const index = menuItems.findIndex(item =>
            pathname === item.href || (item.href === "/dashboard" && (pathname === "/" || pathname === "/dashboard"))
        );
        return index;
    }, [pathname]);

    return (
        <aside
            className={cn(
                "relative flex flex-col overflow-hidden border-r border-border/40 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] z-40 will-change-[width]",
                collapsed ? "w-20" : "w-64"
            )}
        >
            {/* Background Texture Layers - Premium Glass Stack */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* 1. Underlying Texture / Image */}
                <div
                    className="absolute inset-0 z-0 transition-opacity duration-1000 block dark:hidden"
                    style={{
                        backgroundImage: 'url("/bg-white.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div
                    className="absolute inset-0 z-0 transition-opacity duration-1000 hidden dark:block"
                    style={{
                        backgroundImage: 'url("/bg-dark.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* 2. Glass Overlay (The Frosted Effect) - Thin see-through version */}
                <div className="absolute inset-0 z-10 bg-white/5 dark:bg-black/50 backdrop-blur-md" />

                {/* 3. Subtle Liquid Edge Glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col h-full flex-1">
                <div className="flex h-24 items-center justify-between px-8">
                    {!collapsed && (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <span className="font-avant font-bold text-xl tracking-tighter text-foreground">
                                MetalVale
                            </span>
                        </div>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10 transition-all rounded-full"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </Button>
                </div>

                <div className="relative flex-1 px-4 py-2">
                    {/* Sliding Indicator Background */}
                    {activeIndex !== -1 && (
                        <div
                            className="absolute left-4 right-4 h-[48px] rounded-xl bg-white/80 dark:bg-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-white/40 dark:border-white/5 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] z-0"
                            style={{
                                top: `${activeIndex * (48 + 6) + 8}px`, // 48px height + 6px gap + 8px initial padding
                            }}
                        >
                            {/* Vertical "Pill" Indicator */}
                            <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-full bg-primary" />
                        </div>
                    )}

                    <nav className="relative z-10 space-y-1.5 pt-0">
                        {menuItems.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "group flex items-center h-[48px] rounded-xl px-4 text-sm font-medium transition-all duration-300",
                                        isActive
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    <item.icon
                                        className={cn(
                                            "h-5 w-5 shrink-0 transition-all duration-500",
                                            isActive ? "text-primary scale-110" : "group-hover:text-foreground group-hover:scale-105"
                                        )}
                                    />
                                    {!collapsed && (
                                        <span className={cn(
                                            "ml-4 font-avant tracking-tight font-semibold transition-all duration-300",
                                            isActive ? "translate-x-1" : "group-hover:translate-x-0.5"
                                        )}>
                                            {item.label}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="p-4 space-y-1 pb-8 mt-auto border-t border-white/10 dark:border-white/5">
                    <Link
                        href="/settings"
                        className={cn(
                            "flex items-center h-[48px] rounded-xl px-4 text-sm font-medium text-muted-foreground transition-all duration-300",
                            pathname === "/settings"
                                ? "bg-white/80 dark:bg-white/10 text-foreground border border-white/40 dark:border-white/5"
                                : "hover:bg-white/40 dark:hover:bg-white/5 hover:text-foreground"
                        )}
                    >
                        <Settings className={cn("h-5 w-5 shrink-0", pathname === "/settings" && "text-primary")} />
                        {!collapsed && <span className="ml-4 font-avant tracking-tight font-semibold">Configurações</span>}
                    </Link>
                    <button
                        className="flex w-full items-center h-[48px] rounded-xl px-4 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
                    >
                        <LogOut className="h-5 w-5 shrink-0" />
                        {!collapsed && <span className="ml-4 font-avant tracking-tight font-semibold">Sair</span>}
                    </button>
                </div>

            </div>
        </aside>
    );
}

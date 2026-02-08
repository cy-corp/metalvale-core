"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Users,
    Warehouse,
    BarChart3,
    ChevronLeft,
    ChevronRight,
    LogOut,
    Settings,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Package, label: "Inventory", href: "/inventory" },
    { icon: Warehouse, label: "Production", href: "/production" },
    { icon: Users, label: "Finance", href: "/finance" },
    { icon: BarChart3, label: "Reports", href: "/reports" },
];

export function AppSidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={cn(
                "relative flex flex-col glassmorphism transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] z-40",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="flex h-24 items-center justify-between px-8">
                {!collapsed && (
                    <span className="font-avant font-bold text-2xl tracking-tighter text-foreground">
                        MetalVale
                    </span>
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </Button>
            </div>

            <nav className="flex-1 space-y-1.5 p-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href || (item.href === "/dashboard" && (pathname === "/" || pathname === "/dashboard"));
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group relative flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
                                isActive
                                    ? "bg-white/80 dark:bg-white/10 text-foreground shadow-sm"
                                    : "text-muted-foreground hover:bg-white/40 dark:hover:bg-white/5 hover:text-foreground"
                            )}
                        >
                            {/* Active Indicator Bar - Exact Mockup Style */}
                            {isActive && (
                                <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-7 w-[3px] rounded-r-full bg-primary animate-in fade-in slide-in-from-left-2 duration-400" />
                            )}

                            <item.icon
                                className={cn(
                                    "h-5 w-5 shrink-0 transition-colors duration-300",
                                    isActive ? "text-foreground" : "group-hover:text-foreground"
                                )}
                            />
                            {!collapsed && (
                                <span className="ml-4 font-avant tracking-tight font-semibold">
                                    {item.label}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 space-y-1 pb-8">
                <Link
                    href="/settings"
                    className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/40 dark:hover:bg-white/5 hover:text-foreground transition-all duration-300"
                >
                    <Settings className="h-5 w-5 shrink-0" />
                    {!collapsed && <span className="ml-4 font-avant tracking-tight font-semibold">Settings</span>}
                </Link>
                <button
                    className="flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
                >
                    <LogOut className="h-5 w-5 shrink-0" />
                    {!collapsed && <span className="ml-4 font-avant tracking-tight font-semibold">Logout</span>}
                </button>
            </div>
        </aside>
    );
}

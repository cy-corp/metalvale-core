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
    { icon: ShoppingCart, label: "Pedidos", href: "/pedidos" },
    { icon: Package, label: "Produtos", href: "/produtos" },
    { icon: Users, label: "Clientes", href: "/clientes" },
    { icon: Warehouse, label: "Estoque", href: "/estoque" },
    { icon: BarChart3, label: "Relatórios", href: "/relatorios" },
];

export function AppSidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={cn(
                "relative flex flex-col border-r border-border bg-secondary text-white transition-all duration-300 ease-in-out",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="flex h-16 items-center justify-between px-6 border-b border-muted">
                {!collapsed && (
                    <span className="font-avant font-bold text-xl tracking-tighter text-white">
                        METAL<span className="text-primary">VALE</span>
                    </span>
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-muted"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </Button>
            </div>

            <nav className="flex-1 space-y-1 p-3 mt-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href || (item.href === "/dashboard" && pathname === "/");
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-150",
                                isActive
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "text-muted-foreground hover:bg-muted hover:text-white"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "h-5 w-5 shrink-0 transition-colors",
                                    isActive ? "text-white" : "group-hover:text-white"
                                )}
                            />
                            {!collapsed && <span className="ml-3 font-josefin">{item.label}</span>}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-muted p-3 space-y-1">
                <Link
                    href="/settings"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-white transition-all"
                >
                    <Settings className="h-5 w-5 shrink-0" />
                    {!collapsed && <span className="ml-3 font-josefin">Configurações</span>}
                </Link>
                <button
                    className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-destructive/20 hover:text-destructive transition-all"
                >
                    <LogOut className="h-5 w-5 shrink-0" />
                    {!collapsed && <span className="ml-3 font-josefin">Sair</span>}
                </button>
            </div>
        </aside>
    );
}

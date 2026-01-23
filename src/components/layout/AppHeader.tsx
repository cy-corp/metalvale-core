import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-border bg-white px-8">
            <div className="flex w-full max-w-md items-center relative">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Buscar pedidos, produtos..."
                    className="h-10 w-full rounded-md border border-border bg-muted/30 pl-10 pr-4 text-sm font-josefin focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5 text-secondary" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary border-2 border-white" />
                </Button>

                <div className="flex items-center gap-3 pl-4 border-l border-border">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold font-avant uppercase leading-none">Admin MetalVale</p>
                        <p className="text-xs text-muted-foreground font-josefin mt-1">Gerente Industrial</p>
                    </div>
                    <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center border border-border shadow-sm">
                        <User className="h-6 w-6 text-white" />
                    </div>
                </div>
            </div>
        </header>
    );
}

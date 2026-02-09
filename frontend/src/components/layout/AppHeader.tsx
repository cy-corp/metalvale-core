import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Input } from "@/components/ui/input";

export function AppHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-border/40 bg-card sticky top-0 z-30 px-10">
            <div className="flex w-full max-w-sm items-center relative group">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground group-focus-within:text-foreground transition-colors z-10" />
                <Input
                    type="text"
                    placeholder="Search anything..."
                    className="h-10 w-full bg-muted/50 dark:bg-zinc-900/50 pl-10 border-transparent focus:border-border transition-all duration-300 rounded-full"
                />
            </div>

            <div className="flex items-center gap-6">
                <ThemeToggle />

                <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-primary ring-2 ring-background animate-pulse" />
                </Button>

                <div className="flex items-center gap-3.5 pl-6 border-l border-border/60">
                    <div className="text-right hidden md:block">
                        <p className="text-xs font-bold font-avant tracking-tight text-foreground leading-none">Admin User</p>
                        <p className="text-[10px] text-muted-foreground font-josefin uppercase tracking-widest mt-1">Lead Operator</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center border border-white/10 shadow-premium overflow-hidden ring-2 ring-muted hover:ring-primary transition-all cursor-pointer">
                        <User className="h-4 w-4 text-white/80" />
                    </div>
                </div>
            </div>
        </header>
    );
}

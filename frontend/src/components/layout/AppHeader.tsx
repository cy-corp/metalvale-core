import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-border bg-white px-10">
            <div className="flex w-full max-w-sm items-center relative group">
                <Search className="absolute left-3.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                    type="text"
                    placeholder="Search anything..."
                    className="h-9 w-full rounded-full border border-border bg-muted/50 pl-10 pr-4 text-xs font-josefin focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all duration-300"
                />
            </div>

            <div className="flex items-center gap-6">
                <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-primary ring-2 ring-white" />
                </Button>

                <div className="flex items-center gap-3.5 pl-6 border-l border-border">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold font-avant tracking-tight text-secondary">Admin MetalVale</p>
                        <p className="text-[10px] text-muted-foreground font-josefin uppercase tracking-widest mt-0.5">Industrial Lead</p>
                    </div>
                    <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center border border-white/10 shadow-premium overflow-hidden">
                        <User className="h-5 w-5 text-white/80" />
                    </div>
                </div>
            </div>
        </header>
    );
}

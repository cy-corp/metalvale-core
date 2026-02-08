import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex h-screen w-full bg-background overflow-hidden">
            {/* Background Forms for Premium Glass Effect */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Brand Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />

                {/* Structural Forms (The "Silhouette") */}
                <div className="absolute top-[15%] left-[-5%] w-[300px] h-[600px] bg-slate-900/[0.03] dark:bg-white/[0.02] rounded-full blur-[80px] rotate-12" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-slate-400/[0.05] dark:bg-slate-800/[0.05] rounded-full blur-[100px]" />
            </div>

            <div className="relative flex flex-1 h-full w-full z-10">
                <AppSidebar />
                <div className="flex flex-1 flex-col overflow-hidden">
                    <AppHeader />
                    <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
                        <div className="mx-auto max-w-(--breakpoint-2xl) animate-in fade-in slide-in-from-bottom-2 duration-700">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

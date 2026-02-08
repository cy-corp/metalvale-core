import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full bg-muted overflow-hidden">
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
    );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    User,
    Shield,
    Bell,
    Globe,
    Monitor,
    Database,
    ChevronRight,
    Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
    const settingsSections = [
        { title: "Personal Information", description: "Manage your profile details and preferences.", icon: User },
        { title: "Security & Privacy", description: "Update passwords and manage 2FA settings.", icon: Shield },
        { title: "Notifications", description: "Configure system and email alerts.", icon: Bell },
        { title: "Regional Settings", description: "Language, currency, and timezone.", icon: Globe },
        { title: "System Interface", description: "Appearance and dashboard layout.", icon: Monitor },
        { title: "API & Integrations", description: "Manage external service connections.", icon: Database },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
            <div className="space-y-1">
                <h1 className="text-2xl font-bold font-avant tracking-tight text-foreground">System Settings</h1>
                <p className="text-sm text-muted-foreground">Configure your account and platform preferences.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                    {settingsSections.map((section, i) => (
                        <Card key={i} className="premium-card bg-card hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-all cursor-pointer group">
                            <CardContent className="p-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-white dark:group-hover:bg-zinc-800 transition-colors shadow-sm">
                                        <section.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <h3 className="font-semibold font-avant text-foreground">{section.title}</h3>
                                        <p className="text-xs text-muted-foreground">{section.description}</p>
                                    </div>
                                </div>
                                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="space-y-6">
                    <Card className="premium-card bg-zinc-900 text-white overflow-hidden border-none shadow-xl">
                        <CardHeader className="px-8 pt-8">
                            <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-zinc-400">
                                Mobile Access
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-8 pb-8 space-y-6">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Smartphone className="h-5 w-5 text-primary" />
                                </div>
                                <p className="text-sm font-medium">Get the MetalVale Mobile app for real-time factory floor alerts.</p>
                            </div>
                            <Button className="w-full bg-white text-black hover:bg-zinc-200 font-bold font-avant text-[11px] uppercase tracking-widest h-12">
                                Download App
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="premium-card bg-card overflow-hidden">
                        <CardHeader className="px-6 pt-6">
                            <CardTitle className="text-[11px] font-bold font-avant uppercase tracking-[0.15em] text-muted-foreground">
                                Preferences
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-6 pb-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold">Real-time Sync</p>
                                    <p className="text-[10px] text-muted-foreground">Sync data across devices</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold">Dark Mode</p>
                                    <p className="text-[10px] text-muted-foreground">Toggle platform theme</p>
                                </div>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <p className="text-sm font-semibold">Public Profile</p>
                                    <p className="text-[10px] text-muted-foreground">Make profile visible to partners</p>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

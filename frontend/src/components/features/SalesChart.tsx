"use client";

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from "recharts";

interface SalesChartProps {
    data: { date: string; revenue: number }[];
}

export function SalesChart({ data }: SalesChartProps) {
    return (
        <div className="h-[280px] w-full mt-2 relative group">
            {/* Technical grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

            <ResponsiveContainer width="100%" height="100%" debounce={100}>
                <AreaChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#EC1C24" stopOpacity={0.15} />
                            <stop offset="95%" stopColor="#EC1C24" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={true}
                        vertical={false}
                        stroke="var(--color-border)"
                        opacity={0.3}
                    />
                    <XAxis
                        dataKey="date"
                        stroke="var(--color-muted-foreground)"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value, index) => index % 4 === 0 ? value.replace("Day ", "") : ""}
                        fontFamily="var(--font-outfit)"
                        dy={10}
                    />
                    <YAxis
                        stroke="var(--color-muted-foreground)"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => value > 0 ? `${value}k` : ""}
                        fontFamily="var(--font-outfit)"
                    />
                    <Tooltip
                        cursor={{
                            stroke: 'var(--color-primary)',
                            strokeWidth: 1,
                            strokeDasharray: '4 4'
                        }}
                        content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="bg-card/80 backdrop-blur-md border border-border/50 p-3 rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200">
                                        <p className="text-[10px] font-bold font-avant uppercase tracking-widest text-muted-foreground mb-1">
                                            {label}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <p className="text-sm font-bold font-avant text-foreground">
                                                R$ {payload[0].value?.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#EC1C24"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                        animationDuration={2500}
                        animationEasing="ease-in-out"
                        activeDot={{
                            r: 5,
                            fill: "#EC1C24",
                            stroke: "var(--color-card)",
                            strokeWidth: 2,
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

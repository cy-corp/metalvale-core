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
        <div className="h-[300px] w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#EC1C24" stopOpacity={0.15} />
                            <stop offset="95%" stopColor="#EC1C24" stopOpacity={0.01} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F1F1" />
                    <XAxis
                        dataKey="date"
                        stroke="#94A3B8"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => value.replace("Day ", "")}
                        fontFamily="var(--font-outfit)"
                        dy={10}
                    />
                    <YAxis
                        stroke="#94A3B8"
                        fontSize={10}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `R$${value / 1000}k`}
                        fontFamily="var(--font-outfit)"
                    />
                    <Tooltip
                        cursor={{ stroke: '#EC1C24', strokeWidth: 1, strokeDasharray: '4 4' }}
                        contentStyle={{
                            backgroundColor: "rgba(26, 26, 27, 0.95)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "12px",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                            padding: "12px 16px",
                        }}
                        labelStyle={{
                            color: "#94A3B8",
                            fontFamily: "var(--font-josefin)",
                            fontSize: "12px",
                            marginBottom: "4px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                        }}
                        itemStyle={{
                            color: "#FFFFFF",
                            fontFamily: "var(--font-outfit)",
                            fontWeight: "700",
                            fontSize: "14px",
                            padding: "0"
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#EC1C24"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                        animationDuration={1500}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

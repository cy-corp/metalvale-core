"use client";

import {
    LineChart,
    Line,
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
        <div className="h-[350px] w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#EC1C24" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#EC1C24" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis
                        dataKey="date"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => value.replace("Day ", "")}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `R$${value}`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#231F20",
                            border: "none",
                            borderRadius: "8px",
                            color: "#FFFFFF",
                            fontFamily: "Josefin Sans",
                        }}
                        itemStyle={{ color: "#EC1C24" }}
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#EC1C24"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

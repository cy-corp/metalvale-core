"use client";

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Line,
    LineChart,
    Dot
} from "recharts";

interface SalesChartProps {
    data: { date: string; revenue: number }[];
}

export function SalesChart({ data }: SalesChartProps) {
    // Custom dot only for the last data point
    const RenderLastDot = (props: any) => {
        const { cx, cy, index } = props;
        if (index === data.length - 1) {
            return (
                <Dot
                    cx={cx}
                    cy={cy}
                    r={4}
                    fill="#EC1C24"
                    stroke="var(--color-card)"
                    strokeWidth={2}
                />
            );
        }
        return null;
    };

    return (
        <div className="h-[250px] w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <filter id="shadow" height="200%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                            <feOffset in="blur" dx="0" dy="4" result="offsetBlur" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.2" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <CartesianGrid strokeDasharray="0" horizontal={true} vertical={false} stroke="var(--color-border)" opacity={0.4} />
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
                        tickFormatter={(value) => value > 0 ? value : ""}
                        fontFamily="var(--font-outfit)"
                    />
                    <Tooltip
                        cursor={{ stroke: '#EC1C24', strokeWidth: 1 }}
                        contentStyle={{
                            backgroundColor: "var(--color-card)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            boxShadow: "var(--shadow-premium)",
                            padding: "8px 12px",
                        }}
                        labelStyle={{
                            color: "var(--color-muted-foreground)",
                            fontFamily: "var(--font-josefin)",
                            fontSize: "10px",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                        }}
                        itemStyle={{
                            color: "var(--color-foreground)",
                            fontFamily: "var(--font-outfit)",
                            fontWeight: "700",
                            fontSize: "12px",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-foreground)"
                        strokeWidth={2}
                        dot={<RenderLastDot />}
                        activeDot={{ r: 4, fill: "#EC1C24", strokeWidth: 0 }}
                        animationDuration={2000}
                        style={{ filter: "url(#shadow)" }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

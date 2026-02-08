import { LucideIcon } from 'lucide-react';

export interface MetricDelta {
  value: number;
  isPositive: boolean;
}

export interface Metric {
  title: string;
  value: string | number;
  delta?: MetricDelta;
  icon: LucideIcon;
}

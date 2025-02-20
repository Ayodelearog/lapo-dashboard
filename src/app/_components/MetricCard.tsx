import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  icon: string;
  iconBgColor: string;
  trend?: {
    value: string;
    isPositive: boolean;
    label: string;
  };
  attention?: boolean;
}

export function MetricCard({
  title,
  value,
  icon,
  // iconBgColor,
  trend,
  attention,
}: MetricCardProps) {
  return (
    <Card className="shadow-none">
      <CardContent className="p-3">
        <div className="mb-3 flex w-full flex-col gap-1">
          <Image src={`/${icon}.svg`} alt={title} width={16} height={16} />
          <p className="text-black/50 text-sm font-medium">{title}</p>
        </div>
        <div className="flex items-end justify-between">
          <h4 className="text-2xl font-bold text-[#121212]">{value}</h4>
          {trend && (
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  `flex items-center rounded px-2 py-1 text-xs font-medium ${trend.isPositive ? "bg-[#EFFAF6] text-green-500" : "text-red-500"}`,
                )}
              >
                {trend.isPositive ? (
                  <TrendingUp className="mr-1 h-3 w-3" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3" />
                )}
                <span>{trend.value} </span>
              </div>
              <span className="font-regular text-[12px] text-black/50">{trend.label}</span>
            </div>
          )}
          {attention && (
            <div className="flex items-center gap-1 font-regular text-[12px] text-amber-500">
              <Image src={`/alert-circle.svg`} alt={title} width={12} height={12} />
              <span>Requires attention</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

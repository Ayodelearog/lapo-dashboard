import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from '@/lib/utils';

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
  iconBgColor,
  trend,
  attention
}: MetricCardProps) {
  return (
    <Card>
      <CardContent className="p-3">
        <div className="mb-3 flex flex-col gap-1 w-full ">
            <Image src={`/${icon}.svg`} alt={title} width={16} height={16} />
          <p className="text-sm text-gray-500">{title}</p>
        </div>
        <div className="flex items-end justify-between">
          <h4 className="text-2xl font-semibold">{value}</h4>
          {trend && (
            <div className={cn(`flex items-center text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`)}>
              {trend.isPositive ? 
                <TrendingUp className="mr-1 h-3 w-3" /> : 
                <TrendingDown className="mr-1 h-3 w-3" />
              }
              <span>{trend.value} {trend.label}</span>
            </div>
          )}
          {attention && (
            <div className="flex items-center text-xs text-amber-500">
              <span>Requires attention</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Active", value: 65, color: "#0D9488" },
  { name: "Expired", value: 20, color: "#F59E0B" },
  { name: "Inactive", value: 10, color: "#2563EB" },
  { name: "Blocked", value: 3, color: "#9333EA" },
  { name: "Lost", value: 2, color: "#EF4444" },
];

export function CardStatusDistribution() {
  const totalCards = 2450;

  return (
    <Card className="flex flex-col gap-[22px] p-4 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <CardTitle className="text-lg font-medium">
          Card Status Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative flex h-[210px] flex-col items-center">
          {/* Centered total count */}
          <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 transform text-center">
            <p className="text-[12px] font-medium text-[#808080]">Total Cards</p>
            <p className="text-2xl font-medium text-[#121212]">
              {totalCards.toLocaleString()}
            </p>
          </div>

          {/* Donut Chart */}
          <div className="h-[210px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} className="rounded-2" />
                  ))}
                </Pie>
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  iconSize={8}
                  className="mt-4"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

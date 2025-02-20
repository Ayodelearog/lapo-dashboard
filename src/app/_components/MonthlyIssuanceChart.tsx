"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'May', instant: 20, personalized: 30 },
  { name: 'Jun', instant: 25, personalized: 45 },
  { name: 'Jul', instant: 15, personalized: 20 },
  { name: 'Aug', instant: 20, personalized: 35 },
  { name: 'Sep', instant: 25, personalized: 25 },
  { name: 'Oct', instant: 30, personalized: 45 },
  { name: 'Nov', instant: 25, personalized: 35 },
];

export function MonthlyIssuanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Monthly Issuance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="instant" fill="#E0E7FF" radius={[4, 4, 0, 0]} />
              <Bar dataKey="personalized" fill="#1E40AF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
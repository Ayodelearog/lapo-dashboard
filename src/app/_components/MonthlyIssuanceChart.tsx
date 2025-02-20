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
    <Card className='shadow-none p-4 flex flex-col gap-[22px]'>
      <CardHeader className='p-0'>
        <CardTitle className="text-lg font-medium text-[#121212]">Monthly Issuance</CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <div className="h-[203px] w-full">
          <ResponsiveContainer  width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={true} axisLine={true} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend verticalAlign="bottom" height={16} />
              <Bar dataKey="instant" fill="#E0E7FF" stackId={"a"} width={40} radius={[4, 4, 0, 0]} />
              <Bar dataKey="personalized" fill="#1E40AF" width={40} stackId={"a"} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
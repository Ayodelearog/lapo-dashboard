"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 20 },
  { name: 'Thu', value: 55 },
  { name: 'Fri', value: 40 },
  { name: 'Sat', value: 25 },
  { name: 'Sun', value: 70 },
];

export function WeeklyIncomeChart() {
  return (
    <Card className='shadow-none p-4 flex flex-col gap-[22px]'>
      <CardHeader className="flex p-0 flex-row items-center justify-between ">
        <CardTitle className="text-lg font-medium text-[#121212]">This Week's Income</CardTitle>
      </CardHeader>
      <CardContent className='p-0 '>
        <div className="h-[203px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="2 2" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#4DAF01" 
                strokeWidth={1.5}
                // dot={{ r: 4, strokeWidth: 1.5 }}
                activeDot={{ r: 6, fill: "#4DAF01" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
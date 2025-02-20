"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Active', value: 65, color: '#0D9488' },
  { name: 'Expired', value: 20, color: '#F59E0B' },
  { name: 'Inactive', value: 10, color: '#2563EB' },
  { name: 'Blocked', value: 3, color: '#9333EA' },
  { name: 'Lost', value: 2, color: '#EF4444' },
];

export function CardStatusDistribution() {
  const totalCards = 2450;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Card Status Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center h-64">
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  iconSize={8}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center -mt-6">
            <p className="text-sm text-gray-500">Total Cards</p>
            <p className="text-2xl font-semibold">{totalCards.toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
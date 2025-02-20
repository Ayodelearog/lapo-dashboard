"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { title } from 'process';

const data = [
  { branch: "Corporate", type: "Instant", quantity: 10, status: "Ready" },
  { branch: "Corporate", type: "Personalized", quantity: 10, status: "In Progress" },
  { branch: "Corporate", type: "Personalized", quantity: 10, status: "Acknowledged" },
  { branch: "Corporate", type: "Instant", quantity: 10, status: "Pending" }
];

export function RecentCardRequests() {
  return (
    <Card className='shadow-none p-4 flex flex-col gap-[22px]'>
      <CardHeader className="flex p-0 flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium text-[#121212]">Recent Card Requests</CardTitle>
        <Button variant="ghost" size="icon">
        <Image src={`/maximize-2.svg`} alt={title} width={20} height={20} />
          {/* <ExternalLink className="h-5 w-5" /> */}
        </Button>
      </CardHeader>
      <CardContent className='w-full p-0'>
        <Table>
          <TableHeader className='bg-[#F1F7FF]'>
            <TableRow className='text-center'>
              <TableHead className="font-medium text-center py-2 px-7 text-[12px] text-black/50">Branch</TableHead>
              <TableHead className="font-medium text-center py-2 px-7 text-[12px] text-black/50">Card Type</TableHead>
              <TableHead className="font-medium text-center py-2 px-7 text-[12px] text-black/50">Quantity</TableHead>
              <TableHead className="font-medium text-center py-2 px-7 text-[12px] text-black/50">Status</TableHead>
              <TableHead className="font-medium text-center py-2 px-7 text-[12px] text-black/50">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className='font-regular text-center text-gray-600 text-[10px]'>
                <TableCell className='py-3 px-10'>{row.branch}</TableCell>
                <TableCell className='py-3 px-10'>{row.type}</TableCell>
                <TableCell className='py-3 px-10'>{row.quantity}</TableCell>
                <TableCell className='font-medium py-3 px-10'>
                  <Badge size="sm" variant={
                    row.status === "Ready" ? "success" :
                    row.status === "In Progress" ? "warning" :
                    row.status === "Acknowledged" ? "info" : "outline"
                  }>
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className='py-3 px-10'>
                  <Button variant="link" className="p-0 font-bold text-primary h-auto">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
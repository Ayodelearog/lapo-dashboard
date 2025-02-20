"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  { branch: "Corporate", type: "Instant", quantity: 10, status: "Ready" },
  { branch: "Corporate", type: "Personalized", quantity: 10, status: "In Progress" },
  { branch: "Corporate", type: "Personalized", quantity: 10, status: "Acknowledged" },
  { branch: "Corporate", type: "Instant", quantity: 10, status: "Pending" }
];

export function RecentCardRequests() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Card Requests</CardTitle>
        <Button variant="ghost" size="icon">
          <ExternalLink className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-normal text-gray-500">Branch</TableHead>
              <TableHead className="font-normal text-gray-500">Card Type</TableHead>
              <TableHead className="font-normal text-gray-500">Quantity</TableHead>
              <TableHead className="font-normal text-gray-500">Status</TableHead>
              <TableHead className="font-normal text-gray-500">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.branch}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>
                  <Badge variant={
                    row.status === "Ready" ? "success" :
                    row.status === "In Progress" ? "warning" :
                    row.status === "Acknowledged" ? "info" : "outline"
                  }>
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="link" className="p-0 h-auto">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
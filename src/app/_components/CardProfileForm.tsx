// CardProfileForm.tsx
'use client'
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Plus } from "lucide-react";



export const CardProfileForm: React.FC = () => {
  const [fees, setFees] = React.useState<any[]>([]);
  
  return (
    <div className="p-6 w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Create Profile</h1>
        <p className="text-gray-500">Fill in profile details and add card fee.</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Profile Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Card Name<span className="text-red-500">*</span>
              </label>
              <Input placeholder="Enter card name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Bin Prefix<span className="text-red-500">*</span>
              </label>
              <Input placeholder="00000000" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Card Scheme<span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Verve" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verve">Verve</SelectItem>
                  <SelectItem value="mastercard">Mastercard</SelectItem>
                  <SelectItem value="visa">Visa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Expiration<span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12 months</SelectItem>
                  <SelectItem value="24">24 months</SelectItem>
                  <SelectItem value="36">36 months</SelectItem>
                  <SelectItem value="40">40 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <Textarea placeholder="Enter description" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Currency<span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="NGN" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NGN">NGN</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Branch Blacklist
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Head Office" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="head_office">Head Office</SelectItem>
                  <SelectItem value="branch_1">Branch 1</SelectItem>
                  <SelectItem value="branch_2">Branch 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Fees</CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Fee
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Account Pad</TableHead>
                <TableHead>Account</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fees.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                    No fees added yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
          Create Profile
        </Button>
      </div>
    </div>
  );
};
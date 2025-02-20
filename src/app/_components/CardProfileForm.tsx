// CardProfileForm.tsx
"use client";
import React from "react";
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
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { AddFeeModal } from "./AddFeeModal";

export const CardProfileForm: React.FC = () => {
  const router = useRouter();
  const [fees] = React.useState<string[]>([]);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-gray-900">Card Profile</h1>
        <p className="font-regular text-[14px] text-gray-600">
          Fill in profile details and add card fee.
        </p>
      </div>

      <Card className="rounded-2.5 mb-4 p-4 pb-7 shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="text-lg font-medium text-[#121212]">
            Profile Details
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-[26px] p-0">
          <div className="grid grid-cols-2 gap-x-[125px] gap-y-5 pr-[133px]">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Card Name<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter card name"
                className="border border-gray-300 px-[14px] py-2.5"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Bin Prefix<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="00000000"
                className="border border-gray-300 px-[14px] py-2.5"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Card Scheme<span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="border border-gray-300 px-[14px] py-2.5">
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
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Expiration<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="00000000"
                type="number"
                className="border border-gray-300 px-[14px] py-2.5"
              />
              {/* <Select>
                <SelectTrigger className="border border-gray-300 px-[14px] py-2.5">
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12 months</SelectItem>
                  <SelectItem value="24">24 months</SelectItem>
                  <SelectItem value="36">36 months</SelectItem>
                  <SelectItem value="40">40 months</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Description
              </label>
              <Textarea
                placeholder="Enter description"
                className="border border-gray-300 px-[14px] py-2.5"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Currency<span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="border border-gray-300 px-[14px] py-2.5">
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
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Branch Blacklist
              </label>
              <Select>
                <SelectTrigger className="border border-gray-300 px-[14px] py-2.5">
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

      <Card className="rounded-2.5 mb-4 p-4 shadow-none">
        <CardHeader className="mb-3 flex flex-col gap-6 p-0">
          <CardTitle className="text-lg font-medium text-[#121212]">
            Fees
          </CardTitle>
          {/* <Button
            onClick={() => router.push("/card-profile/create-profile")}
            className="flex w-fit items-center gap-2 bg-primary px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" /> Add Fee
          </Button> */}
          <AddFeeModal />
        </CardHeader>

        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-50 text-[12px] font-medium text-gray-600">
              <TableRow>
                <TableHead className="px-6 py-3 text-center">Name</TableHead>
                <TableHead className="border-l border-gray-200 px-6 py-3 text-center">
                  Value
                </TableHead>
                <TableHead className="border-l border-gray-200 px-6 py-3 text-center">
                  Frequency
                </TableHead>
                <TableHead className="border-l border-gray-200 px-6 py-3 text-center">
                  Currency
                </TableHead>
                <TableHead className="border-l border-gray-200 px-6 py-3 text-center">
                  Time
                </TableHead>
                <TableHead className="border-l border-gray-200 px-6 py-3 text-center">
                  Account Pad
                </TableHead>
                <TableHead className="border-l border-gray-200 px-6 py-3 text-center">
                  Account
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {fees.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="py-6 text-center text-gray-500"
                  >
                    No fees added yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Button
          onClick={() => router.push("/card-profile/create-profile")}
          className="flex w-fit items-center gap-2 bg-primary px-[95px] py-2.5 text-base font-bold text-white hover:bg-blue-700"
        >
          Create Profile
        </Button>
      </div>
    </div>
  );
};

// CardProfilePage.tsx
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  // CardDescription,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { AddFeeModal } from "../_components/AddFeeModal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";


const data = [
  {
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: "847264905",
    date_requested: "11/14/2024 10:27:43",
    status: "Ready",
  },
  {
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: "847264905",
    date_requested: "11/14/2024 10:27:43",
    status: "Ready",
  },
  {
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: "847264905",
    date_requested: "11/14/2024 10:27:43",
    status: "In Progress",
  },
  {
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: "847264905",
    date_requested: "11/14/2024 10:27:43",
    status: "Pending",
  },
  {
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: "847264905",
    date_requested: "11/14/2024 10:27:43",
    status: "Acknowledged",
  },
];

export const CardRequestPage: React.FC = () => {
  const router = useRouter();
  const [isAddFeeModalOpen] = React.useState(false);

  return (
    <div className="w-full">
      <div className="mb-2.5">
        <h1 className="text-[18px] font-bold text-gray-900">Card Request</h1>
        <p className="font-regular text-[14px] text-gray-600">
          View and attend to carrd requests here.
        </p>
        <div className="mt-2.5 h-[1px] w-full bg-[#D0D5DD]"></div>
      </div>

      <div>
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex h-10 w-[320px] items-center overflow-hidden rounded-lg border border-gray-200 bg-white px-3">
            <Image src="/search-md.svg" alt="search" width={16} height={16} />
            <Input
              type="text"
              placeholder="Search by branch"
              className="placeholder:font-regular h-8 border-0 bg-transparent px-2 text-[12px] shadow-none placeholder:text-[12px] placeholder:text-[#344054] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        <div className="my-2.5 h-[1px] w-full bg-[#D0D5DD]"></div>
      </div>

      <Card className="shadow-none">
        <CardContent className="w-full p-0">
          <Table>
            <TableHeader className="bg-[#F1F7FF]">
              <TableRow className="text-center">
                <TableHead className="px-7 py-2 text-center text-[12px] font-medium text-gray-600">
                  Branch
                </TableHead>
                <TableHead className="px-7 py-2 text-center text-[12px] font-medium text-gray-600 border-l border-gray-200">
                  Initiator
                </TableHead>
                <TableHead className="px-7 py-2 text-center text-[12px] font-medium text-gray-600 border-l border-gray-200">
                  Quantity
                </TableHead>
                <TableHead className="px-7 py-2 text-center text-[12px] font-medium text-gray-600 border-l border-gray-200">
                  Batch
                </TableHead>
                <TableHead className="px-7 py-2 text-center text-[12px] font-medium text-gray-600 border-l border-gray-200">
                  Date Requested
                </TableHead>
                <TableHead className="px-7 py-2 text-center text-[12px] font-medium text-gray-600 border-l border-gray-200">
                  Status
                </TableHead>
                <TableHead className="px-7 py-2 text-center text-[12px] font-medium text-gray-600 border-l border-gray-200">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  className="font-regular text-center text-[10px] text-gray-600"
                >
                  <TableCell className="px-10 py-3 font-regular text-gray-600 text-[10px]">{row.branch}</TableCell>
                  <TableCell className="px-10 py-3 border-l font-regular text-gray-600 text-[10px] border-gray-200 ">{row.initiator}</TableCell>
                  <TableCell className="px-10 py-3 border-l font-regular text-gray-600 text-[10px] border-gray-200">{row.quantity}</TableCell>
                  <TableCell className="px-10 py-3 border-l font-regular text-gray-600 text-[10px] border-gray-200">{row.batch}</TableCell>
                  <TableCell className="px-10 py-3 font-regular text-gray-600 text-[10px] border-l border-gray-200">
                    {row.date_requested}
                  </TableCell>
                  <TableCell className="px-10 py-3 font-medium border-l border-gray-200">
                    <Badge
                      size="sm"
                      className={
                        "font-regular text-[10px] border " +
                        (row.status === "Ready"
                          ? "border-green-500"
                          : row.status === "In Progress"
                            ? "border-yellow-500"
                            : row.status === "Acknowledged"
                              ? "border-blue-500"
                              : "border-gray-200")
                      }
                      variant={
                        row.status === "Ready"
                          ? "success"
                          : row.status === "In Progress"
                            ? "warning"
                            : row.status === "Acknowledged"
                              ? "info"
                              : "outline"
                      }
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-10 py-3 border-l border-gray-200">
                    <Button
                      variant="link"
                      onClick={()=>router.push("/card-request/request-details")}
                      className="h-auto p-0 font-regular text-[10px] text-primary"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* {isAddFeeModalOpen && <AddFeeModal />} */}
    </div>
  );
};

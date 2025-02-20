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
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Trash2, PenSquare } from "lucide-react";
import { CardProfileForm } from "../_components/CardProfileForm";
import { AddFeeModal } from "../_components/AddFeeModal";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CardProfileData {
  id: string;
  name: string;
  currency: string;
  expiration: string;
  binPrefix: string;
  dateCreated: string;
}

export const CardProfilePage: React.FC = () => {
  const router = useRouter();
  const [isAddFeeModalOpen, setIsAddFeeModalOpen] = React.useState(false);
  const [cardProfiles, setCardProfiles] = React.useState<CardProfileData[]>([
    {
      id: "1",
      name: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234",
      dateCreated: "11/10/2024 23:21:03",
    },
    {
      id: "2",
      name: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234",
      dateCreated: "11/10/2024 23:21:03",
    },
    {
      id: "3",
      name: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "50611234",
      dateCreated: "11/10/2024 23:21:03",
    },
  ]);

  return (
    <div className="w-full">
      <div className="mb-3">
        <h1 className="text-[18px] font-bold text-gray-900">Card Profile</h1>
        <p className="font-regular text-[14px] text-gray-600">
          Create, view and edit card profiles here.
        </p>
        <div className="mt-3 h-[1px] w-full bg-[#D0D5DD]"></div>
      </div>

      <div >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-[320px] items-center overflow-hidden rounded-lg border border-gray-200 bg-white px-3">
            <Image src="/search-md.svg" alt="search" width={16} height={16} />
            <Input
              type="text"
              placeholder="Search by card name"
              className="placeholder:font-regular h-8 border-0 bg-transparent px-2 text-[12px] shadow-none placeholder:text-[12px] placeholder:text-[#344054] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button
            onClick={() => router.push("/card-profile/create-profile")}
            className="flex items-center gap-2 bg-primary px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" /> Add Profile
          </Button>
        </div>
      <div className="my-2.5 h-[1px] w-full bg-[#D0D5DD]"></div>
      </div>

      <Card className="shadow-none rounded-[4px]">
        <CardContent className="p-0">
          <Table className="">
            <TableHeader className=" rounded-1 text-[12px] font-medium">
              <TableRow className="bg-gray-50">
                <TableHead className="px-6 py-2" >Card Name</TableHead>
                <TableHead className="px-6 py-2 text-center border-l border-gray-200" >Currency</TableHead>
                <TableHead className="px-6 py-2 text-center border-l border-gray-200" >Expiration</TableHead>
                <TableHead className="px-6 py-2 text-center border-l border-gray-200" >Bin Prefix</TableHead>
                <TableHead className="px-6 py-2 text-center border-l border-gray-200 " >Date Created</TableHead>
                <TableHead className="px-6 py-2 text-center border-l border-gray-200" >Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cardProfiles.map((profile) => (
                <TableRow key={profile.id}>
                  <TableCell className="text-2.5 font-regular text-gray-600 px-6 py-3 text-left">{profile.name}</TableCell>
                  <TableCell className="text-2.5 font-regular text-gray-600 px-6 py-3 text-center border-l border-gray-200">{profile.currency}</TableCell>
                  <TableCell className="text-2.5 font-regular text-gray-600 px-6 py-3 text-center border-l border-gray-200">{profile.expiration}</TableCell>
                  <TableCell className="text-2.5 font-regular text-gray-600 px-6 py-3 text-center border-l border-gray-200">{profile.binPrefix}</TableCell>
                  <TableCell className="text-2.5 font-regular text-gray-600 px-6 py-3 text-center border-l border-gray-200">{profile.dateCreated}</TableCell>
                  <TableCell className="text-2.5 font-regular text-gray-600 px-6 py-3 text-center border-l border-gray-200">
                    <div className="">
                      <Button variant="ghost" size="icon">
                      <Image src="/trash-01.svg" alt="trash" width={20} height={20} />
                      </Button>
                      <Button variant="ghost" size="icon">
                      <Image src="/edit-01.svg" alt="edit" width={20} height={20} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {isAddFeeModalOpen && (
        <AddFeeModal onClose={() => setIsAddFeeModalOpen(false)} />
      )}
    </div>
  );
};

"use client";
import React, { useState, useEffect } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const RequestDetailsForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: "847264905",
    date_requested: "11/14/2024 10:27:43",
    status: "Ready", // Initial status
    charges: "₦1,500",
    cardType: "Classic Debit",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    action: () => {},
    bgColor: "",
  });

  const actionBtns = [
    {
      icon: "/file-download",
      text: "Download for Production",
      bgColor: "#344054",
      description:
        "Production file has been downloaded.",
      action: () => updateStatus("Pending"),
    },
    {
      icon: "/loading",
      text: "Mark as in Progress",
      bgColor: "#B54708",
      description: "Are you sure you want to mark this batch as in progress?",
      action: () => updateStatus("In Progress"),
    },
    {
      icon: "/package-check",
      text: "Mark as Ready",
      bgColor: "#067647",
      description: "Are you sure you want to mark this batch as ready?",
      action: () => updateStatus("Ready"),
    },
    {
      icon: "/package-sent",
      text: "Send to Dispatch",
      bgColor: "#8020E7",
      description: "Card batch successfully sent to dispatch.",
      action: () => updateStatus("Dispatched"),
    },
    {
      icon: "/check-circle-broken",
      text: "Mark as Acknowledged",
      bgColor: "#014DAF",
      description: "Are you sure you want to mark this batch as acknowledged?",
      action: () => updateStatus("Acknowledged"),
    },
  ];

  const handleActionClick = (button: any) => {
    setModalData({
      title: button.text,
      description: button.description,
      action: button.action,
      bgColor: button.bgColor,
    });
    setShowModal(true);
  };

  const handleConfirmAction = () => {
    modalData.action();
    setShowModal(false);
  };

  const updateStatus = (newStatus: string) => {
    setFormData({
      ...formData,
      status: newStatus,
    });
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ready":
        return "success";
      case "In Progress":
        return "warning";
      case "Acknowledged":
        return "info";
      case "Dispatched":
        return "default";
      default:
        return "outline";
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Ready":
        return "border-green-500";
      case "In Progress":
        return "border-yellow-500";
      case "Acknowledged":
        return "border-blue-500";
      case "Dispatched":
        return "border-purple-500";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-gray-900">Request Details</h1>
        <p className="font-regular text-[14px] text-gray-600">
          Perform predetermined actions on card requests here.
        </p>
      </div>

      <Card className="mb-4 rounded-lg p-4 pb-7 shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="text-lg font-medium text-[#121212]">
            Card Request Details
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-[26px] p-0">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-[125px] md:pr-[133px]">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Branch Name
              </label>
              <Input
                value={formData.branch}
                readOnly
                className="font-regular border border-gray-300 bg-[#F5F5F7] px-[14px] py-2.5 text-base"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Initiator
              </label>
              <Input
                value={formData.initiator}
                readOnly
                className="font-regular border border-gray-300 bg-[#F5F5F7] px-[14px] py-2.5 text-base"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Card Type
              </label>
              <Input
                value={formData.cardType}
                readOnly
                className="font-regular border border-gray-300 bg-[#F5F5F7] px-[14px] py-2.5 text-base"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Card Charges
              </label>
              <Input
                value={formData.charges}
                readOnly
                className="font-regular border border-gray-300 bg-[#F5F5F7] px-[14px] py-2.5 text-base"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <Input
                value={formData.quantity}
                readOnly
                className="font-regular border border-gray-300 bg-[#F5F5F7] px-[14px] py-2.5 text-base"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Batch
              </label>
              <Input
                value={formData.batch}
                readOnly
                className="font-regular border border-gray-300 bg-[#F5F5F7] px-[14px] py-2.5 text-base"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Date Requested
              </label>
              <p className="font-regular py-2.5 text-base">
                {formData.date_requested}
              </p>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Status
              </label>
              <Badge
                size="sm"
                className={cn(
                  "border px-5 py-[5px] text-base font-medium shadow-sm",
                  getStatusStyles(formData.status),
                )}
                variant={getStatusVariant(formData.status)}
              >
                {formData.status}
              </Badge>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-700">Actions</h3>
            <div className="mt-3 flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6">
              {actionBtns.map((btn, index) => (
                <Button
                  key={index}
                  className="gap-2 whitespace-nowrap px-3 py-2 text-[12px] font-medium text-white"
                  style={{ backgroundColor: btn.bgColor }}
                  onClick={() => handleActionClick(btn)}
                >
                  <Image
                    src={`${btn.icon}.svg`}
                    alt="icon"
                    height={16}
                    width={16}
                  />
                  <span className="hidden sm:inline">{btn.text}</span>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Confirmation Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal} >
        <DialogContent className="p-6 sm:max-w-[400px] rounded-xl ">
          <DialogHeader className="flex h-12 w-12 justify-center items-center rounded-[10px] border border-gray-200">
            <Image
              src={`/check-circle.svg`}
              alt="icon"
              width={18}
              height={18}
            />
          </DialogHeader>
          <div className="mt-4">
            <DialogTitle className="text-lg font-medium text-gray-900">Successful</DialogTitle>
            <p className="font-regular mt-1 text-sm text-gray-600">
              {modalData.description}
            </p>
          </div>
          <div className="mt-8">
            <Button
              className="bg-primary"
              
              onClick={handleConfirmAction}
            >
              Continue
            </Button>
          </div>
          
        </DialogContent>
      </Dialog>
    </div>
  );
};

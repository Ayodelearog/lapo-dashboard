// AddFeeModal.tsx
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";
import Image from "next/image";

interface AddFeeModalProps {
  onClose: () => void;
}

export const AddFeeModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleAddFee = () => {
    console.log("Add Fee");
    setIsOpen(false); // Close the modal on submit
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          // onClick={() => router.push("/card-profile/create-profile")}
          className="flex w-fit items-center gap-2 bg-primary px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" /> Add Fee
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 flex h-12 w-12 justify-center rounded-[10px] border border-gray-200">
              <Image src="/plus-square.svg" alt="plus" width={18} height={18} />
            </div>
            <div>
              <DialogTitle className="text-lg font-bold text-gray-900">
                Add Fee
              </DialogTitle>
              <DialogDescription className="font-regular text-[14px] text-gray-600">
                Fill in fee details.
              </DialogDescription>
            </div>
          </div>
          {/* <DialogClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
            </Button>
          </DialogClose> */}
        </DialogHeader>

        <div className="flex flex-col gap-4 py-5">
          <div>
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              Fee Name<span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="Maintenance"
              className="font-regular border border-gray-300 px-[14px] py-2.5 text-base text-gray-500 placeholder:text-gray-500"
            />
          </div>

          <div>
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              Value
            </Label>
            <Input
              type="number"
              placeholder="0"
              className="font-regular border border-gray-300 px-[14px] py-2.5 text-base text-gray-500 placeholder:text-gray-500"
            />
          </div>

          <div>
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              Currency
            </Label>
            <RadioGroup defaultValue="NGN" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="NGN"
                  id="NGN"
                  className="h-6 w-6 border border-black/50 bg-[#F6F6F6] focus:border-4 focus:border-primary focus:bg-[#F6F6F6] active:border-4 active:border-primary"
                />
                <Label
                  htmlFor="NGN"
                  className="font-regular text-base text-[#121212]"
                >
                  NGN
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="USD"
                  id="USD"
                  className="h-6 w-6 border border-black/50 bg-[#F6F6F6] focus:border-4 focus:border-primary focus:bg-[#F6F6F6] active:border-4 active:border-primary"
                />
                <Label
                  htmlFor="USD"
                  className="font-regular text-base text-[#121212]"
                >
                  USD
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              Fee Frequency
            </Label>
            <RadioGroup defaultValue="one_off" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="one_off"
                  id="one_off"
                  className="h-6 w-6 border border-black/50 bg-[#F6F6F6] focus:border-4 focus:border-primary focus:bg-[#F6F6F6] active:border-4 active:border-primary"
                />
                <Label
                  htmlFor="one_off"
                  className="font-regular text-base text-[#121212]"
                >
                  One Off
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="monthly"
                  id="monthly"
                  className="h-6 w-6 border border-black/50 bg-[#F6F6F6] focus:border-4 focus:border-primary focus:bg-[#F6F6F6] active:border-4 active:border-primary"
                />
                <Label
                  htmlFor="monthly"
                  className="font-regular text-base text-[#121212]"
                >
                  Monthly
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              Fee Impact
            </Label>
            <RadioGroup defaultValue="issuance" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="issuance"
                  id="issuance"
                  className="h-6 w-6 border border-black/50 bg-[#F6F6F6] focus:border-4 focus:border-primary focus:bg-[#F6F6F6] active:border-4 active:border-primary"
                />
                <Label
                  htmlFor="issuance"
                  className="font-regular text-base text-[#121212]"
                >
                  Issuance
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="pin_reissue"
                  id="pin_reissue"
                  className="h-6 w-6 border border-black/50 bg-[#F6F6F6] focus:border-4 focus:border-primary focus:bg-[#F6F6F6] active:border-4 active:border-primary"
                />
                <Label
                  htmlFor="pin_reissue"
                  className="font-regular text-base text-[#121212]"
                >
                  Pin Reissue
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              Account Pad
            </Label>
            <RadioGroup defaultValue="none" className="flex items-center gap-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="none"
                  id="none"
                  className="h-6 w-6 border border-black/50 bg-[#F6F6F6] focus:border-4 focus:border-primary focus:bg-[#F6F6F6] active:border-4 active:border-primary"
                />
                <Label
                  htmlFor="none"
                  className="font-regular text-base text-[#121212]"
                >
                  None
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="branch_code_prefix"
                  id="branch_code_prefix"
                  className="h-6 w-6 border border-black/50 bg-[#F6F6F6] focus:border-4 focus:border-primary focus:bg-[#F6F6F6] active:border-4 active:border-primary"
                />
                <Label
                  htmlFor="branch_code_prefix"
                  className="font-regular text-base text-[#121212]"
                >
                  Branch Code Prefix
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="branch_code_suffix"
                  id="branch_code_suffix"
                  className="h-6 w-6 border border-black/50 bg-[#F6F6F6] focus:border-4 focus:border-primary focus:bg-[#F6F6F6] active:border-4 active:border-primary"
                />
                <Label
                  htmlFor="branch_code_suffix"
                  className="font-regular no-wrap text-base text-[#121212]"
                >
                  Branch Code Suffix
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="mb-1.5 block text-sm font-medium text-gray-700">
              Account
            </Label>
            <Input
              placeholder=""
              className="font-regular border border-gray-300 px-[14px] py-2.5 text-base text-gray-500 placeholder:text-gray-500"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={ handleAddFee}
            className="flex w-full items-center gap-2 bg-primary px-[95px] py-2.5 text-base font-bold text-white hover:bg-blue-700"
          >
            Add Fee
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

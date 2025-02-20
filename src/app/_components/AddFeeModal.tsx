// AddFeeModal.tsx
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";

interface AddFeeModalProps {
  onClose: () => void;
}

export const AddFeeModal: React.FC<AddFeeModalProps> = ({ onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 bg-gray-100 p-2 rounded-md">
              <Plus className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="text-lg">Add Fee</DialogTitle>
              <DialogDescription>Fill in fee details.</DialogDescription>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-4 py-2">
          <div>
            <Label className="block text-sm font-medium mb-2">
              Fee Name<span className="text-red-500">*</span>
            </Label>
            <Input placeholder="Maintenance" />
          </div>
          
          <div>
            <Label className="block text-sm font-medium mb-2">
              Value
            </Label>
            <Input type="number" placeholder="0" />
          </div>
          
          <div>
            <Label className="block text-sm font-medium mb-2">
              Currency
            </Label>
            <RadioGroup defaultValue="NGN" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="NGN" id="NGN" />
                <Label htmlFor="NGN">NGN</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="USD" id="USD" />
                <Label htmlFor="USD">USD</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label className="block text-sm font-medium mb-2">
              Fee Frequency
            </Label>
            <RadioGroup defaultValue="one_off" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one_off" id="one_off" />
                <Label htmlFor="one_off">One Off</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label className="block text-sm font-medium mb-2">
              Fee Impact
            </Label>
            <RadioGroup defaultValue="issuance" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="issuance" id="issuance" />
                <Label htmlFor="issuance">Issuance</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pin_reissue" id="pin_reissue" />
                <Label htmlFor="pin_reissue">Pin Reissue</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label className="block text-sm font-medium mb-2">
              Account Pad
            </Label>
            <RadioGroup defaultValue="none" className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none">None</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="branch_code_prefix" id="branch_code_prefix" />
                <Label htmlFor="branch_code_prefix">Branch Code Prefix</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="branch_code_suffix" id="branch_code_suffix" />
                <Label htmlFor="branch_code_suffix">Branch Code Suffix</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label className="block text-sm font-medium mb-2">
              Account
            </Label>
            <Input placeholder="" />
          </div>
        </div>
        
        <DialogFooter>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Add Fee
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
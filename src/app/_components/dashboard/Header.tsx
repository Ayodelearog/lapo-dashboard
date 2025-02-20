// components/ui/dashboard/Header.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function DashboardHeader() {
  return (
    <header className="border-b border-[#DEDEDF] px-2 py-1">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "font-medium flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] text-black transition-colors",
            // pathname === "/"
            //   ? "border border-[#E2E2E2] bg-[#F6F6F6] text-base font-medium text-primary"
            //   : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
          )}
        >
          <Image
            src="/home.svg"
            width={16}
            height={16}
            priority
            alt="dashboard icon"
            className="h-4 w-4" // Fixed size
          />
          Dashboard
        </div>

        <div className="flex items-center gap-4 mr-[11px]">
          {/* Search bar */}
          <div className="relative w-[214px]">
            <div className="flex h-8 items-center overflow-hidden rounded-full border border-gray-200 bg-white px-3">
              <Search className="h-4 w-4 text-black" />
              <Input
                type="text"
                placeholder="Search"
                className="h-8 border-0 bg-transparent px-2 text-[12px] placeholder:text-[12px] placeholder:font-regular placeholder:text-[#344054] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          {/* Notification bell */}
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full hover:bg-gray-100"
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <Badge className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500 p-0" />
          </Button>

          {/* User profile */}
          <Button
            variant="ghost"
            className="h-9 w-9 rounded-full p-0 border border-gray-300 hover:bg-gray-100"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatar-placeholder.jpg" alt="User" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </header>
  );
}

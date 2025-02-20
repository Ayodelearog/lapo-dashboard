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
import { usePathname } from "next/navigation";
import path from "path";

const routes = [
  { name: "Dashboard", icon: "/home.svg", href: "/" },
  { name: "Branches", icon: "/branches.svg", href: "/branches" },
  { name: "Roles", icon: "/roles.svg", href: "/roles" },
  { name: "Users", icon: "/users.svg", href: "/users" },
  { name: "Card Scheme", icon: "/card-scheme.svg", href: "/card-scheme" },
  { name: "Card Profile", icon: "/card-profile.svg", href: "/card-profile" },
  { name: "Card Request", icon: "/card-request.svg", href: "/card-request" },
  { name: "Stock", icon: "/stock.svg", href: "/stock" },
  { name: "Cards", icon: "/cards.svg", href: "/cards" },
  {
    name: "Authorization List",
    icon: "/auth-list.svg",
    href: "/authorization-list",
  },
  {
    name: "Authorization Queue",
    icon: "/auth-queue.svg",
    href: "/authorization-queue",
  },
  { name: "Trail", icon: "/trail.svg", href: "/trail" },
];

export function DashboardHeader() {
  const pathname = usePathname();
  const activeRoute = routes.find((route) => pathname === route.href);
  return (
    <header className="border-b border-[#DEDEDF] px-2 py-1">
      <div className="flex items-center justify-between">
        {activeRoute && (
          <div
            key={activeRoute.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] font-medium text-black transition-colors"
          >
            <Image
              src={activeRoute.icon}
              width={16}
              height={16}
              priority
              alt="dashboard icon"
              className="h-4 w-4"
            />
            {activeRoute.name}
          </div>
        )}

        <div className="mr-[11px] flex items-center gap-4">
          {/* Search bar */}
          <div className="relative w-[214px]">
            <div className="flex h-8 items-center overflow-hidden rounded-full border border-gray-200 bg-white px-3">
              <Search className="h-4 w-4 text-black" />
              <Input
                type="text"
                placeholder="Search"
                className="placeholder:font-regular h-8 border-0 bg-transparent px-2 text-[12px] shadow-none placeholder:text-[12px] placeholder:text-[#344054] focus-visible:ring-0 focus-visible:ring-offset-0"
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
            className="h-9 w-9 rounded-full border border-gray-300 p-0 hover:bg-gray-100"
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

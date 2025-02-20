"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Building2,
  Users,
  CreditCard,
  FileText,
  Box,
  List,
  History,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { Icon } from "./Icon";

const menuItems = [
  // { name: "Dashboard", icon: "/home.svg", href: "/" },
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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[15vw] flex-col border-r border-[#DEDEDF] bg-background px-3 overflow-y-auto">
      <div className="pt-6 shrink-0">
        <div className="relative p-4">
          <Image
            src="/logo.png"
            width={140}
            height={45}
            priority
            alt="LAPO Logo"
            className="h-8 w-auto" // Fixed height
          />
        </div>
        
        <Link
          href="/"
          className={cn(
            "font-regular mt-[32px] flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] text-black/50 transition-colors",
            pathname === "/"
              ? "border border-[#E2E2E2] bg-[#F6F6F6] text-base font-medium text-primary"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
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
        </Link>

        <p className="mb-0.5 mt-4 pl-4 text-[8.5px] uppercase text-[#7E8B9C]">
          Main Menu
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "font-regular flex items-center gap-3 rounded-lg px-3 py-2 text-[12px] text-black/50 transition-colors",
              pathname === item.href
                ? "border border-[#E2E2E2] bg-[#F6F6F6] text-base font-medium text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <Image
              src={item.icon}
              width={16}
              height={16}
              priority
              alt={`${item.name} icon`}
              className="h-4 w-4" // Fixed size
            />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto shrink-0 pb-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-black hover:bg-accent hover:text-accent-foreground">
          <Image
            src="/logout.svg"
            width={16}
            height={16}
            priority
            alt="logout icon"
            className="h-4 w-4" // Fixed size
          />
          Logout
        </button>

        <div className="p-4 flex flex-col items-start">
          <p className="mb-1 text-[8.5px] uppercase text-[#7E8B9C]">
            powered by
          </p>
          <Image
            src="/card-infra.png"
            width={93}
            height={42}
            priority
            alt="Card Infra Logo"
            className=" w-auto" // Fixed height
          />
        </div>
      </div>
    </div>
  );
}

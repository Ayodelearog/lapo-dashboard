// components/ui/dashboard/Header.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

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
  const router = useRouter();
  const isHomepage = pathname === "/";
  const activeRoute = routes.find((route) => pathname === route.href);

  // Check if we're in a subroute (e.g., /card-profile/create-profile)
  const pathParts = pathname.split("/").filter(Boolean);
  const isSubroute = pathParts.length > 1;

  // Find parent route and current route info
  const parentRoute = isSubroute
    ? routes.find((route) => route.href === `/${pathParts[0]}`)
    : null;
  const currentRoute = routes.find(
    (route) => route.href === `/${pathParts[0]}`,
  );

  // Get subroute name - take the last part of the path and format it
  const subRouteName = isSubroute
    ? pathParts[pathParts.length - 1]
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return (
    <header className="sticky top-0 z-50 flex w-full border-b bg-white">
      <div className="flex w-full items-center justify-between px-5 py-1">
        {/* <div className="flex items-center gap-4">
          {isSubroute ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.back()}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {parentRoute && (
                <div className="flex items-center gap-2">
                  <Image 
                    src={parentRoute.icon} 
                    alt={parentRoute.name} 
                    width={24} 
                    height={24}
                  />
                  <Link href={parentRoute.href} className="text-sm text-gray-600">
                    {parentRoute.name}
                  </Link>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">{subRouteName}</span>
                </div>
              )}
            </>
          ) : (
            currentRoute && (
              <div className="flex items-center gap-2">
                <Image 
                  src={currentRoute.icon} 
                  alt={currentRoute.name} 
                  width={24} 
                  height={24}
                />
                <span className="font-medium">{currentRoute.name}</span>
              </div>
            )
          )}
        </div> */}
        {activeRoute ? (
          <div
            key={activeRoute?.href}
            className="flex items-center gap-3 rounded-lg py-2.5 text-[12px] font-medium text-black transition-colors"
          >
            <Image
              src={activeRoute?.icon}
              width={16}
              height={16}
              priority
              alt="dashboard icon"
              className="h-4 w-4"
            />
            {activeRoute?.name}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {isSubroute ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.back()}
                  className="flex h-fit w-fit items-center gap-2 text-[12px] font-medium text-gray-600 hover:bg-transparent"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                  Back
                </Button>

                {parentRoute && (
                  <div className="flex items-center gap-3">
                    <Image
                      src={parentRoute.icon}
                      alt={parentRoute.name}
                      width={16}
                      height={16}
                    />
                    <ChevronRight className="h-4 w-4 text-gray-300" />
                    <Link
                      href={parentRoute.href}
                      className="text-[12px] font-medium text-[#475467]"
                    >
                      {parentRoute.name}
                    </Link>
                    <ChevronRight className="h-4 w-4 text-gray-300" />
                    <span className="text-[12px] font-bold text-[#001735]">
                      {subRouteName}
                    </span>
                  </div>
                )}
              </>
            ) : (
              currentRoute && (
                <div className="flex items-center gap-2">
                  <Image
                    src={currentRoute.icon}
                    alt={currentRoute.name}
                    width={24}
                    height={24}
                  />
                  <span className="font-medium">{currentRoute.name}</span>
                </div>
              )
            )}
          </div>
        )}

        <div className="mr-[11px] flex items-center gap-4">
          {isHomepage && (
            <div className="relative w-[214px]">
              <div className="flex h-8 items-center overflow-hidden rounded-full border border-gray-200 bg-white px-3">
                <Image
                  src="/search-md.svg"
                  alt="search"
                  width={16}
                  height={16}
                />

                <Input
                  type="text"
                  placeholder="Search"
                  className="placeholder:font-regular h-8 border-0 bg-transparent px-2 text-[12px] shadow-none placeholder:text-[12px] placeholder:text-[#344054] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full h-10 w-10"
            >
              <Image src="/bell-01.svg" alt="bell" width={20} height={20} />

              <Badge className="absolute -right-[-3] -top-[-2] flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-0 text-[10px] hover:bg-red-500">
                3
              </Badge>
            </Button>

            <Avatar className="h-8 w-8 border border-gray-300">
              <AvatarImage src="" alt="User" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}

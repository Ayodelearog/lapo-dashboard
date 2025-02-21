"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const menuItems = [
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

  // Reusable function to determine if a route is active
  const isRouteActive = (href: string) => {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  // Reusable function for rendering menu items
  const renderMenuItem = (name: string, icon: string, href: string) => {
    const isActive = isRouteActive(href);
    
    return (
      <Link
        key={href}
        href={href}
        className={cn(
          "font-regular flex items-center gap-3 rounded-lg px-3 py-2 text-[12px] transition-colors",
          isActive
            ? "border border-[#E2E2E2] bg-[#F6F6F6] text-base font-medium text-primary"
            : "text-black/50 hover:bg-accent hover:text-accent-foreground"
        )}
      >
        <Image
          src={icon}
          width={16}
          height={16}
          priority
          alt={`${name} icon`}
          className="h-4 w-4"
          style={
            isActive
              ? {
                  filter: "invert(22%) sepia(98%) saturate(1841%) hue-rotate(210deg) brightness(94%) contrast(102%)"
                }
              : {}
          }
        />
        {name}
      </Link>
    );
  };

  return (
    <div className="flex h-full w-[15vw] flex-col overflow-y-auto border-r border-[#DEDEDF] bg-background px-3">
      <div className="shrink-0 pt-6">
        <div className="relative p-4">
          <Image
            src="/logo.png"
            width={140}
            height={45}
            priority
            alt="LAPO Logo"
            className="h-8 w-auto"
          />
        </div>

        {renderMenuItem("Dashboard", "/home.svg", "/")}

        <p className="mb-0.5 mt-4 pl-4 text-[8.5px] uppercase text-[#7E8B9C]">
          Main Menu
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-2">
        {menuItems.map((item) => renderMenuItem(item.name, item.icon, item.href))}
      </nav>

      <div className="mt-auto shrink-0 pb-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-black hover:bg-accent hover:text-accent-foreground">
          <Image
            src="/logout.svg"
            width={16}
            height={16}
            priority
            alt="logout icon"
            className="h-4 w-4"
          />
          Logout
        </button>

        <div className="flex flex-col items-start p-4">
          <p className="mb-1 text-[8.5px] uppercase text-[#7E8B9C]">
            powered by
          </p>
          <Image
            src="/card-infra.png"
            width={93}
            height={42}
            priority
            alt="Card Infra Logo"
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
}
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface QuickAccessCardProps {
  title: string;
  icon: string;
  href: string;
}

export function QuickAccessCard({ title, icon, href }: QuickAccessCardProps) {
  return (
    <Card className="rounded-1 border-none shadow-none bg-[#F1F7FF]  px-4 py-2">
      <Link href={href} className="flex items-center gap-4">
        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-primary">
          <Image src={`/${icon}.svg`} alt={title} width={16} height={16} />
        </div>
        <div className="flex items-center gap-[5px]">
          <span className="flex-1 text-sm font-medium text-[#121212]">
            {title}
          </span>
          <ChevronRight className="h-4 w-4 text-[#808080]" />
        </div>
      </Link>
    </Card>
  );
}

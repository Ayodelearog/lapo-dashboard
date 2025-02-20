"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

export function DateDisplay() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex h-10 items-center gap-2 border border-[#D0D5DD] px-3 py-2 font-satoshi"
        >
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-black" />
            <span className="text-[11px] font-medium text-[#121212]">
              Today
            </span>
          </div>
          <div className="h-4 w-[1px] bg-[#D0D5DD]"></div>
          <span className="font-regular text-[11px] text-[#121212]">
            {format(date, "d MMM yyyy")}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={(date) => date && setDate(date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

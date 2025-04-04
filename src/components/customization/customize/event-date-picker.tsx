"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RiCalendarLine } from "@remixicon/react";

export function EventDatePicker() {
    const [date, setDate] = React.useState<Date>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "h-10 w-full justify-start border-none text-left text-sm font-normal text-darkgray shadow-none ring-transparent hover:bg-transparent",
                        !date && "text-muted-foreground",
                    )}
                >
                    <RiCalendarLine className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione a data</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
        </Popover>
    );
}

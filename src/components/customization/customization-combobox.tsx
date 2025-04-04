"use client";

import * as React from "react";
import { RiCheckLine, RiArrowDownSFill } from "@remixicon/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Item {
    value: string;
    label: string;
}

interface CustomizationComboboxProps {
    placeholder: string;
    items: Item[];
}

export function CustomizationCombobox({ placeholder, items }: CustomizationComboboxProps) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="h-10 w-[246px] justify-between rounded-[18px] border-darkteal text-sm text-darkgray"
                >
                    {value ? items?.find((framework) => framework.value === value)?.label : placeholder}
                    <RiArrowDownSFill className="ml-2 h-5 w-5 shrink-0 text-darkteal" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="border-divider w-[246px] p-0">
                <Command>
                    <CommandInput placeholder={"Buscar..."} />
                    <CommandList>
                        <CommandEmpty>Sem resultados.</CommandEmpty>
                        <CommandGroup>
                            {items?.map((framework) => (
                                <CommandItem
                                    className="cursor-pointer"
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    <RiCheckLine
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0",
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

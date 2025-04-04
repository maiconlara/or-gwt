"use client";

import * as React from "react";
import { RiCheckLine, RiArrowDownSFill } from "@remixicon/react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FontIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
interface Item {
    value: string;
    label: string;
}

interface ComboboxProps {
    placeholder: string;
    items: Item[];
    value: string;
    setValue: (value: string) => void;
}

export function SelectFontCombobox({ placeholder, items, value, setValue }: ComboboxProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="h-10 w-full justify-between border-none text-sm text-darkgray shadow-none"
                >
                    {value ? items?.find((framework) => framework.value === value)?.label : placeholder}
                    <div className="flex flex-row">
                        <FontIcon w={20} h={20} className="ml-2 text-darkteal" />
                        <RiArrowDownSFill className="ml-2 h-5 w-5 shrink-0 text-darkteal" />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="border-divider w-auto p-0">
                <Command>
                    <CommandInput placeholder={"Buscar..."} />
                    <CommandList>
                        <CommandEmpty>Sem resultados.</CommandEmpty>
                        <CommandGroup>
                            {items?.map((framework) => (
                                <CommandItem
                                    className={`cursor-pointer ${framework.value}`}
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

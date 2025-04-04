"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { RiArrowRightSLine } from "@remixicon/react";

interface ChangeImagePopoverProps {
    children: React.ReactNode;
}

export const ChangeImagePopover = ({ children }: ChangeImagePopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger className="flex w-full flex-row">
                <div className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14">
                    <p className="font-poppins text-base text-darkteal">{children}</p>
                    <RiArrowRightSLine className="text-darkteal" />
                </div>
            </PopoverTrigger>
            <PopoverContent
                side="right"
                className="z-[9999] flex h-[500px] w-[459px] flex-col items-center justify-end rounded-xl border-0 bg-white p-0 shadow-xl"
            ></PopoverContent>
        </Popover>
    );
};

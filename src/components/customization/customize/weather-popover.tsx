"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RiArrowRightSLine } from "@remixicon/react";
import { Switch } from "@/components/ui/switch";

interface WheaterPopoverProps {
    children: React.ReactNode;
}

export const WheaterPopover = ({ children }: WheaterPopoverProps) => {
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
                className="flex w-[459px] flex-col items-center justify-between gap-5 rounded-xl border-0 bg-white px-10 py-10 shadow-xl"
            >
                <div className="flex w-full flex-col items-start gap-0">
                    <div className="flex w-full flex-row items-start justify-between gap-1">
                        <div className="flex w-full max-w-[230px] flex-col gap-2">
                            <p className="font-regular font-poppins text-lg text-darkteal">Previsão do tempo</p>
                            <p className="font-regular font-poppins text-sm text-[#6C6C6C]">
                                Deseja exibir a previsão do tempo no layout do seu site?
                            </p>
                        </div>
                        <Switch />
                    </div>
                </div>
                <div className="flex w-full flex-row justify-end">
                    <div className="font-regular flex h-10 w-auto cursor-pointer flex-col items-center justify-center bg-darkteal px-8 font-poppins text-base uppercase text-white">
                        Salvar
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

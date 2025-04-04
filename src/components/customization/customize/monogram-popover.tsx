"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RiArrowRightSLine } from "@remixicon/react";
import { Input } from "@/components/ui";
import { SelectFontCombobox } from "./select-font-combobox";
import { useState } from "react";
import { ColorPicker } from "@/components/ui/color-picker";

interface MonogramPopoverProps {
    children: React.ReactNode;
}

export const MonogramPopover = ({ children }: MonogramPopoverProps) => {
    const [selectedFont, setSelectedFont] = useState("1");
    const [selectedColor, setSelectedColor] = useState("#ffffff");

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
                <div className="flex w-full flex-col items-start justify-center gap-4">
                    <p className="font-regular cursor-default font-poppins text-base text-darkteal">Monograma</p>
                </div>

                <Input
                    placeholder="Nomes ou iniciais"
                    className="w-full rounded-full border border-lines text-darkteal"
                />

                <div className="flex w-full flex-col items-start gap-0">
                    <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Fonte</p>
                    <div className="flex w-full flex-col gap-0">
                        <SelectFontCombobox
                            placeholder="Selecione a fonte"
                            items={[
                                {
                                    value: "1",
                                    label: "Montserrat",
                                },
                                {
                                    value: "2",
                                    label: "Poppins",
                                },
                                {
                                    value: "3",
                                    label: "Roboto",
                                },
                            ]}
                            value={selectedFont}
                            setValue={setSelectedFont}
                        />
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                    <div className="flex w-full flex-row justify-between">
                        <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Cor</p>
                        <ColorPicker name="colorMno" color={selectedColor} setColor={setSelectedColor} />
                    </div>
                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
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

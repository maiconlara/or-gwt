"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";

interface AnimatedIntroductionProps {
    children: React.ReactNode;
}

export const AnimatedIntroductionPopover = ({ children }: AnimatedIntroductionProps) => {
    const [photo, setPhoto] = useState<string | null>(null);

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

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
                className="flex w-[459px] flex-col items-center justify-between gap-8 rounded-xl border-0 bg-white px-10 py-10 shadow-xl"
            >
                <div className="flex w-full flex-col items-start justify-center gap-4">
                    <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Introdução animada</p>
                    <p className="font-regular cursor-default font-poppins text-sm text-black">
                        Insira o vídeo que seu convidado verá ao abrir o site
                    </p>
                </div>
                <div className="flex w-full flex-col items-start justify-between gap-3">
                    <div className="flex w-full flex-col items-center gap-6">
                        <label
                            htmlFor="capa-site"
                            className="relative flex h-[228px] w-full cursor-pointer flex-row items-end justify-end bg-placeholder"
                        >
                            {photo && (
                                <Image
                                    src={photo}
                                    alt="Uploaded"
                                    fill
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                id="capa-site"
                                name="coverUrl"
                                className="invisible h-0 w-0"
                                onChange={handlePhotoChange}
                            />
                        </label>
                        <div className="flex w-full flex-row justify-end">
                            <div className="font-regular flex h-10 cursor-pointer flex-col items-center justify-center bg-darkteal px-8 font-poppins text-base uppercase text-white">
                                Adicionar Video
                            </div>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

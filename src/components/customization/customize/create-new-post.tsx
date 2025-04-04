"use client";

import { AddImageIcon } from "@/assets/icons";
import { Input } from "@/components/ui";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export const CreateNewPost = () => {
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
        <div className="flex w-full flex-col items-center gap-12 px-20 pt-12">
            <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                <div className="flex w-full flex-col gap-8 px-[82px]">
                    <div className="flex w-full flex-col gap-8">
                        <div className="flex w-full flex-col gap-0">
                            <Input
                                placeholder="Escreva um título"
                                className="h-10 w-full justify-between border-none text-xl text-darkgray shadow-none ring-transparent"
                            />
                            <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                        </div>
                        <div className="flex w-full flex-col gap-0">
                            <Input
                                placeholder="Escreva um subtítulo"
                                className="h-10 w-full justify-between border-none text-lg text-darkgray shadow-none ring-transparent"
                            />
                            <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                </div>

                <div className="flex w-full flex-col px-[82px]">
                    <Textarea placeholder="Escreva seu texto" className="h-[286px] w-full resize-none" />
                </div>

                <div className="flex w-full flex-col items-start gap-6 px-[82px]">
                    <label
                        htmlFor="post-photo"
                        className="relative flex h-[105px] w-[104px] cursor-pointer flex-row items-end justify-end bg-transparent"
                    >
                        {photo ? (
                            <Image
                                src={photo}
                                alt="Uploaded"
                                fill
                                className="absolute inset-0 h-full w-full rounded-md object-cover"
                            />
                        ) : (
                            <AddImageIcon className="cursor-pointer text-[#9E9595]" w={104} h={104} />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            id="post-photo"
                            name="post-photo"
                            className="invisible h-0 w-0"
                            onChange={handlePhotoChange}
                        />
                    </label>
                </div>
            </div>
            <div className="flex w-full max-w-[1185px] flex-row justify-end">
                <div className="font-regular flex h-10 cursor-pointer flex-col items-center justify-center rounded-md bg-darkteal px-8 font-poppins text-base uppercase text-white">
                    Adicionar post
                </div>
            </div>
        </div>
    );
};

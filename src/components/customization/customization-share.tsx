"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import Image from "next/image";
import {
    facebookMessenger,
    instagramStories,
    instagramMessage,
    facebookStories,
    facebookFeed,
    whatsapp,
    copyLink,
    qrCode,
    shareX,
} from "@/assets/images";

interface CustomizationShareProps {
    children: React.ReactNode;
}

export const CustomizationShare = ({ children }: CustomizationShareProps) => {
    const shareItems = [
        {
            icon: copyLink,
            title: "Copiar link",
        },

        {
            icon: whatsapp,
            title: "WhatsApp",
        },
        {
            icon: instagramStories,
            title: "Stories",
        },
        {
            icon: instagramMessage,
            title: "Mensagens",
        },
        {
            icon: facebookMessenger,
            title: "Messenger",
        },
        {
            icon: facebookFeed,
            title: "Feed",
        },
        {
            icon: facebookStories,
            title: "Stories",
        },
        {
            icon: shareX,
            title: "X",
        },
        {
            icon: qrCode,
            title: "Gerar QR Code",
        },
    ];

    return (
        <Popover>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent
                side="bottom"
                className="z-[9999] ml-[300px] flex w-[562px] flex-col items-center justify-end rounded-[48px] border-0 bg-darkteal p-0 shadow-xl"
            >
                <div className="bg-trasnparent flex h-[62px] w-full flex-row items-center justify-center font-poppins text-xl text-white">
                    Compartilhe seu site
                </div>
                <div className="flex h-[400px] w-[562px] flex-col items-center justify-center gap-4 rounded-[48px] bg-white">
                    <div className="grid w-full grid-cols-4 gap-5 px-[40px]">
                        {shareItems.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    className="group flex flex-col items-center justify-center gap-2"
                                    href="/"
                                >
                                    <Image
                                        alt={item.title}
                                        src={item.icon}
                                        width={120}
                                        height={120}
                                        className="h-[60px] w-[60px]"
                                    />
                                    <p className="font-poppins text-[14px] font-semibold text-[#0F0F0F] transition-colors group-hover:text-darkteal">
                                        {item.title}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

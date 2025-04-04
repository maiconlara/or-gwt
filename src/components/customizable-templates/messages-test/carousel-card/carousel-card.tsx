"use client";

import { useState } from "react";
import Image from "next/image";

import { motion } from "motion/react";
import { RiStarFill } from "@remixicon/react";

import { cn } from "@/lib/utils";

import AvatarImage from "@/assets/images/debutante/01/2.webp";
import { useEvent } from "@/utils/hooks/useEvent";

interface MessageCarouselCardProps {
    className?: string;
    showAvatar?: boolean;
    showStars?: boolean;
    size: "small" | "big";
}

const messages = [
    {
        id: 1,
        name: "Mensagem de Olivia",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        id: 2,
        name: "Mensagem de Lucas",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
        id: 3,
        name: "Mensagem de Maria",
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
];

export const MessageCarouselCard = ({ className, showAvatar = false, size, showStars = false }: MessageCarouselCardProps) => {
    const carouselSize = size === "small" ? "max-w-[428px]" : "max-w-[628px]";

    const { event } = useEvent();

    const fonts = event?.fontes ?? {
        names: "font-poppins",
        titles: "font-poppins",
        texts: "font-poppins",
        menus: "font-poppins",
    };

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    const handleNext = () => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    };

    const handlePrevious = () => {
        setCurrentMessageIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
    };

    const currentMessage = messages[currentMessageIndex];

    return (
        <div
            className={cn(
                `relative flex min-h-[330px] w-full ${carouselSize} flex-col justify-between gap-10 rounded-lg border border-[#D9D9D9] bg-white p-10 text-[#222222] shadow-md`,
                className,
            )}
        >
            <motion.div
                key={currentMessage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex w-full flex-col gap-10"
            >
                <div className="flex w-full flex-row items-center justify-between">
                    <p className={`cursor-default text-2xl font-bold ${fonts.titles} `}>{currentMessage.name}</p>

                  {showStars &&  <div className="flex flex-row items-center gap-4">
                        <RiStarFill size={24} />
                        <RiStarFill size={24} />
                        <RiStarFill size={24} />
                    </div>}
                </div>

                <p className={`flex w-full cursor-default flex-row ${fonts.texts} `}>{currentMessage.text}</p>
            </motion.div>

            <div className="flex w-full flex-row items-center justify-end gap-6">
                <div
                    onClick={handlePrevious}
                    className="flex h-10 cursor-pointer select-none flex-row items-center justify-center rounded-md border border-black/40 bg-[#e3e3e3] px-6"
                >
                    Anterior
                </div>

                <div
                    onClick={handleNext}
                    className="flex h-10 cursor-pointer select-none flex-row items-center justify-center rounded-md border border-black/40 bg-[#2c2c2c] px-6 text-white"
                >
                    Próxima
                </div>
            </div>

            {showAvatar && (
                <div className="absolute -bottom-5 -left-5">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image
                            src={AvatarImage}
                            alt="Perfil"
                            fill
                            loading="lazy"
                            placeholder="blur"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

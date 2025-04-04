"use client";

import { useEvent } from "@/utils/hooks/useEvent";


import Image from "next/image";

import { DebutanteHeader } from "../../header";

import { GiftList } from "@/components";
import { MessageCarouselCard } from "@/components";

import Debutante01Banner from "@/assets/images/debutante/01/1.webp";

export const Debutante01Gifts = () => {
    const { event } = useEvent();

    const mediaType = event?.tipo_capa ?? "Imagem";

    const colors = event?.cores ?? {
        main_color: "#E41414",
        texts: "#ffffff",
        menus: "#E41414",
        names: "#000000",
        titles: "#000000",
        titles_2: "#000000",
        texts_2: "#000000",
        
    };

    const mainImage =
        mediaType === "Slideshow"
            ? event?.imagem_principal?.map((img) => img.url)
            : (event?.imagem_principal?.[0]?.url ?? Debutante01Banner.src);

    const secondaryImage = event?.imagem_principal?.[0]?.url ?? Debutante01Banner.src;
    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-debutante-background">
            <DebutanteHeader />
            {mediaType === "Video" && typeof mainImage === "string" ? (
                <video key={mainImage} autoPlay loop muted className="h-auto w-[calc(100%-40px)] rounded-2xl">
                    <source src={mainImage} type="video/mp4" />
                </video>
            ) : (
                <Image
                    src={secondaryImage}
                    alt=""
                    width={1920}
                    height={1920}
                    priority
                    quality={100}
                    className="h-auto w-[calc(100%-40px)] rounded-2xl"
                />
            )}

            <MessageCarouselCard className="-mt-20 bg-[#FFF2F5] text-[#D03A3A]" showAvatar size="big" />

            <GiftList />
        </div>
    );
};

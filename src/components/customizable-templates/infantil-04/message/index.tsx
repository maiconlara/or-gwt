"use client";

import { Infantil04AlternativeHero } from "../alternative-hero";
import { kid04Banner } from "@/assets/images";
import { useEvent } from "@/utils/hooks/useEvent";
import Image from "next/image";
import { cloudsBG } from "@/assets/images";
import { MessageCarouselCard } from "@/components";
import { MessagesForm } from "@/components";
export const Infantil04Message = () => {
    const { event } = useEvent();
    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
    const mediaType = event?.tipo_capa ?? "Imagem";

    const colors = event?.cores ?? {
        main_color: "#AECCD9",
        texts: "#3687C1",
        menus: "#195655",
        names: "#3687C1",
        titles: "#3687C1",
        titles_2: "#3687C1",
        texts_2: "#3687C1",
    };

    const mainImage =
        mediaType === "Slideshow"
            ? event?.imagem_principal?.map((img) => img.url)
            : (event?.imagem_principal?.[0]?.url ?? kid04Banner.src);


    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-white">
            <Infantil04AlternativeHero colors={colors} mainImage={mainImage} />

            <div className="relative flex w-full flex-col items-start justify-start">
                <div
                    className="flex h-[800px] w-full flex-col items-start justify-start bg-cover"
                    style={{ backgroundImage: `url(${cloudsBG.src})` }}
                />
                <div className="flex h-[800px] w-full flex-col items-start justify-start bg-[#FAF2EB]" />
                <div
                    className={
                        "absolute -top-28 flex h-full w-full flex-col items-center justify-start gap-20 bg-transparent"
                    }
                >
                    <MessageCarouselCard size="big" showStars />
                    <div className="flex w-full max-w-[820px] flex-col items-center gap-10 rounded-[64px] bg-white p-12">
                        <div className="flex max-w-[847px] flex-col items-center gap-2">
                            <p className={`cursor-default ${titleFont} text-7xl font-normal`}>Deixe sua</p>

                            <p
                                className={`cursor-default ${titleFont} text-7xl font-bold`}
                                style={{
                                    color: colors.titles,
                                }}
                            >
                                mensagem
                            </p>
                        </div>
                        <MessagesForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

"use client";

import { useEvent } from "@/utils/hooks/useEvent";

import Image from "next/image";

import { Messages } from "@/components";

import { Debutante01Hero } from "../hero";
import { DebutanteHeader } from "../../header";

import Debutante01Banner from "@/assets/images/debutante/01/5.webp";

export const Debutante01Message = () => {
    const { event } = useEvent();

    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
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

            <Debutante01Hero />

            <Messages
                primaryColor={colors.main_color}
                secondaryColor={colors.texts}
                titleFont={titleFont}
                textFont={textFont}
                titleColor={colors.titles}
                banner={
                    mediaType === "Video" && typeof mainImage === "string" ? (
                        <video
                            key={mainImage}
                            autoPlay
                            loop
                            muted
                            className="static h-auto w-full overflow-y-hidden object-cover object-top opacity-80 rounded-[64px]"
                        >
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
                            className="static h-auto w-full overflow-y-hidden object-cover object-top opacity-80 rounded-[64px]"
                        />
                    )
                }
                titleClassName="static -mt-24 z-20 gap-16 mb-8 text-black"
            />
        </div>
    );
};

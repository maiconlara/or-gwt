"use client";

import { Formatura02AlternativeHero } from "../alternative-hero";
import { formatura02Banner } from "@/assets/images";
import { useEvent } from "@/utils/hooks/useEvent";
import { Messages } from "../../messages";
import { Local } from "./local";
import Image from "next/image";

export const Formatura02Message = () => {
    const { event } = useEvent();
    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
    const mediaType = event?.tipo_capa ?? "Imagem";
    const eventMap = event?.endereco ?? "-";

    const colors = event?.cores ?? {
        main_color: "#ECF86E",
        texts: "#000000",
        menus: "#ECF86E",
        names: "#000000",
        titles: "#ECF86E",
        titles_2: "#000000",
        texts_2: "#000000",
        
    };

    const mainImage =
        mediaType === "Slideshow"
            ? event?.imagem_principal?.map((img) => img.url)
            : (event?.imagem_principal?.[0]?.url ?? formatura02Banner.src);

    const secondaryImage = event?.imagem_principal?.[0]?.url ?? formatura02Banner.src;

    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-white">
            <Formatura02AlternativeHero colors={colors} mainImage={mainImage} />

            <Messages
                primaryColor={colors.main_color}
                secondaryColor={colors.texts}
                titleFont={titleFont}
                textFont={textFont}
                titleColor={colors.titles}
                titleClassName="-top-20 gap-20"
                banner={
                    mediaType === "Video" && typeof mainImage === "string" ? (
                        <video
                            key={mainImage}
                            autoPlay
                            loop
                            muted
                            className="max-h-[626px] w-full overflow-y-hidden object-cover object-top opacity-80"
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
                            className="max-h-[626px] w-full overflow-y-hidden object-cover object-top opacity-80"
                        />
                    )
                }
            />

            <Local
                address={eventMap}
                textColor={colors.texts}
                titleColor={colors.titles}
                mainColor={colors.main_color}
                titleFont={titleFont}
                textFont={textFont}
            />
        </div>
    );
};

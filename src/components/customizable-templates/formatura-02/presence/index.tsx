"use client";

import { Formatura02AlternativeHero } from "../alternative-hero";
import { formatura02Banner } from "@/assets/images";
import { useEvent } from "@/utils/hooks/useEvent";
import { PresenceForm } from "@/components";
import { Map } from "../../map";
export const Formatura02Presence = () => {
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
        texts_2: "#000000",
        titles_2: "#ECF86E",
    };

    const mainImage =
        mediaType === "Slideshow"
            ? event?.imagem_principal?.map((img) => img.url)
            : (event?.imagem_principal?.[0]?.url ?? formatura02Banner.src);

    const secondaryImage = event?.imagem_principal?.[0]?.url ?? formatura02Banner.src;

    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-white">
            <Formatura02AlternativeHero colors={colors} mainImage={mainImage} />
            <div className="flex w-full flex-col items-center justify-start py-16">
                <PresenceForm />
            </div>
            <Map
                address={eventMap}
                size="small"
                textColor={colors.texts}
                titleColor={colors.titles}
                textFont={textFont}
                titleFont={titleFont}
            />
        </div>
    );
};

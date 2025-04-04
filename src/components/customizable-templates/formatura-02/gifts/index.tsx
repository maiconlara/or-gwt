"use client";

import { Formatura02AlternativeHero } from "../alternative-hero";
import { Formatura02GiftsMessages } from "./formatura-02-gifts-messages";

import { Map } from "../../map";
import { GiftList } from "../../gift-list";

import { formatura02Banner } from "@/assets/images";
import { useEvent } from "@/utils/hooks/useEvent";

export const Formatura02Gifts = () => {
    const { event } = useEvent();
    const nameFont = event?.fontes?.names ?? "font-poppins";
    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
   const menuFont = event?.fontes?.menus ?? "font-poppins";
    const mediaType = event?.tipo_capa ?? "Imagem";
    const eventName = event?.nome_evento ?? "-";
    const eventDate = event?.data_evento ?? "-";
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

    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-white">
            <Formatura02AlternativeHero mainImage={mainImage} colors={colors} />
            <Formatura02GiftsMessages />
            <GiftList />
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

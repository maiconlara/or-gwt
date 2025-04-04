"use client";

import { kid04Banner } from "@/assets/images";
import { useEvent } from "@/utils/hooks/useEvent";
import { Infantil04Hero } from "./hero";
import { Infantil04Cta } from "./cta";
import { Map } from "./map";

export const Infantil04Home = () => {
    const { event } = useEvent();
    const nameFont = event?.fontes?.names ?? "font-poppins";
    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
   const menuFont = event?.fontes?.menus ?? "font-poppins";
    const mediaType = event?.tipo_capa ?? "Imagem";
    // const mediaType = "Imagem";
    const eventName = event?.nome_evento ?? "-";
    const eventDate = event?.data_evento ?? "-";
    const eventMap = event?.endereco ?? "-";

    const colors = event?.cores ?? {
        main_color: "#AECCD9",
        texts: "#3687C1",
        menus: "#195655",
        names: "#3687C1",
        titles: "#3687C1",
        titles_2: "#3687C1",
        texts_2: "#3687C1",
    };

    // const mainImage = kid04Banner.src;

    const mainImage =
        mediaType === "Slideshow"
            ? event?.imagem_principal?.map((img) => img.url)
            : (event?.imagem_principal?.[0]?.url ?? kid04Banner.src);

    const content = event?.conteudo;

    const aboutTexts = content?.sobre ?? "";

    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-white">
            <Infantil04Hero
                nameFont={nameFont}
                titleFont={titleFont}
                textFont={textFont}
                mainImage={mainImage}
                mediaType={mediaType}
                eventName={eventName}
                eventDate={eventDate}
                colors={colors}
            />
            <Infantil04Cta
                text={aboutTexts ?? "-"}
                textFont={textFont}
                titleFont={titleFont}
                titleColor={colors.titles}
                textColor={colors.texts}
            />
            <Map address={eventMap} titleColor={colors.titles} textColor={colors.texts} />
        </div>
    );
};

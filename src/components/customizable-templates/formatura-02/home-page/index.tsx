"use client";

import { Formatura02Hero } from "./formatura-02-hero";
import { formatura02Banner } from "@/assets/images";
import { Formatura02Cta } from "./formatura-02-cta";
import { useEvent } from "@/utils/hooks/useEvent";

export const Formatura02 = () => {
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

    const content = event?.conteudo;

    const aboutTexts = `${content?.sobre_dia ?? ""} ${content?.sobre_graduacao ?? ""}`;

    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-white">
            <Formatura02Hero
                nameFont={nameFont}
                titleFont={titleFont}
                textFont={textFont}
                mainImage={mainImage}
                mediaType={mediaType}
                eventName={eventName}
                eventDate={eventDate}
                colors={colors}
            />
            <Formatura02Cta
                title={eventName}
                text={aboutTexts ?? "-"}
                eventMap={eventMap}
                textFont={textFont}
                titleFont={titleFont}
                titleColor={colors.titles}
                textColor={colors.texts}
                mainColor={colors.main_color}
            />
        </div>
    );
};

"use client";

import { formatura02Banner } from "@/assets/images";
import { useEvent } from "@/utils/hooks/useEvent";

import { RiMapPinLine, RiPhoneFill } from "@remixicon/react";
import { generateMapURL } from "@/utils/generateMapUrl";

export const Casamento01Map = () => {
    const { event } = useEvent();
    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
    const eventMap = event?.endereco ?? "-";

    const colors = event?.cores ?? {
        main_color: "#e5e8e1",
        texts: "#000000",
        menus: "#fff",
        names: "#000000",
        titles: "#000000",
        titles_2: "#000000",
        texts_2: "#000000",
    };

    return (
        <div className="flex w-full flex-col items-start justify-start bg-white">
            <div className={`flex w-full flex-col items-center justify-center ${textFont}`}>
                <p
                    className={`cursor-default py-16 text-7xl font-normal uppercase ${titleFont}`}
                    style={{
                        color: colors.titles,
                    }}
                >
                    Local da cerimônia
                </p>
                <div className={`flex h-[894px] w-full flex-row items-center justify-center`}>
                    <iframe width="100%" height="100%" src={generateMapURL(eventMap)} />
                </div>
                <div
                    className="flex w-full flex-row justify-between px-48 py-16"
                    style={{
                        color: colors.texts,
                    }}
                >
                    <div className="flex flex-row items-center gap-8 text-lg">
                        <RiMapPinLine size={64} />
                        <p className="max-w-[600px] cursor-default text-base font-normal">{eventMap}</p>
                    </div>
                    <div className="flex flex-row items-center gap-8 text-lg">
                        <RiPhoneFill size={64} />
                        <p className="max-w-[600px] cursor-default text-base font-normal">(41) 99999-9999</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

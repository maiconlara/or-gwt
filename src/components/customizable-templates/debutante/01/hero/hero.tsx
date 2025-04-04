"use client";
import { Counter } from "./counter";
import { InputParagraph } from "@/components/ui";
import { useEvent } from "@/utils/hooks/useEvent";
import { useState } from "react";

export const Debutante01Hero = () => {
    const { event } = useEvent();

    const [editableName, setEditableName] = useState(event?.nome_evento ?? "-");

    const nameFont = event?.fontes?.names ?? "font-poppins";
    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const eventName = event?.nome_evento ?? "-";

    const colors = event?.cores ?? {
        main_color: "#E41414",
        texts: "#ffffff",
        menus: "#E41414",
        names: "#000000",
        titles: "#000000",
        titles_2: "#000000",
        texts_2: "#000000",
    };

    return (
        <div className="flex w-full flex-col items-center justify-center gap-20 py-20">
            <div className="flex w-full items-end justify-center gap-4 ">
                <span
                    className={`text-[10rem] md:text-[15rem] ${titleFont}`}
                    style={{
                        color: colors.titles,
                    }}
                >
                    15
                </span>
                <span className={`-ml-5 mb-10 w-[400px] md:w-[450px] text-center text-7xl md:text-9xl`}>
                    <InputParagraph
                        endpoint="/organizador/personalizar-site/atualizar-informacoes-evento"
                        keyName="nome_evento"
                        editableText={editableName}
                        setEditableText={setEditableName}
                        font={nameFont}
                        color={colors.names}
                        rows={2}
                        className="break-word"
                    />
                </span>
            </div>

            <Counter />
        </div>
    );
};

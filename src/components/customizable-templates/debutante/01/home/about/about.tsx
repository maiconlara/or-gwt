"use client";
import { generateMapURL } from "@/utils/generateMapUrl";

import { Button, InputParagraph } from "@/components";

import { formatura02Banner } from "@/assets/images";
import { useEvent } from "@/utils/hooks/useEvent";
import Link from "next/link";
import { useState } from "react";

export const Debutante01About = () => {
    const { event } = useEvent();

    const [editableAbout, setEditableAbout] = useState(event?.conteudo?.sobre_dia ?? "-");
    const nameFont = event?.fontes?.names ?? "font-poppins";
    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";

    const eventMap = event?.endereco ?? "-";

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
        <div
            className={`flex w-full flex-col items-center gap-6 py-20 md:items-start md:justify-between md:pl-5 lg:flex-row ${textFont}`}
        >
            <div
                className={`flex flex-col items-start w-full max-w-[86vw] md:max-w-[800px] gap-5 pt-5 ${titleFont}`}
                style={{
                    color: colors.titles,
                }}
            >
                <span className="text-4xl font-semibold">Sobre o evento</span>

                <span className="max-w-[86vw] whitespace-pre-line text-justify text-base font-normal leading-loose w-full md:max-w-[800px]">
                    <InputParagraph
                        endpoint="/organizador/personalizar-site/atualizar-informacoes-evento"
                        keyName="sobre_dia"
                        editableText={editableAbout}
                        setEditableText={setEditableAbout}
                        font={textFont}
                        color={colors.names}
                         className="w-full text-start whitespace-pre-line"
                        rows={12}
                    />
                </span>

                <Link
                    href="/debutante/01/confirmar-presenca"
                    className={`mt-5 flex h-14 w-auto items-center justify-center rounded-lg px-10 text-lg font-semibold text-white`}
                    style={{
                        color: colors.texts,
                        backgroundColor: colors.main_color,
                    }}
                >
                    Confirmar presença
                </Link>
            </div>

            <div className="flex h-[600px] w-[86vw] items-center justify-center lg:w-[830px]">
                <iframe width="100%" height="100%" className="rounded-lg" src={generateMapURL(eventMap)} />
            </div>
        </div>
    );
};

"use client";

import { format, isValid, parse } from "date-fns";
import { useEvent } from "@/utils/hooks/useEvent";
import { InputParagraph } from "@/components/ui";
import { StarIcon } from "@/assets/icons";
import { useState } from "react";

export const PrincipalCard = () => {
    const { event } = useEvent();
    const [editableName, setEditableName] = useState(event?.nome_evento ?? "-");
    const [editableDescription, setEditableDescription] = useState(event?.conteudo?.descricao ?? "-");

    const nameFont = event?.fontes?.names ?? "font-poppins";
    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
    const eventDate = event?.data_evento ?? "-";

    const colors = event?.cores ?? {
        main_color: "#e5e8e1",
        texts: "#000000",
        menus: "#ffffff",
        names: "#000000",
        titles: "#000000",
        titles_2: "#000000",
        texts_2: "#000000",
    };

    const parsedDate = parse(eventDate, "dd/MM/yyyy HH:mm:ss", new Date());
    const dayDate = isValid(parsedDate) ? format(parsedDate, "dd") : "-";
    const monthDate = isValid(parsedDate) ? format(parsedDate, "MM") : "-";

    return (
        <div
            className="flex h-[428px] w-full max-w-[847px] flex-col items-center rounded-[64px] border-2"
            style={{
                borderColor: colors.main_color,
            }}
        >
            <div className="flex h-full w-full flex-col items-center justify-center gap-6">
                <div className="flex flex-col gap-2">
                    <p
                        className={`max-w-[548px] text-center text-base ${titleFont}`}
                        style={{
                            color: colors.titles_2,
                        }}
                    >
                        casamento
                    </p>

                    <InputParagraph
                        endpoint="/organizador/personalizar-site/atualizar-informacoes-evento"
                        keyName="nome_evento"
                        editableText={editableName}
                        setEditableText={setEditableName}
                        className="max-w-[548px] text-center text-8xl"
                        font={nameFont}
                        color={colors.names}
                        rows={2}
                    />
                </div>
                <div
                    className={`flex flex-row items-center gap-2 ${textFont}`}
                    style={{
                        color: colors.titles_2,
                    }}
                >
                    <p className="max-w-[548px] text-center text-base">{dayDate}</p>
                    <StarIcon className="text-[#edede3]" w={16} h={16} />
                    <p className="max-w-[548px] text-center text-base">{monthDate}</p>
                </div>
            </div>
            <div
                className="flex h-[112px] w-full flex-row items-center justify-center border-t-2"
                style={{
                    color: colors.texts_2,
                    borderColor: colors.main_color,
                }}
            >
                <InputParagraph
                    endpoint="/organizador/personalizar-site/atualizar-conteudo"
                    keyName="descricao"
                    editableText={editableDescription}
                    setEditableText={setEditableDescription}
                    className="max-w-[548px] text-center text-[14px]"
                    font={textFont}
                    color={colors.texts_2}
                    rows={3}
                />
            </div>
        </div>
    );
};

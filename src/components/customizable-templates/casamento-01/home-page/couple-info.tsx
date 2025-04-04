"use client";

import { camillaPhoto, eduPhoto } from "@/assets/images";
import { InputImage, InputParagraph } from "@/components/ui";
import { useEvent } from "@/utils/hooks/useEvent";
import { useState } from "react";
import Image from "next/image";

export const Casamento01CoupleInfo = () => {
    const { event } = useEvent();

    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
    const [editableFirstPersonName, setEditableFirstPersonName] = useState(event?.conteudo?.nome_1 ?? "-");
    const [editableSecondPersonName, setEditableSecondPersonName] = useState(event?.conteudo?.nome_2 ?? "-");
    const [editableFirstPersonText, setEditableFirstPersonText] = useState(
        event?.conteudo?.sobre_primeira_pessoa ?? "-",
    );
    const [editableSecondPersonText, setEditableSecondPersonText] = useState(
        event?.conteudo?.sobre_segunda_pessoa ?? "-",
    );
    const [editableFirstPersonPhoto, setEditableFirstPersonPhoto] = useState(event?.conteudo?.foto_1 ?? "");
    const [editableSecondPersonPhoto, setEditableSecondPersonPhoto] = useState(event?.conteudo?.foto_2 ?? "");

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
        <>
            <div
                className={`flex w-full flex-col items-start gap-12 overflow-hidden bg-[#E5E8E1] px-28 py-20 ${textFont}`}
                style={{
                    color: colors.texts,
                }}
            >
                <div className="flex w-full flex-col items-start">
                    <p className="mb-1 max-w-[600px] cursor-default font-poppins text-4xl font-normal text-[#AEB1A6]">
                        Conheça
                    </p>
                    <InputParagraph
                        editableText={editableFirstPersonName}
                        setEditableText={setEditableFirstPersonName}
                        endpoint="/organizador/personalizar-site/atualizar-conteudo"
                        keyName="nome_1"
                        font={titleFont}
                        color={colors.titles}
                        rows={1}
                        className="max-w-[600px] text-7xl font-normal uppercase"
                    />
                    <p className="max-w-[505px] cursor-default pt-6 text-base font-normal">
                        Saiba um pouco mais sobre mim:
                    </p>
                </div>
                <div className="flex h-full max-h-[596px] w-full flex-row items-start justify-between gap-10">
                    <InputImage
                        editableImage={editableFirstPersonPhoto}
                        setEditableImage={setEditableFirstPersonPhoto}
                        endpoint="/organizador/personalizar-site/atualizar-conteudo"
                        keyName="foto_1"
                        alt=""
                        width={464}
                        height={596}
                        className="h-full max-h-[596px] w-full max-w-[464px] object-cover"
                    />

                    <div className="flex h-full w-full max-w-[1000px] flex-col items-start justify-start gap-16">
                        <InputParagraph
                            editableText={editableFirstPersonText}
                            setEditableText={setEditableFirstPersonText}
                            endpoint="/organizador/personalizar-site/atualizar-conteudo"
                            keyName="sobre_primeira_pessoa"
                            font={titleFont}
                            color={colors.texts}
                            rows={12}
                            className="font-regular max-w-[1000px] whitespace-pre-line text-justify text-base"
                        />
                    </div>
                </div>
            </div>
            <div
                className={`flex w-full flex-col items-start gap-12 overflow-hidden bg-[#FFFFF8] px-28 py-20 ${textFont}`}
                style={{
                    color: colors.texts,
                }}
            >
                <div className="flex w-full flex-col items-end">
                    <p className="mb-1 max-w-[600px] cursor-default text-end font-poppins text-4xl font-normal text-[#AEB1A6]">
                        Conheça
                    </p>
                    <InputParagraph
                        editableText={editableSecondPersonName}
                        setEditableText={setEditableSecondPersonName}
                        endpoint="/organizador/personalizar-site/atualizar-conteudo"
                        keyName="nome_2"
                        font={titleFont}
                        color={colors.titles}
                        rows={1}
                        className="max-w-[600px] text-7xl font-normal uppercase"
                    />
                    <p className="max-w-[505px] cursor-default pt-6 text-end text-base font-normal">
                        Saiba um pouco mais sobre mim:
                    </p>
                </div>
                <div className="flex h-full max-h-[596px] w-full flex-row-reverse items-start justify-between gap-10">
                    <InputImage
                        editableImage={editableSecondPersonPhoto}
                        setEditableImage={setEditableSecondPersonPhoto}
                        endpoint="/organizador/personalizar-site/atualizar-conteudo"
                        keyName="foto_2"
                        alt=""
                        width={464}
                        height={596}
                        className="h-full max-h-[596px] w-full max-w-[464px] object-cover"
                    />
                    <div className="flex h-full flex-col max-w-[1000px] w-full items-start justify-start gap-16">
                        <InputParagraph
                            editableText={editableSecondPersonText}
                            setEditableText={setEditableSecondPersonText}
                            endpoint="/organizador/personalizar-site/atualizar-conteudo"
                            keyName="sobre_segunda_pessoa"
                            font={titleFont}
                            color={colors.texts}
                            rows={12}
                            className="font-regular max-w-[1000px] whitespace-pre-line text-justify text-base"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

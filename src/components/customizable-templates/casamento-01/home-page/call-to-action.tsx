"use client";

import { casamento01CtaImage } from "@/assets/images";
import { Casamento01CoupleInfo } from "./couple-info";
import { useEvent } from "@/utils/hooks/useEvent";
import { CustomButton, InputImage, InputParagraph } from "@/components/ui";
import { Casamento01Map } from "./map";
import { useState } from "react";
import Image from "next/image";

export const CustomizableCasamento01Cta = () => {
    const { event } = useEvent();
    const [editableDescription, setEditableDescription] = useState(event?.conteudo?.sobre_nossa_historia ?? "-");
    const [editableCoupleImage, setEditableCoupleImage] = useState(event?.conteudo?.foto_casal ?? "");

    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
    const colors = event?.cores ?? {
        main_color: "#e5e8e1",
        texts: "#000000",
        menus: "#fff",
        names: "#000000",
        titles: "#000000",
    };
    const truncateText = (text: string, maxLength = 1150) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="flex w-full flex-col items-center justify-start bg-[#FFFFF8]">
            <div className="flex w-full max-w-[1500px] flex-row items-center gap-12 px-28 py-36">
                <InputImage
                    editableImage={editableCoupleImage}
                    setEditableImage={setEditableCoupleImage}
                    endpoint="/organizador/personalizar-site/atualizar-conteudo"
                    keyName="foto_casal"
                    width={519}
                    height={596}
                    alt=""
                    className="h-[596px] w-[519px]"
                />
                <div
                    className={`flex w-full max-w-[1000px] flex-col gap-8`}
                    style={{
                        color: colors.titles,
                    }}
                >
                    <div className={`z-10 -ml-32 flex flex-col gap-8 ${titleFont}`}>
                        <p className="max-w-[600px] cursor-default text-8xl font-medium uppercase">O AMOR</p>
                        <p className="ml-32 max-w-[600px] cursor-default text-4xl font-normal uppercase">
                            É UMA JORNADA ÉPICA
                        </p>
                    </div>
                    <div className="flex w-full max-w-[1000px] flex-col gap-6">
                        <InputParagraph
                            endpoint="/organizador/personalizar-site/atualizar-conteudo"
                            keyName="sobre_nossa_historia"
                            editableText={editableDescription}
                            setEditableText={setEditableDescription}
                            className="cursor-default whitespace-pre-line text-justify text-base uppercase"
                            font={textFont}
                            color={colors.texts}
                            rows={8}
                        />

                        <div className="flex w-full flex-row items-center justify-end">
                            <CustomButton text="Ver lista de presentes" isLink link="/casamento/01/presentes" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex w-full flex-row items-start gap-12 overflow-hidden">
                <div className="grid max-h-[1060px] w-full grid-cols-10 gap-12">
                    <div className="col-span-7">
                        <Image
                            width={1920}
                            height={1060}
                            src={casamento01Banner}
                            alt=""
                            className="h-full max-h-[1060px] w-full object-cover"
                        />
                    </div>
                    <div className="col-span-3 flex flex-col gap-8">
                        <Image
                            width={1920}
                            height={530}
                            src={casamento01Banner}
                            alt=""
                            className="h-full max-h-[330px] w-full object-cover"
                        />
                        <Image
                            width={1920}
                            height={530}
                            src={casamento01Banner}
                            alt=""
                            className="h-full max-h-[730px] w-full object-cover"
                        />
                    </div>
                </div>
            </div> */}
            <Casamento01CoupleInfo />
            <Casamento01Map />
        </div>
    );
};

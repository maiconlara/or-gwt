"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ColorPicker } from "@/components/ui/color-picker";
import { RiArrowRightSLine } from "@remixicon/react";
import { useEvent } from "@/utils/hooks/useEvent";
import { Cores } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { LoadingModal } from "@/components/ui";
import { useState, useEffect } from "react";
import { Evento, Fontes } from "@/types";
import { AxiosError } from "axios";
import api from "@/lib/api";

interface PutData {
    main_color: string;
    texts: string;
    menus: string;
    names: string;
    background_color: string;
    titles: string;
}

interface ColorPopoverProps {
    children: React.ReactNode;
}

export const ColorPopover = ({ children }: ColorPopoverProps) => {
    const { event, changeColorValue } = useEvent();

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);

    const [selectedColor, setSelectedColor] = useState({
        texts: "text-black",
        texts_2: "text-black",
        menus: "text-black",
        names: "text-black",
        main_color: "text-black",
        titles: "text-black",
        titles_2: "text-black",
    });

    useEffect(() => {
        if (event?.cores) {
            setSelectedColor(event.cores);
        }
    }, [event]);

    const ChangeColorsRequest = async (putData: PutData) => {
        const { data } = await api.put(`/organizador/personalizar-site/atualizar-cores`, putData);
        return data.data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: ChangeColorsRequest,
        onSuccess: () => {
            setErrorMessage(undefined);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                setErrorMessage("Ocorreu um erro ao alterar as cores.");
                return;
            }

            setErrorMessage("Erro ao alterar as cores. Tente novamente mais tarde.");
        },
    });

    const handleSaveColors = () => {
        setIsOpen(true);
        const putData = {
            background_color: "#ffffff",
            main_color: selectedColor.main_color,
            texts: selectedColor.texts,
            menus: selectedColor.menus,
            names: selectedColor.names,
            titles: selectedColor.titles,
            titles_2: selectedColor.titles_2,
            texts_2: selectedColor.texts_2
        };

        mutate(putData);
    };

    const handleColorChange = (key: keyof Cores, value: string) => {
        setSelectedColor((prevFonts) => ({
            ...prevFonts,
            [key]: value,
        }));
        changeColorValue({ [key]: value });
    };

    return (
        <>
            <Popover>
                <PopoverTrigger className="flex w-full flex-row">
                    <div className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14">
                        <p className="font-poppins text-base text-darkteal">{children}</p>
                        <RiArrowRightSLine className="text-darkteal" />
                    </div>
                </PopoverTrigger>
                <PopoverContent
                    side="right"
                    className="flex w-[459px] flex-col items-center justify-between gap-5 rounded-xl border-0 bg-white px-10 py-10 shadow-xl"
                >
                    <div className="flex w-full flex-col items-start justify-center gap-4">
                        <p className="font-regular cursor-default font-poppins text-base text-black">Cores:</p>
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <p className="font-regular cursor-default font-poppins text-lg text-darkteal">
                                    Cor principal
                                </p>
                                <p className="font-regular cursor-default font-poppins text-xs text-[#6C6C6C]">
                                    Divisores e outros elementos
                                </p>
                            </div>
                            <ColorPicker
                                name="mainColor"
                                color={selectedColor.main_color}
                                setColor={(value) => handleColorChange("main_color", value)}
                            />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Textos</p>
                                <p className="font-regular cursor-default font-poppins text-xs text-[#6C6C6C]">
                                    Conteúdos principais
                                </p>
                            </div>
                            <ColorPicker
                                name="textColor"
                                color={selectedColor.texts}
                                setColor={(value) => handleColorChange("texts", value)}
                            />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Textos secundários</p>
                                <p className="font-regular cursor-default font-poppins text-xs text-[#6C6C6C]">
                                    Conteúdos secundários
                                </p>
                            </div>
                            <ColorPicker
                                name="textColor2"
                                color={selectedColor.texts_2}
                                setColor={(value) => handleColorChange("texts_2", value)}
                            />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <p className="font-regular cursor-default font-poppins text-lg text-darkteal">
                                    Títulos
                                </p>
                                <p className="font-regular cursor-default font-poppins text-xs text-[#6C6C6C]">
                                    Princípais textos
                                </p>
                            </div>
                            <ColorPicker
                                name="titleColor"
                                color={selectedColor.titles}
                                setColor={(value) => handleColorChange("titles", value)}
                            />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <p className="font-regular cursor-default font-poppins text-lg text-darkteal">
                                    Subtítulos
                                </p>
                                <p className="font-regular cursor-default font-poppins text-xs text-[#6C6C6C]">
                                    Títulos secundários
                                </p>
                            </div>
                            <ColorPicker
                                name="titleColor2"
                                color={selectedColor.titles_2}
                                setColor={(value) => handleColorChange("titles_2", value)}
                            />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Menu</p>
                                <p className="font-regular cursor-default font-poppins text-xs text-[#6C6C6C]">
                                    Texto do menu
                                </p>
                            </div>
                            <ColorPicker
                                name="menuColor"
                                color={selectedColor.menus}
                                setColor={(value) => handleColorChange("menus", value)}
                            />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Nome</p>
                                <p className="font-regular cursor-default font-poppins text-xs text-[#6C6C6C]">
                                    Nome do evento
                                </p>
                            </div>
                            <ColorPicker
                                name="eventNameColor"
                                color={selectedColor.names}
                                setColor={(value) => handleColorChange("names", value)}
                            />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>

                    <div className="flex w-full flex-row justify-end">
                        <div
                            onClick={() => handleSaveColors()}
                            className="font-regular flex h-10 w-auto cursor-pointer flex-col items-center justify-center bg-darkteal px-8 font-poppins text-base uppercase text-white"
                        >
                            Salvar
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
            <LoadingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Alterar cores"}
                successMessage="As cores foram salvas com sucesso."
                errorMessage={errorMessage}
                isLoading={isPending}
                closeButton
            />
        </>
    );
};

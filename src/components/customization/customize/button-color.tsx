"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ColorPicker } from "@/components/ui/color-picker";
import { RiArrowRightSLine } from "@remixicon/react";
import { useEvent } from "@/utils/hooks/useEvent";
import {  EstiloBotao } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { LoadingModal } from "@/components/ui";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import api from "@/lib/api";

interface PutData {
    text: string;
    border: string;
    background: string;

}

interface ButtonColorPopoverProps {
    children: React.ReactNode;
}

export const ButtonColorPopover = ({ children }: ButtonColorPopoverProps) => {
    const { event, changeButtonColorValue } = useEvent();

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);

    const [selectedColor, setSelectedColor] = useState({
        text: "text-black",
        border: "text-black",
        background: "text-black",
    });

    useEffect(() => {
        if (event?.estilo_botoes) {
            setSelectedColor(event.estilo_botoes);
        }
    }, [event]);

    const ChangeColorsRequest = async (putData: PutData) => {
        const { data } = await api.put(`/organizador/personalizar-site/atualizar-estilo-botoes`, putData);
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
                setErrorMessage("Ocorreu um erro ao alterar o estilo do botão.");
                return;
            }

            setErrorMessage("Erro ao alterar o estilo do botão. Tente novamente mais tarde.");
        },
    });

    const handleSaveColors = () => {
        setIsOpen(true);
        const putData = {
            border: selectedColor.border,
            text: selectedColor.text,
            background: selectedColor.background,

        };

        mutate(putData);
    };

    const handleColorChange = (key: keyof EstiloBotao, value: string) => {
        setSelectedColor((prevFonts) => ({
            ...prevFonts,
            [key]: value,
        }));
        changeButtonColorValue({ [key]: value });
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
                                    Cor de fundo do botão.
                                </p>
                            </div>
                            <ColorPicker
                                name="mainColor"
                                color={selectedColor.background}
                                setColor={(value) => handleColorChange("background", value)}
                            />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Texto</p>
                                <p className="font-regular cursor-default font-poppins text-xs text-[#6C6C6C]">
                                    Cor do texto do botão.
                                </p>
                            </div>
                            <ColorPicker
                                name="textColor"
                                color={selectedColor.text}
                                setColor={(value) => handleColorChange("text", value)}
                            />
                        </div>
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-2">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Borda</p>
                                <p className="font-regular cursor-default font-poppins text-xs text-[#6C6C6C]">
                                    Cor da borda do botão.
                                </p>
                            </div>
                            <ColorPicker
                                name="titleColor"
                                color={selectedColor.border}
                                setColor={(value) => handleColorChange("border", value)}
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

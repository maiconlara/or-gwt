"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SelectFontCombobox } from "./select-font-combobox";
import { RiArrowRightSLine } from "@remixicon/react";
import { useMutation } from "@tanstack/react-query";
import { useEvent } from "@/utils/hooks/useEvent";
import { LoadingModal } from "@/components/ui";
import { useState, useEffect } from "react";
import { fontOptions } from "@/lib/fonts";
import { Evento, Fontes } from "@/types";
import { AxiosError } from "axios";
import api from "@/lib/api";

interface PutData {
    titles: string;
    texts: string;
    menus: string;
    names: string;
}

interface ReturnData {
    data: Evento;
}

interface SelectFontPopoverProps {
    children: React.ReactNode;
}

export const SelectFontPopover = ({ children }: SelectFontPopoverProps) => {

    const { event, changeFontValue } = useEvent();

    const [selectedFonts, setSelectedFonts] = useState({
        texts: "font-poppins",
        menus: "font-poppins",
        titles: "font-poppins",
        names: "font-poppins",
    });

    useEffect(() => {
        if (event?.fontes) {
            setSelectedFonts(event.fontes);
        }
    }, [event]);


    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);

    const ChangeFontsRequest = async (putData: PutData) => {
        const { data } = await api.put<ReturnData>(`/organizador/personalizar-site/atualizar-fontes`, putData);
        return data.data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: ChangeFontsRequest,
        onSuccess: () => {
            setErrorMessage(undefined);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                setErrorMessage("Ocorreu um erro ao alterar as fontes.");
                return;
            }

            setErrorMessage("Erro ao alterar as fontes. Tente novamente mais tarde.");
        },
    });

    const handleSaveFonts = () => {
        setIsOpen(true);
        const putData = {
            titles: selectedFonts.titles,
            texts: selectedFonts.texts,
            menus: selectedFonts.menus,
            names: selectedFonts.names,
        };

        mutate(putData);
    };

    const handleFontChange = (key: keyof Fontes, value: string) => {
        setSelectedFonts((prevFonts) => ({
            ...prevFonts,
            [key]: value,
        }));
        changeFontValue({ [key]: value });
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
                    className="flex w-[459px] flex-col items-center justify-between gap-8 rounded-xl border-0 bg-white px-10 py-10 shadow-xl"
                >
                    <div className="flex w-full flex-col items-start justify-center gap-4">
                        <p className="font-regular cursor-default font-poppins text-base text-darkteal">
                            Selecione as fontes
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-start gap-0">
                        <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Textos</p>
                        <div className="flex w-full flex-col gap-0">
                            <SelectFontCombobox
                                placeholder="Selecione a fonte"
                                items={fontOptions}
                                value={selectedFonts.texts}
                                setValue={(value) => handleFontChange("texts", value)}
                            />
                            <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-0">
                        <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Menu</p>
                        <div className="flex w-full flex-col gap-0">
                            <SelectFontCombobox
                                placeholder="Selecione a fonte"
                                items={fontOptions}
                                value={selectedFonts.menus}
                                setValue={(value) => handleFontChange("menus", value)}
                            />
                            <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-0">
                        <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Títulos</p>
                        <div className="flex w-full flex-col gap-0">
                            <SelectFontCombobox
                                placeholder="Selecione a fonte"
                                items={fontOptions}
                                value={selectedFonts.titles}
                                setValue={(value) => handleFontChange("titles", value)}
                            />
                            <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-0">
                        <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Nome(s)</p>
                        <div className="flex w-full flex-col gap-0">
                            <SelectFontCombobox
                                placeholder="Selecione a fonte"
                                items={fontOptions}
                                value={selectedFonts.names}
                                setValue={(value) => handleFontChange("names", value)}
                            />
                            <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                        </div>
                    </div>
                    <div className="flex w-full flex-row justify-end">
                        <div
                            onClick={() => handleSaveFonts()}
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
                title={"Alterar fontes"}
                successMessage="Suas fontes foram salvas com sucesso."
                errorMessage={errorMessage}
                isLoading={isPending}
                closeButton
            />
        </>
    );
};

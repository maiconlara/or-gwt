"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RiArrowRightSLine } from "@remixicon/react";
import { useMutation } from "@tanstack/react-query";
import { useEvent } from "@/utils/hooks/useEvent";
import { Switch } from "@/components/ui/switch";
import { LoadingModal } from "@/components/ui";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import api from "@/lib/api";

interface MenuPopoverProps {
    children: React.ReactNode;
}

interface PutData {
    exibir_menu_celular_tablet: boolean;
}

export const MenuPopover = ({ children }: MenuPopoverProps) => {
    const { event } = useEvent();

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (event?.exibir_menu_celular_tablet_id) {
            setShowMenu(event.exibir_menu_celular_tablet_id);
        }
    }, [event]);

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);

    const ToggleMenuRequest = async (putData: PutData) => {
        const { data } = await api.put(`/organizador/personalizar-site/atualizar-informacoes-evento`, putData);
        return data.data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: ToggleMenuRequest,
        onSuccess: () => {
            setErrorMessage(undefined);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                setErrorMessage("Ocorreu um erro ao salvar a informação.");
                return;
            }

            setErrorMessage("Erro ao salvar a informação. Tente novamente mais tarde.");
        },
    });

    const handleSaveMenu = () => {
        setIsOpen(true);
        const putData = {
            exibir_menu_celular_tablet: showMenu,
        };

        mutate(putData);
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
                        <p className="font-regular cursor-default font-poppins text-base text-black">Menu:</p>
                    </div>
                    <div className="flex w-full flex-col items-start gap-0">
                        <div className="flex w-full flex-row items-start justify-between gap-1">
                            <div className="flex w-full max-w-[230px] flex-col gap-2">
                                <p className="font-regular font-poppins text-lg text-darkteal">
                                    Exibição em celulares e tablets
                                </p>
                                <p className="font-regular font-poppins text-sm text-[#6C6C6C]">
                                    Deseja adicionar a palavra MENU junto ao ícone (☰)?
                                </p>
                            </div>
                            <Switch
                                checked={showMenu}
                                onCheckedChange={(checked) => {
                                    setShowMenu(checked);
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-row justify-end">
                        <div
                            onClick={handleSaveMenu}
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
                title={"Ativar menu"}
                successMessage="Menu ativado/desativado com sucesso."
                errorMessage={errorMessage}
                isLoading={isPending}
                closeButton
            />
        </>
    );
};

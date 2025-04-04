"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RiArrowRightSLine } from "@remixicon/react";
import { useMutation } from "@tanstack/react-query";
import { useEvent } from "@/utils/hooks/useEvent";
import { LoadingModal } from "@/components/ui";
import { Input } from "@/components/ui";
import { AxiosError } from "axios";
import { useState } from "react";
import api from "@/lib/api";

interface PutData {
    nome_evento: string;
}

interface NameDatePopoverProps {
    children: React.ReactNode;
}

export const NameDatePopover = ({ children }: NameDatePopoverProps) => {
    const { event, changeNameValue } = useEvent();

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [name, setName] = useState(event?.nome_evento ?? "-");
    const [isOpen, setIsOpen] = useState(false);

    const ChangeNameRequest = async (putData: PutData) => {
        const { data } = await api.put(`/organizador/personalizar-site/atualizar-informacoes-evento`, putData);
        return data.data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: ChangeNameRequest,
        onSuccess: () => {
            setErrorMessage(undefined);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                setErrorMessage("Ocorreu um erro ao alterar o nome.");
                return;
            }

            setErrorMessage("Erro ao alterar o nome. Tente novamente mais tarde.");
        },
    });

    const handleSaveName = () => {
        setIsOpen(true);
        const putData = {
            nome_evento: name,
        };

        mutate(putData);
    };

    const handleNameChange = (value: string) => {
        setName(value);
        changeNameValue(value);
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
                            Informações do evento:
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-start justify-between gap-0">
                        <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Nome do evento</p>
                        <div className="flex w-full flex-col gap-0">
                            <Input
                                value={name}
                                onInput={(e) => handleNameChange(e.currentTarget.value)}
                                className="h-10 w-full justify-between border-none text-sm text-darkgray shadow-none ring-transparent"
                            />
                            <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                        </div>
                    </div>
                    {/* <div className="flex w-full flex-col items-start justify-between gap-0">
                    <p className="font-regular cursor-default font-poppins text-lg text-darkteal">Data do evento</p>
                    <div className="flex w-full flex-col gap-0">
                        <EventDatePicker />
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                </div> */}
                    <div className="flex w-full flex-row justify-end">
                        <div 
                        onClick={()=> handleSaveName()}
                        className="font-regular flex h-10 w-auto cursor-pointer flex-col items-center justify-center bg-darkteal px-8 font-poppins text-base uppercase text-white">
                            Salvar
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            <LoadingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Alterar nome do evento"}
                successMessage="O nome do evento foi salvo com sucesso."
                errorMessage={errorMessage}
                isLoading={isPending}
                closeButton
            />
        </>
    );
};

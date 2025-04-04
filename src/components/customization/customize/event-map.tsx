"use client";

import { generateMapURL } from "@/utils/generateMapUrl";
import React, { useEffect, useState } from "react";
import { Input, LoadingModal, MaskedInput } from "@/components/ui";
import { RiSearchLine } from "@remixicon/react";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { useEvent } from "@/utils/hooks/useEvent";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@/assets/icons";

interface PutData {
    endereco: string;
    adicionar_mapa_rodape: boolean;
}

export const EventMap = () => {
    const { event, refetchEvent } = useEvent();

    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [cep, setCep] = useState("");
    const { push } = useRouter();
    const eventType = event?.template_tipo;
    const eventId = event?.template_id;

    useEffect(() => {
        if (event?.endereco) {
            setAddress(event.endereco);
        }
    }, [event]);

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    };

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    const SearchCEPRequest = async () => {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return data;
    };

    const ChangeLocalRequest = async (putData: PutData) => {
        const { data } = await api.put(`/organizador/personalizar-site/atualizar-informacoes-evento`, putData);
        return data.data;
    };

    const { mutate: mutateCep, isPending } = useMutation({
        mutationFn: SearchCEPRequest,
        onSuccess: (data) => {
            setErrorMessage(undefined);
            if (data.erro) {
                setIsOpen(true);
                setErrorMessage("CEP não encontrado. Por favor, digite o endereço manualmente.");
                return;
            }
            const enderecoCompleto = `${data.logradouro}, ${number} - ${data.bairro}, ${data.localidade} - ${data.uf}, ${data.cep}, Brasil`;
            setAddress(enderecoCompleto);
        },
        onError: (error: AxiosError) => {
            setIsOpen(true);

            const { response } = error;
            if (!response) {
                setErrorMessage("Ocorreu um erro ao buscar o CEP");
                return;
            }

            setErrorMessage("CEP não encontrado. Por favor, digite o endereço manualmente.");
        },
    });

    const { mutate: mutateLocal, isPending: isPendingLocal } = useMutation({
        mutationFn: ChangeLocalRequest,
        onSuccess: () => {
            setErrorMessage(undefined);
            setSuccessMessage("Local do evento salvo com sucesso.");
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        },
        onError: (error: AxiosError) => {
            setIsOpen(true);

            const { response } = error;
            if (!response) {
                setErrorMessage("Ocorreu um erro ao salvar o local");
                return;
            }

            setErrorMessage("Erro ao salvar o local. Tente novamente mais tarde.");
        },
    });

    const handleSearchCep = () => {
        mutateCep();
    };

    const handleSaveLocal = () => {
        setIsOpen(true);
        const putData = {
            endereco: address,
            adicionar_mapa_rodape: true,
        };

        mutateLocal(putData);
    };

    const handleBackButton = async () => {
        await refetchEvent();
        push(`/personalizar/${eventType}/${eventId}`);
    };


    return (
        <>
            <div className="flex w-full flex-col items-center gap-12 px-20 py-12">
                <div className="flex w-full flex-row gap-2">
                    <button
                        className="flex flex-row items-center justify-center gap-2 text-sm text-green"
                        onClick={handleBackButton}
                    >
                        <ArrowLeftIcon w={12} h={12} className="text-green" />
                        Layout
                    </button>
                </div>
                <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                    <div className="flex w-full flex-col gap-8 px-[82px]">
                        <div className="flex w-full flex-col gap-8">
                            <p className="font-poppins text-3xl font-normal text-darkgray">Local da festa</p>

                            <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-2 px-[82px]">
                        <div className="flex w-full flex-row gap-2">
                            <MaskedInput
                                mask="_____-___"
                                placeholder="Digite o CEP"
                                value={cep}
                                onChange={(e) => setCep(e.currentTarget.value)}
                            />
                            <div className="flex w-[112px]">
                                <Input value={number} placeholder="N°" onChange={handleNumberChange} />
                            </div>
                            <div
                                onClick={() => handleSearchCep()}
                                className="flex min-h-12 min-w-12 cursor-pointer flex-col items-center justify-center rounded-lg bg-darkteal"
                            >
                                <RiSearchLine className="h-7 w-7 text-white" />
                            </div>
                        </div>
                        <div className="flex w-full flex-row gap-2">
                            <Input placeholder="Digite o endereço" value={address} onChange={handleAddressChange} />
                        </div>

                        <div className="flex h-[518px] w-full flex-row items-center justify-center">
                            {address ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    className="rounded-2xl"
                                    src={generateMapURL(address)}
                                />
                            ) : (
                                <div className="flex h-[518px] w-full flex-row items-center justify-center rounded-2xl bg-white">
                                    <p className="text-gray-500">Faça uma busca para ver o local</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex w-full max-w-[1185px] flex-row justify-end">
                    <div
                        onClick={handleSaveLocal}
                        className="font-regular flex h-10 cursor-pointer flex-col items-center justify-center rounded-md bg-darkteal px-8 font-poppins text-base uppercase text-white"
                    >
                        Concluir
                    </div>
                </div>
            </div>

            <LoadingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Alterar local"}
                successMessage={successMessage}
                errorMessage={errorMessage}
                isLoading={isPending || isPendingLocal}
                closeButton
            />
        </>
    );
};

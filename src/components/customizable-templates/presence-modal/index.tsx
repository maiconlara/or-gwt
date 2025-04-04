"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ApprovedIcon, RejectedIcon } from "@/assets/icons";
import { useMutation } from "@tanstack/react-query";
import { RiCloseLine } from "@remixicon/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui";
import { AxiosError } from "axios";
import { useState } from "react";
import { Cores } from "@/types";
import api from "@/lib/api";

interface PresenceModalProps {
    colors: Cores;
    isOpen?: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    presenceData: {
        id: number;
        nome: string;
        email: string;
        acompanhantes: string;
        acompanhantes_id: number;
        qtd_acompanhantes: number;
        status: string;
        status_id: number;
    };
}

interface PostData {
    convidado_id: number;
    possui_acompanhantes: boolean;
    qtd: number;
    acompanhantes: string[];
}

export const PresenceModal = ({ colors, isOpen, setIsOpen, presenceData }: PresenceModalProps) => {
    const [presencePartner, setPresencePartner] = useState(presenceData.acompanhantes);
    const [presenceStatus, setPresenceStatus] = useState<"pending" | "approved" | "rejected">("pending");

    const [numAcompanhantes, setNumAcompanhantes] = useState(1);
    const [acompanhantesData, setAcompanhantesData] = useState<{ [key: number]: string }>({});

    const maxAcompanhantes = presenceData.qtd_acompanhantes;

    const handlePresencePartnerChange = (value: string) => {
        setPresencePartner(value);
        if (value === "Não") {
            setNumAcompanhantes(0);
            setAcompanhantesData({});
        }
    };

    const handleAcompanhanteChange = (index: number, value: string) => {
        setAcompanhantesData((prevData) => ({
            ...prevData,
            [index]: value,
        }));
    };

    const numOptions = Array.from({ length: maxAcompanhantes + 1 }, (_, i) => i);

    const SendMessageRequest = async (postData: PostData) => {
        const { data } = await api.post("/convidado/confirmar-presenca", postData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: SendMessageRequest,
        onSuccess: () => {
            setPresenceStatus("approved");
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            setPresenceStatus("rejected");
        },
    });

    function onSubmit() {
        if (!presenceData) return;

        const postData: PostData = {
            convidado_id: presenceData.id,
            possui_acompanhantes: presencePartner === "Sim",
            qtd: numAcompanhantes,
            acompanhantes: Object.values(acompanhantesData),
        };

        mutate(postData);
    }

    return (
        <Dialog open={isOpen}>
            <DialogContent
                aria-describedby={undefined}
                onInteractOutside={() => setIsOpen(false)}
                className="max-h-[calc(100vh-80px)] w-full max-w-[820px] items-center gap-10 overflow-auto rounded-2xl bg-white"
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-5 z-[99999] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[#878150]"
                >
                    <RiCloseLine />
                </div>

                {presenceStatus === "approved" ? (
                    <div className="relative flex h-full min-h-[700px] w-full max-w-[820px] flex-col items-center justify-start px-14 py-8">
                        <div className="flex max-w-[847px] flex-col items-center gap-2">
                            <p className="text-center text-3xl uppercase text-[#2c2c2c]">Confirmar presença</p>
                        </div>
                        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-16">
                            <ApprovedIcon className="text-[#2c2c2c]" w={283} h={283} />
                            <p className="text-lg font-bold text-[#2c2c2c]">Presença confirmada com sucesso</p>
                        </div>
                    </div>
                ) : presenceStatus === "rejected" ? (
                    <div className="relative flex h-full min-h-[700px] w-full max-w-[820px] flex-col items-center justify-start px-14 py-8">
                        <div className="flex max-w-[847px] flex-col items-center gap-2">
                            <p className="text-center text-3xl uppercase text-[#2c2c2c]">Confirmar presença</p>
                        </div>
                        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-16">
                            <RejectedIcon className="text-[#2c2c2c]" w={283} h={283} />
                            <p className="max-w-[500px] text-center text-lg font-bold text-[#2c2c2c]">
                                Ocorre um erro ao confirmar sua presença. Favor conferir seu convite e tentar
                                novamente
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="flex w-full max-w-[820px] flex-col items-center gap-10">
                        <DialogTitle className="flex max-w-[847px] flex-col items-center gap-2">
                            <p className="text-center text-3xl uppercase text-[#2c2c2c]">Confirmar presença</p>
                            <p className="cursor-default text-xl font-bold text-[#2c2c2c]">Tem acompanhante?</p>
                        </DialogTitle>
                        <div className="flex max-w-[847px] flex-col items-center gap-6">
                            <RadioGroup
                                orientation="horizontal"
                                className="flex flex-row gap-10"
                                defaultValue="option-one"
                                value={presencePartner}
                                onValueChange={handlePresencePartnerChange}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Sim" className="border-[#D6D6D6] bg-white" id="Sim" />
                                    <Label htmlFor="option-one" className="text-lg font-bold">
                                        Sim
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Não" className="border-[#D6D6D6] bg-white" id="Não" />
                                    <Label htmlFor="option-two" className="text-lg font-bold">
                                        Não
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {presencePartner === "Sim" ? (
                            <div className="flex w-full max-w-[847px] flex-col items-center gap-6">
                                <div className="flex w-full flex-col items-start gap-2">
                                    <Label className="px-1 text-base font-bold text-[#2c2c2c]">Quantos?</Label>
                                    <div className="mb-6 flex flex-row items-center justify-center gap-3">
                                        <Select
                                            value={numAcompanhantes.toString()}
                                            onValueChange={(value) => setNumAcompanhantes(Number(value))}
                                        >
                                            <SelectTrigger className="h-12 w-[100px] border-[#2c2c2c] text-[#2c2c2c] focus:outline-none focus:ring-0">
                                                <SelectValue placeholder="00" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {numOptions.map((num) => (
                                                    <SelectItem key={num} value={num.toString()}>
                                                        {num.toString().padStart(2, "0")}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <p className="cursor-default text-base text-[#2c2c2c]">
                                            Limite de {maxAcompanhantes} por convidado
                                        </p>
                                    </div>
                                    {maxAcompanhantes > 0 &&
                                        Array.from({ length: numAcompanhantes }).map((_, index) => (
                                            <div key={index} className="flex w-full flex-col items-start gap-2">
                                                <Label className="px-1 text-base font-bold text-[#2c2c2c]">
                                                    Nome do Acompanhante {index + 1}
                                                </Label>
                                                <Input
                                                    placeholder={`Digite o nome do acompanhante ${index + 1}`}
                                                    className="h-16 border-[#2c2c2c] bg-transparent pl-6 text-black placeholder:text-[#2c2c2c]/80"
                                                    value={acompanhantesData[index] || ""}
                                                    onChange={(e) => handleAcompanhanteChange(index, e.target.value)}
                                                />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-6">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <p className="cursor-default text-base text-[#2c2c2c]">
                                        Você confirma sua presença sem acompanhantes?
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="flex w-full flex-row items-center justify-center">
                            <button
                                onClick={() => onSubmit()}
                                className="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-[#2c2c2c] px-6 text-lg font-bold uppercase text-white"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

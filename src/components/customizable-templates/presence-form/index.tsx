"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { presenceFormSchema } from "@/utils/validations/presenceFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEvent } from "@/utils/hooks/useEvent";
import { Input, useToast } from "@/components/ui";
import { PresenceModal } from "../presence-modal";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import api from "@/lib/api";
import { z } from "zod";
import { useState } from "react";

type Form = z.infer<typeof presenceFormSchema>;

interface ReturnData {
    data: {
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

export const PresenceForm = () => {
    const { event } = useEvent();
    const { toast } = useToast();

    const [isOpen, setIsOpen] = useState(false);
    const [presenceData, setPresenceData] = useState<ReturnData["data"] | null>(null);

    const colors = event?.cores ?? {
        menus: "#2c2c2c",
        texts: "#2c2c2c",
        main_color: "#2c2c2c",
        names: "#2c2c2c",
        titles: "#2c2c2c",
        texts_2: "#2c2c2c",
        titles_2: "#2c2c2c",
    };

    const fonts = event?.fontes ?? {
        titles: "Poppins",
        texts: "Poppins",
    };

    const form = useForm<Form>({
        resolver: zodResolver(presenceFormSchema),
        defaultValues: {
            nome: "",
            email: "",
        },
    });

    const ConfirmInformationRequest = async (postData: Form) => {
        const { data } = await api.post<ReturnData>("/convidado/confirmar-informacoes", postData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: ConfirmInformationRequest,
        onSuccess: (data) => {
            setPresenceData(data.data);
            setIsOpen(true);
            form.reset();
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                toast({
                    duration: 6000,
                    className: "bg-error",
                    variant: "destructive",
                    title: "Ocorreu um erro ao enviar ao validar seus dados",
                    description:
                        "Não se preocupe, o erro foi do nosso lado. Já fomos notificados e iremos trabalhar para corrigir.",
                });
                return;
            }
            toast({
                duration: 6000,
                className: "bg-error",
                variant: "destructive",
                title: "Convidado não encontrado",
                description: "Parece que você não está na lista de convidados, verifique os dados e tente novamente.",
            });
        },
    });

    function onSubmit(data: Form) {
        const formattedData = {
            nome: data.nome,
            email: data.email,
        };
        mutate(formattedData);
    }

    return (
        <>
            <Form {...form}>
                <form
                    id="presence-form"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={`flex w-full max-w-[820px] flex-col items-center gap-10 rounded-2xl bg-white p-16 py-20 shadow-lg ${fonts.texts}`}
                >
                    <p className={`text-center text-4xl uppercase text-[#2c2c2c] ${fonts.titles}`}>
                        Confirmar presença
                    </p>
                    <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        id="nome"
                                        {...field}
                                        placeholder="Nome igual ao do convite*"
                                        className="h-16 border-black/40 pl-6 placeholder:text-black/60"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        id="email"
                                        {...field}
                                        placeholder="Email*"
                                        className="h-16 border-black/40 pl-6 placeholder:text-black/60"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <button
                        disabled={isPending}
                        type="submit"
                        className="flex w-full flex-row items-center justify-center"
                    >
                        <p className="text-4xl font-bold uppercase text-black underline">Confirmar</p>
                    </button>
                </form>
            </Form>
            {presenceData && (
                <PresenceModal isOpen={isOpen} setIsOpen={setIsOpen} presenceData={presenceData} colors={colors} />
            )}{" "}
        </>
    );
};

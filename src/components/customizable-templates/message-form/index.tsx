"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { messageFormSchema } from "@/utils/validations/messageFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useEvent } from "@/utils/hooks/useEvent";
import { Input, useToast } from "@/components/ui";
import { useForm } from "react-hook-form";
import { LockIcon } from "@/assets/icons";
import { AxiosError } from "axios";
import Link from "next/link";
import api from "@/lib/api";
import { z } from "zod";

type Form = z.infer<typeof messageFormSchema>;

interface PostData extends Form {
    sobre_evento_id: number;
}

export const MessagesForm = () => {
    const { event } = useEvent();
    const { toast } = useToast();

    const eventId = event?.id;

    const colors = event?.cores ?? {
        menus: "#2c2c2c",
        texts: "#ffffff",
        main_color: "#2c2c2c",
        names: "#2c2c2c",
        titles: "#2c2c2c",
    };

    const fonts = event?.fontes ?? {
        titles: "Poppins",
        texts: "Poppins",
    };

    const form = useForm<Form>({
        resolver: zodResolver(messageFormSchema),
        defaultValues: {
            nome: "",
            email: "",
            mensagem: "",
        },
    });

    const SendMessageRequest = async (postData: PostData) => {
        const { data } = await api.post("/convidado/mensagem", postData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: SendMessageRequest,
        onSuccess: () => {
            toast({
                duration: 6000,
                className: "bg-success text-white",
                title: "Mensagem enviada com sucesso!",
                description: "Agradecemos por tirar um tempo e deixar uma mensagem.",
            });
            form.reset();
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                toast({
                    duration: 6000,
                    className: "bg-error",
                    variant: "destructive",
                    title: "Ocorreu um erro ao enviar a mensagem!",
                    description:
                        "Não se preocupe, o erro foi do nosso lado. Já fomos notificados e iremos trabalhar para corrigir.",
                });
                return;
            }
            toast({
                duration: 6000,
                className: "bg-error",
                variant: "destructive",
                title: "Ocorreu um erro ao enviar a mensagem!",
                description:
                    "Não se preocupe, o erro foi do nosso lado. Já fomos notificados e iremos trabalhar para corrigir.",
            });
        },
    });

    function onSubmit(data: Form) {
        if (!eventId) return;
        const formattedData = {
            sobre_evento_id: eventId,
            nome: data.nome,
            email: data.email,
            mensagem: data.mensagem,
        };
        mutate(formattedData);
    }

    return (
        <Form {...form}>
            <form
                id="message-form"
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full max-w-[820px] flex-col items-center gap-10 rounded-lg bg-white p-12"
            >
                <p className="font-poppins text-center text-base md:text-lg text-[#393939]">
                    Você pode deixar sua mensagem através do formulário abaixo.
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
                                    placeholder="Nome completo*"
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

                <FormField
                    control={form.control}
                    name="mensagem"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <div className="grid w-full gap-4">
                                    <Textarea
                                        id="mensagem"
                                        {...field}
                                        maxLength={400}
                                        placeholder="Mensagem*"
                                        className="h-[286px] w-full resize-none border-black/40 pl-6 pt-6 placeholder:text-black/60"
                                    />
                                    <p className="text-muted-foreground text-sm">
                                        {400 - form.getValues().mensagem.length} caracteres restantes
                                    </p>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div
                    className={`flex w-full flex-col md:flex-row items-center gap-6 md:gap-10 rounded-xl py-4 px-4 md:pl-12 ${fonts.texts}`}
                    style={{
                        color: colors.texts,
                        backgroundColor: colors.main_color,
                    }}
                >
                    <LockIcon w={62} h={62}  />

                    <p className="max-w-[501px] cursor-default text-justify md:text-start text-base md:text-lg">
                        Este site é protegido por reCaptcha e Google. {""}
                        <span className="underline">
                            <Link href="https://policies.google.com/privacy">Políticas de privacidade {""}</Link>
                        </span>
                        e {""}
                        <span className="underline">
                            <Link href="https://policies.google.com/terms">termos de serviço</Link>
                        </span>
                    </p>
                </div>

                <button
                    disabled={isPending}
                    type="submit"
                    className="flex w-full flex-row items-center justify-center"
                >
                    <p className="text-4xl font-bold uppercase text-black underline">Enviar</p>
                </button>
            </form>
        </Form>
    );
};

"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { emailFormSchema } from "@/utils/validations/emailFormSchema";
import { RiCloseLine, RiStore2Line, RiDeleteBin6Line } from "@remixicon/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEvent } from "@/utils/hooks/useEvent";
import { CustomButton, Input, useToast } from "@/components/ui";
import { PresentesVirtuais } from "@/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useState } from "react";
import Image from "next/image";
import api from "@/lib/api";
import { z } from "zod";

type Form = z.infer<typeof emailFormSchema>;

interface ReturnData {
    data: {
        amount: string;
        id: number;
        installmentNumber: number;
        orderId: string;
        paymentOrderId: string;
        paymentOrderStatus: string;
        paymentUrl: string;
    };
}

interface CartModalProps {
    children: React.ReactNode;
    items: PresentesVirtuais[];
    total: number;
    onRemove: (gift: PresentesVirtuais) => void;
}

export const CartModal = ({ children, items, total, onRemove }: CartModalProps) => {
    const { event } = useEvent();
    const { toast } = useToast();
    const { push } = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const eventUrl = event?.endereco_url ?? "";

    const form = useForm<Form>({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
            email: "",
        },
    });

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price);
    };

    const RequirePaymentRequest = async (formData: FormData) => {
        const { data } = await api.post<ReturnData>(`/fechar-carrinho-compras`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data.data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: RequirePaymentRequest,
        onSuccess: (data) => {
            toast({
                duration: 6000,
                className: "bg-success text-white",
                title: "Pagamento",
                description: "Iremos redirecionar você para a página de pagamento",
            });
            form.reset();
            push(data.paymentUrl);
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                toast({
                    duration: 6000,
                    className: "bg-error",
                    variant: "destructive",
                    title: "Ocorreu um erro com os itens do seu carrinho!",
                    description:
                        "Não se preocupe, o erro foi do nosso lado. Já fomos notificados e iremos trabalhar para corrigir.",
                });
                return;
            }

            const errorMessage =
                (response.data as { message?: string })?.message ??
                "Não se preocupe, o erro foi do nosso lado. Já fomos notificados e iremos trabalhar para corrigir.";
            toast({
                duration: 6000,
                className: "bg-error",
                variant: "destructive",
                title: "Ocorreu um erro com um dos itens do seu carrinho!",
                description: errorMessage,
            });
        },
    });

    const onSubmit = (data: Form) => {
        const formData = new FormData();
        items.forEach((gift, index) => {
            if (gift) {
                formData.append(`carrinho_compras[${index}][presente_virtual_id]`, gift.id.toString());
            }
        });

        formData.append(`url`, eventUrl);

        formData.append("email", data.email);
        mutate(formData);
    };

    return (
        <Dialog open={isOpen}>
            <DialogTrigger asChild>
                <button onClick={() => setIsOpen(true)} className="cursor-pointer">
                    {children}
                </button>
            </DialogTrigger>
            <DialogContent
                aria-describedby={undefined}
                onInteractOutside={() => setIsOpen(false)}
                className="max-h-[calc(100vh-80px)] w-full max-w-[820px] items-center gap-10 overflow-auto rounded-2xl md:px-16 focus:outline-none focus:ring-0"
                style={{
                    backgroundColor: "#fff",
                }}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-5 z-[99999] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[#2c2c2c]"
                >
                    <RiCloseLine />
                </div>

                <div className="flex w-full max-w-[820px] flex-col items-center gap-10">
                    <DialogTitle className="flex max-w-[847px] flex-col items-center gap-2">
                        <p className="cursor-default text-xl font-bold text-[#2c2c2c]">Carrinho</p>
                    </DialogTitle>

                    <div className="flex w-full flex-col gap-10">
                        <div className="grid w-full grid-cols-10">
                            <p className="col-span-10 md:col-span-5 cursor-default text-center text-xl font-bold text-[#2c2c2c]">
                                Descrição
                            </p>
                            <p className=" col-span-0 md:col-span-5 hidden md:block cursor-default text-end text-xl font-bold text-[#2c2c2c]">Valor</p>
                        </div>
                        {items.length === 0 ? (
                            <div className="flex w-full flex-col items-center gap-4">
                                <p className="text-lg text-black">Seu carrinho está vazio</p>
                            </div>
                        ) : (
                            items.map((item, index) => (
                                <>
                                <div key={index} className="hidden md:grid w-full grid-cols-10 items-center gap-4 py-4">
                                    <div className="col-span-5 flex items-center gap-4">
                                        <div className="flex min-h-20 min-w-20 items-center justify-center rounded-xl border border-black/40">
                                            {item.imagem_destaque_web ? (
                                                <Image
                                                    src={item.imagem_destaque_web}
                                                    alt={item.nome}
                                                    width={80}
                                                    height={80}
                                                    className="h-20 w-20 rounded-xl"
                                                />
                                            ) : (
                                                <RiStore2Line className="h-10 w-10" style={{ color: "#000" }} />
                                            )}
                                        </div>
                                        <p className="line-clamp-1 text-base text-black">{item.nome}</p>
                                    </div>
                                    <div className="col-span-2 text-end">
                                        <button
                                        className="flex h-8 cursor-pointer items-center justify-center rounded-full bg-[#2c2c2c] px-6 font-abel text-sm text-white"
                                            onClick={() => onRemove(item)}
                                            >
                                        Remover
                                        </button>
                                    </div>
                                    <div className="col-span-3 text-end">
                                        <p className="text-base text-black">{formatPrice(item.valor)}</p>
                                    </div>
                                </div>
                                <div key={"mobile"+index} className="grid md:hidden w-full grid-cols-10 items-center gap-4 py-4">
                                    <div className="col-span-3 flex flex-col  md:flex-row items-center gap-4">
                                        <div className="flex min-h-20 min-w-20 items-center justify-center rounded-xl border border-black/40">
                                            {item.imagem_destaque_web ? (
                                                <Image
                                                src={item.imagem_destaque_web}
                                                alt={item.nome}
                                                width={80}
                                                height={80}
                                                className="h-20 w-20 rounded-xl"
                                                />
                                            ) : (
                                                <RiStore2Line className="h-10 w-10" style={{ color: "#000" }} />
                                            )}
                                        </div>
                                        <p className=" text-base text-black">{formatPrice(item.valor)}</p>
                                    </div>
                                    
                                    <div className="col-span-5 ">
                                         <p className="text-base text-black text-start">{item.nome}</p>

                                    </div>
                                    <div className="flex col-span-2 text-end">
                                        {/* <button
                                            className="flex w-8 h-8 cursor-pointer items-center justify-center rounded-full bg-transparent px-6 font-abel text-sm text-white"
                                            > */}
                                            <RiDeleteBin6Line
                                            onClick={() => onRemove(item)}
                                            
                                            className="h-6 w-6 cursor-pointer" style={{color: "#2c2c2c"}} />
                                        {/* </button> */}
                                    </div>
                                </div>
                                </>

                            ))
                        )}
                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-wrap bg-black" />
                    </div>

                    {items.length > 0 && (
                        <Form {...form}>
                            <form
                                id="email-form"
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="flex w-full flex-col gap-6"
                            >
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <div className="flex w-full flex-row items-center gap-10">
                                                    <Input
                                                        id="email"
                                                        {...field}
                                                        placeholder="Email*"
                                                        className="h-10 w-full border-black/40 pl-6 placeholder:text-black/60"
                                                    />
                                                    <p className="min-w-max text-base text-black">
                                                        Total {formatPrice(total)}
                                                    </p>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                <div className="flex w-full flex-row items-center justify-end">
                                <CustomButton disabled={isPending} type="submit" text="Confirmar" />
                                </div>
                            </form>
                        </Form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

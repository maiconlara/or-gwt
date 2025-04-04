"use client";

import { useState, useEffect, useRef } from "react";

import Link from "next/link";

import { RiQrCodeLine } from "@remixicon/react";
import { ApprovedIcon, RejectedIcon } from "@/assets/icons";

import { cn } from "@/lib/utils";

import { Input, Label, RadioGroup, RadioGroupItem } from "@/components";

interface PaymentForm {
    textColor?: string;
    inputClassName?: string;
    backgroundColor?: string;
    approvedClassName?: string;
    secondaryBackgroundColor?: string;
}

export const PaymentForm = ({
    inputClassName,
    approvedClassName,
    textColor = "#000",
    backgroundColor = "#ECF86E",
    secondaryBackgroundColor = "#fff",
}: PaymentForm) => {
    const paymentStatusRef = useRef<HTMLDivElement | null>(null);

    const [paymentMethod, setPaymentMethod] = useState("credit");
    const [paymentStatus, setPaymentStatus] = useState<"pending" | "approved" | "rejected">("pending");

    const handlePaymentMethodChange = (value: string) => {
        setPaymentMethod(value);
    };

    const handleFinalizePurchase = () => {
        const isApproved = Math.random() > 0.5;
        setPaymentStatus(isApproved ? "approved" : "rejected");
    };

    useEffect(() => {
        if (paymentStatus !== "pending" && paymentStatusRef.current) {
            paymentStatusRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [paymentStatus]);

    if (paymentStatus === "approved") {
        return (
            <div
                ref={paymentStatusRef}
                id="payment-status-container"
                className="flex w-full flex-col items-center justify-center gap-12 rounded-2xl py-14"
                style={{ backgroundColor: secondaryBackgroundColor }}
            >
                <div className="relative flex h-full min-h-[700px] w-full max-w-[820px] flex-col items-center justify-start rounded-2xl border border-lines/5 px-14 py-8 shadow-xl">
                    <div className="flex w-full flex-col items-end">
                        <Link href="/">Voltar</Link>
                    </div>
                    <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-16">
                        <ApprovedIcon className={cn("text-yellow-green", approvedClassName)} w={283} h={283} />
                        <p className="text-lg font-bold">Pagamento aprovado</p>
                    </div>
                </div>
            </div>
        );
    }

    if (paymentStatus === "rejected") {
        return (
            <div
                ref={paymentStatusRef}
                id="payment-status-container"
                className="flex w-full flex-col items-center justify-center gap-12 rounded-2xl py-14"
                style={{ backgroundColor: secondaryBackgroundColor }}
            >
                <div className="relative flex h-full min-h-[700px] w-full max-w-[820px] flex-col items-center justify-start rounded-2xl border border-lines/5 px-14 py-8 shadow-xl">
                    <div className="flex w-full flex-col items-end">
                        <Link href="/">Voltar</Link>
                    </div>
                    <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-16">
                        <RejectedIcon className="text-[#AA504A]" w={283} h={283} />
                        <p className="text-lg font-bold">Pagamento recusado</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="flex w-full flex-col items-center justify-start gap-12 py-14"
            style={{ backgroundColor: paymentMethod === "credit" ? backgroundColor : secondaryBackgroundColor }}
        >
            <div className="flex w-full max-w-[820px] flex-col items-center gap-10" style={{ color: textColor }}>
                <div className="flex max-w-[847px] flex-col items-center gap-2">
                    <p className="cursor-default text-lg font-bold">Valor total</p>
                    <p className="cursor-default text-3xl font-bold">R$ 100,00</p>
                </div>

                <div className="flex max-w-[847px] flex-col items-center gap-6">
                    <p className="cursor-default text-sm">Escolher forma de pagamento</p>

                    <RadioGroup
                        orientation="horizontal"
                        className="flex flex-row gap-10"
                        defaultValue="option-one"
                        value={paymentMethod}
                        onValueChange={handlePaymentMethodChange}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="credit"
                                className="bg-white"
                                id="credit"
                                style={{ border: textColor, color: textColor }}
                            />

                            <Label htmlFor="option-one" className="text-lg font-bold">
                                Cartão
                            </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="pix"
                                className="bg-white"
                                id="pix"
                                style={{ border: textColor, color: textColor }}
                            />
                            <Label htmlFor="option-two" className="text-lg font-bold">
                                Pix
                            </Label>
                        </div>
                    </RadioGroup>
                </div>

                {paymentMethod === "credit" ? (
                    <div className="flex w-full max-w-[847px] flex-col items-center gap-6" style={{ color: textColor }}>
                        <div className="flex w-full flex-col items-start gap-2">
                            <Label className="px-1 text-base font-bold">Nome do titular</Label>
                            <Input
                                placeholder="Digite aqui"
                                className={cn(
                                    "h-16 rounded-full border-black bg-transparent pl-6 placeholder:text-black",
                                    inputClassName,
                                )}
                            />
                        </div>

                        <div className="flex w-full flex-col items-start gap-2">
                            <Label className="px-1 text-base font-bold">Número do cartão</Label>
                            <Input
                                placeholder="Digite aqui"
                                className={cn(
                                    "h-16 rounded-full border-black bg-transparent pl-6 placeholder:text-black",
                                    inputClassName,
                                )}
                            />
                        </div>

                        <div className="grid w-full grid-cols-2 gap-4">
                            <div className="col-span-1 flex w-full flex-col items-start gap-2">
                                <Label className="px-1 text-base font-bold">Validade</Label>
                                <Input
                                    placeholder="Digite aqui"
                                    className={cn(
                                        "h-16 rounded-full border-black bg-transparent pl-6 placeholder:text-black",
                                        inputClassName,
                                    )}
                                />
                            </div>

                            <div className="col-span-1 flex w-full flex-col items-start gap-2">
                                <Label className="px-1 text-base font-bold">CVV</Label>
                                <Input
                                    placeholder="Digite aqui"
                                    className={cn(
                                        "h-16 rounded-full border-black bg-transparent pl-6 placeholder:text-black",
                                        inputClassName,
                                    )}
                                />
                            </div>
                        </div>

                        <div className="flex w-full flex-col items-start gap-2">
                            <Label className="px-1 text-base font-bold">CPF do titular</Label>
                            <Input
                                placeholder="Digite aqui"
                                className={cn(
                                    "h-16 rounded-full border-black bg-transparent pl-6 placeholder:text-black",
                                    inputClassName,
                                )}
                            />
                        </div>

                        <div className="flex w-full flex-col items-start gap-2">
                            <Label className="px-1 text-base font-bold">Endereço de cobrança</Label>
                            <Input
                                placeholder="CEP"
                                className={cn(
                                    "h-16 rounded-full border-black bg-transparent pl-6 placeholder:text-black",
                                    inputClassName,
                                )}
                            />
                        </div>

                        <Input
                            placeholder="Endereço"
                            className={cn(
                                "h-16 rounded-full border-black bg-transparent pl-6 placeholder:text-black",
                                inputClassName,
                            )}
                        />

                        <div className="flex w-full flex-row gap-4">
                            <div className="flex w-[40%] flex-row">
                                <Input
                                    placeholder="Número"
                                    className={cn(
                                        "h-16 rounded-full border-black bg-transparent pl-6 placeholder:text-black",
                                        inputClassName,
                                    )}
                                />
                            </div>

                            <Input
                                placeholder="Cidade"
                                className={cn(
                                    "h-16 rounded-full border-black bg-transparent pl-6 placeholder:text-black",
                                    inputClassName,
                                )}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-6" style={{ color: textColor }}>
                        <div
                            className="flex h-10 cursor-default flex-col items-center justify-center rounded-full border bg-transparent px-8 text-lg font-bold"
                            style={{ borderColor: textColor }}
                        >
                            QR Code para pagamento
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2">
                            <div
                                className="flex h-[232px] w-[232px] flex-col items-center justify-center rounded-2xl border-4"
                                style={{ borderColor: textColor }}
                            >
                                <RiQrCodeLine size={164} />
                            </div>

                            <p className="text-sm">Leia o QRCode com seu celular, ou copie o código abaixo</p>

                            <p className="text-sm font-bold">cjkasdkafh134543265463231543523431244</p>
                        </div>
                    </div>
                )}

                <div className="flex w-full flex-row items-center justify-center">
                    <p
                        onClick={handleFinalizePurchase}
                        className="flex h-12 cursor-pointer items-center justify-center rounded-lg px-6 text-lg font-bold text-white"
                        style={{ backgroundColor: textColor }}
                    >
                        Finalizar compra
                    </p>
                </div>
            </div>
        </div>
    );
};

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
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {ApprovedIcon, RejectedIcon} from "@/assets/icons";
import {RiQrCodeLine, RiCloseLine} from "@remixicon/react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui";
import {useState, useEffect, useRef} from "react";
import Link from "next/link";

interface PaymentModalProps {
  children: React.ReactNode;
}

export const PaymentModal = ({children}: PaymentModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [paymentStatus, setPaymentStatus] = useState<
    "pending" | "approved" | "rejected"
  >("pending");

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
  };

  const handleFinalizePurchase = () => {
    const isApproved = Math.random() > 0.5;
    setPaymentStatus(isApproved ? "approved" : "rejected");
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <div
          onClick={() => setIsOpen(true)}
          className="text-samon cursor-pointer"
        >
          {children}
        </div>
      </DialogTrigger>
      <DialogContent
        onInteractOutside={() => setIsOpen(false)}
        className="w-full max-w-[820px] gap-10 items-center bg-[#E5E8E1] max-h-[calc(100vh-80px)] overflow-auto rounded-2xl"
      >
        <div
          onClick={() => setIsOpen(false)}
          className="absolute cursor-pointer flex z-[99999] top-5 right-4 h-10 w-10 rounded-full items-center justify-center text-[#878150]"
        >
          <RiCloseLine />
        </div>

        {paymentStatus === "approved" ? (
          <div className="relative flex flex-col w-full max-w-[820px] h-full min-h-[700px] items-center justify-start px-14 py-8 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-full items-center justify-center gap-16">
              <ApprovedIcon className="text-[#5E9A52]" w={283} h={283} />
              <p className="font-bold text-lg text-[#5E9A52]">
                Pagamento aprovado
              </p>
            </div>
          </div>
        ) : paymentStatus === "rejected" ? (
          <div className="relative flex flex-col w-full max-w-[820px] h-full min-h-[700px] items-center justify-start px-14 py-8 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-full items-center justify-center gap-16">
              <RejectedIcon className="text-[#E04F5F]" w={283} h={283} />
              <p className="font-bold text-lg text-[#E04F5F]">
                Pagamento recusado
              </p>
            </div>
          </div>
        ) : (
          <div className=" flex flex-col w-full max-w-[820px] gap-10 items-center">
            <div className="flex flex-col gap-2 max-w-[847px] items-center">
              <p className="text-[#878150] text-lg cursor-default font-bold">
                Valor total
              </p>
              <p className="text-[#5A4830] text-3xl cursor-default font-bold">
                R$ 100,00
              </p>
            </div>
            <div className="flex flex-col max-w-[847px] items-center gap-6">
              <p className="text-[#878150] text-sm cursor-default">
                Escolher forma de pagamento
              </p>
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
                    className="bg-white border-[#D6D6D6]"
                    id="credit"
                  />
                  <Label htmlFor="option-one" className="text-lg font-bold">
                    Cartão
                  </Label>
                </div>
                <div className="flex  items-center space-x-2">
                  <RadioGroupItem
                    value="pix"
                    className="bg-white border-[#D6D6D6]"
                    id="pix"
                  />
                  <Label htmlFor="option-two" className="text-lg font-bold">
                    Pix
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {paymentMethod === "credit" ? (
              <div className="flex flex-col w-full max-w-[847px] items-center gap-6">
                <div className="flex flex-col items-start w-full gap-2 ">
                  <Label className="text-base font-bold px-1">
                    Nome do títular
                  </Label>
                  <Input
                    placeholder="Digite aqui"
                    className="h-16 pl-6 border-[#D6D6D6] rounded-full  bg-transparent placeholder:text-[#969696]"
                  />
                </div>
                <div className="flex flex-col items-start w-full gap-2 ">
                  <Label className="text-base font-bold px-1">
                    Número do cartão
                  </Label>
                  <Input
                    placeholder="Digite aqui"
                    className="h-16 pl-6 border-[#D6D6D6] rounded-full  bg-transparent placeholder:text-[#969696]"
                  />
                </div>
                <div className="grid grid-cols-2 w-full gap-4">
                  <div className="flex flex-col col-span-1 items-start w-full gap-2 ">
                    <Label className="text-base font-bold px-1">Validade</Label>
                    <Input
                      placeholder="Digite aqui"
                      className="h-16 pl-6 border-[#D6D6D6] rounded-full  bg-transparent placeholder:text-[#969696]"
                    />
                  </div>
                  <div className="flex flex-col col-span-1 items-start w-full gap-2 ">
                    <Label className="text-base font-bold px-1">CVV</Label>
                    <Input
                      placeholder="Digite aqui"
                      className="h-16 pl-6 border-[#D6D6D6] rounded-full  bg-transparent placeholder:text-[#969696]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-full gap-2 ">
                  <Label className="text-base font-bold px-1">
                    CPF do titular
                  </Label>
                  <Input
                    placeholder="Digite aqui"
                    className="h-16 pl-6 border-[#D6D6D6] rounded-full  bg-transparent placeholder:text-[#969696]"
                  />
                </div>
                <div className="flex flex-col items-start w-full gap-2 ">
                  <Label className="text-base font-bold px-1">
                    Endereço de cobrança
                  </Label>
                  <Input
                    placeholder="CEP"
                    className="h-16 pl-6 border-[#D6D6D6] rounded-full  bg-transparent placeholder:text-[#969696] max-w-[300px]"
                  />
                </div>

                <Input
                  placeholder="Endereço"
                  className="h-16 pl-6 border-[#D6D6D6] rounded-full  bg-transparent placeholder:text-[#969696] "
                />

                <div className="flex flex-row w-full gap-4">
                  <div className="flex flex-row w-[40%]">
                    <Input
                      placeholder="Número"
                      className=" h-16 pl-6 border-[#D6D6D6] rounded-full  bg-transparent placeholder:text-[#969696] "
                    />
                  </div>
                  <Input
                    placeholder="Cidade"
                    className="h-16 pl-6 border-[#D6D6D6] rounded-full  bg-transparent placeholder:text-[#969696] w-full "
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6 items-center justify-center">
                <div className="flex flex-col items-center justify-center border border-[#878150] h-10 bg-transparent px-8 rounded-full text-[#878150] text-lg cursor-default font-bold">
                  QR Code para pagamento
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="flex flex-col border-4 border-[#878150] rounded-2xl items-center justify-center w-[232px] h-[232px]">
                    <RiQrCodeLine size={164} className="text-[#878150]" />
                  </div>
                  <p className="text-sm text-[black]">
                    Leia o QRCode com seu celular, ou copie o código abaixo
                  </p>
                  <p className="text-sm text-black font-bold">
                    cjkasdkafh134543265463231543523431244
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-row w-full items-center justify-center">
              <p
                onClick={handleFinalizePurchase}
                className="flex text-white bg-[#878150] text-lg cursor-pointer font-bold rounded-lg px-6 h-12 items-center justify-center"
              >
                Finalizar compra
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

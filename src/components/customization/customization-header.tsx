"use client";

import { FolderIcon, ArrowLeftIcon, BellIcon, ShareIcon } from "@/assets/icons";
import { CustomizationShare } from "./customization-share";
import { parse, differenceInDays } from "date-fns";
import { useEvent } from "@/utils/hooks/useEvent";
import { RiLoader4Fill } from "@remixicon/react";
import { useAuth } from "@/utils/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";

export const CustomizationHeader = () => {
    const today = new Date();

    const { user, isLoading: isLoadingUser } = useAuth();
    const { event, isLoading: isLoadingEvent } = useEvent();

    const isLoading = isLoadingUser || isLoadingEvent;

    const eventInfo = event?.conteudo;
    const siteLink = user && user?.evento?.endereco_url;
    const photo = user?.imagem_perfil;

    const eventDate = event?.data_evento ? parse(event.data_evento, "dd/MM/yyyy HH:mm:ss", new Date()) : null;
    const daysToEvent = eventDate ? Math.max(differenceInDays(eventDate, today), 0) : "";
    const eventName = event?.nome_evento || "";

    return (
        <div className="z-50 flex h-[138px] w-full flex-row items-center justify-center overflow-x-hidden bg-white shadow-md">
            <div className="flex w-full max-w-[1875px] flex-row items-center justify-between bg-transparent px-[38px]">
                <div className="flex flex-row gap-8">
                    <Link
                        href="https://organizador.ifestei.com.br/"
                        className="flex cursor-pointer flex-row items-center justify-start gap-1"
                    >
                        <ArrowLeftIcon w={32} h={16} className="text-green" />
                    </Link>

                    <div className="flex flex-row items-center gap-4">
                        <div className="relative flex h-[60px] w-[60px] flex-row items-center justify-center rounded-full bg-placeholder">
                            {isLoading ? (
                                <div className="flex min-h-[60px] flex-col items-center justify-center">
                                    <RiLoader4Fill className="h-6 w-6 animate-spin text-white" />
                                </div>
                            ) : (
                                photo && (
                                    <Link href="https://organizador.ifestei.com.br/perfil">
                                        <Image
                                            src={photo}
                                            alt="Perfil"
                                            fill
                                            className="absolute inset-0 h-full w-full rounded-full object-cover"
                                        />
                                    </Link>
                                )
                            )}
                        </div>
                        <div className="flex flex-col items-start justify-center ">
                            <p className="cursor-default font-abel text-base font-bold text-[#333333]">{eventName}</p>
                            <p className="font-regular cursor-default font-abel text-base text-[#333333]">
                                {daysToEvent} dias para o evento
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-9">
                    {/* <Link
                        href="https://organizador.ifestei.com.br/parceiros"
                        className="flex h-10 flex-row items-center justify-center gap-3 rounded-[9px] bg-green px-4"
                    >
                        <p className="font-regular font-abel text-base text-white">Buscar fornecedor</p>
                    </Link> */}
                    <Link
                        href={eventInfo ? `https://${siteLink}` : "#"}
                        className={`flex h-10 flex-row items-center justify-center gap-3 rounded-[9px] px-4 ${eventInfo ? "bg-green" : "pointer-events-none cursor-not-allowed bg-gray-300"}`}
                    >
                        <p className="font-regular font-abel text-base text-white">Ver seu site</p>
                        <FolderIcon w={16} h={16} className="text-white" />
                    </Link>
                    <CustomizationShare>
                        <div className="flex h-10 flex-row items-center justify-center gap-3 rounded-[9px] bg-green px-4">
                            <p className="font-regular font-abel text-base text-white">Compartilhar site</p>
                            <ShareIcon w={20} h={20} className="text-white" />
                        </div>
                    </CustomizationShare>

                    {/* <div className="flex h-[50px] w-[1px] max-w-[1px] flex-1 flex-wrap bg-green" /> */}
                    {/* <div className="flex h-10 cursor-pointer flex-row items-center justify-center gap-2">
                        <BellIcon w={20} h={20} className="text-green" />
                        <p className="font-regular font-abel text-base text-green">Notificação</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

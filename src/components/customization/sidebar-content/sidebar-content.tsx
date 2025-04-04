"use client";

import { usePathname } from "next/navigation";
import React from "react";

import Link from "next/link";

import {
    MainImagePopover,
    NameDatePopover,
    SelectFontPopover,
    MenuPopover,
    ShowMessagesPopover,
    CountdownPopover,
    ColorPopover,
    AnimatedIntroductionPopover,
} from "@/components";
import { RiArrowRightSLine } from "@remixicon/react";
import { ChangeImagePopover } from "../change-image-popover";
import { SidebarDropdown } from "../sidebar-dropdown";
import { useTemplate } from "@/utils/hooks/useTemplate";
import { ButtonColorPopover } from "../customize/button-color";

interface SidebarContentProps {
    activeDropdown: number;
    setActiveDropdown: React.Dispatch<React.SetStateAction<number>>;
}

export const SidebarContent = ({ activeDropdown, setActiveDropdown }: SidebarContentProps) => {
    const pathName = usePathname();
    const { handleSelectRoute } = useTemplate();
    const extractPathUntilId = (pathName: string) => {
        const match = pathName.match(/^(\/[^/]+\/[^/]+\/\d+)/);
        return match ? match[1] : pathName;
    };
    const basePath = extractPathUntilId(pathName);

    const NavItems = [
        {
            id: 1,
            name: "Páginas",
            items: [
                {
                    content: (
                        <div
                            onClick={() => handleSelectRoute("inicio")}
                            className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14"
                        >
                            <p className="font-poppins text-base text-darkteal">Página inicial</p>
                            <RiArrowRightSLine className="text-darkteal" />
                        </div>
                    ),
                },
                {
                    content: (
                        <div
                            onClick={() => handleSelectRoute("nossa-historia")}
                            className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14"
                        >
                            <p className="font-poppins text-base text-darkteal">Nossa história</p>
                            <RiArrowRightSLine className="text-darkteal" />
                        </div>
                    ),
                },
                {
                    content: (
                        <div
                            onClick={() => handleSelectRoute("mensagem")}
                            className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14"
                        >
                            <p className="font-poppins text-base text-darkteal">Mensagens</p>
                            <RiArrowRightSLine className="text-darkteal" />
                        </div>
                    ),
                },
                {
                    content: (
                        <div
                            onClick={() => handleSelectRoute("presentes")}
                            className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14"
                        >
                            <p className="font-poppins text-base text-darkteal">Presentes</p>
                            <RiArrowRightSLine className="text-darkteal" />
                        </div>
                    ),
                },
                {
                    content: (
                        <div
                            onClick={() => handleSelectRoute("confirmar-presenca")}
                            className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14"
                        >
                            <p className="font-poppins text-base text-darkteal">Confirmar presença</p>
                            <RiArrowRightSLine className="text-darkteal" />
                        </div>
                    ),
                },
            ],
            helpText: "Selecione a página para editar diretamente o layout.",
        },
        {
            id: 2,
            name: "Conteúdo",
            items: [
                {
                    content: <MainImagePopover>Imagem principal</MainImagePopover>,
                },

                {
                    content: (
                        <Link
                            href={`${basePath}/local`}
                            className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14"
                        >
                            <p className="font-poppins text-base text-darkteal">Local do evento</p>
                            <RiArrowRightSLine className="text-darkteal" />
                        </Link>
                    ),
                },
                // {
                //     content: <AnimatedIntroductionPopover>Introdução animada</AnimatedIntroductionPopover>,
                // },
                {
                    content: <ShowMessagesPopover>Mensagens</ShowMessagesPopover>,
                },
                {
                    content: <MenuPopover>Menu</MenuPopover>,
                },
                {
                    content: <CountdownPopover>Contagem regressiva</CountdownPopover>,
                },
            ],
            helpText: "Altere informações importantes como nome do evento, data e local.",
        },
        {
            id: 3,
            name: "Aparência",
            items: [
                {
                    content: <SelectFontPopover>Fontes</SelectFontPopover>,
                },
                {
                    content: <ColorPopover>Cores do site</ColorPopover>,
                },
                // {
                //     content: <ColorPopover>Cores secundárias</ColorPopover>,
                // },
                {
                    content: <ButtonColorPopover>Estilo dos botões</ButtonColorPopover>,
                },
            ],
            helpText: "Altere o estilo básico da sua página, tal como cores e letras.",
        },
    ];

    return NavItems.map((item, index) => (
        <SidebarDropdown
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            key={index}
            title={item.name}
            items={item.items}
            id={item.id}
            helpText={item.helpText}
        />
    ));
};

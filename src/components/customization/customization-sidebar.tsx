"use client";

import { useCustomizationStep } from "@/utils/hooks/useCustomizationStep";
import { SidebarContent } from "./sidebar-content/sidebar-content";
import { CircleCheckIcon, TrashIcon } from "@/assets/icons";
import { RiArrowRightSLine } from "@remixicon/react";
import { SidebarDropdown } from "./sidebar-dropdown";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

export const CustomizationSidebar = () => {
    const customizationStep = useCustomizationStep();

    const pathName = usePathname();

    const [activeDropdown, setActiveDropdown] = useState(-1);

    return (
        <div className="left-0 flex min-w-[376px] flex-col rounded-br-[42px] rounded-tr-[26px] bg-transparent">
            <div className="flex max-h-max w-full flex-col overflow-y-auto">
                <div className="flex w-full flex-col">
                    <div className="flex h-[200px] w-full flex-col items-start justify-center bg-darkteal px-14">
                        <div className="flex w-full flex-row items-center justify-between gap-3">
                            <div className="flex h-[86px] cursor-default flex-col items-start justify-center">
                                <p className="font-poppins text-2xl font-bold text-white">{customizationStep}</p>
                            </div>
                        </div>
                        {/* <div className="flex w-full flex-row items-center justify-between gap-4 pt-2"> */}
                            {/* <div
                                className={`flex flex-row items-center justify-center gap-3 ${pathName === "/templates" || pathName === "/ajuda" ? "cursor-not-allowed text-gray-400" : "cursor-pointer text-white"}`}
                            >
                                <p className="font-regular font-abel text-base">Descartar</p>
                                <TrashIcon w={20} h={20} />
                            </div>
                            <div
                                className={`flex flex-row items-center justify-center gap-3 ${pathName === "/templates" || pathName === "/ajuda" ? "cursor-not-allowed text-gray-400" : "cursor-pointer text-white"}`}
                            >
                                <p className="font-regular font-abel text-base">Salvar</p>
                                <CircleCheckIcon w={22} h={22} />
                            </div> */}
                        {/* </div> */}
                    </div>
                    <div className="z-[11] flex h-[16px] w-full flex-col bg-darkteal shadow-lg" />
                    <div
                        className={`${
                            pathName === "/templates" ? "bg-[#78A5B9]" : "bg-darkteal"
                        } z-[10] flex h-[111px] w-full flex-row items-center justify-between px-14 shadow-lg`}
                    >
                        <p className="max-w-[156px] cursor-default font-poppins text-xl font-bold text-white">
                            Template
                        </p>
                        {pathName !== "/templates" && (
                            <Link
                                href="/templates"
                                onClick={() => setActiveDropdown(-1)}
                                className="flex h-12 w-[128px] cursor-pointer flex-col items-center justify-center rounded-[9px] bg-[#EBFFE7] font-poppins text-[20px] font-light uppercase text-darkteal"
                            >
                                Alterar
                            </Link>
                        )}
                    </div>

                    <SidebarContent activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />

                    <SidebarDropdown
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                        title="Suporte"
                        items={[
                            {
                                content: (
                                    <Link
                                        target="_blank"
                                        href="/ajuda"
                                        className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14"
                                    >
                                        <p className="font-poppins text-base text-darkteal">Central de ajuda</p>
                                        <RiArrowRightSLine className="text-darkteal" />
                                    </Link>
                                ),
                            },
                        ]}
                        helpText="Caso necessite de ajuda, acesse nossa central de ajuda."
                        id={99}
                    />
                </div>

                <div className="flex w-full flex-col justify-end rounded-br-[42px] bg-darkteal">
                    <div className="flex h-[98px] w-full flex-row items-center justify-between rounded-br-[42px] bg-darkteal px-14"></div>
                </div>
            </div>
        </div>
    );
};

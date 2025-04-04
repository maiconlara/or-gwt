import Link from "next/link";
import Image from "next/image";

import { Social } from "./social";
import { Nav, NavProps } from "./nav";
import { Subscribe } from "./subscribe";

import { logoWhite } from "@/assets/images";

const navs: NavProps[] = [
    {
        title: "Evento",
        links: [
            {
                label: "Casamento",
                href: "https://ifestei.com.br/casamento",
            },
            {
                label: "Formatura",
                href: "https://ifestei.com.br/formatura",
            },
            {
                label: "Aniversário",
                href: "https://ifestei.com.br/aniversario",
            },
            {
                label: "15 anos",
                href: "https://ifestei.com.br/15-anos",
            },
            {
                label: "Infantil",
                href: "https://ifestei.com.br/infantil",
            },
            {
                label: "Confraternização",
                href: "https://ifestei.com.br/confraternizacao",
            },
        ],
    },
    {
        title: "iFestei",
        links: [
            {
                label: "Nossa história",
                href: "https://ifestei.com.br/nossa-historia",
            },
            {
                label: "Dúvidas Frequentes",
                href: "https://ifestei.com.br/ajuda",
            },
            {
                label: "Blog",
                href: "/404",
            },
            {
                label: "Para o seu evento",
                href: "/404",
            },
            {
                label: "Planos",
                href: "https://ifestei.com.br/planos",
            },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="flex w-full flex-col items-center justify-center gap-10 bg-black px-5 py-8 massive:px-16">
            <div className="flex w-full flex-col items-center justify-between gap-10 xl:flex-row xl:items-start xl:gap-20 massive:gap-40">
                <Image src={logoWhite} alt="iFestei" width={68} loading="lazy" className="h-auto" />

                <div className="flex w-full flex-col items-center justify-center gap-10 xl:w-[750px] 2xl:w-[900px]">
                    <div className="flex w-full flex-col items-start justify-between gap-10 md:flex-row md:gap-0 lg:justify-around xl:justify-between">
                        {navs.map((nav, index) => (
                            <Nav key={index} {...nav} />
                        ))}
                    </div>

                    <Subscribe />
                </div>

                <Social />
            </div>

            <div className="flex w-full items-center justify-between text-sm font-normal text-white">
                <Link
                    href="https://ifestei.com.br/termos"
                    target="_blank"
                    className="hover:text-custom-gray-400 transition-all duration-300 ease-in-out"
                >
                    Termos | Políticas
                </Link>
                <Link
                    href="https://www.belogic.com.br/"
                    target="_blank"
                    className="hover:text-custom-gray-400 transition-all duration-300 ease-in-out"
                >
                    Desenvolvido por BeLogic
                </Link>
            </div>
        </footer>
    );
};

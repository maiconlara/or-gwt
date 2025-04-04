"use client";

import { useEvent } from "@/utils/hooks/useEvent";
import Link from "next/link";

type NavLink = {
    label: string;
    href: string;
    showRoute: boolean;
};

export const DebutanteHeader = () => {
    const { event } = useEvent();

   const menuFont = event?.fontes?.menus ?? "font-poppins";
    const showMessagesRoute = event?.exibir_formulario_mensagem_id ?? true;

    const colors = event?.cores ?? {
        main_color: "#E41414",
        texts: "#ffffff",
        menus: "#E41414",
        names: "#000000",
        titles: "#000000",
        titles_2: "#000000",
        texts_2: "#000000",
    };

    const navLinks: NavLink[] = [
        {
            label: "Mensagens",
            href: "/debutante/01/mensagem",
            showRoute: showMessagesRoute,
        },
        {
            label: "Presentes",
            href: "/debutante/01/presentes",
            showRoute: true,
        },
        {
            label: "Confirmar presença",
            href: "/debutante/01/confirmar-presenca",
            showRoute: true,
        },
    ];

    return (
        <div className={`flex h-20 w-full items-center justify-between gap-10 bg-transparent px-5 ${menuFont}`}>
            <Link
                href="/debutante/01"
                className="rounded-full bg-debutante-hover px-5 py-2 text-base font-semibold"
                style={{
                    color: colors.menus,
                }}
            >
                Home
            </Link>
            <div className="flex items-center gap-10">
                {navLinks
                    .filter((link) => link.showRoute)
                    .map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="rounded-full bg-debutante-hover px-5 py-2 text-base font-semibold"
                            style={{
                                color: colors.menus,
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
            </div>
        </div>
    );
};

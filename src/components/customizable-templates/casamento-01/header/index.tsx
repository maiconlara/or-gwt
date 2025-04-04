"use client";

import { useEvent } from "@/utils/hooks/useEvent";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Casamento01Header = () => {
    const { event } = useEvent();
    const pathName = usePathname();
    console.log(pathName)

    const menuFont = event?.fontes?.menus ?? "font-poppins";
    const showMessagesRoute = event?.exibir_formulario_mensagem_id ?? true;

    const colors = event?.cores ?? {
        main_color: "#000000",
        texts: "#000000",
        menus: "#fff",
        names: "#000000",
        titles: "#000000",
        titles_2: "#000000",
        texts_2: "#000000",
    };

    return (
        <div
            className={`flex min-h-20 w-full flex-row items-center justify-center bg-transparent px-28 ${menuFont} `}
            style={{ color: colors.menus }}
        >
            <div className="flex flex-row gap-20">
                <Link href="/casamento/01" className={`text-base ${pathName === "/personalizar" ? "cursor-not-allowed pointer-events-none" : "cursor-pointer"} `}>
                    Home
                </Link>
                {showMessagesRoute && (
                    <Link href="/casamento/01/mensagem" className={`text-base ${pathName === "/personalizar" ? "cursor-not-allowed pointer-events-none" : "cursor-pointer"} `}>
                        Mensagens
                    </Link>
                )}
                <Link href="/casamento/01/presentes" className={`text-base ${pathName === "/personalizar" ? "cursor-not-allowed pointer-events-none" : "cursor-pointer"} `}>
                    Presentes
                </Link>
                <Link href="/casamento/01/confirmar-presenca" className={`text-base ${pathName === "/personalizar" ? "cursor-not-allowed pointer-events-none" : "cursor-pointer"} `}>
                    Confirmar presença
                </Link>
            </div>
        </div>
    );
};

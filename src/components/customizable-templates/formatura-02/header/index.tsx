"use client";

import { useEvent } from "@/utils/hooks/useEvent";
import Link from "next/link";

export const Formatura02Header = () => {
    const { event } = useEvent();

   const menuFont = event?.fontes?.menus ?? "font-poppins";
    const showMessagesRoute = event?.exibir_formulario_mensagem_id ?? true;

    const colors = event?.cores ?? {
        main_color: "#ECF86E",
        texts: "#000000",
        menus: "#ECF86E",
        names: "#000000",
        titles: "#ECF86E",
        titles_2: "#000000",
        texts_2: "#000000",
    };

    return (
        <div
            className={`flex min-h-20 w-full flex-row items-center justify-between bg-transparent px-28 ${menuFont}`}
            style={{ color: colors.menus }}
        >
            <Link href="/formatura/02" className="cursor-pointer text-base">
                Home
            </Link>
            <div className="flex flex-row gap-20">
                {showMessagesRoute && (
                    <Link href="/formatura/02/mensagem" className="cursor-pointer text-base">
                        Mensagens
                    </Link>
                )}
                <Link href="/formatura/02/presentes" className="cursor-pointer text-base">
                    Presentes
                </Link>
                <Link href="/formatura/02/confirmar-presenca" className="cursor-pointer text-base">
                    Confirmar presença
                </Link>
            </div>
        </div>
    );
};

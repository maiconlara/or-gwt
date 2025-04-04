"use client";

import { useEvent } from "@/utils/hooks/useEvent";
import Link from "next/link";

export const Infantil04Header = () => {
    const { event } = useEvent();

   const menuFont = event?.fontes?.menus ?? "font-poppins";
    const showMessagesRoute = event?.exibir_formulario_mensagem_id ?? true;

    const eventId = event?.template_id;

    const colors = event?.cores ?? {
        main_color: "#AECCD9",
        texts: "#3687C1",
        menus: "#195655",
        names: "#3687C1",
        titles: "#3687C1",
    };

    return (
        <div
            className={`flex min-h-20 w-full flex-row items-center justify-between bg-transparent px-28 ${menuFont}`}
            style={{ color: colors.menus }}
        >
            <div className="flex flex-row gap-20">
                <Link href="/festa-infantil/04" className="cursor-pointer text-base">
                    Home
                </Link>
                {showMessagesRoute && (
                    <Link href={`/festa-infantil/${eventId}/mensagem`} className="cursor-pointer text-base">
                        Mensagens
                    </Link>
                )}
                <Link href={`/festa-infantil/${eventId}/presentes`} className="cursor-pointer text-base">
                    Presentes
                </Link>
                <Link href={`/festa-infantil/${eventId}/presenca`} className="cursor-pointer text-base">
                    Confirmar presença
                </Link>
            </div>
        </div>
    );
};

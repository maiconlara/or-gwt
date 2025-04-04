"use client";

import { useEvent } from "@/utils/hooks/useEvent";
import Link from "next/link";

interface CustomButtonProps {
    text: string;
    isLink?: boolean;
    link?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    // onClick?: () => void;
}

export const CustomButton = ({ text, isLink = false, link, type = "button", disabled = false }: CustomButtonProps) => {
    const { event } = useEvent();
    const textFont = event?.fontes?.texts ?? "font-poppins";
    const colors = event?.estilo_botoes ?? {
        text: "#000000",
        background: "#e5e8e1",
        border: "#000000",
    };

    const buttonStyle = {
        backgroundColor: colors.background,
        color: colors.text,
        border: `1px solid ${colors.border}`,
    };

    return isLink && link ? (
        <Link
            className={`flex h-14 max-w-max cursor-pointer flex-col items-center justify-center rounded-md px-8 ${textFont} text-xl`}
            style={buttonStyle}
            href={link}
        >
            {text}
        </Link>
    ) : (
        <button
            className={`flex h-14 max-w-max cursor-pointer flex-col items-center justify-center rounded-md px-8 ${textFont} text-xl`}
            style={buttonStyle}
            type={type}
        >
            {text}
        </button>
    );
};

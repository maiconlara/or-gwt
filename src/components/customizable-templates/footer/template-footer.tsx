"use client";

import { IfesteiIcon, InstagramIcon, PinterestIcon, YoutubeIcon } from "@/assets/icons";
import { useEvent } from "@/utils/hooks/useEvent";
import Link from "next/link";



export const TemplateFooter = () => {
    const { event } = useEvent();
    const backgroundColor = event?.cores?.main_color ?? "#000";
    const textColor = event?.cores?.texts ?? "#fff";
    const textFont = event?.fontes?.texts ?? "font-poppins";

    return (
        <footer
            className={`relative flex h-40 xl:h-36 w-full max-w-[1920px] gap-6 xl:gap-0 flex-col-reverse xl:flex-row items-center justify-center xl:justify-between md:px-28 ${textFont}`}
            style={{
                backgroundColor: backgroundColor,
                color: textColor,
            }}
        >
            <div className="flex flex-row items-center gap-8">
                <Link target="_blank" href="https://www.instagram.com/i.festei/">
                    <InstagramIcon w={42} h={42} color={textColor} />
                </Link>

                <Link target="_blank" href="https://br.pinterest.com/ifeste1/">
                    <PinterestIcon w={42} h={42} color={textColor} />
                </Link>
                <Link target="_blank" href="https://www.youtube.com/@i.festei">
                    <YoutubeIcon w={56} h={56} color={textColor} />
                </Link>

            <IfesteiIcon className="flex xl:hidden" w={42} h={42} color={textColor} />
            </div>

            <p className="xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:transform cursor-default text-lg text-center">
                Diretos de imagem reservados a iFestei
            </p>
            <IfesteiIcon className="hidden xl:flex" w={59} h={59} color={textColor} />
        </footer>
    );
};

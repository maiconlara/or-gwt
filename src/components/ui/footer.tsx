import { RiGithubFill, RiInstagramFill, RiTwitterXFill } from "@remixicon/react";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="flex h-[86px] font-montserrat w-full max-w-[1920px] gap-3 flex-row items-center justify-center text-[#C5C1C2] bg-[#3D376B]">
            <p className="cursor-default">
            Desenvolvido por Maicon Lara
            </p>
                <div className="flex flex-row gap-3">
                    <Link target="_blank" href="https://github.com/maiconlara">
                        <RiGithubFill className="h-5 w-5 text-[#C5C1C2] hover:text-white/30 transition-colors" />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/maiconlara1/">
                        <RiInstagramFill className="h-5 w-5 text-[#C5C1C2] hover:text-white/30 transition-colors" />
                    </Link>
                    <Link target="_blank" href="https://x.com/maiconlara1">
                        <RiTwitterXFill className="h-5 w-5 text-[#C5C1C2] hover:text-white/30 transition-colors" />
                    </Link>
                </div>
        </div>
    );
};

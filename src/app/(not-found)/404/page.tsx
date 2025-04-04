import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex h-screen max-h-screen w-full flex-col items-center justify-center bg-blue">
            <div className="flex h-full w-full flex-col items-center justify-center overflow-y-hidden">
                <div className="absolute flex w-[300px] max-w-[694px] flex-col gap-10 md:right-14 md:w-[563px] lg:right-36 lg:transform 4xl:translate-x-2/3">
                    <p className="font-regular cursor-default font-abel text-2xl text-white lg:text-5xl lg:text-[56px]">
                        Ops! Essa página não está disponível no momento.
                    </p>
                    <p className="font-regular flex max-w-[601px] cursor-default font-poppins text-base text-white lg:text-[20px]">
                        Volte para a página inicial para ajudarmos você a encontrar o que procura.
                    </p>
                    <Link
                        href="/"
                        className="left-28 flex h-11 min-w-max max-w-max cursor-pointer select-none flex-row items-center justify-center gap-2 rounded-full bg-lines px-5 transition-colors hover:bg-lines/80"
                    >
                        <p className="text-sm font-extrabold text-white md:text-[17px]">Ir para página inicial</p>
                        <RiArrowRightLine size={14} className="text-white transition-colors" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

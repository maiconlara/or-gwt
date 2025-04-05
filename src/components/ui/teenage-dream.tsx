"use client";
import { oliviaBackground, oliviaTop, oliviaBottom } from "@/assets/images";
import Image from "next/image";

export const TeenageDream = () => {
    return (
        <div id="sobre" className="flex h-auto w-full flex-col items-center justify-start">
            {/* <Image
                height={225}
                className="absolute -bottom-[112.5px] left-1/2 z-[100] w-[90%] max-w-[500px] -translate-x-1/2 cursor-pointer select-none"
                alt="teenage dream"
                src={teenageDreamText}
            /> */}
            <div>
                <Image width={2000} className="" alt="top" src={oliviaTop} />
                {/* <Image
                    width={2000}
                    className="relative w-full"
                    alt="duas olivias rodrigos lindas"
                    src={oliviaBackground}
                /> */}
                <div className="flex flex-col w-full h-[621px] bg-oliviaBackground bg-no-repeat bg-cover items-center justify-center">

                <div className="font-ultinoid text-4xl cursor-default  text-white">
                    bla bla bla
                </div>
                </div>
                <Image width={2000} className="" alt="bottom" src={oliviaBottom} />
            </div>
        </div>
    );
};

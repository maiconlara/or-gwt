"use client";
import { oliviaBackground, pretoTop, memoriesText } from "@/assets/images";
import Image from "next/image";

export const Memories = () => {
    return (
        <div id="sobre" className="flex h-auto w-full flex-col items-center justify-start">
            <div className="flex w-full flex-row items-center justify-center pb-10 pt-2">
                <Image height={125} className="" alt="teenage dream" src={memoriesText} />
            </div>
            <div>
                <Image width={2000} className="" alt="top" src={pretoTop} />
                <div className="flex h-[500px] flex-col items-center justify-center bg-gray-strong"></div>
            </div>
        </div>
    );
};

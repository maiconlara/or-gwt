"use client";
import { useEffect, useRef } from "react";
import { heroVideo, teenageDreamText } from "@/assets/images";
import Image from "next/image";
import { RiArrowDownDoubleLine } from "@remixicon/react";

export const HeroVideo = () => {
    return (
        <div className="relative h-screen w-full max-w-[1920px]">
            <video src={heroVideo} loop className="absolute left-0 top-0 h-full w-full object-cover" muted autoPlay />
            {/* <Image
                height={225}
                className="absolute -bottom-[112.5px] left-1/2 z-[100] w-[90%] max-w-[500px] -translate-x-1/2 cursor-pointer select-none"
                alt="teenage dream"
                src={teenageDreamText}
            /> */}
            <a href="#sobre">
                <RiArrowDownDoubleLine className="animate-smoothBounce absolute bottom-10 left-1/2 z-[100] h-10 w-10 -translate-x-1/2 cursor-pointer select-none text-white" />
            </a>
        </div>
    );
};

"use client";

import Image from "next/image";
import orwhite from "@/assets/images/orwhite.png";

const AnimateIcon = () => {
    return (
        <div className="animate-bounce-custom bg-transparent">
            <Image
                width={427}
                height={333}
                src={orwhite}
                className="h-auto w-[242px]"
                alt="Olivia Rodrigo"
            />
        </div>
    );
};

export default AnimateIcon;

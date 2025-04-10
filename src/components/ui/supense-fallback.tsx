"use client";

import AnimateIcon from "@/assets/animate";

export const SuspenseFallback = () => {
    return (
        <div className="flex h-screen w-full max-w-[1920px] items-center justify-center">
            <AnimateIcon />
        </div>
    );
};

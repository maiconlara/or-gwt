"use client";
import { ArrowLeftIcon } from "@/assets/icons";
import { useRouter } from "next/navigation";

export const BackButton = () => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.back()}
            className="absolute left-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white cursor-pointer"
        >
            <ArrowLeftIcon w={12} h={12} className=" text-green" />
        </div>
    );
};

import { bannerinvertido } from "@/assets/images";
import Image from "next/image";

export const Galery = () => {
    return (
        <div className="-mt-[150px] flex w-full max-w-[1920px] flex-col">
            <div className="flex w-full flex-col">
                <Image
                    height={97}
                    width={2000}
                    priority
                    quality={100}
                    alt="Capa do Album GUTS"
                    className="h-auto w-full"
                    src={bannerinvertido}
                />
            </div>
            <div className="flex  w-full flex-row justify-center bg-[white] pb-20">
                <div className="grid w-full max-w-[1024px] grid-cols-3 gap-6">
                    <div className="col-span-1 flex h-[300px] w-full flex-col bg-[#18181A]"></div>
                    <div className="col-span-1 flex h-[300px] w-full flex-col bg-[#18181A]"></div>
                    <div className="col-span-1 flex h-[300px] w-full flex-col bg-[#18181A]"></div>
                </div>
            </div>
        </div>
    );
};

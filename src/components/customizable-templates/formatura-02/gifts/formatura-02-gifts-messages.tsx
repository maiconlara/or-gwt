import { MessageCarouselCard } from "@/components";
import { graduateHat } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

export const Formatura02GiftsMessages = () => {
    return (
        <div className="flex w-full flex-col items-center justify-start gap-12 px-28 pb-14">
            <div className="flex- row z-20 flex h-full w-full max-w-[900px] items-end justify-between bg-transparent">
                <MessageCarouselCard size="small" className="-mt-32"  />
                <div className="flex flex-col items-center justify-center gap-7">
                    <Image src={graduateHat} alt="" width={140} height={78} />
                    <Link
                        href="/formatura/mensagem"
                        className="flex h-14 flex-col items-center justify-center rounded-xl bg-[#2c2c2c] px-10 font-poppins text-xl text-white"
                    >
                        Deixe sua mensagem
                    </Link>
                </div>
            </div>
        </div>
    );
};

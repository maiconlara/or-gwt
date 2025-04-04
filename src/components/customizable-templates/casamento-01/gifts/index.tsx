import { Casamento01GiftsHero } from "./gifts-hero";
import { GiftList } from "@/components/customizable-templates";

export const Casamento01Gifts = () => {
    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-white">
            <Casamento01GiftsHero />
            <GiftList className="bg-[#ffffff]" />
        </div>
    );
};

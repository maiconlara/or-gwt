import star0 from "@/assets/images/star-0.png";
import star1 from "@/assets/images/star-1.png";
import star2 from "@/assets/images/star-2.png";
import star3 from "@/assets/images/star-3.png";
import star4 from "@/assets/images/star-4.png";
import Image from "next/image";

interface Pol {
    src: string;
    caption: string;
}
export default function PolaroidPhoto({ src, caption }: Pol) {

    const stars = [star0, star1, star2, star3, star4];
    const stars2 = [star0, star1, star2, star3, star4];

    // Seleciona uma estrela aleatória
    const randomStar = stars[Math.floor(Math.random() * stars.length)];
    const randomStar2 = stars2[Math.floor(Math.random() * stars2.length)];

    return (
        <div className="relative m-[20px] w-[255px] rotate-[0deg] cursor-pointer border border-[#ccc] bg-white px-[10px] pb-[30px] pt-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out hover:rotate-[2deg] hover:scale-105">
            <Image
                src={randomStar}
                alt="star"
                width={100}
                height={100}
                unoptimized
                className="absolute left-[-16px] top-[-16px] h-[32px] w-[32px] "
            />
            <img className="block max-h-[200px] w-full object-cover object-center" src={src} alt={caption} />
            <div className="mt-2 h-4 cursor-default select-none text-center font-montserrat text-base"> </div>
            <Image
                src={randomStar2}
                alt="star"
                width={100}
                height={100}
                unoptimized
                className="absolute bottom-[-16px] right-[-16px] h-[32px] w-[32px] "
            />
        </div>
    );
}

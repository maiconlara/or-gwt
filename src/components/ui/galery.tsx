import { bannerinvertido } from "@/assets/images";
import Image from "next/image";
import PolaroidPhoto from "./polaroid";
import image1 from "@/assets/images/galery/image1.jpeg";
import image2 from "@/assets/images/galery/image2.jpeg";
import image3 from "@/assets/images/galery/image3.jpeg";
import image4 from "@/assets/images/galery/image4.jpeg";
import image5 from "@/assets/images/galery/image5.jpeg";
import image6 from "@/assets/images/galery/image6.jpeg";
import image7 from "@/assets/images/galery/image7.jpeg";
import image8 from "@/assets/images/galery/image8.jpeg";
import image9 from "@/assets/images/galery/image9.jpeg";
import image10 from "@/assets/images/galery/image10.jpeg";
import image11 from "@/assets/images/galery/image11.jpeg";
import image12 from "@/assets/images/galery/image12.jpeg";
import image13 from "@/assets/images/galery/image13.jpeg";
import image14 from "@/assets/images/galery/image14.jpeg";
import image15 from "@/assets/images/galery/image15.jpeg";
import image16 from "@/assets/images/galery/image16.jpeg";
import image17 from "@/assets/images/galery/image17.jpeg";
import image18 from "@/assets/images/galery/image18.jpeg";
import image19 from "@/assets/images/galery/image19.jpeg";
import image20 from "@/assets/images/galery/image20.jpeg";
import image21 from "@/assets/images/galery/image21.jpeg";


const photos = [
    { src: image1.src, caption: "" },
    { src: image2.src, caption: "" },
    { src: image3.src, caption: "" },
    { src: image4.src, caption: "" },
    { src: image5.src, caption: "" },
    { src: image6.src, caption: "" },
    { src: image7.src, caption: "" },
    { src: image8.src, caption: "" },
    { src: image9.src, caption: "" },
    { src: image10.src, caption: "" },
    { src: image11.src, caption: "" },
    { src: image12.src, caption: "" },
    { src: image13.src, caption: "" },
    { src: image14.src, caption: "" },
    { src: image15.src, caption: "" },
    { src: image16.src, caption: "" },
    { src: image17.src, caption: "" },
    { src: image18.src, caption: "" },
    { src: image19.src, caption: "" },
    { src: image20.src, caption: "" },
    { src: image21.src, caption: "" }
            
    

];

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
            <div className="flex w-full flex-row justify-center bg-[white] ">
                <div className="flex flex-wrap justify-center gap-10">
                    {photos.map((photo, index) => (
                        <PolaroidPhoto key={index} {...photo} />
                    ))}
                </div>
            </div>
            <div className="flex w-full flex-col rotate-[180deg]">
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
        </div>
    );
};

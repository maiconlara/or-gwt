"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

import { format, isValid, parse } from "date-fns";
// import { graduateHat } from "@/assets/images";
import {Infantil04Header } from "../header";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Cores } from "@/types";
import { GraduateHatIcon } from "@/assets/icons";
interface HeroProps {
    nameFont: string;
    titleFont: string;
    textFont: string;
    mainImage: string | string[] | undefined;
    mediaType: "Imagem" | "Video" | "Slideshow";
    eventDate: string;
    eventName: string;
    colors: Cores;
}

export const Infantil04Hero = ({
    nameFont,
    titleFont,
    textFont,
    mainImage,
    mediaType,
    eventDate,
    eventName,
    colors,
}: HeroProps) => {
    const [api, setApi] = useState<CarouselApi>();


    useEffect(() => {
        if (!api) {
            return;
        }
    }, [api]);

    const renderBackground = () => {
        if (mediaType === "Video" && typeof mainImage === "string") {
            return (
                <video key={mainImage} autoPlay loop muted className="absolute inset-0 h-full w-full object-cover">
                    <source src={mainImage} type="video/mp4" />
                </video>
            );
        } else if (mediaType === "Slideshow" && Array.isArray(mainImage)) {
            return (
                <Carousel
                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                    autoplay={true}
                    autoplayInterval={12000}
                    className="absolute inset-0 h-full w-full overflow-y-hidden"
                >
                    <CarouselContent>
                        {mainImage.map((image, index) => (
                            <CarouselItem key={index} className="relative h-full w-full">
                                <Image
                                    src={image}
                                    alt={`Slide ${index}`}
                                    priority={true}
                                    quality={100}
                                    height={1920}
                                    width={1920}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hover:bg-white-off absolute left-14 top-1/2 z-20 -translate-y-1/2 cursor-pointer border-0" />

                    <CarouselNext className="hover:bg-white-off absolute right-14 top-1/2 z-20 -translate-y-1/2 cursor-pointer border-0" />
                </Carousel>
            );
        } else if (mediaType === "Imagem" && typeof mainImage === "string") {
            return (
                <div
                    className="absolute inset-0 h-full w-full bg-cover"
                    style={{ backgroundImage: `url(${mainImage})` }}
                />
            );
        }
        return null;
    };

    return (
        <div className="relative flex w-full flex-col items-start justify-start">
            {renderBackground()}
            <div className="relative z-10 flex h-full max-h-[881px] w-full max-w-[1920px] flex-col items-end justify-start">
                <Infantil04Header />

                <div className="flex h-screen w-full flex-col items-start pt-24 justify-start gap-6 px-28">
                    <div className="flex max-w-[547px] flex-col gap-6">
                    
                            <p
                                className={`cursor-default text-8xl font-bold uppercase ${nameFont}`}
                                style={{ color: colors.names }}
                            >
                                {eventName}
                            </p>
                  
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

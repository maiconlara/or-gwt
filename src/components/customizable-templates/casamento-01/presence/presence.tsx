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

import { useEvent } from "@/utils/hooks/useEvent";

import { casamento01Banner } from "@/assets/images";
import Image from "next/image";
import { Casamento01Header } from "../header";
import { useEffect, useState } from "react";
import { PresenceForm } from "@/components";
import { PrincipalCard } from "../principal-card";

export const Casamento01PresenceForm = () => {
    const { event } = useEvent();
    const [api, setApi] = useState<CarouselApi>();

    const mediaType = event?.tipo_capa ?? "Imagem";
    const eventDate = event?.data_evento ?? "-";

    const mainImage =
        mediaType === "Slideshow"
            ? event?.imagem_principal?.map((img) => img.url)
            : (event?.imagem_principal?.[0]?.url ?? casamento01Banner.src);



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
            <div className="relative z-10 flex w-full max-w-[1920px] flex-col items-end justify-start bg-transparent pb-20">
                <Casamento01Header />

                <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 px-28">
                <PrincipalCard />
                </div>

                <div className="-mt-10 flex w-full flex-col items-center justify-start gap-20">
                    <PresenceForm />
                </div>
            </div>
        </div>
    );
};

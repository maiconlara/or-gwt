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
import { GraduateHatIcon } from "@/assets/icons";
import { Formatura02Header } from "../header";
import { useState, useEffect } from "react";
import { Cores } from "@/types";
import Image from "next/image";


interface HeroProps {
    mainImage: string | string[] | undefined;
    colors: Cores;
}

export const Formatura02AlternativeHero = ({
    mainImage, colors
}: HeroProps) => {

    const {event} = useEvent();

    const fonts = event?.fontes ?? {
        names: "font-poppins",
        titles: "font-poppins",
    }
    const mediaType = event?.tipo_capa ?? "Imagem";

    const eventDate = event?.data_evento ?? "-";
    const eventName = event?.nome_evento ?? "-";

    const [api, setApi] = useState<CarouselApi>();

    const parsedDate = parse(eventDate, "dd/MM/yyyy HH:mm:ss", new Date());
    const formattedDate = isValid(parsedDate) ? format(parsedDate, "dd.MM") : "Data inválida";

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
            <div className="relative z-10 flex h-full max-h-[1920px] w-full max-w-[1920px] flex-col items-end justify-start">
                <Formatura02Header />

                <div className="flex h-[813px] w-full flex-col items-end justify-center gap-6 px-28 pb-20">
                    <div className="flex max-w-[1847px] flex-col gap-6">
                        <p
                            className={`font-regular cursor-default ${fonts.titles} } text-7xl uppercase`}
                            style={{ color: colors?.titles }}
                        >
                            {formattedDate}
                        </p>
                        <div className="flex flex-row items-center gap-6">
                            <p
                                className={`cursor-default text-7xl font-bold uppercase ${fonts.names}`}
                                style={{ color: colors.names }}
                            >
                                {eventName}
                            </p>
                            <GraduateHatIcon w={140} h={78} color={colors.main_color} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

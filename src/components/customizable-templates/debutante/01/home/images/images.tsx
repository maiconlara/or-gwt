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
import { useState, useEffect } from "react";
import { Cores } from "@/types";
import { GraduateHatIcon } from "@/assets/icons";
import Image from "next/image";
import { useEvent } from "@/utils/hooks/useEvent";

import Debutante01Image01 from "@/assets/images/debutante/01/1.webp";
import Debutante01Image02 from "@/assets/images/debutante/01/2.webp";

export const Debutante01Images = () => {
    const { event } = useEvent();

    const [api, setApi] = useState<CarouselApi>();
    useEffect(() => {
        if (!api) {
            return;
        }
    }, [api]);

    const nameFont = event?.fontes?.names ?? "font-poppins";
    const titleFont = event?.fontes?.titles ?? "font-poppins";
    const textFont = event?.fontes?.texts ?? "font-poppins";
   const menuFont = event?.fontes?.menus ?? "font-poppins";
    const mediaType = event?.tipo_capa ?? "Imagem";
    const eventName = event?.nome_evento ?? "-";
    const eventDate = event?.data_evento ?? "-";
    const eventMap = event?.endereco ?? "-";

    const colors = event?.cores ?? {
        main_color: "#E41414",
        texts: "#ffffff",
        menus: "#E41414",
        names: "#000000",
        titles: "#000000",
        titles_2: "#000000",
        texts_2: "#000000",
    };

    const mainImage =
        mediaType === "Slideshow"
            ? event?.imagem_principal?.map((img) => img.url)
            : (event?.imagem_principal?.[0]?.url ?? Debutante01Image01.src);

    const content = event?.conteudo;

    const parsedDate = parse(eventDate, "dd/MM/yyyy HH:mm:ss", new Date());
    const formattedDate = isValid(parsedDate) ? format(parsedDate, "dd.MM") : "Data inválida";

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
        <div className="relative flex h-[600px] md:h-[960px] lg:h-[1600px] w-full flex-col items-center justify-center gap-40 py-20">
            {/* <Image
                src={Debutante01Image01}
                alt="Banner"
                loading="lazy"
                placeholder="blur"
                className="h-[1600px] w-auto"
            /> */}
            {renderBackground()}
            {/* <div className="flex h-[440px] w-full items-center justify-between gap-20 overflow-hidden px-5">
                <Image
                    src={Debutante01Image02}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                    className="h-full w-full rounded-2xl"
                />
                <Image
                    src={Debutante01Image02}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                    className="h-full w-full rounded-2xl"
                />
                <Image
                    src={Debutante01Image02}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                    className="h-full w-full rounded-2xl"
                />
            </div> */}
        </div>
    );
};

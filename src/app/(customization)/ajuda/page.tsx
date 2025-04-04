import { Metadata } from "next";
import Image from "next/image";

import { assessoriaButton, suporteButton } from "@/assets/images";
import Link from "next/link";
import { RiArrowRightSLine } from "@remixicon/react";

export default async function Page() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-start overflow-auto bg-white">
            <div className="flex w-full flex-col items-center gap-12 px-20 pt-12">
                <p className="cursor-default font-poppins text-6xl font-bold text-darkteal">Como podemos te ajudar?</p>

                <div className="mt-10 flex flex-row gap-10">
                    <Image
                        alt="Canal de suporte"
                        width={820}
                        height={420}
                        placeholder="blur"
                        className="h-[210px] w-[410px] cursor-pointer rounded-[11px]"
                        src={suporteButton}
                        quality={100}
                        priority
                    />
                    <Image
                        alt="Assessoria de montagem do site"
                        width={820}
                        height={420}
                        placeholder="blur"
                        className="h-[210px] w-[410px] cursor-pointer rounded-[11px]"
                        src={assessoriaButton}
                        quality={100}
                        priority
                    />
                </div>

                <div className="mt-10 flex w-full max-w-[720px] flex-col gap-12">
                    <p className="cursor-default font-poppins text-5xl font-bold text-darkteal">Ajuda rápida</p>

                    <div className="flex w-full flex-col gap-2">
                        <Link href="ajuda" className="flex w-full cursor-pointer flex-row items-center justify-between">
                            <p className="font-poppins text-base text-darkteal">Não consigo mexer no meu site</p>
                            <RiArrowRightSLine className="h-8 w-8 text-darkteal" />
                        </Link>
                        <Link href="ajuda" className="flex w-full cursor-pointer flex-row items-center justify-between">
                            <p className="font-poppins text-base text-darkteal">Preciso mudar de plano</p>
                            <RiArrowRightSLine className="h-8 w-8 text-darkteal" />
                        </Link>
                        <Link href="ajuda" className="flex w-full cursor-pointer flex-row items-center justify-between">
                            <p className="font-poppins text-base text-darkteal">Cobrança indevida</p>
                            <RiArrowRightSLine className="h-8 w-8 text-darkteal" />
                        </Link>
                        <Link href="ajuda" className="flex w-full cursor-pointer flex-row items-center justify-between">
                            <p className="font-poppins text-base text-darkteal">Convidar ou remover membro</p>
                            <RiArrowRightSLine className="h-8 w-8 text-darkteal" />
                        </Link>
                        <Link href="ajuda" className="flex w-full cursor-pointer flex-row items-center justify-between">
                            <p className="font-poppins text-base text-darkteal">Atualizar dados de pagamento</p>
                            <RiArrowRightSLine className="h-8 w-8 text-darkteal" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Gerenciamento de Layout",
        description: "",
    };
}

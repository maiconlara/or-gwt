"use client";

import { RiStore2Line, RiShoppingCart2Line } from "@remixicon/react";
import { useEvent } from "@/utils/hooks/useEvent";
import { Pagination } from "./pagination";
import { PresentesVirtuais } from "@/types";
import { useState, useRef } from "react";
import { CartModal } from "./cart-modal";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface GiftListProps {
    className?: string;
}

export const GiftList = ({ className }: GiftListProps) => {
    const { event } = useEvent();
    const listRef = useRef<HTMLDivElement>(null);

    const [cart, setCart] = useState<PresentesVirtuais[]>([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const colors = event?.cores ?? {
        main_color: "#000000",
        texts: "#000000",
    };

    const presentesVirtuais = event?.presentes_virtuais ?? [];

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price);
    };

    const handleAddToCart = (gift: PresentesVirtuais) => {
        if (!cart.some((item) => item.id === gift.id)) {
            setCart([...cart, gift]);
            setTotal(total + gift.valor);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (listRef.current) {
            listRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const paginatedGifts = presentesVirtuais.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return (
        <div ref={listRef} className={cn("flex w-full flex-col items-center justify-start gap-20 py-20", className)}>
            <div className="flex w-full max-w-[1300px] flex-row items-center justify-center gap-4 px-6">
                <CartModal
                    items={cart}
                    total={total}
                    onRemove={(gift) => {
                        setCart(cart.filter((item) => item !== gift));
                        setTotal(total - gift.valor);
                    }}
                >
                    <div className="relative flex h-12 cursor-pointer flex-row items-center justify-center gap-1 rounded-full bg-[#2c2c2c] px-6">
                        <RiShoppingCart2Line className="h-6 w-6" style={{ color: "#fff" }} />
                        <p className="font-regular text-xl" style={{ color: "#fff" }}>
                            Carrinho
                        </p>
                        <div className="absolute -top-1.5 right-0 flex h-7 w-7 flex-row items-center justify-center rounded-full bg-red-500 text-white">
                            {cart.length}
                        </div>
                    </div>
                </CartModal>
            </div>
            <div className="grid w-full max-w-[1300px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20">
                {presentesVirtuais.length > 0 ? (
                    paginatedGifts.map((gift, index) => (
                        <div key={index} className="col-span-1 flex flex-col items-center gap-10">
                            <div
                                className="flex h-[324px] w-full max-w-[324px] flex-col items-center justify-between rounded-2xl border pt-6"
                                style={{ borderColor: colors.main_color, color: colors.texts }}
                            >
                                <div
                                    className="flex h-10 items-center justify-center rounded-full px-14 text-base"
                                    style={{ backgroundColor: colors.main_color }}
                                >
                                    <p className="line-clamp-1 cursor-default">
                                    {formatPrice(gift.valor)}
                                        </p>
                                </div>

                                {gift.imagem_destaque_web ? (
                                    <Image
                                        src={gift.imagem_destaque_web}
                                        alt={gift.nome}
                                        width={160}
                                        height={160}
                                        className="h-32 w-32 rounded-xl"
                                    />
                                ) : (
                                    <RiStore2Line className="h-20 w-20" style={{ color: colors.main_color }} />
                                )}

                                <div
                                    className="-mb-5 flex h-10 w-[80%] items-center justify-center rounded-full font-poppins text-base"
                                    style={{ backgroundColor: colors.main_color }}
                                >
                                    <p className="line-clamp-1 max-w-[90%] cursor-default">{gift.nome}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleAddToCart(gift)}
                                className="flex h-14 items-center justify-center rounded-full px-12 font-poppins text-lg font-bold"
                                style={{ backgroundColor: colors.main_color, color: colors.texts }}
                                disabled={cart.some((item) => item.id === gift.id)}
                            >
                                {cart.some((item) => item.id === gift.id) ? "Adicionado" : "Comprar"}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-xl font-bold" style={{ color: colors.texts }}>
                        Sinto muito, não há presentes disponíveis no momento.
                    </p>
                )}
               
            </div>

            <Pagination
                textColor={colors.main_color}
                currentPage={currentPage}
                totalItems={presentesVirtuais.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

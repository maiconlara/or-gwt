"use client";

import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Evento } from "@/types";
import api from "@/lib/api";

export type PublicEventContextData = {
    publicEvent: Evento | null;
    isLoading: boolean;
};

type PublicEventContextProviderProps = {
    children: ReactNode;
    slug?: string;
};

export const PublicEventContext = createContext<PublicEventContextData | null>(null);

export function PublicEventContextProvider({ children, slug }: PublicEventContextProviderProps) {
    const [publicEvent, setPublicEvent] = useState<Evento | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getPublicEvent = useCallback(async (): Promise<Evento | null | undefined> => {
        setIsLoading(true);
        try {
            const response = await api.get<Evento>(`/evento/${slug}`, {
                params: {
                    senha: "22222222222222222", // Enviando a senha como parâmetro na query string
                },
            });
            const publicEvent = response.data;

            setPublicEvent(publicEvent);
            if (!publicEvent) throw new Error("Failed to get event");
            return publicEvent;
        } catch (error: any) {
            console.log(error);
            return null;
        } finally {
            setIsLoading(false);
        }
    }, [setPublicEvent]);

    useEffect(() => {
        if (publicEvent) return;
        getPublicEvent();
    }, [getPublicEvent, publicEvent]);

    return <PublicEventContext.Provider value={{ publicEvent, isLoading }}>{children}</PublicEventContext.Provider>;
}

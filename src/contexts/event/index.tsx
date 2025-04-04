"use client";

import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Cores, EstiloBotao, Evento, Fontes, Imagem } from "@/types";
import api from "@/lib/api";

export type EventContextData = {
    event: Evento | null;
    isLoading: boolean;
    refetchEvent: () => Promise<Evento | null | undefined>;
    changeFontValue: (updatedFields: Partial<Fontes>) => void;
    changeMainImageValue: (imageUrl: Imagem[], mediaType: "Imagem" | "Video" | "Slideshow") => void;
    changeNameValue: (name: string) => void;
    changeColorValue: (updatedFields: Partial<Cores>) => void;
    toggleMessagesRoute: (messages: boolean) => void;
    toggleCountdown: (countdown: boolean) => void;
    changeButtonColorValue: (updatedFields: Partial<EstiloBotao>) => void;
};

type EventContextProviderProps = {
    children: ReactNode;
};

export const EventContext = createContext<EventContextData | null>(null);

export function EventContextProvider({ children }: EventContextProviderProps) {
    const [event, setEvent] = useState<Evento | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // console.log(event);

    const getUserEvent = useCallback(async (): Promise<Evento | null | undefined> => {
        setIsLoading(true);
        try {
            const response = await api.get<Evento>("/organizador/meu-evento");
            const userEvent = response.data;

            setEvent(userEvent);
            if (!userEvent) throw new Error("Failed to get event");
            return userEvent;
        } catch (error: any) {
            console.log(error);
            return null;
        } finally {
            setIsLoading(false);
        }
    }, [setEvent]);

    const changeFontValue = (updatedFields: Partial<Fontes>) => {
        setEvent((prevEvent) => {
            if (!prevEvent) return null;
            return {
                ...prevEvent,
                fontes: {
                    ...prevEvent.fontes,
                    ...updatedFields,
                },
            };
        });
    };
    const changeColorValue = (updatedFields: Partial<Cores>) => {
        setEvent((prevEvent) => {
            if (!prevEvent) return null;
            return {
                ...prevEvent,
                cores: {
                    ...prevEvent.cores,
                    ...updatedFields,
                },
            };
        });
    };
    const changeButtonColorValue = (updatedFields: Partial<EstiloBotao>) => {
        setEvent((prevEvent) => {
            if (!prevEvent) return null;
            return {
                ...prevEvent,
                estilo_botoes: {
                    ...prevEvent.estilo_botoes,
                    ...updatedFields,
                },
            };
        });
    };

    const changeMainImageValue = (imageUrl: Imagem[], mediaType: "Imagem" | "Video" | "Slideshow") => {
        setEvent((prevEvent) => {
            if (!prevEvent) return null;
            return {
                ...prevEvent,
                imagem_principal: imageUrl,
                tipo_capa: mediaType,
            };
        });
    };
    const changeNameValue = (name: string) => {
        setEvent((prevEvent) => {
            if (!prevEvent) return null;
            return {
                ...prevEvent,
                nome_evento: name,
            };
        });
    };
    const toggleMessagesRoute = (messages: boolean) => {
        setEvent((prevEvent) => {
            if (!prevEvent) return null;
            return {
                ...prevEvent,
                exibir_formulario_mensagem_id: messages,
            };
        });
    };
    const toggleCountdown = (countdown: boolean) => {
        setEvent((prevEvent) => {
            if (!prevEvent) return null;
            return {
                ...prevEvent,
                exibir_contagem_regressiva_id: countdown,
            };
        });
    };

    useEffect(() => {
        if (event) return;
        getUserEvent();
    }, [getUserEvent, event]);

    return (
        <EventContext.Provider
            value={{ event, isLoading, refetchEvent: getUserEvent, changeFontValue, changeMainImageValue, changeNameValue, changeColorValue, toggleMessagesRoute, toggleCountdown, changeButtonColorValue }}
        >
            {children}
        </EventContext.Provider>
    );
}

"use client";

import { useEvent } from "@/utils/hooks/useEvent";
import { useState, useEffect } from "react";

type TimeValue = {
    label: string;
    value: string;
};

const times: TimeValue[] = [
    {
        label: "Dias",
        value: "098",
    },
    {
        label: "Horas",
        value: "21",
    },
    {
        label: "Minutos",
        value: "36",
    },
    {
        label: "Segundos",
        value: "01",
    },
];

export const Counter = () => {
    const { event } = useEvent();
    const [timeLeft, setTimeLeft] = useState<TimeValue[]>([]);
    const textsFont = event?.fontes?.texts ?? "font-poppins";

    const colors = event?.cores ?? {
        main_color: "#E41414",
        texts: "#ffffff",
        menus: "#E41414",
        names: "#000000",
        titles: "#000000",
        titles_2: "#000000",
        texts_2: "#000000",
        
    };

    const showCountdown = event?.exibir_contagem_regressiva_id ?? true;

    useEffect(() => {
        if (!event?.data_evento) return;
        console.log(event.data_evento)

        const targetDate = new Date(
            event.data_evento
                .split(" ")[0] // Separa a parte da data (21/03/2027)
                .split("/") // Divide a data em [dia, mês, ano]
                .reverse() // Reverte para [ano, mês, dia]
                .join("-") + // Junta como "2027-03-21"
                "T" + // Adiciona o separador de data e hora
                event.data_evento.split(" ")[1] // Adiciona a parte da hora (00:00:00)
        );
        


        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                return [
                    { label: "Dias", value: "00" },
                    { label: "Horas", value: "00" },
                    { label: "Minutos", value: "00" },
                    { label: "Segundos", value: "00" },
                ];
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            return [
                { label: "Dias", value: String(days).padStart(2, "0") },
                { label: "Horas", value: String(hours).padStart(2, "0") },
                { label: "Minutos", value: String(minutes).padStart(2, "0") },
                { label: "Segundos", value: String(seconds).padStart(2, "0") },
            ];
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [event?.data_evento]);



    if (!showCountdown) {
        return null;
    }

    return (
        <div className={`flex w-full items-center justify-center gap-6  md:gap-20 ${textsFont}`}>
            {timeLeft .map((time, index) => (
                <div key={index} className="flex flex-col items-center md:gap-5 font-medium">
                    <span
                        className="text-4xl md:text-6xl lg:text-8xl"
                        style={{
                            color: colors.main_color,
                        }}
                    >
                        {time.value}
                    </span>
                    <span
                        className= " text-lg md:text-2xl lg:text-xl"
                        style={{
                            color: colors.texts,
                        }}
                    >
                        {time.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

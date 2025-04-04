"use client";

import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { TemplateType } from "@/types";
import { Templates } from "@/lib/templates";

export type TemplateContextData = {
    selectedRoute: TemplateRoute;
    selectedTemplate: ReactNode | null;
    handleSelectRoute: (route: TemplateRoute) => void;
    handleSelectTemplate: (id: number, type: TemplateType) => void;
};

type TemplateContextProviderProps = {
    children: ReactNode;
};

export type TemplateRoute = "inicio" | "mensagem" | "presentes" | "confirmar-presenca" | "nossa-historia";

export const TemplateContext = createContext<TemplateContextData | null>(null);

export function TemplateContextProvider({ children }: TemplateContextProviderProps) {
    

    

    const [selectedRoute, setSelectedRoute] = useState<TemplateRoute>("inicio");
    const [selectedTemplateId, setSelectedTemplateId] = useState<number | null>(null);
    const [selectedTemplateType, setSelectedTemplateType] = useState<TemplateType | null>(null);
    const [selectedTemplate, setSelectedTemplate] = useState<ReactNode | null>(null);

    useEffect(() => {
        if (selectedTemplateId !== null && selectedTemplateType !== null) {
            const template = Templates.find((t) => t.id === selectedTemplateId && t.type === selectedTemplateType);
            if (template) {
                setSelectedTemplate(template.pages[selectedRoute]);
            }
        }
    }, [selectedRoute, selectedTemplateId, selectedTemplateType]);

    const handleSelectRoute = useCallback((route: TemplateRoute) => {
        setSelectedRoute(route);
    }, []);

    const handleSelectTemplate = useCallback((id: number, type: TemplateType) => {
        setSelectedTemplateId(id);
        setSelectedTemplateType(type);
    }, []);

    return (
        <TemplateContext.Provider value={{ selectedRoute, selectedTemplate, handleSelectRoute, handleSelectTemplate }}>
            {children}
        </TemplateContext.Provider>
    );
}

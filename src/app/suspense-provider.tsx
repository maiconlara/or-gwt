"use client";

import { ReactNode, useEffect, useState } from "react";
import { SuspenseAnimation } from "@/components";
interface ProvidersProps {
    children: ReactNode;
}

export const SuspenseProvider = ({ children }: ProvidersProps) => {
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowChildren(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    return <SuspenseAnimation showChildren={showChildren}>{children}</SuspenseAnimation>;
};

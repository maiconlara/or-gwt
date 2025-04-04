"use client";

import { ReactNode, useEffect, useState } from "react";
import { useEvent } from "@/utils/hooks/useEvent";
import { SuspenseAnimation } from "@/components";
interface ProvidersProps {
    children: ReactNode;
}

export const SuspenseProvider = ({ children }: ProvidersProps) => {
    const { isLoading } = useEvent();
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (!isLoading) {
            timer = setTimeout(() => {
                setShowChildren(true);
            }, 1000);
        } else {
            setShowChildren(false);
        }

        return () => clearTimeout(timer);
    }, [isLoading]);

    return <SuspenseAnimation showChildren={showChildren}>{children}</SuspenseAnimation>;
};

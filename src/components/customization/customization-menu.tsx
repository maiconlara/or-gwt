"use client";

import { useCustomizationStep } from "@/utils/hooks/useCustomizationStep";
import { SuspenseFallback } from "@/components/ui/suspense-fallback";
import { CustomizationSidebar } from "./customization-sidebar";
import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CustomizationHeader } from "@/components";
import { useEvent } from "@/utils/hooks/useEvent";
import AnimateIcon from "@/assets/icons/animate";
import React from "react";

interface CustomizationMenuProps {
    children: React.ReactNode;
}

export const CustomizationMenu = ({ children }: CustomizationMenuProps) => {
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

    return (
        <div className="flex h-full w-full flex-col overflow-auto">
            <div className="z-50 flex w-full flex-col">
                <CustomizationHeader />
            </div>

            <div className="flex min-h-[calc(100vh)] w-full flex-row overflow-x-hidden bg-white">
                <CustomizationSidebar />
                <div className="flex min-h-[calc(100vh)] w-full max-w-[calc(100vw-376px)] flex-col">
                    <AnimatePresence>
                        {showChildren ? (
                            <motion.div
                                key="children"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex w-full flex-col"
                            >
                                {children}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="fallback"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.1 }}
                            >
                                <div className="flex h-[700px] w-full items-center justify-center bg-white/90">
                                    <AnimateIcon />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

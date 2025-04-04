"use client";

import { SuspenseFallback } from "@/components/ui/suspense-fallback";
import { motion, AnimatePresence } from "motion/react";

interface SuspenseAnimationProps {
    children: React.ReactNode;
    showChildren: boolean;
}

export const SuspenseAnimation = ({ children, showChildren }: SuspenseAnimationProps) => {
    return (
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
                    <SuspenseFallback />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

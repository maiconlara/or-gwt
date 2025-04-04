"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { RiLoader4Fill } from "@remixicon/react";

interface LoadingModalProps {
    isOpen?: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    successMessage: string;
    errorMessage?: string;
    isLoading: boolean;
    closeButton?: boolean;
}

export const LoadingModal = ({
    isOpen = false,
    setIsOpen,
    title,
    successMessage,
    errorMessage,
    isLoading,
    closeButton = false,
}: LoadingModalProps) => {
    return (
        <Dialog open={isOpen}>
            <DialogContent
                aria-describedby={undefined}
                className="w-full max-w-[400px] items-center gap-10 overflow-auto bg-[#fff] focus:outline-none focus:ring-0"
            >
                <div className="flex w-full flex-col items-center gap-10">
                    <DialogTitle className="flex w-full cursor-default flex-col items-start justify-start font-semibold text-[#57595b]">
                        {" "}
                        {title}{" "}
                    </DialogTitle>

                    <div className="flex w-full flex-col items-center gap-6">
                        {isLoading ? (
                            <div className="flex min-h-[60px] flex-col items-center justify-center">
                                <RiLoader4Fill className="h-12 w-12 animate-spin text-[#57595b]" />
                            </div>
                        ) : (
                            <div className="flex w-full flex-col items-start justify-start">
                                <p className="text-normal cursor-default select-none text-[#57595b]">
                                    {errorMessage ? errorMessage : successMessage}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex w-full flex-row items-center justify-end">
                        {(errorMessage || closeButton) && (
                            <div
                                onClick={() => setIsOpen(false)}
                                className="flex h-10 cursor-pointer flex-row items-center justify-center gap-3 bg-green px-4 transition-colors hover:bg-green/80"
                            >
                                <p className="font-regular font-abel text-base text-white">Fechar</p>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

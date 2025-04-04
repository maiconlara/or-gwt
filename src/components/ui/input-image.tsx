"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui";
import { AxiosError } from "axios";
import { useState } from "react";
import { cn } from "@/lib/utils";
import * as React from "react";
import Image from "next/image";
import api from "@/lib/api";
import { AddImageIcon } from "@/assets/icons";

export interface InputPropsImage extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    editableImage: string;
    setEditableImage: React.Dispatch<React.SetStateAction<string>>;
    endpoint: string;
    keyName: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
}

const InputImage = React.forwardRef<HTMLInputElement, InputPropsImage>(
    ({ className, editableImage, setEditableImage, endpoint, keyName, width, height, alt, ...props }, ref) => {
        const { toast } = useToast();

        const HandleDataChange = async (putData: any) => {
            const { data } = await api.post(endpoint, putData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return data.data;
        };

        const { mutate, isPending } = useMutation({
            mutationFn: HandleDataChange,
            onSuccess: (data) => {
                setEditableImage(data[keyName]);
                toast({
                    duration: 4000,
                    className: "bg-success text-white",
                    title: "Sucesso",
                    description: "Alteração realizada com sucesso!",
                });
            },
            onError: (error: AxiosError) => {
                const { response } = error;
                if (!response) {
                    toast({
                        duration: 4000,
                        className: "bg-error",
                        variant: "destructive",
                        title: "Ocorreu um erro ao salvar o dado",
                        description:
                            "Não se preocupe, o erro foi do nosso lado. Já fomos notificados e iremos trabalhar para corrigir.",
                    });
                    return;
                }

                toast({
                    duration: 4000,
                    className: "bg-error",
                    variant: "destructive",
                    title: "Ocorreu um erro ao salvar o dado",
                    description: "O valor digitado é inválido e não pode ser salvo. Tente novamente.",
                });
            },
        });



        const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const formData = new FormData();
                formData.append("_method", "PUT");
                formData.append(keyName, file);

                mutate(formData);
            }
        };

      

        return  (
       
            <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <label
                        htmlFor={keyName}
                        className="relative flex  w-full cursor-pointer flex-row items-center justify-center bg-placeholder"
                        style={{
                            height: height,
                            maxWidth: width
                        }}
                    >
                        {editableImage ? (
                            <Image
                                width={width}
                                height={height}
                                src={editableImage}
                                alt={alt}
                                className={cn("absolute inset-0 h-full w-full object-cover", className)}
                            />
                        ) : (
                            <AddImageIcon className="cursor-pointer text-white" w={84} h={84} />
                        )}
                        <input
                            ref={ref}
                            type="file"
                            accept="image/*"
                            id={keyName}
                            className="invisible h-0 w-0"
                            onChange={handleInputChange}
                        />
                    </label>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Clique para editar</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        );
    },
);

InputImage.displayName = "InputImage";

export { InputImage };

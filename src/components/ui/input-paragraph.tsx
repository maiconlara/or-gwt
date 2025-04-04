"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui";
import { AxiosError } from "axios";
import { useState } from "react";
import { cn } from "@/lib/utils";
import * as React from "react";
import api from "@/lib/api";

export interface InputPropsParagraph extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    editableText: string;
    setEditableText: React.Dispatch<React.SetStateAction<string>>;
    endpoint: string;
    keyName: string;
    font: string;
    color: string;
    rows: number;
}

const InputParagraph = React.forwardRef<HTMLTextAreaElement, InputPropsParagraph>(
    ({ className, type, editableText, setEditableText, endpoint, font, color, keyName, rows, ...props }, ref) => {
        const [isEditing, setIsEditing] = useState(false);
        const [initialText, setInitialText] = useState(editableText); 

        const { toast } = useToast();

        const HandleDataChange = async (putData: any) => {
            const { data } = await api.put(endpoint, putData);
            return data.data;
        };

        const { mutate, isPending } = useMutation({
            mutationFn: HandleDataChange,
            onSuccess: () => {
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

        // const handleTextClick = () => {
        //     if (isPending) return;
        //     setIsEditing(true);
        // };

        
        const handleTextClick = () => {
            if (isPending) return;
            setInitialText(editableText); // Salva o valor antes da edição
            setIsEditing(true);
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setEditableText(e.target.value);
        };



        const handleInputBlur = () => {
            setIsEditing(false);
        
            if (editableText.trim() === "") {
                setEditableText(initialText); 
                return;
            }
        
            if (editableText !== initialText) {
                const putData = { [keyName]: editableText };
                mutate(putData);
            }
        };


        const handleInputKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter") {
                setIsEditing(false);
        
                if (editableText.trim() === "") {
                    setEditableText(initialText); 
                    return;
                }
        
                if (editableText !== initialText) {
                    const putData = { [keyName]: editableText };
                    mutate(putData);
                }
            }
        };

        return isEditing ? (
         
            <textarea
                ref={ref}
                value={editableText}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                // onKeyDown={handleInputKeyPress}
                className={cn(
                    `resize-none border-none bg-transparent whitespace-pre-line  focus:outline-none focus:ring-0 ${font}`,
                    className,
                )}
                style={{
                    color: color,
                    whiteSpace: "pre-wrap", 
                    width: "100%", 
                }}
                autoFocus
                rows={rows} 
                {...props}
            />
        ) : (
            <TooltipProvider delayDuration={200}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <p
                            className={cn(`${font} cursor-pointer`, className)}
                            style={{
                                color: color,
                            }}
                            onClick={handleTextClick}
                        >
                            {editableText}
                        </p>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Clique para editar</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    },
);

InputParagraph.displayName = "InputParagraph";

export { InputParagraph };

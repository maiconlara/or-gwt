"use client";

import Image, { StaticImageData } from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useEvent } from "@/utils/hooks/useEvent";
import { LoadingModal } from "@/components/ui";
import { Evento, TemplateType } from "@/types";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useState } from "react";
import Link from "next/link";
import api from "@/lib/api";
import { useAuth } from "@/utils/hooks/useAuth";

interface Template {
    id: number;
    name: string;
    type: TemplateType;
    image: StaticImageData | null;
    url: string | null;
    categoryName: string;
    categoryId: number;
}

interface TemplateProps {
    templates: Template[];
}

interface PutData {
    template_id: number;
    template_tipo: TemplateType;
}

interface ReturnData {
    data: Evento;
}

export const TemplateList = ({ templates }: TemplateProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const { refetchEvent } = useEvent();
    const { user } = useAuth();

    const userTemplateConfig = user?.categoria_evento_id;

    const mappedTemplates = templates.filter((template) => userTemplateConfig === template.categoryId);

    const { push } = useRouter();
    const SelectTemplateRequest = async (putData: PutData) => {
        const { data } = await api.put<ReturnData>(
            `/organizador/personalizar-site/atualizar-informacoes-evento`,
            putData,
        );
        return data.data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: SelectTemplateRequest,
        onSuccess: async (data) => {
            setErrorMessage(undefined);
            await refetchEvent();
            push(`personalizar/${data.template_tipo}/${data.template_id}`);
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                setErrorMessage("Ocorreu um erro ao selecionar o template.");
                return;
            }

            setErrorMessage("Erro ao selecionar template. Tente novamente mais tarde.");
        },
    });

    const handleSelectTemplate = (template: Template) => {
        setIsOpen(true);
        const putData = {
            template_id: template.id,
            template_tipo: template.type,
        };

        mutate(putData);
    };

    const handleViewTemplate = (template: Template) => {
        refetchEvent();
        push(template.url ? template.url : `personalizar/${template.type}/${template.id}`);
    };

    return (
        <>
            <div className="flex w-full flex-row justify-center py-10">
                <div className="grid w-full max-w-[1368px] grid-cols-1 gap-10 xl:grid-cols-3 3xl:grid-cols-4">
                  
                    {templates.length > 0 ? (
                        mappedTemplates.map((template, index) => (
                            <div
                                key={index}
                                className="col-span-1 flex h-[495px] w-full max-w-[318px] flex-col justify-between rounded-[38px] border border-lines"
                            >
                                {template.image ? (
                                    <Image
                                        alt=""
                                        src={template.image}
                                        priority
                                        quality={100}
                                        width={1276}
                                        height={1080}
                                        className="h-[429px] w-full rounded-t-[38px] object-cover"
                                    />
                                ) : (
                                    <div className="h-[429px] w-full rounded-t-[38px]" />
                                )}

                                <div className="flex h-[66px] w-full flex-row items-center justify-center border-t border-lines">
                                    <div
                                        onClick={() => handleSelectTemplate(template)}
                                        className="flex h-full w-full cursor-pointer items-center justify-center font-poppins text-base font-bold uppercase text-darkteal hover:text-darkteal/80"
                                    >
                                        Selecionar
                                    </div>
                                    <div className="flex h-full min-w-[1px] max-w-[1px] flex-1 flex-wrap bg-lines" />
                                    <div
                                        onClick={() => handleViewTemplate(template)}
                                        className="flex h-full w-full cursor-pointer items-center justify-center font-poppins text-base font-bold uppercase text-darkteal hover:text-darkteal/80"
                                    >
                                        Visualizar
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col w-full col-span-1 xl:col-span-3 3xl:col-span-4 mt-32">

                        <p className="text-center text-xl font-bold text-darkteal cursor-default">
                            Sinto muito, não encontramos templates para a você.
                        </p>
                        </div>
                    )}
                </div>
            </div>
            <LoadingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Seleção de template"}
                successMessage="Seu template está pronto para ser personalizado."
                errorMessage={errorMessage}
                isLoading={isPending}
            />
        </>
    );
};

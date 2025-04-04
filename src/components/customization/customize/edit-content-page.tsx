"use client";

import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useEvent } from "@/utils/hooks/useEvent";
import { LoadingModal } from "@/components/ui";
import { AddImageIcon } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@/assets/icons";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import api from "@/lib/api";

export const EditContentPage = () => {
    const [slideshowPhotos, setSlideshowPhotos] = useState<(File | null)[]>([null, null, null, null, null, null]);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);
    const { event, refetchEvent } = useEvent();
    const { push } = useRouter();
    const eventType = event?.template_tipo;
    const eventId = event?.template_id;

    const [content, setContent] = useState({
        aboutText: "",
        aboutDayText: "",
        aboutGraduationText: "",
        aboutFirstPersonText: "",
        aboutSecondPersonText: "",
        ourHistoryText: "",
        aboutMeText: "",
        aboutEventText: "",
    });

    useEffect(() => {
        if (event?.conteudo) {
            setContent({
                aboutText: event.conteudo.sobre || "",
                aboutDayText: event.conteudo.sobre_dia || "",
                aboutGraduationText: event.conteudo.sobre_graduacao || "",
                aboutFirstPersonText: event.conteudo.sobre_primeira_pessoa || "",
                aboutSecondPersonText: event.conteudo.sobre_segunda_pessoa || "",
                ourHistoryText: event.conteudo.sobre_nossa_historia || "",
                aboutMeText: event.conteudo.sobre_mim || "",
                aboutEventText: event.conteudo.sobre_evento || "",
            });
        }
    }, [event]);

    const handleSlideshowChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = event.target.files?.[0];
        if (file) {
            const updatedPhotos = [...slideshowPhotos];
            updatedPhotos[index] = file;
            setSlideshowPhotos(updatedPhotos);
        }
    };

    const ChangeContentRequest = async (formData: FormData) => {
        const { data } = await api.post(`/organizador/personalizar-site/atualizar-conteudo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data.data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: ChangeContentRequest,
        onSuccess: async () => {
            setErrorMessage(undefined);

            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
            await refetchEvent();
            push(`/personalizar/${eventType}/${eventId}`);
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                setErrorMessage("Ocorreu um erro ao salvar o conteúdo.");
                return;
            }

            setErrorMessage("Erro ao salvar o conteúdo. Tente novamente mais tarde.");
        },
    });

    const handleSaveContent = () => {
        setIsOpen(true);

        const formData = new FormData();

        formData.append("_method", "PUT");

        slideshowPhotos.forEach((photo, index) => {
            if (photo) {
                formData.append(`galeria[${index}]`, photo);
            }
        });

        const fieldMapping = {
            aboutText: "sobre",
            aboutDayText: "sobre_dia",
            aboutGraduationText: "sobre_graduacao",
            aboutFirstPersonText: "sobre_primeira_pessoa",
            aboutSecondPersonText: "sobre_segunda_pessoa",
            ourHistoryText: "sobre_nossa_historia",
            aboutMeText: "sobre_mim",
            aboutEventText: "sobre_evento",
        };

        Object.entries(content).forEach(([key, value]) => {
            if (value && fieldMapping[key as keyof typeof fieldMapping]) {
                formData.append(fieldMapping[key as keyof typeof fieldMapping], value);
            }
        });

        mutate(formData);
    };

    const handleBackButton = async () => {
        await refetchEvent();
        push(`/personalizar/${eventType}/${eventId}`);
    };

    return (
        <>
            <div className="relative flex w-full flex-col items-center gap-12 px-20 py-12">
                <div className="flex flex-row gap-2 w-full">
                <button className="flex flex-row gap-2 text-sm text-green items-center justify-center" onClick={handleBackButton}>
                    <ArrowLeftIcon w={12} h={12} className="text-green" />
                    Layout
                </button>
                </div>
                {eventType === "celebracao" && (
                    <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                        <div className="flex w-full flex-col gap-8 px-[82px]">
                            <div className="flex w-full flex-col gap-8">
                                <p className="font-poppins text-3xl font-normal text-darkgray">Sobre a celebração</p>
                                <p className="text-gray-500">
                                    Faça uma breve decrição da celebração, essa mensagem será apresentada em várias
                                    partes do site.
                                </p>
                                <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                            </div>
                        </div>

                        <div className="flex w-full flex-col px-[82px]">
                            <Textarea
                                value={content.aboutText}
                                onChange={(e) => setContent({ ...content, aboutText: e.target.value })}
                                placeholder="Escreva seu texto"
                                className="h-[286px] w-full resize-none"
                            />
                        </div>
                    </div>
                )}

                {eventType === "festa-infantil" && (
                    <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                        <div className="flex w-full flex-col gap-8 px-[82px]">
                            <div className="flex w-full flex-col gap-8">
                                <p className="font-poppins text-3xl font-normal text-darkgray">Sobre a festa</p>
                                <p className="text-gray-500">
                                    Faça uma breve decrição da festa, essa mensagem será apresentada em várias partes do
                                    site.
                                </p>
                                <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                            </div>
                        </div>

                        <div className="flex w-full flex-col px-[82px]">
                            <Textarea
                                value={content.aboutText}
                                onChange={(e) => setContent({ ...content, aboutText: e.target.value })}
                                placeholder="Escreva seu texto"
                                className="h-[286px] w-full resize-none"
                            />
                        </div>
                    </div>
                )}

                {eventType === "quinze-anos" && (
                    <>
                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">Sobre o dia</p>
                                    <p className="text-gray-500">
                                        Faça uma breve decrição da festa, essa mensagem será apresentada em várias
                                        partes do site.
                                    </p>
                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col px-[82px]">
                                <Textarea
                                    value={content.aboutDayText}
                                    onChange={(e) => setContent({ ...content, aboutDayText: e.target.value })}
                                    placeholder="Escreva seu texto"
                                    className="h-[286px] w-full resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">Galeria</p>

                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-center justify-center px-[82px]">
                                <div className="grid w-full grid-cols-3 gap-6">
                                    {slideshowPhotos.map((photo, index) => (
                                        <label
                                            key={index}
                                            htmlFor={`slide${index}`}
                                            className="relative col-span-1 flex h-[228px] w-full cursor-pointer flex-row items-center justify-center bg-placeholder"
                                        >
                                            {photo ? (
                                                <img
                                                    src={URL.createObjectURL(photo)}
                                                    alt="Uploaded"
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                />
                                            ) : (
                                                <AddImageIcon className="cursor-pointer text-white" w={84} h={84} />
                                            )}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                id={`slide${index}`}
                                                name="coverUrl"
                                                className="invisible h-0 w-0"
                                                onChange={(event) => handleSlideshowChange(event, index)}
                                            />
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {eventType === "graduacao" && (
                    <>
                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">Sobre o dia</p>
                                    <p className="text-gray-500">
                                        Faça uma breve decrição do dia, essa mensagem será apresentada no site.
                                    </p>
                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col px-[82px]">
                                <Textarea
                                    value={content.aboutDayText}
                                    onChange={(e) => setContent({ ...content, aboutDayText: e.target.value })}
                                    placeholder="Escreva seu texto"
                                    className="h-[286px] w-full resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">Sobre a graduação</p>
                                    <p className="text-gray-500">
                                        Faça uma breve decrição da graduação, essa mensagem será apresentada no site.
                                    </p>
                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col px-[82px]">
                                <Textarea
                                    value={content.aboutGraduationText}
                                    onChange={(e) => setContent({ ...content, aboutGraduationText: e.target.value })}
                                    placeholder="Escreva seu texto"
                                    className="h-[286px] w-full resize-none"
                                />
                            </div>
                        </div>
                    </>
                )}

                {eventType === "casamento" && (
                    <>
                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">
                                        Sobre a noiva/noivo
                                    </p>
                                    <p className="text-gray-500">
                                        Faça uma breve decrição, essa mensagem será apresentada no site.
                                    </p>
                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col px-[82px]">
                                <Textarea
                                    value={content.aboutFirstPersonText}
                                    onChange={(e) => setContent({ ...content, aboutFirstPersonText: e.target.value })}
                                    placeholder="Escreva seu texto"
                                    className="h-[286px] w-full resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">
                                        Sobre o noivo/noiva
                                    </p>
                                    <p className="text-gray-500">
                                        Faça uma breve decrição, essa mensagem será apresentada no site.
                                    </p>
                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col px-[82px]">
                                <Textarea
                                    value={content.aboutSecondPersonText}
                                    onChange={(e) => setContent({ ...content, aboutSecondPersonText: e.target.value })}
                                    placeholder="Escreva seu texto"
                                    className="h-[286px] w-full resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">Nossa historia</p>
                                    <p className="text-gray-500">Descreva a história do casal, não poupe detalhes.</p>
                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col px-[82px]">
                                <Textarea
                                    value={content.ourHistoryText}
                                    onChange={(e) => setContent({ ...content, ourHistoryText: e.target.value })}
                                    placeholder="Escreva seu texto"
                                    className="h-[286px] w-full resize-none"
                                />
                            </div>
                        </div>
                    </>
                )}
                {eventType === "aniversario" && (
                    <>
                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">Sobre o dia</p>
                                    <p className="text-gray-500">
                                        Faça uma breve decrição do dia, essa mensagem será apresentada no site.
                                    </p>
                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col px-[82px]">
                                <Textarea
                                    value={content.aboutDayText}
                                    onChange={(e) => setContent({ ...content, aboutDayText: e.target.value })}
                                    placeholder="Escreva seu texto"
                                    className="h-[286px] w-full resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">Sobre o evento</p>
                                    <p className="text-gray-500">
                                        Faça uma breve decrição do evento, essa mensagem será apresentada no site.
                                    </p>
                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col px-[82px]">
                                <Textarea
                                    value={content.aboutEventText}
                                    onChange={(e) => setContent({ ...content, aboutEventText: e.target.value })}
                                    placeholder="Escreva seu texto"
                                    className="h-[286px] w-full resize-none"
                                />
                            </div>
                        </div>

                        <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                            <div className="flex w-full flex-col gap-8 px-[82px]">
                                <div className="flex w-full flex-col gap-8">
                                    <p className="font-poppins text-3xl font-normal text-darkgray">Sobre mim</p>
                                    <p className="text-gray-500">Faça uma decrição você, não poupe detalhes.</p>
                                    <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                                </div>
                            </div>

                            <div className="flex w-full flex-col px-[82px]">
                                <Textarea
                                    value={content.aboutMeText}
                                    onChange={(e) => setContent({ ...content, aboutMeText: e.target.value })}
                                    placeholder="Escreva seu texto"
                                    className="h-[286px] w-full resize-none"
                                />
                            </div>
                        </div>
                    </>
                )}

                <div className="flex w-full max-w-[1185px] flex-row justify-end">
                    <div
                        onClick={handleSaveContent}
                        className="font-regular flex h-10 cursor-pointer flex-col items-center justify-center rounded-md bg-darkteal px-8 font-poppins text-base uppercase text-white"
                    >
                        Salvar
                    </div>
                </div>
            </div>
            <LoadingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Salvar conteúdo"}
                successMessage="Conteúdo salvo com sucesso."
                errorMessage={errorMessage}
                isLoading={isPending}
                closeButton
            />
        </>
    );
};

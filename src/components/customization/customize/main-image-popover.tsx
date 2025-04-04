"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RiArrowRightSLine, RiVideoAddLine } from "@remixicon/react";
import { MediaTypeCombobox } from "./media-type-combobox";
import { useMutation } from "@tanstack/react-query";
import { useEvent } from "@/utils/hooks/useEvent";
import { LoadingModal } from "@/components/ui";
import { AddImageIcon } from "@/assets/icons";
import { AxiosError } from "axios";
import { useState } from "react";
import Image from "next/image";
import api from "@/lib/api";


interface ReturnData {
    data: any;
}

interface MainImageProps {
    children: React.ReactNode;
}

export const MainImagePopover = ({ children }: MainImageProps) => {
    const { event, changeMainImageValue } = useEvent();

    const [mediaType, setMediaType] = useState<"Imagem" | "Video" | "Slideshow">("Imagem");
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [isOpen, setIsOpen] = useState(false);
    const [photo, setPhoto] = useState<File | null>(null);
    const [slideshowPhotos, setSlideshowPhotos] = useState<(File | null)[]>([null, null, null, null]);
    const [video, setVideo] = useState<File | null>(null);

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setPhoto(reader.result as string);
            // };
            // reader.readAsDataURL(file);

            setPhoto(file);

            const imageUrl = URL.createObjectURL(file);
            const image = {
                id: Math.random(),
                nome: "Imagem",
                url: imageUrl,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            };
            changeMainImageValue([image], "Imagem");
        }
    };

    const handleSlideshowChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = event.target.files?.[0];
        if (file) {
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     const updatedPhotos = [...slideshowPhotos];
            //     updatedPhotos[index] = reader.result as string;
            //     setSlideshowPhotos(updatedPhotos);
            // };
            // reader.readAsDataURL(file);
            const updatedPhotos = [...slideshowPhotos];
            updatedPhotos[index] = file;
            setSlideshowPhotos(updatedPhotos);

            changeMainImageValue(updatedPhotos.map((photo, idx) => photo ? {
                id: Math.random(),
                nome: `Imagem ${idx + 1}`,
                url: URL.createObjectURL(photo),
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            } : null).filter(Boolean) as any, "Slideshow");
        }
    };

    const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setVideo(reader.result as string);
            // };
            // reader.readAsDataURL(file);
            setVideo(file);

            const videoUrl = URL.createObjectURL(file);
            const video = {
                id: Math.random(),
                nome: "Video",
                url: videoUrl,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            };
            changeMainImageValue([video], "Video");
        }
    };

    const ChangeMediaRequest = async (formData: FormData) => {
        const { data } = await api.post<ReturnData>(`/organizador/personalizar-site/atualizar-imagem-principal`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data.data;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: ChangeMediaRequest,
        onSuccess: () => {
            setErrorMessage(undefined);
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        },
        onError: (error: AxiosError) => {
            const { response } = error;
            if (!response) {
                setErrorMessage("Ocorreu um erro ao alterar as midias.");
                return;
            }

            setErrorMessage("Erro ao alterar as midias. Tente novamente mais tarde.");
        },
    });

    // const handleSaveImage = () => {
    //     setIsOpen(true);
    //     const putData = {
    //         tipo_capa: mediaType,
    //         galeria: slideshowPhotos.filter((photo) => photo !== null) as string[],
    //     };

    //     mutate(putData);
    // };
    const handleSaveMedia = () => {
        setIsOpen(true);
        const formData = new FormData();
        formData.append("tipo_capa", mediaType);

        if (mediaType === "Imagem" && photo) {
            formData.append("_method", "PUT");
            formData.append("galeria[0]", photo);
        } else if (mediaType === "Video" && video) {
            formData.append("_method", "PUT");
            formData.append("galeria[0]", video);
        } else if (mediaType === "Slideshow") {
            formData.append("_method", "PUT");
            slideshowPhotos.forEach((photo, index) => {
                if (photo) {
                    formData.append(`galeria[${index}]`, photo);
                }
            });
        }

        mutate(formData);
    };

    const renderMediaContent = () => {
        switch (mediaType) {
            case "Imagem":
                return (
                    <div className="flex w-full flex-col items-center gap-6">
                        <label
                            htmlFor="capa-site"
                            className="relative flex h-[228px] w-full cursor-pointer flex-row items-center justify-center bg-placeholder"
                        >
                            {photo ? (
                                <Image
                                    src={URL.createObjectURL(photo)}
                                    alt="Uploaded"
                                    fill
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            ) : (
                                <AddImageIcon className="cursor-pointer text-white" w={84} h={84} />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                id="capa-site"
                                name="coverUrl"
                                className="invisible h-0 w-0"
                                onChange={handlePhotoChange}
                            />
                        </label>
                        <div className="flex w-full flex-row justify-end">
                            <div
                                onClick={() => handleSaveMedia()}
                                className="font-regular flex h-10 w-[227px] cursor-pointer flex-col items-center justify-center bg-darkteal font-poppins text-base uppercase text-white"
                            >
                                Salvar Foto
                            </div>
                        </div>
                    </div>
                );
            case "Video":
                return (
                    <div className="flex w-full flex-col items-center gap-6">
                        <label
                            htmlFor="video-upload"
                            className="relative flex h-[228px] w-full cursor-pointer flex-row items-center justify-center bg-placeholder"
                        >
                            {video ? (
                                <video
                                    src={URL.createObjectURL(video)}
                                    controls
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            ) : (
                                <RiVideoAddLine className="h-20 w-20 cursor-pointer text-white" />
                            )}
                            <input
                                type="file"
                                accept="video/*"
                                id="video-upload"
                                name="videoUrl"
                                className="invisible h-0 w-0"
                                onChange={handleVideoChange}
                            />
                        </label>
                        <div className="flex w-full flex-row justify-end">
                            <div
                             onClick={() => handleSaveMedia()}
                            className="font-regular flex h-10 w-[227px] cursor-pointer flex-col items-center justify-center bg-darkteal font-poppins text-base uppercase text-white">
                                Salvar Vídeo
                            </div>
                        </div>
                    </div>
                );
            case "Slideshow":
                return (
                    <div className="flex w-full flex-col items-center gap-6">
                        <div className="grid w-full grid-cols-2 gap-2">
                            {slideshowPhotos.map((photo, index) => (
                                <label
                                    key={index}
                                    htmlFor={`slide${index}`}
                                    className="relative flex h-[142px] w-full cursor-pointer flex-row items-center justify-center bg-placeholder"
                                >
                                    {photo ? (
                                        <Image
                                            src={URL.createObjectURL(photo)}
                                            alt="Uploaded"
                                            fill
                                            className="absolute inset-0 h-full w-full object-cover"
                                        />
                                    ) : (
                                        <AddImageIcon className="cursor-pointer text-white" w={64} h={64} />
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

                        <div className="flex w-full flex-row justify-end">
                            <div
                             onClick={() => handleSaveMedia()}
                            className="font-regular flex h-10 w-[227px] cursor-pointer flex-col items-center justify-center bg-darkteal font-poppins text-base uppercase text-white">
                                Salvar Slideshow
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Popover>
                <PopoverTrigger className="flex w-full flex-row">
                    <div className="flex h-10 w-full cursor-pointer flex-row items-center justify-between px-14">
                        <p className="font-poppins text-base text-darkteal">{children}</p>
                        <RiArrowRightSLine className="text-darkteal" />
                    </div>
                </PopoverTrigger>
                <PopoverContent
                    side="right"
                    className="flex w-[459px] flex-col items-center justify-between gap-8 rounded-xl border-0 bg-white px-10 py-10 shadow-xl"
                >
                    <div className="flex w-full flex-col items-start justify-center gap-4">
                        <p className="font-regular cursor-default font-poppins text-base text-darkteal">
                            Adicione suas imagens favoritas
                        </p>
                        <p className="font-regular cursor-default font-poppins text-lg text-black">Capa do site</p>
                        <p className="font-regular max-w-[300px] cursor-default font-poppins text-base text-black">
                            Você pode adicionar vídeos, imagens ou slideshow.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-start justify-between gap-3">
                        <p className="font-regular cursor-default font-poppins text-lg text-darkteal">
                            Selecione uma opção
                        </p>
                        <div className="flex w-full flex-col gap-0">
                            <MediaTypeCombobox
                                placeholder="Selecione uma opção"
                                items={[
                                    {
                                        value: "Imagem",
                                        label: "Imagem",
                                    },
                                    {
                                        value: "Video",
                                        label: "Vídeo",
                                    },
                                    {
                                        value: "Slideshow",
                                        label: "Slideshow",
                                    },
                                ]}
                                value={mediaType}
                                setValue={setMediaType}
                            />
                            <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                        </div>

                        {renderMediaContent()}
                    </div>
                </PopoverContent>
            </Popover>
            <LoadingModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Alterar imagem principal"}
                successMessage="Suas midias foram salvas com sucesso."
                errorMessage={errorMessage}
                isLoading={isPending}
                closeButton
            />
        </>
    );
};

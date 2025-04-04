"use client";

import { useTemplate } from "@/utils/hooks/useTemplate";




export const RenderComponent = () => {

    const {selectedTemplate} = useTemplate();

    if (!selectedTemplate) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-start overflow-auto bg-white focus:ring-0 focus:outline-none">
            <p className="font-regular mt-[250px] cursor-default font-poppins text-2xl text-[#52849A] lg:text-5xl lg:text-[56px]">
                Esse template não existe!
            </p>
        </div>
        );
    }

    return (
        <div className="flex h-full w-full flex-col items-center justify-start overflow-hidden bg-white">
           {selectedTemplate}
        </div>
    );
}
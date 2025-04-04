"use client";
import { redirect } from "next/navigation";

import { usePublicEvent } from "@/utils/hooks/usePublicEvent";
import {Templates} from "@/lib/templates";

export const RenderPublicTemplate = () => {
    const { publicEvent } = usePublicEvent();
    

    if (!publicEvent) {
        redirect(`/404`);
    }

    const selectedTemplate = Templates.find(
        (template) =>
            template.id === publicEvent.template_id &&
            template.type === publicEvent.template_tipo
    );
    console.log("Template selecionado:", selectedTemplate);


    return <div className="flex h-full w-full flex-col items-center justify-start overflow-hidden bg-white">



    </div>;
};

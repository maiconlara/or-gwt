import { templateDebutante, templateCasamento, templateFormatura, templateInfantil04 } from "@/assets/images";
import { TemplateList } from "@/components/customizable-templates/template-list";
import { Templates } from "@/lib/templates";

import { TemplateType } from "@/types";
import { Metadata } from "next";


export default async function Page() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-start overflow-auto bg-white">
            <div className="flex w-full flex-col gap-12 px-20 pt-12">
                <div className="flex w-full cursor-default flex-col items-start gap-4">
                    <p className="font-poppins text-6xl font-normal text-darkgray">Templates</p>
                    <p className="font-poppins text-xl font-normal text-darkgray">
                        Escolha a base do seu site selecionando um dos modelos abaixo:
                    </p>
                </div>

               <TemplateList templates={Templates} />

            </div>
        </div>
    );
}
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Gerenciamento de Layout",
        description: "",
    };
}

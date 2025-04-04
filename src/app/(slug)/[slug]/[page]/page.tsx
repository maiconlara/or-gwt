import { Metadata } from "next";
import {  Debutante01Home, Formatura02, Infantil04Home } from "@/components";
import { CustomizableCasamento01 } from "@/components/customizable-templates";
import { RenderPublicTemplate } from "./render-public-template";

type Params = { id: string; type: string };




export default async function Page({ params }: {params: Params} ) {


    return (
        <div className="flex h-full w-full flex-col items-center justify-start overflow-hidden bg-white">
           <RenderPublicTemplate />
        </div>
    );
}
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Gerenciamento de Layout",
        description: "",
    };
}

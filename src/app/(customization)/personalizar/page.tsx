import { Metadata } from "next";
import { Debutante01Home, Formatura02, Infantil04Home } from "@/components";
import { CustomizableCasamento01 } from "@/components/customizable-templates";
import { RenderComponent } from "./render-component";

type Params = { id: string; type: string };


// const componentsMap: Record<string, Record<string, JSX.Element>> = {
//     casamento: {
//         "1": <CustomizableCasamento01 />,
//     },
//     graduacao: {
//         "2": <Formatura02 />,
//     },
//     "festa-infantil": {
//         "4": <Infantil04Home />,
//     },
//     "quinze-anos": {
//         "1": <Debutante01Home />,
//     },
// };



export default async function Page({ params }: {params: Params} ) {


    return (
        <div className="flex h-full w-full flex-col items-center justify-start overflow-hidden bg-white">
           <RenderComponent />
        </div>
    );
}
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Gerenciamento de Layout",
        description: "",
    };
}

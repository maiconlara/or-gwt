import { CustomizableCasamento01 } from "@/components/customizable-templates";
import {Metadata} from "next";

export default async function Page() {
  return <CustomizableCasamento01 />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Casamento",
        description: "",
    };
}

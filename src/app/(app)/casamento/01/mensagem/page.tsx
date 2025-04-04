import {CustomizableCasamento01Message} from "@/components/customizable-templates";
import {Metadata} from "next";

export default async function Page() {
  return <CustomizableCasamento01Message />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "iFestei | Mensagem",
    description: "",
  };
}

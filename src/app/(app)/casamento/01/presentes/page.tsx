import {Casamento01Gifts} from "@/components/customizable-templates";
import {Metadata} from "next";

export default async function Page() {
  return <Casamento01Gifts />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "iFestei | Presentes",
    description: "",
  };
}

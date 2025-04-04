import {Casamento01OurHistory} from "@/components/customizable-templates";
import {Metadata} from "next";

export default async function Page() {
  return <Casamento01OurHistory />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "iFestei | Nossa Historia",
    description: "",
  };
}

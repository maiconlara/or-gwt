import { Casamento01Presence } from "@/components/customizable-templates";
import {Metadata} from "next";

export default async function Page() {
  return <Casamento01Presence />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "iFestei | Presença",
    description: "",
  };
}

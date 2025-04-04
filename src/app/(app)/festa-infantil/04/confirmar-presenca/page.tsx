import {Infantil04Presence} from "@/components";
import {Metadata} from "next";

export default async function Page() {
  return <Infantil04Presence />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "iFestei | Presença",
    description: "",
  };
}

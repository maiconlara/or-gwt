import {Debutante01Presence} from "@/components";
import {Metadata} from "next";

export default async function Page() {
  return <Debutante01Presence />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "iFestei | Presença",
    description: "",
  };
}

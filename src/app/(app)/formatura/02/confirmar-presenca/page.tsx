import {Formatura02Presence} from "@/components";
import {Metadata} from "next";

export default async function Page() {
  return <Formatura02Presence />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "iFestei | Presença",
    description: "",
  };
}

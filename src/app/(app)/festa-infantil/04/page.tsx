import { Infantil04Home } from "@/components";
import {Metadata} from "next";

export default async function Page() {
  return <Infantil04Home />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Festa Infantil",
        description: "",
    };
}

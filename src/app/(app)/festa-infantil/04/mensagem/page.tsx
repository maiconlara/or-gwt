import { Infantil04Message } from "@/components";
import { Metadata } from "next";

export default async function Page() {
    return <Infantil04Message />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Mensagens",
        description: "",
    };
}

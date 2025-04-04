import { Formatura02Message } from "@/components";
import { Metadata } from "next";

export default async function Page() {
    return <Formatura02Message />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Mensagens",
        description: "",
    };
}

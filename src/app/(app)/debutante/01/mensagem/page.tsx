import { Metadata } from "next";

import { Debutante01Message } from "@/components/customizable-templates";

export default async function Page() {
    return <Debutante01Message />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Mensagens",
        description: "",
    };
}

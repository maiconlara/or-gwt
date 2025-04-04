import { Metadata } from "next";

import { Debutante01Payment } from "@/components";

export default async function Page() {
    return <Debutante01Payment />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Pagamento",
        description: "",
    };
}

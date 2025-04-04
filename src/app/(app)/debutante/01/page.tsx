import { Metadata } from "next";

import { Debutante01Home } from "@/components/customizable-templates";

export default async function Page() {
    return <Debutante01Home />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | 15 Anos",
        description: "",
    };
}

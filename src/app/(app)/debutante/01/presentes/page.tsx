import { Metadata } from "next";

import { Debutante01Gifts } from "@/components/customizable-templates";

export default async function Page() {
    return <Debutante01Gifts />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Presentes",
        description: "",
    };
}

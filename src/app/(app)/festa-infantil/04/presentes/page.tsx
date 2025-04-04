import { Metadata } from "next";

import { Infantil04GiftList } from "@/components";

export default async function Page() {
    return <Infantil04GiftList />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Presentes",
        description: "",
    };
}

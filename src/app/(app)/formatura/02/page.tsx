import { Formatura02 } from "@/components";
import { Metadata } from "next";

export default async function Page() {
    return <Formatura02 />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Formatura",
        description: "",
    };
}

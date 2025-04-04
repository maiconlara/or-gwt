import { Formatura02Gifts } from "@/components";
import { Metadata } from "next";

export default async function Page() {
    return <Formatura02Gifts />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Presentes",
        description: "",
    };
}

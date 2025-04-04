import { Formatura02Payment } from "@/components";
import { Metadata } from "next";

export default async function Page() {
    return <Formatura02Payment />;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Presença",
        description: "",
    };
}

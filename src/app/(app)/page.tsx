import { redirect } from "next/navigation";

import { Metadata } from "next";
import { Galery, Hero } from "@/components";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "GUTS WORLD TOUR | Curitiba",
        description: "",
    };
}

export default async function Page() {
    return (
        
        <div className="flex min-h-[calc(100vh-86px)] flex-col w-full items-center justify-start overflow-hidden max-w-[1920px]">
            <Hero />
            <Galery />
        </div>
    );
}

import { redirect } from "next/navigation";

import { Metadata } from "next";
import { HeroVideo } from "@/components/ui/herovideo";
import { TeenageDream } from "@/components/ui/teenage-dream";
import { Memories } from "@/components/ui/memories";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "teenage dream | andressa vitória",
        description: "",
    };
}

export default async function Page() {
    return (
 
        <div
        className="relative min-h-screen w-full bg-coverImage bg-cover bg-center bg-fixed overflow-y-scroll items-center justify-center"
    >
        <HeroVideo />
       <TeenageDream />
       <Memories />

    </div>
    );
}

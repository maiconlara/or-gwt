import { EventMap } from "@/components/customization/customize/event-map";
import { Metadata } from "next";

export default async function Page() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-start overflow-auto bg-white">
            <EventMap />
        </div>
    );
}
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Gerenciamento de Layout",
        description: "",
    };
}


import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "andressa vitória | teenage dream",
        description: "",
    };
}

export default async function Page() {
    return (
        <div className="flex min-h-[calc(100vh-86px)] w-full items-start justify-center overflow-hidden bg-[#18181A]">
            and
        </div>
    );
}

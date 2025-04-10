import { Footer } from "@/components";
import "../globals.css";
import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SuspenseProvider } from "../suspense-provider";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "GUTS WORLD TOUR | Curitiba",
    };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body
                className={`${fontVariables} flex min-h-screen w-screen flex-col items-center justify-start overflow-x-hidden bg-[#18181A]`}
            >
                <SuspenseProvider>
                    {children}
                    <Footer />
                </SuspenseProvider>
            </body>
        </html>
    );
}

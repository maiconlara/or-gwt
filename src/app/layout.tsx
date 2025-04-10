import "./globals.css";
import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "GUTS WORLD TOUR | Curitiba",
    };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#937cd4" />
                <meta name="msapplication-TileColor" content="#937cd4" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body
                className={`${fontVariables} flex min-h-screen w-screen flex-col items-center justify-start overflow-x-hidden bg-[#18181A]`}
            >
                    {children}
            </body>
        </html>
    );
}

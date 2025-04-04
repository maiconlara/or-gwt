import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components";

import { Poppins, Abel } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const abel = Abel({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-abel",
});

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Página não encontrada",
    };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <head>
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="iFestei" />
            </head>
            <body
                className={`${poppins.variable} ${abel.variable} flex min-h-screen w-screen flex-col items-center justify-start overflow-x-hidden bg-background font-poppins`}
            >
                {/* <Header /> */}
                <div className="flex h-full w-full flex-col items-center overflow-x-hidden bg-transparent lg:min-h-[calc(100vh-144px)]">
                    {children}
                    <Toaster />
                </div>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui";

import { CustomizationMenu, Footer } from "@/components";
import { fontVariables} from "@/lib/fonts";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Gerenciamento de Layout",
    };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#00183b" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body
                className={`${fontVariables} flex min-h-screen w-screen flex-col items-center justify-start overflow-x-hidden bg-background font-poppins`}
            >
                <CustomizationMenu>
                    {children}
                    <Toaster />
                </CustomizationMenu>

                <Footer />
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import "../../../globals.css";
import { Toaster } from "@/components/ui";
import { Charmonman } from "next/font/google";
import { fontVariables } from "@/lib/fonts";
import { TemplateFooter } from "@/components";
import { PublicEventContextProvider } from "@/contexts/public-template";
import { PublicSuspenseProvider } from "@/app/public-suspense-provider";

const charmonman = Charmonman({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-charmonman",
});

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return {
        title: `iFestei | Gerenciamento de Layout - ${params.slug}`,
    };
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { slug: string } }) {
    const { slug } = params;
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
                className={`${fontVariables} ${charmonman.variable} flex min-h-screen w-screen flex-col items-center justify-start overflow-x-hidden bg-white font-poppins`}
            >
                <PublicEventContextProvider slug={slug}>
                    <PublicSuspenseProvider>
                        <div className="flex h-full w-full flex-col items-center overflow-x-hidden bg-transparent lg:min-h-[calc(100vh-144px)]">
                            {children}
                            <TemplateFooter />
                            <Toaster />
                        </div>
                    </PublicSuspenseProvider>
                </PublicEventContextProvider>
            </body>
        </html>
    );
}

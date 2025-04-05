import { Toaster } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import Header from "@/components/ui/header";

/**
 * Olá dev, primeiramente desculpas.
 * O código escrito nesse projeto foi feito as pressas
 * e não foi feito com a qualidade que eu gostaria
 * por favor, não se importe com as incoerencias e inconsistencias
 * Obrigado
 */

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "teenage dream | andressa vitória",
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#937cd4" />
        <meta name="msapplication-TileColor" content="#937cd4" />
        <meta name="theme-color" content="#ffffff" />
    </head>
    <body
        className={`${fontVariables} flex min-h-screen w-screen flex-col items-center justify-start overflow-x-hidden bg-[#937cd4] font-poppins`}
    >
            <div className="flex h-full w-full flex-col items-center overflow-x-hidden bg-transparent lg:min-h-[calc(100vh-144px)]">
                {/* <Header /> */}
                {children}
                <Toaster />
            </div>
    </body>
</html>
)
   
}

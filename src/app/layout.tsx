import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

/**
 * Olá dev, primeiramente desculpas.
 * O código escrito nesse projeto foi feito as pressas
 * e não foi feito com a qualidade que eu gostaria
 * por favor, não se importe com as incoerencias e inconsistencias
 * Obrigado
 */

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "iFestei | Gerenciamento de Layout",
    };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return <Providers>{children}</Providers>;
}

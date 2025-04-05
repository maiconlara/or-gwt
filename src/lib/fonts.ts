import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-montserrat",
});

const American_Typewritter = localFont({
    src: [
        {
            path: "../assets/fonts/American_Typewritter.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-american",
});
const Ultinoid = localFont({
    src: [
        {
            path: "../assets/fonts/Ultinoid.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-ultinoid",
});

export const fontVariables = [montserrat.variable, American_Typewritter.variable, Ultinoid.variable].join(" ");

export const fontOptions = [
    { label: "Montserrat", value: "font-montserrat" },
    { label: "American Typewritter", value: "font-american" },
    { label: "Ultinoid", value: "font-ultinoid" },
];

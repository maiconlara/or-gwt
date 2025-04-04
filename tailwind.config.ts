
import type { Config } from "tailwindcss";

const fontConfig = {
    poppins: "var(--font-poppins)",
    abel: "var(--font-abel)",
    montserrat: "var(--font-montserrat)",
    roboto: "var(--font-roboto)",
    lato: "var(--font-lato)",
    inter: "var(--font-inter)",
    nunito: "var(--font-nunito)",
    raleway: "var(--font-raleway)",
    merriweather: "var(--font-merriweather)",
    lora: "var(--font-lora)",
    spectral: "var(--font-spectral)",
    oswald: "var(--font-oswald)",
    anton: "var(--font-anton)",
    bungee: "var(--font-bungee)",
    pacifico: "var(--font-pacifico)",
    caveat: "var(--font-caveat)",
    satisfy: "var(--font-satisfy)",
    lateef: "var(--font-lateef)",
    charmonman: "var(--font-charmonman)",
    gwendolyn: "var(--font-gwendolyn)",
    playfair: "var(--font-playfair)",
    arimo: "var(--font-arimo)",
    bitter: "var(--font-bitter)",
    cairo: "var(--font-cairo)",
    dosis: "var(--font-dosis)",
    inconsolata: "var(--font-inconsolata)",
    karla: "var(--font-karla)",
    lobster: "var(--font-lobster)",
    oxygen: "var(--font-oxygen)",
    quicksand: "var(--font-quicksand)",
    rubik: "var(--font-rubik)",
    teko: "var(--font-teko)",
    ubuntu: "var(--font-ubuntu)",
};

const config = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },

        screens: {
            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",

            "3xl": "1601px",

            massive: "1600px",

            "4xl": "2560px",
        },
        extend: {
            fontFamily: {
                ...fontConfig,
            },
            colors: {
                background: "#F1F1F1",
                placeholder: "#d9d9d9",
                white: "#ffffff",
                orange: "#FF6000",
                green: "#5E9A52",
                success: "#1AD598",
                error: "#C45F65",
                lines: "#00000026",
                blue: "#1B3675",
                darkteal: "#52849A",
                darkgray: "#3E3E3E",
                gray: {
                    400: "#D6D6D6",
                    500: "#969696",
                },
                "yellow-green": "#ECF86E",
                debutante: {
                    background: "#fdecf0",
                    hover: "#eeeeee",
                    red: {
                        300: "#FC4A4A",
                        400: "#E41414",
                        500: "#D03A3A",
                    },
                },
            },
            backgroundImage: {
                coverImage: "url('../assets/images/cover.png')",
            },
            keyframes: {
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@khoohaoyit/tailwind-grid-center")],
} satisfies Config;

export default config;

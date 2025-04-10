import type { Config } from "tailwindcss";

const fontConfig = {
    montserrat: "var(--font-montserrat)",
    "american": "var(--font-american)",
    "ultinoid": "var(--font-ultinoid)",
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
                green: "#5E9A52",
                success: "#1AD598",
                error: "#C45F65",
                lines: "#00000026",

                purple: {
                    light: "#B8A7C8",
                    medium: "#8668A1",
                    strong: "#37245B",
                },
                gray: {
                    light: "#AAAAAA",
                    medium: "#71717A",
                    strong: "#18181a",
                },
                red: {
                    light: "#DB2F1F",
                    strong: "#BA1C1C",
                },
            },
            backgroundImage: {
                coverImage: "url('../assets/images/purplebg.jpg')",
                oliviaBackground: "url('../assets/images/olivias.png')",
                header: "url('../assets/images/header.png')",
                headerlg: "url('../assets/images/headerlg.png')",
                headermb: "url('../assets/images/headermb.png')",
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
                smoothBounce: {
                    "0%, 100%": { transform: "translateY(0)" }, // Posição inicial e final
                    "50%": { transform: "translateY(-10px)" }, // Posição intermediária mais suave
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "caret-blink": "caret-blink 1.25s ease-out infinite",
                smoothBounce: "smoothBounce 1.8s infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@khoohaoyit/tailwind-grid-center")],
} satisfies Config;

export default config;

import {
    Roboto,
    Lato,
    Montserrat,
    Poppins,
    Inter,
    Nunito,
    Raleway,
    Merriweather,
    Lora,
    Spectral,
    Oswald,
    Anton,
    Bungee,
    Pacifico,
    Caveat,
    Satisfy,
    Abel,
    Lateef,
    Charmonman,
    Gwendolyn,
    Playfair,
    Arimo,
    Bitter,
    Cairo,
    Dosis,
    Inconsolata,
    Karla,
    Lobster,
    Oxygen,
    Quicksand,
    Rubik,
    Teko,
    Ubuntu
} from "next/font/google";

export const abel = Abel({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-abel",
});


export const lateef = Lateef({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-lateef",
});


export const charmonman = Charmonman({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-charmonman",
});

export const gwendolyn = Gwendolyn({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-gwendolyn",
});

export const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-arimo",
});

export const bitter = Bitter({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-bitter",
});

export const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-cairo",
});

export const dosis = Dosis({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-dosis",
});


export const inconsolata = Inconsolata({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-inconsolata",
});

export const karla = Karla({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-karla",
});

export const lobster = Lobster({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-lobster",
});



export const oxygen = Oxygen({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-oxygen",
});

export const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-quicksand",
});

export const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-rubik",
});

export const teko = Teko({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-teko",
});

export const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-ubuntu",
});





export const playfair = Playfair({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-playfair",
});

export const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-roboto" });

export const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-lato" });
export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-montserrat",
});
export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});
export const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-inter",
});
export const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400", "600", "700"], variable: "--font-nunito" });

export const raleway = Raleway({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-raleway",
});

export const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-merriweather",
});

export const lora = Lora({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-lora" });

export const spectral = Spectral({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-spectral",
});

export const oswald = Oswald({ subsets: ["latin"], weight: ["300", "400", "600", "700"], variable: "--font-oswald" });
export const anton = Anton({ subsets: ["latin"], weight: ["400"], variable: "--font-anton" });
export const bungee = Bungee({ subsets: ["latin"], weight: ["400"], variable: "--font-bungee" });

export const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"], variable: "--font-pacifico" });

export const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-caveat" });
export const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"], variable: "--font-satisfy" });

export const fontVariables = [
    poppins.variable,
    abel.variable,
    montserrat.variable,
    roboto.variable,
    lato.variable,
    inter.variable,
    nunito.variable,
    raleway.variable,
    merriweather.variable,
    lora.variable,
    spectral.variable,
    oswald.variable,
    anton.variable,
    bungee.variable,
    pacifico.variable,
    caveat.variable,
    satisfy.variable,
    lateef.variable,
    charmonman.variable,
    gwendolyn.variable,
    playfair.variable,
    arimo.variable,
    bitter.variable,
    cairo.variable,
    dosis.variable,
    inconsolata.variable,
    karla.variable,
    lobster.variable,
    oxygen.variable,
    quicksand.variable,
    rubik.variable,
    teko.variable,
    ubuntu.variable
].join(" ");

export const fontOptions = [
    { label: "Poppins", value: "font-poppins" },
    { label: "Abel", value: "font-abel" },
    { label: "Montserrat", value: "font-montserrat" },
    { label: "Roboto", value: "font-roboto" },
    { label: "Lato", value: "font-lato" },
    { label: "Inter", value: "font-inter" },
    { label: "Nunito", value: "font-nunito" },
    { label: "Raleway", value: "font-raleway" },
    { label: "Merriweather", value: "font-merriweather" },
    { label: "Lora", value: "font-lora" },
    { label: "Spectral", value: "font-spectral" },
    { label: "Oswald", value: "font-oswald" },
    { label: "Anton", value: "font-anton" },
    { label: "Bungee", value: "font-bungee" },
    { label: "Pacifico", value: "font-pacifico" },
    { label: "Caveat", value: "font-caveat" },
    { label: "Satisfy", value: "font-satisfy" },

    { label: "Lateef", value: "font-lateef"},
    { label: "Charmonman", value: "font-charmonman"},
    { label: "Gwendolyn", value: "font-gwendolyn"},
    { label: "Playfair", value: "font-playfair"},

    { label: "Arimo", value: "font-arimo" },
    { label: "Bitter", value: "font-bitter" },
    { label: "Cairo", value: "font-cairo" },
    { label: "Dosis", value: "font-dosis" },
    { label: "Inconsolata", value: "font-inconsolata" },
    { label: "Karla", value: "font-karla" },
    { label: "Lobster", value: "font-lobster" },
    { label: "Oxygen", value: "font-oxygen" },
    { label: "Quicksand", value: "font-quicksand" },
    { label: "Rubik", value: "font-rubik" },
    { label: "Teko", value: "font-teko" },
    { label: "Ubuntu", value: "font-ubuntu" },
];

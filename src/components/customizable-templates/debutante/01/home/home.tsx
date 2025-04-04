import { Debutante01Hero } from "../hero";
import { Debutante01About } from "./about";
import { Debutante01Images } from "./images";

import { DebutanteHeader } from "../../header";

export const Debutante01Home = () => {
    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-debutante-background">
            <DebutanteHeader />

            <Debutante01Hero />

            <Debutante01Images />

            <Debutante01About />

        </div>
    );
};

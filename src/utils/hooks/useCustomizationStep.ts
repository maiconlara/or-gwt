import { usePathname } from "next/navigation";

const getStepName = (pathName: string): string => {
    const routeNames: { [key: string]: string } = {
        "/templates": "Escolher layout",
        "/personalizar": "Layout do site",
        "/personalizar/sobre": "Sobre a festa",
        "/advanced": "Avançado",
        "/ajuda": "Central de ajuda",
    };

    const matchedRoute = Object.keys(routeNames).find((route) => pathName.startsWith(route));

    return matchedRoute ? routeNames[matchedRoute] : "Erro ao definir passo";
};

export default getStepName;
export const useCustomizationStep = () => {
    const pathName = usePathname();
    return getStepName(pathName);
};

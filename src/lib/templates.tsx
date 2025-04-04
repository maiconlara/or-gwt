import { templateCasamento, templateDebutante, templateFormatura, templateInfantil04 } from "@/assets/images";
import { CustomizableCasamento01, CustomizableCasamento01Message, Casamento01Gifts, Casamento01OurHistory, Casamento01Presence, Debutante01Home, Formatura02, Infantil04Home  } from "@/components/customizable-templates";
import { TemplateType } from "@/types";

export const Templates = [
    {
        name: "Formatura 02",
        id: 2,
        type: TemplateType.GRADUATION,
        image: templateFormatura,
        url: "/formatura/02",
        categoryName: "Conquistas",
        categoryId: 9,
        pages: {
            "inicio": <Formatura02 />,
            mensagem: <Formatura02 />,
            presentes: <Formatura02 />,
            "confirmar-presenca": <Formatura02 />,
            "nossa-historia": <Formatura02 />,
        },
    },
    {
        name: "Casamento 01",
        id: 1,
        type: TemplateType.WEDDING,
        image: templateCasamento,
        url: "/casamento/01",
        categoryName: "Casamentos e Família",
        categoryId: 5,
        pages: {
            "inicio": <CustomizableCasamento01 />,
            mensagem: <CustomizableCasamento01Message />,
            presentes: <Casamento01Gifts />,
            "confirmar-presenca": <Casamento01Presence />,
            "nossa-historia": <Casamento01OurHistory />,
        },
    },
    {
        name: "15 Anos 01",
        id: 1,
        type: TemplateType.FIFTEEN_YEARS,
        image: templateDebutante,
        url: "/debutante/01",
        categoryName: "Quinze Anos",
        categoryId: 8,
        pages: {
            "inicio": <Debutante01Home />,
            mensagem: <Debutante01Home />,
            presentes: <Debutante01Home />,
            "confirmar-presenca": <Debutante01Home />,
            "nossa-historia": <Debutante01Home />,
        },
    },

    {
        name: "Festa Infantil",
        id: 4,
        type: TemplateType.KIDS_PARTY,
        image: templateInfantil04,
        url: "/festa-infantil/04",
        categoryName: "Infância",
        categoryId: 4,
        pages: {
            "inicio": <Infantil04Home />,
            mensagem: <Infantil04Home />,
            presentes: <Infantil04Home />,
            "confirmar-presenca": <Infantil04Home />,
            "nossa-historia": <Infantil04Home />,
        },
    },
];
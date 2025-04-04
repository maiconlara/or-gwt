import { cloudsBG } from "@/assets/images";


interface Infantil04CtaCtaProps {
    titleFont: string;
    textFont: string;
    textColor: string;
    titleColor: string;
    text: string;
}

export const Infantil04Cta = ({
    titleFont,
    textFont,
    textColor,
    titleColor,
    text,
}: Infantil04CtaCtaProps) => {
    return (
        <div
            className="flex w-full flex-col items-start justify-start gap-32 bg-cover py-20"
            style={{ backgroundImage: `url(${cloudsBG.src})` }}
        >
            <div className="flex w-full flex-row items-center justify-start px-28">
                <div className="flex w-full max-w-[720px] flex-col gap-6 rounded-xl bg-[#FAF2EB] min-h-[500px] p-12">
                    <p
                        className={`max-w-[600px] cursor-default ${titleFont} text-5xl font-bold`}
                        style={{ color: titleColor }}
                    >
                        Sobre mim
                    </p>
                    <p
                        className={`font-regular w-full cursor-default whitespace-pre-line ${textFont} text-base uppercase`}
                        style={{ color: textColor }}
                    >
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

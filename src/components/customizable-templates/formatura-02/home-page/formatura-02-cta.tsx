import { Map } from "../../map";

interface Formatura02CtaProps {
    titleFont: string;
    textFont: string;
    eventMap: string;
    textColor: string;
    mainColor: string;
    titleColor: string;
    title: string;
    text: string;
}

export const Formatura02Cta = ({
    titleFont,
    textFont,
    eventMap,
    textColor,
    mainColor,
    titleColor,
    title,
    text,
}: Formatura02CtaProps) => {
    return (
        <div className="flex w-full flex-col items-start justify-start gap-32 pt-36">
            <div className="flex w-full flex-row items-center justify-between gap-8 px-28">
                <p className={`cursor-default ${titleFont} text-8xl font-bold uppercase`} style={{ color: titleColor }}>
                    {title}
                </p>
                <div className="flex w-full max-w-[1000px] flex-col gap-6">
                    <p
                        className={`font-regular w-full max-w-[1000px] whitespace-pre-line cursor-default ${textFont} text-base uppercase`}
                        style={{ color: textColor }}
                    >
                        {text}
                    </p>
                    <div
                        className={`flex h-14 max-w-max cursor-pointer flex-col items-center justify-center rounded-md px-4 ${textFont} text-xl`}
                        style={{ backgroundColor: mainColor, color: textColor }}
                    >
                        Confirmar presença
                    </div>
                </div>
            </div>
            <Map
                address={eventMap}
                size="big"
                textColor={textColor}
                titleColor={titleColor}
                textFont={textFont}
                titleFont={titleFont}
            />
        </div>
    );
};

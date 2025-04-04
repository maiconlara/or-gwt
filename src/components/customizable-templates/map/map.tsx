import { generateMapURL } from "@/utils/generateMapUrl";
import { RiMapPinLine, RiPhoneFill } from "@remixicon/react";

interface MapProps {
    size: "small" | "big";
    textColor?: string;
    titleColor?: string;
    address: string;
    textFont?: string;
    titleFont?: string;
}

export const Map = ({ size, textColor = "#323C31", address, titleColor, titleFont, textFont }: MapProps) => {
    const mapSize = size === "small" ? "h-[505px] " : "h-[805px] ";

    return (
        <div className="flex w-full flex-col items-start justify-start gap-32 py-36">
            <div className="flex w-full flex-row items-center justify-between gap-12 pr-28">
                <div className={`flex flex-row items-center justify-center ${mapSize} w-[880px]`}>
                    <iframe width="100%" height="100%" className="rounded-r-[64px]" src={generateMapURL(address)} />
                </div>

                <div
                    className={`flex flex-col items-start justify-center gap-14 ${textFont} ${mapSize}`}
                    style={{ color: textColor }}
                >
                    <p
                        className={`max-w-[600px] cursor-default ${titleFont} text-7xl font-normal`}
                        style={{ color: titleColor }}
                    >
                        Local do <span className="font-bold">evento</span>
                    </p>

                    <div className="flex flex-row items-center gap-6 text-lg">
                        <RiMapPinLine size={64} />

                        <p className="max-w-[600px] cursor-default text-base font-normal">{address}</p>
                    </div>

                    <div className="flex flex-row items-center gap-6 text-lg">
                        <RiPhoneFill size={64} />
                        <p className="max-w-[600px] cursor-default text-base font-normal">(41) 99999-9999</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

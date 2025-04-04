import { RiMapPinLine, RiPhoneFill } from "@remixicon/react";

import { generateMapURL } from "@/utils/generateMapUrl";

interface LocalProps {
    textColor?: string;
    titleColor?: string;
    mainColor?: string;
    address: string;
    titleFont?: string;
    textFont?: string;
}

export const Local = ({ textColor, titleColor, mainColor, address, titleFont, textFont }: LocalProps) => {
    return (
        <div className="flex w-full flex-col items-start justify-start gap-32 pb-36 pt-10">
            <div className="flex w-full flex-row items-center">
                <div
                    className="flex h-[500px] w-[50%] flex-col items-start justify-center gap-14 rounded-l-[64px] px-28"
                    style={{
                        color: textColor,
                        backgroundColor: mainColor,
                    }}
                >
                    <p
                        className={`max-w-[600px] cursor-default text-7xl font-normal ${titleFont}`}
                        style={{
                            color: titleColor,
                        }}
                    >
                        Local do <span className="font-bold">evento</span>
                    </p>
                    <div className={`flex flex-row items-center gap-6 text-lg ${textFont} `}>
                        <RiMapPinLine size={64} />
                        <p className="max-w-[600px] cursor-default text-base font-normal">{address}</p>
                    </div>
                    <div className="flex flex-row items-center gap-6 text-lg">
                        <RiPhoneFill size={64} />
                        <p className="max-w-[600px] cursor-default text-base font-normal">(41) 99999-9999</p>
                    </div>
                </div>
                <div className="flex h-[500px] w-[50%] flex-row items-center justify-center">
                    <iframe width="100%" height="100%" className="rounded-r-[64px]" src={generateMapURL(address)} />
                </div>
            </div>
        </div>
    );
};

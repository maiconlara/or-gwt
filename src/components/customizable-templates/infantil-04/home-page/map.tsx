import { generateMapURL } from "@/utils/generateMapUrl";
import { RiMapPinLine, RiPhoneFill } from "@remixicon/react";

interface MapProps {
    textColor?: string;
    titleColor?: string;
    address: string;
}

export const Map = ({ textColor = "#323C31", address, titleColor }: MapProps) => {
    const mapSize = "h-[805px] ";

    return (
        <div className="flex w-full flex-col items-start justify-start gap-32 ">
            <div className="flex w-full flex-row items-center justify-between gap-12 pl-28">
                <div
                    className={`flex flex-col items-start justify-center gap-14 ${mapSize}`}
                    style={{ color: textColor }}
                >
                    <p
                        className="max-w-[600px] cursor-default font-poppins text-7xl font-bold"
                        style={{ color: titleColor }}
                    >
                        Local
                    </p>

                    <div className="flex flex-row items-center gap-6 text-lg">
                        <RiMapPinLine size={64} />

                        <p className="max-w-[600px] cursor-default font-poppins text-base font-normal">{address}</p>
                    </div>

                    <div className="flex flex-row items-center gap-6 text-lg">
                        <RiPhoneFill size={64} />
                        <p className="max-w-[600px] cursor-default font-poppins text-base font-normal">
                            (41) 99999-9999
                        </p>
                    </div>
                </div>

                <div className={`flex flex-row items-center justify-center ${mapSize} w-[880px]`}>
                    <iframe width="100%" height="100%"  src={generateMapURL(address)} />
                </div>
            </div>
        </div>
    );
};

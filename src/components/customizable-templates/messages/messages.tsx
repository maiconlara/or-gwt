import { MessageCarouselCard } from "./carousel-card";
import { MessagesForm } from "@/components";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MessagesProps {
    banner: ReactNode;
    primaryColor: string;
    secondaryColor: string;
    titleClassName?: string;
    titleFont: string;
    textFont: string;
    titleColor: string;
}

export const Messages = ({
    banner: Banner,
    primaryColor,
    titleClassName,
    titleFont,
    textFont,
    titleColor,
}: MessagesProps) => {
    return (
        <div className="flex w-[86vw] md:w-full flex-col items-center justify-start gap-12 md:px-28 pb-14">
            <div className="relative flex h-auto w-full flex-col items-center justify-center">
                {Banner}

                <div
                    className={cn(
                        "absolute flex h-full w-full flex-col items-center justify-start bg-transparent",
                        titleClassName,
                    )}
                    style={{
                        color: titleColor,
                    }}
                >
                    <MessageCarouselCard size="big" showStars />

                    <div className="flex max-w-[847px] flex-col items-center gap-2">
                        <p className={`cursor-default ${titleFont} text-6xl md:text-8xl font-normal`}>Deixe sua</p>

                        <p
                            className={`cursor-default ${titleFont} text-6xl md:text-7xl font-bold`}
                            style={{
                                color: primaryColor,
                            }}
                        >
                            mensagem
                        </p>
                    </div>
                </div>
            </div>

            <MessagesForm />
        </div>
    );
};

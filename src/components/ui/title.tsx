interface TitleProps {
    title: string;
    description1?: string;
    description2?: string;
}

export const Title = ({ title, description1, description2 }: TitleProps) => {
    return (
        <div className="flex w-full flex-col">
            <div className="flex max-w-[850px] flex-col gap-5">
                <h1 className="text-primary text-4xl font-medium">{title}</h1>
                <div className="flex flex-col gap-2">
                    <p className="font-regular text-gray text-sm">{description1}</p>
                    <p className="font-regular text-gray text-sm">{description2}</p>
                </div>
            </div>
        </div>
    );
};

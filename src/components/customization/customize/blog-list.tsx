export const BlogList = () => {
    return (
        <div className="flex w-full flex-col items-center gap-12 px-20 py-12">
            <div className="flex w-full max-w-[1185px] cursor-default flex-col items-start gap-4 rounded-lg border border-lines py-10 shadow-lg">
                <div className="flex w-full flex-col gap-8 px-[82px]">
                    <div className="flex w-full flex-col gap-8">
                        <p className="font-poppins text-3xl font-normal text-darkgray">Conteúdos</p>

                        <div className="flex h-[1px] max-h-[1px] min-h-[1px] w-full flex-1 flex-row flex-wrap bg-black/20" />
                    </div>
                </div>

                <div className="flex w-full flex-col items-center justify-center px-[82px]">
                    <div className="grid w-full grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div
                                key={index}
                                className="col-span-1 flex h-[228px] w-full flex-col items-end justify-end bg-[#D9D9D9] p-3"
                            >
                                <div className="font-regular flex h-10 cursor-pointer flex-col items-center justify-center rounded-md bg-darkteal px-8 font-poppins text-base text-white">
                                    Editar
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

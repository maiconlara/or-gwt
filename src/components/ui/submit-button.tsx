import { RiLoader4Fill } from "@remixicon/react";

import { Button } from "./button";

interface SubmitButtonProps {
    children: React.ReactNode;
    isLoading: boolean;
    form: string;
}

export const SubmitButton = ({ isLoading = false, form, children }: SubmitButtonProps) => {
    return (
        <Button
            type="submit"
            form={form}
            className={`${isLoading ? "cursor-default" : "cursor-pointer"} bg-tertiary hover:bg-tertiary/80 flex h-14 w-full items-center justify-center rounded-full px-4 text-[16px] font-bold leading-4 text-white transition-all`}
            disabled={isLoading}
        >
            {isLoading ? <RiLoader4Fill className="h-5 w-5 animate-spin text-white" /> : children}
        </Button>
    );
};

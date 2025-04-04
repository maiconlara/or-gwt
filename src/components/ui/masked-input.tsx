import * as React from "react";

import { cn } from "@/lib/utils";
import { useMask } from "@react-input/mask";

export interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(({ className, mask, type, ...props }, ref) => {
    const inputRef = useMask({
        mask: mask,
        replacement: { _: /\d/ },
    });

    const setRefs = (inputElement: HTMLInputElement) => {
        inputRef.current = inputElement;
        if (typeof ref === "function") {
            ref(inputElement);
        } else if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement>).current = inputElement;
        }
    };

    return (
        <input
            type={type}
            className={cn(
                "border-wgray focus-visible:ring-blue-secondary flex h-12 w-full rounded-sm border bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
                className,
            )}
            ref={setRefs}
            {...props}
        />
    );
});
MaskedInput.displayName = "MaskedInput";

export { MaskedInput };

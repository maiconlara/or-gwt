import { PaymentForm } from "@/components/customizable-templates/payment";
import { DebutanteHeader } from "../../header";
import { Map } from "@/components/customizable-templates/map";


export const Debutante01Payment = () => {
    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-debutante-background">
            <DebutanteHeader />

            <PaymentForm
                textColor="#D03A3A"
                backgroundColor="#fdecf0"
                secondaryBackgroundColor="#fdecf0"
                approvedClassName="text-green"
                inputClassName="border-debutante-red-500 text-debutante-red-500 placeholder:text-debutante-red-500"
            />

            <Map address="-" textColor="#D03A3A" size="small" />

        </div>
    );
};

import { Map } from "../../map";
import { PaymentForm } from "../../payment";
import { Formatura02AlternativeHero } from "../alternative-hero";

export const Formatura02Payment = () => {
    return (
        <div className="flex h-full w-full max-w-[1920px] flex-col items-center overflow-x-hidden bg-white">
            {/* <Formatura02AlternativeHero /> */}
            <PaymentForm />
            <Map address="-" size="small" />
        </div>
    );
};

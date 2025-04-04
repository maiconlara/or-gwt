import { PresenceForm } from "@/components";
import { DebutanteHeader } from "../../header";
export const Debutante01Presence = () => {
    return (
        <div className="flex h-[calc(100vh-144px)] w-full max-w-[1920px] flex-col items-center justify-between overflow-x-hidden bg-debutante-background">
                   
                    <DebutanteHeader />
                    <div className="flex h-full flex-col items-center justify-center">
                    <PresenceForm />
                    </div>
                </div>
       
    );
};

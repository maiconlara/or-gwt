import { PublicEventContext } from "@/contexts/public-template";
import {useContext} from "react";

export const usePublicEvent = () => {
  const publicEventData = useContext(PublicEventContext);

  if (!publicEventData) {
    throw new Error("usePublicEvent must be used within a <PublicEventContextProvider />");
  }

  return publicEventData;
};

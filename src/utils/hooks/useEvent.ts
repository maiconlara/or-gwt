import {useContext} from "react";
import {EventContext} from "@/contexts/event";

export const useEvent = () => {
  const eventData = useContext(EventContext);

  if (!eventData) {
    throw new Error("useEvent must be used within a <EventContextProvider />");
  }

  return eventData;
};

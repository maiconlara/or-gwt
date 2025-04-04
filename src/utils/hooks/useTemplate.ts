import {useContext} from "react";
import {TemplateContext} from "@/contexts/template";

export const useTemplate = () => {
  const templateData = useContext(TemplateContext);

  if (!templateData) {
    throw new Error("useTemplate must be used within a <TemplateContextProvider />");
  }

  return templateData;
};

import { requiredStringField, emailRegex} from "./reusableSchemes";
import {z} from "zod";


export const presenceFormSchema = z.object({
  nome: requiredStringField(1, 255, "Por favor, preencha o nome para continuar."),
  email: requiredStringField(1, 255, "O email não pode estar vazio").refine(
    (value) => value === null || emailRegex.test(value || "") || value === "",
    {
      message: "Email inválido",
    },
  ),
});

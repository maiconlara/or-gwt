import { requiredStringField, emailRegex} from "./reusableSchemes";
import {z} from "zod";


export const emailFormSchema = z.object({
  email: requiredStringField(1, 255, "Preencha o email para continuar para o pagamento.").refine(
    (value) => value === null || emailRegex.test(value || "") || value === "",
    {
      message: "Email inválido",
    },
  ),
});

import { requiredStringField, emailRegex} from "./reusableSchemes";
import {z} from "zod";


export const messageFormSchema = z.object({
  nome: requiredStringField(1, 255, "A mensagem não pode ser anônima."),
  email: requiredStringField(1, 255, "O email não pode estar vazio").refine(
    (value) => value === null || emailRegex.test(value || "") || value === "",
    {
      message: "Email inválido",
    },
  ),
  mensagem:  requiredStringField(1, 2126, "Por favor, deixe uma mensagem."),
});

import { requiredStringField, optionalStringField, emailRegex } from "./reusableSchemes";
import { z } from "zod";


export const exampleFormSchema = z.object({
    name: requiredStringField(1, 255, "Por favor, digite seu nome."),
    email: requiredStringField(1, 255, "O email não pode estar vazio").refine(
        (value) => value === null || emailRegex.test(value || "") || value === "",
        {
            message: "Email inválido",
        },
    ),
    subject: requiredStringField(1, 255, "Selecione um assunto"),
    phone: requiredStringField(1, 255, "Digite o telefone"),
    message: requiredStringField(1, 2126, "Por favor, explique o motivo do contato."),
    elogios: optionalStringField(2126),
});

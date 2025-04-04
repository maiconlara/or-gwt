"use client";

import { Button, Input } from "@/components";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const subscribeSchema = z.object({
    email: z.string().email({ message: "E-mail inválido" }),
});

type FormValues = z.infer<typeof subscribeSchema>;

export const Subscribe = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(subscribeSchema),
        defaultValues: {
            email: "",
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onHandleSubmit = (data: FormValues) => {
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <Form {...form}>
            <form
                id="subscribe-form"
                className="relative h-14 w-full lg:w-auto"
                onSubmit={form.handleSubmit(onHandleSubmit)}
                noValidate
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div>
                                    <Input
                                        {...field}
                                        type="email"
                                        placeholder="E-mail para ficar por dentro das novidades"
                                        className="placeholder:white h-14 w-full text-ellipsis rounded-full border-white bg-transparent px-5 text-xl font-normal text-white lg:w-[680px] xl:w-[750px] 2xl:w-[900px]"
                                    />

                                    <Button
                                        form="subscribe-form"
                                        type="submit"
                                        className="absolute right-0 top-0 h-14 w-[150px] rounded-full bg-white text-[20px] font-normal text-black hover:bg-white 2xl:w-[200px] massive:w-[300px]"
                                    >
                                        {isSubmitting ? "..." : "Enviar"}
                                    </Button>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

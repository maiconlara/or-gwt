"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TemplateContextProvider } from "@/contexts/template";
import { EventContextProvider } from "@/contexts/event";
import { AuthContextProvider } from "@/contexts/auth";
import useCookie from "@/utils/hooks/useCookies";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
interface ProvidersProps {
    children: ReactNode;
}

const MINUTE = 60 * 1000;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 0 * MINUTE,
            staleTime: 0 * MINUTE,
            retry: true,
        },
    },
});

export const Providers = ({ children }: ProvidersProps) => {
    const pathname = usePathname();
    const { setCookie } = useCookie();

    //simulando que o cookie será recebido, descomentar para utilizar os cookies

    // useEffect(() => {
    //     setCookie(
    //         "usu_token",
    //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNmNlNDc2MTg5OGMxMmNlZDdmMzMxZjk5MjFmNWVmNWRlNjI3YTY0M2FkZDllZjcyMjA0YmZmMWJjMmI5ZGFlOTNkNjc4MzM5M2UzMThlYmQiLCJpYXQiOjE3MzY1Mzk0MjAuNDQ2MjQ3LCJuYmYiOjE3MzY1Mzk0MjAuNDQ2MjUsImV4cCI6MTc2ODA3NTQyMC40NDIzNDUsInN1YiI6IjE2Iiwic2NvcGVzIjpbXX0.W3Pclw8F3MyudNqvG2pCuu0_2SbepdnQhCdjP1WZINNfP4L7oXxUcMYdxEmXOrBG_cOMv7mIS8EIANtz0IOF585kGJkIUbYJ5niUZYw40gkkWMKKVwdpqr1CFqdFFUYt8yEdyOqlVoUnSO_fgwzcAgZ_-liu8JABvTpAi7JeknxeLkG7lEZlYQR-5_o_EaNe2Z2EInTZaOCB-QOpBatZjtULa-fAlAzzA3e-434ZIb6vz3bdZD6C61H1hLGzGunt8KtYe-063rzTbJxlrG8vC8UtZ6qG7WrtJe4exZ8dP81ke4uRTN0hWoSBS8waklfepCfmCA5qfq-c3G4EHK3YcGZ-jVe-5m_a8XQCYgEocMTfmUag7WZjdmNToTR2lO-8MRjKhh0O3y76im_2bHmQF8t6XT5Zp9HpSU9JZ-BrzcdIfE1skDmMeG797lCMgB2EYJrqzL9WGYw6aeDeNfq1EFwelkkUBC0RMUN5nZWiRHNJ4XYcfHoy9092o6Nser9P22HRH4asvR0sie9880wqYKekfBt7T25bksVItXb3WWxTDZusf265LUatVPfwfWfmLqsV0VvN3jeWU2_ppGL8P3dZNM3xzW7ZnOXbqb9oN2GlhrPS6fsQrVkQoOR_f_UhFOwqd66C7R4C7GDHYmPzh7S37JdkwIWbSQWMZNoCETs",
    //         // "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMTA2MjU0MjFiNjYzY2Y2MjY4OTNhYjk5ODUzM2EyNjExNGI5YTA4YjY4NjJkMmUzZmIwM2VjMTg0NWMyNmY0NmRlM2YxNTk5Y2NiN2E5YTYiLCJpYXQiOjE3NDA3NDEwNzMuNzY0MzYyLCJuYmYiOjE3NDA3NDEwNzMuNzY0MzY1LCJleHAiOjE3NzIyNzcwNzMuNzQyNTg2LCJzdWIiOiI2OSIsInNjb3BlcyI6W119.KYXGcGaHDRMY9jniqO6ChI-rIYMosq7GuTFr27d4CxTZpGIZugUlyu8WUWOtK9quQCvy5t8B3OpJFqzdl3ds-SSQTs5pT0V9NgaFIb0s9169FvmXEd94UO7fSkpeYr4IioUNkAcUsTP70HLZ1JSUB7a-NJS3lrV0n4f5bbT5ISO6ZH1wbvnYllytWhopJF034vX8LsE7--nQGqVoZ2H_OlixJ7Ab87fTB_99fPXJgsQPAjKrNWdEBiR1Y2st7viugYFRKVblLTtxhj4GL6aZieYGVvw3ccvgwukWWxM5RFlH9Z0e2a3qV4DVx9tEUZ-RCHj2jiPz5gE7MKFHGstFfKQtXlx9yI7OHjIOubP7pw6x3D-S_B0WraO2oU6AonOcSQXjMRsLjAVy1BVgiUKkOc1z7EdCyTP4HC04l_766OO-Da6G47szZlBIKb9FSENikX5RmuM-htnhTHRvAGI8DJF4Zpx6iRkZWJ4LMmSmtpzmtzJ6t6XxSkSRAVJd7nmSvJQZhS0fbrN0bMMlZEVcXmldv61n5Qjoi5z7Lj4iVKE_fAiJ5qnFBzUQo0ZmKDuPW0VNiskkGYrySmNCunDL8AE_gNAJ4iB5KNbDE44_dpHvnxodRYeqwCUO_n0PaDhoMp7_-RmBIz339BEQ1AXHT_6GRA-t8Fy7Axqy3oBbuJI",
    //         {
    //             expires: new Date("2026-02-16T07:13:26Z"),
    //             path: "/",
    //             domain: "",
    //             secure: true,
    //             sameSite: "none",
    //         },
    //     );
    // }, []);

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <EventContextProvider>
                    <TemplateContextProvider>

                    {children}
                    </TemplateContextProvider>
                    </EventContextProvider>
            </AuthContextProvider>
        </QueryClientProvider>
    );
};

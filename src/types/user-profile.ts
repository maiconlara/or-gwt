import {  EventoProfile, Plano } from "@/types";

export interface UserProfile {
    id: number;
    name: string;
    email: string;
    status: string;
    status_id: number;
    perfil: string;
    documento: string | null;
    data_nascimento: string;
    genero: string | null;
    cep: string;
    numero: string;
    rua: string;
    complemento: string | null;
    bairro: string;
    cidade: string;
    estado: string;
    cerimonialista: boolean;
    plano: Plano;
    evento: EventoProfile;
    imagem_perfil: string;
    permissoes: any[];
    facebook_id: string | null;
    google_id: string | null;
    avatar: string | null;
    created_at: string;
    categoria_evento_id: number;
    updated_at: string;
}





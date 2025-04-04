export interface Plano {
    id: number;
    status: number;
    nome: string;
    perfil: number;
    categoria_evento_id: number | null;
    usuario_id: number | null;
    teste_gratis: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

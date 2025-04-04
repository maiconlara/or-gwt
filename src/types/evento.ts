export interface EventoProfile {
    id: number;
    subtitulo: string | null;
    descricao: string | null;
    endereco: string | null;
    adicionar_mapa_rodape: boolean;
    data_evento: string;
    exibir_previsao_tempo: boolean;
    usuario_id: number;
    created_at: string;
    updated_at: string;
    categoria_evento_id: number;
    endereco_url: string;
    nome_evento: string | null;
    tipo_capa: string;
    exibir_menu_celular_tablet: boolean;
    exibir_formulario_mensagem: boolean;
    exibir_contagem_regressiva: boolean;
    idioma: string;
    template_tipo: string;
    exibir_video_introducao: boolean;
    notificar_novos_convidados: boolean;
    notificar_novos_administradores: boolean;
    notificar_playlist: boolean;
    notificar_alteracao_senha: boolean;
}

export interface Imagem {
    id: number;
    nome: string;
    url: string;
    created_at: string;
    updated_at: string;
}

export interface Fontes {
    id: number;
    sobre_evento_id: number;
    texts: string;
    menus: string;
    titles: string;
    names: string;
}

export interface Cores {
    id?: number;
    sobre_evento_id?: number;
    background_color?: string;
    main_color: string;
    texts: string;
    menus: string;
    names: string;
    titles: string;
    titles_2: string;
    texts_2: string;
}

export interface EstiloBotao {
    sobre_evento_id: number;
    background: string;
    text: string;
    border: string;
}

export interface Monografia {
    id: number;
    sobre_evento_id: number;
    tipo_monografia: string;
    nome_fonte: string;
    cor_fonte: string;
}

export interface Papelaria {
    id: number;
    opcao_escolhida: string;
    referencia: any[];
    briefing: string;
    created_at: string;
    updated_at: string;
}

export interface TelaoInterativo {
    id: number;
    modelo: string;
    informacoes: string;
    galeria: Imagem[];
    created_at: string;
    updated_at: string;
}

export interface Conteudo {
    sobre: string | null;
    sobre_dia: string;
    sobre_graduacao: string | null;
    sobre_primeira_pessoa: string | null;
    sobre_segunda_pessoa: string | null;
    sobre_nossa_historia: string | null;
    sobre_evento: string | null;
    sobre_mim: string | null;
    galeria: Imagem[];
    titulo : string | null;
    subtitulo: string | null;
    descricao: string | null;
    foto_casal: string | null;
    nome_1: string | null;
    nome_2: string | null;
    foto_1: string | null;
    foto_2: string | null;
}

export interface PresentesVirtuais {
    id: number;
    descricao: string;
    imagem_destaque_mobile: string;
    imagem_destaque_web: string;
    nome: string;
    quantidade_disponivel: number;
    responsavel_taxa: string;
    responsavel_taxa_id: number;
    status: string;
    status_id: number;
    valor: number;
    created_at: string;
    updated_at: string;
}

export interface Evento {
    id: number;
    categoria_evento_id: number;
    tipo_evento_id: number | null;
    template_id: number;
    template_tipo: string;
    nome_evento: string | null;
    data_evento: string;
    tipo_capa: "Imagem" | "Video" | "Slideshow";
    imagem_principal: Imagem[];
    exibir_video_introducao: string;
    exibir_video_introducao_id: boolean;
    video_introducao: any[];
    fontes: Fontes;
    presentes_virtuais: PresentesVirtuais[];
    cores: Cores;
    estilo_botoes: EstiloBotao;
    exibir_menu_celular_tablet: string;
    exibir_menu_celular_tablet_id: boolean;
    monografia: Monografia;
    exibir_formulario_mensagem: string;
    exibir_formulario_mensagem_id: boolean;
    exibir_contagem_regressiva: string;
    exibir_contagem_regressiva_id: boolean;
    exibir_previsao_tempo: string;
    exibir_previsao_tempo_id: boolean;
    album: any | null;
    endereco: string | null;
    adicionar_mapa_rodape: string;
    adicionar_mapa_rodape_id: boolean;
    conteudo: Conteudo;
    endereco_url: string;
    idioma: string;
    papelaria: Papelaria;
    telao_interativo: TelaoInterativo;
    notificar_novos_convidados: string;
    notificar_novos_convidados_id: boolean;
    notificar_novos_administradores: string;
    notificar_novos_administradores_id: boolean;
    notificar_playlist: string;
    notificar_playlist_id: boolean;
    notificar_alteracao_senha: string;
    notificar_alteracao_senha_id: boolean;
    created_at: string;
    updated_at: string;
}

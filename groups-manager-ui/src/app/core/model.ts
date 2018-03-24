export class Grupo {
    id: number;
}

export class Noticia {
    id: number;
    titulo: string;
    corpo: string;
    topicos = [];
    publica: boolean;
    grupo = new Grupo();
}

export class Endereco {
    logradouro: string;
    cep: string;
    complemento: string;
    bairro: string;
    uf: string;
    localidade: string;
}

export class Evento {
    data: Date;
    descricao: string;
    motivo: string;
    valor: string;
    lotacaoMaxima: number;
    endereco = new Endereco();
    grupo = new Grupo();
}
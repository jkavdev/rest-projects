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
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
}

export class Evento {
    data: any;
    descricao: string;
    motivo: string;
    valor: string;
    lotacaoMaxima: number;
    endereco = new Endereco();
    grupo = new Grupo();
}
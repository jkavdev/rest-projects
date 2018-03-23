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
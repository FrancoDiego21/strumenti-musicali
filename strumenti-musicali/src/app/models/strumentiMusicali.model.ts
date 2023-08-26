export class StrumentiMusicali{
    spartiti: Spartito[];
    strumenti: Strumento[];
}

export class Spartito{
    id: number;
    titolo: string;
    autore: string;
    editore: string;
    prezzo: number;
}

export class Strumento{
    id: number;
    marca: string;
    modello: string;
    categoria: string;
    prezzo: number;
}
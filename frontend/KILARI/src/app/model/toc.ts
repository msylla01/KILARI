import { Time } from "@angular/common"

export interface Pays{
    PaysId : number,
    Libelle : string
}

export interface Priorite{
    PaysId : number,
    Libelle : string
}
export interface Toctik{
    id : number,
    Numero : string

}

export interface Toc  {
    id : number,
    Numerotoc :string,
    priorite :string,
    pays  : Pays,
    Datedebut :Date,
    heurD :Date,
    Datefin : Date,
    heurF : Date,
    Rapport  : string,
    Description : string,
    tocpro : [],
    Impact :[],
    SerPlat :string,
    toctik : [],
}

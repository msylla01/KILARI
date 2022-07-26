import { Toc } from "./toc"

export interface Critere{
    CritereId : number,
    Libelle : string
}
export interface Status{
    StatusId : number,
    Libelle : string
}

export interface Declenchement{
    DeclenchementId : number,
    Libelle : string
}
export interface Typrobleme{
    TyproblemeId : number,
    Libelle : string
}

export interface Tocprobleme {
    id :number,
    Numerotocpro :string,
    toc:number,
    typeproblem: string,
    Porteur: string,
    Date : Date,
    Dtatustocprob:string,
    Priorite: string,
}

export interface Rai  {
    id : number,
    critere :string,
    status :string,
    tocprobleme:number,
    declenchement:number,
    Rapportredige :string,
    Rapportpartage:string,
    Comptrendus:string,
    JoinToc : string,
    Rirecu : string,
    Cause :string,
    Rootcause :string,
    Statrootcause :string,
    Actionretablissement :string,
    Datecritere :Date,
    Typesolution:string,
    Commentaire :string,
    DateRept : Date,

    
}
export interface Planaction{
    id: number,
    Libelle: string,
    Porteur: string,
    Dateprevisionel: Date,
    Dateeffective: Date,
    Perimetre: string,
    Status: number,
    Efficacite: string,
    Commentaire: string,
    tocpr: number
}

export interface Incident {
    id:number,
    NatureIncident: string,
    tocprobleme  : number
}



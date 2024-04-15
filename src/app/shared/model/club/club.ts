import { Clubtag } from "../clubtag/clubtag";

export interface Club {
    name: string;
    description: string;
    city: string;
    user: string;
    image: string;
    tags: Clubtag[];
}


export interface ClubResponsee {
    message : string;
    club : Club;
}
import { Clubtag } from "../clubtag/clubtag";

export interface Club {
    name: string;
    description: string;
    price_day: number;
    price_month: number;
    price_year: number;
    city_id: number;
    user_id: number;
    image: string;
    tags: Clubtag[];
}


export interface ClubResponsee {
    message : string;
    club : Club;
}
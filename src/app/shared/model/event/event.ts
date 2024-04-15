import { Clubtag } from "../clubtag/clubtag";

export interface Event {
    title : String,
    description : String,
    content : String,
    event_date : Date
    sport_type_id : String,
    city_id : String,
    TagsClubs : Clubtag[],
}




export interface EventResponsee {
    message: string;
    event: Event;
}
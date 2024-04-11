export interface category {
    id : number;
    name: string;
    description: string; 
}


export interface CategoryState {
    list: category[];
    catrgoryobject: category;
    error: string;
}
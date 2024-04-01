export interface category {
    name: string;
    description: string; 
}


export interface CategoryState {
    list: category[];
    catrgoryobject: category;
    error: string;
}
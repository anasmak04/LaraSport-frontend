export interface category {
    id : number;
    name: string;
    description: string; 
}


export interface CategoryResponsee {
    message: string;
    category: category; 
}
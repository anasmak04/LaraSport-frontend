export interface Category {
    id : number;
    name: string;
    description: string; 
}


export interface CategoryResponsee {
    message: string;
    category: Category; 
}
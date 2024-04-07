export interface LoginResponse {
    token: string;
    roles : string[];
    user : string[];
    id : number;
    is_banned : boolean;
}
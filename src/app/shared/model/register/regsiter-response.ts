export interface RegsiterResponse {
    message: string;
    user: any; 
    access_token: string;
    token_type: string;
    roles : string[];
}

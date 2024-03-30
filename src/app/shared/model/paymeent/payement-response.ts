export interface PayementResponse {
    clientSecret: string;
    reservationId: number;
    amount: number;
    message: string;
}

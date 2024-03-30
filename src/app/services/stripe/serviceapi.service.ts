import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';
import { PayementResponse } from 'src/app/shared/model/paymeent/payement-response';

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {


  constructor(private http: HttpClient) {}

  startPayment(clubId: number, duration: string) {
    const token = localStorage.getItem('access_token'); 
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<PayementResponse>('http://127.0.0.1:8000/api/reservation/create', { club_id: clubId, duration: duration }, { headers });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private stripePromise: Promise<Stripe | null>;
  private publicKey: string = "pk_test_TYooMQauvdEDq54NiTphI7jx";     

  constructor() {
    this.stripePromise = loadStripe(this.publicKey);
  }

  async confirmPayment(clientSecret: string) {
    const stripe = await this.stripePromise;
    if (!stripe) {
      throw new Error("Stripe.js hasn't loaded yet.");
    }
    return await stripe.confirmCardPayment(clientSecret);
  }


}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { loadStripe, Stripe, StripeCardElement } from "@stripe/stripe-js";

@Injectable({
  providedIn: "root",
})
export class StripeService {
  private stripePromise: Promise<Stripe | null>;
  private stripeApiKey: string = "pk_test_51ORHSEGOE2spzWx43dWFcVPxmIsy3xnADEShDAljC4lfitFG19QMntVNu55ImRsUte7hVaXHNEmQFcUi6Gs05UZY001VdWNVFZ";
  cardElement!: StripeCardElement;

  constructor(private http: HttpClient) {
    this.stripePromise = loadStripe(this.stripeApiKey);
  }

  async initializeCardElement(
    elementId: string
  ): Promise<StripeCardElement | null> {
    const stripe = await this.stripePromise;
    if (!stripe) {
      console.error("Stripe has not been properly initialized");
      return null;
    }
    const elements = stripe.elements();
    const cardElement = elements.create("card");
    cardElement.mount(`#${elementId}`);
    return cardElement;
  }

  async createPaymentMethod(
    cardElement: StripeCardElement
  ): Promise<string | undefined> {
    const stripe = await this.stripePromise;
    if (!stripe) {
      console.error("Stripe has not been properly initialized");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(`Error creating payment method: ${error.message}`);
      return;
    }

    return paymentMethod?.id;
  }

  async confirmPayment(
    clientSecret: string,
    cardElement: StripeCardElement
  ): Promise<void> {
    const stripe = await this.stripePromise;
    if (!stripe) {
      console.error("Stripe has not been properly initialized");
      return;
    }

    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardElement },
    });

    if (error) {
      console.error(`Payment confirmation error: ${error.message}`);
    } else {
      console.log("Payment confirmed successfully");
    }
  }
}

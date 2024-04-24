import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { loadStripe, Stripe, StripeCardElement } from "@stripe/stripe-js";
import { jsPDF } from "jspdf";
import * as QRCode from "qrcode";

@Injectable({
  providedIn: "root",
})
export class StripeService {
  private stripePromise: Promise<Stripe | null>;
  private stripeApiKey: string =
    "pk_test_51ORHSEGOE2spzWx43dWFcVPxmIsy3xnADEShDAljC4lfitFG19QMntVNu55ImRsUte7hVaXHNEmQFcUi6Gs05UZY001VdWNVFZ";
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
    cardElement: StripeCardElement,
    selectedDate: Date,
    price: number,
    nameclub: string
  ): Promise<void> {
    const stripe = await this.stripePromise;
    if (!stripe) {
      console.error("Stripe has not been properly initialized");
      return;
    }
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: { card: cardElement },
      }
    );

    if (error) {
      console.error(`Payment confirmation error: ${error.message}`);
    } else {
      this.generatePDFTicket(paymentIntent, selectedDate, price, nameclub);
      console.log("Payment confirmed successfully");
    }
  }

  async generatePDFTicket(
    paymentIntent: any,
    selectedDate: Date,
    price: number,
    nameClub: string
  ): Promise<void> {
    const doc = new jsPDF();
  
    
    const baseColor = "#4A4A4A"; 
    const highlightColor = "#007BFF"; 
    doc.setFillColor(232, 240, 254); 
    doc.rect(0, 0, doc.internal.pageSize.width, 30, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(highlightColor);
    doc.text("Ticket Confirmation", 20, 20);  
    doc.setFontSize(16);
    doc.setTextColor(baseColor);
    doc.text(`Welcome to: ${nameClub}`, 20, 40); 
  
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text(`Payment ID: ${paymentIntent.id}`, 20, 60);
  
    
    doc.setFontSize(12);
    doc.text(`Price: $${price.toFixed(2)}`, 20, 70);
  
    
    doc.setFontSize(12);
    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    doc.text(`Date: ${formattedDate}`, 20, 80);
  
    
    try {
      const qrImage = await QRCode.toDataURL(
        `Payment ID: ${paymentIntent.id}, Amount: $${price.toFixed(2)}`,
        { margin: 1 }
      );
      doc.addImage(qrImage, "JPEG", 150, 60, 40, 40);
    } catch (error) {
      console.error("Error generating QR code", error);
    }
  
    
    doc.setTextColor(100);
    doc.setFontSize(10);
    doc.text("Thank you for your purchase!", 20, 140);
  
    
    doc.save("ticket.pdf");
  }
}

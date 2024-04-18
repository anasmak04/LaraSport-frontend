import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StripeCardElement } from "@stripe/stripe-js";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { CommentServiceService } from "src/app/services/comment/comment-service.service";
import { ServiceapiService } from "src/app/services/stripe/serviceapi.service";
import { StripeService } from "src/app/services/stripe/stripe.service";
import { PayementResponse } from "src/app/shared/model/paymeent/payement-response";

@Component({
  selector: "app-club-details",
  templateUrl: "./club-details.component.html",
  styleUrls: ["./club-details.component.css"],
})
export class ClubDetailsComponent implements OnInit {
  club: any;
  content: string = "";
  comments: any = [];
  cardElement!: StripeCardElement;
  selectedDuration: string = "day";
  selectedDate: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private clubService: ClubServiceService,
    private commentService: CommentServiceService,
    private stripeservice: StripeService,
    private http: HttpClient,
    private apiService: ServiceapiService
  ) {}


  
  async pay(clubId: number, duration: string) {
    this.apiService.startPayment(clubId, duration).subscribe(
        async (response: PayementResponse) => {
            const clientSecret = response.clientSecret;
            console.log('Client secret received:', clientSecret);

            const paymentMethodId = await this.stripeservice.createPaymentMethod(this.cardElement);
            console.log('Payment method created with ID:', paymentMethodId);

            const selectedDate = this.selectedDate || null;
            let price = 0;
            switch (duration) {
                case 'day':
                    price = Number(this.club.price_day);
                    break;
                case 'month':
                    price = Number(this.club.price_month);
                    break;
                case 'year':
                    price = Number(this.club.price_year);
                    break;
                default:
                    console.error('Invalid duration');
                    return;
            }

            console.log('Price calculated:', price);
            if (typeof price !== 'number' || isNaN(price)) {
                console.error('Price is not a valid number:', price);
                return;
            }

            await this.stripeservice.confirmPayment(clientSecret, this.cardElement, selectedDate, price);
        },
        (error) => {
            console.error("Error starting payment:", error);
        }
    );
}




  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const clubId = +params["id"];
      if (clubId) {
        this.loadClubDetails(clubId);
      }
    });

    this.FindAllComments();
    this.stripeservice
      .initializeCardElement("card-element")
      .then((cardElement) => {
        if (cardElement) {
          this.cardElement = cardElement;
          console.log("Stripe card element initialized and assigned.");
        } else {
          console.error("Failed to initialize Stripe card element.");
        }
      })
      .catch((error) => {
        console.error("Error initializing Stripe card element:", error);
      });
  }
  FindAllComments() {
    this.commentService.FindAll().subscribe({
      next: (response) => {
        this.comments = response.comments;
      },

      error: (err) => console.log(err),
    });
  }

  loadClubDetails(clubId: number): void {
    this.clubService.getClubById(clubId).subscribe({
      next: (response) => {
        this.club = response.club;
        console.log(this.club);
      },
      error: (err) => console.error(err),
    });
  }

  saveComment(): void {
    const commentData = {
      content: this.content,
      club_id: this.club?.id,
    };
    this.commentService.save(commentData).subscribe({
      next: (response) => {
        this.content = "";
        this.FindAllComments();
      },
      error: (err) => console.error(err),
    });
  }
}

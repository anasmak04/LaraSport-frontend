import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { CommentServiceService } from "src/app/services/comment/comment-service.service";
import { StripeService } from "src/app/services/stripe/stripe.service";

@Component({
  selector: "app-club-details",
  templateUrl: "./club-details.component.html",
  styleUrls: ["./club-details.component.css"],
})
export class ClubDetailsComponent implements OnInit {
  club: any;
  content: string = "";
  comments: any = [];

  constructor(
    private route: ActivatedRoute,
    private clubService: ClubServiceService,
    private commentService: CommentServiceService,
    private stripeservice: StripeService,
    private http: HttpClient
  ) {}

  makeReservationAndPay(clubId: number, duration: string) {
    const token = localStorage.getItem('access_token');

    if (!token) {
      console.error('No token found');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http
      .post("http://127.0.0.1:8000/api/reservation/create", {
        club_id: clubId,
        duration: duration,
        
      },{ headers: headers }).subscribe(
        async (response: any) => {
          console.log(response);
          const paymentResult = await this.stripeservice.confirmPayment(
            response.clientSecret
          );

          if (paymentResult.error) {
            console.log(paymentResult.error.message);
          } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
              console.log("Payment successful");
            }
          }
        },
        (error) => {
          console.error(error);
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
  }

  FindAllComments() {
    this.commentService.FindAll().subscribe({
      next: (response) => {
        console.log(response);
        this.comments = response.comments;
      },

      error: (err) => console.log(err),
    });
  }

  loadClubDetails(clubId: number): void {
    this.clubService.getClubById(clubId).subscribe({
      next: (response) => {
        this.club = response.club;
        console.log(response);
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
        console.log("Comment saved:", response.comments);
        this.content = "";
      },
      error: (err) => console.error(err),
    });
  }
}

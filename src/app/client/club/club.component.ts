import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CityServiceService } from "src/app/services/city/city-service.service";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { CommentServiceService } from "src/app/services/comment/comment-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";
import { CityResponse } from "src/app/shared/model/city-response";
import { ClubResponse } from "src/app/shared/model/club-response";

@Component({
  selector: "app-club",
  templateUrl: "./club.component.html",
  styleUrls: ["./club.component.css"],
})
export class ClubComponent implements OnInit {
  constructor(
    private clubservice: ClubServiceService,
    private route: ActivatedRoute
  ) {}

  loader = inject(LoaderServiceService);
  commentservice = inject(CommentServiceService);

  clubs: any[] = [];
  comments: any[] = [];

  value = 5;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const cityid = +params["id"];
      if (cityid) {
        this.FindCityByClub(cityid);
        this.FindAllComments();
      }
    });
  }

  FindAllComments() {
    this.commentservice.FindAll().subscribe({
      next: (response) => {
        this.comments = response.comment;
      },

      error: (err) => console.log(err),
    });
  }

  FindCityByClub(cityid: number) {
    this.clubservice.getClubsByCity(cityid).subscribe({
      next: (response) => {
        this.clubs = response.clubs;
        console.log(this.clubs);
      },
      error: (err) => console.log(err),
    });
  }
}

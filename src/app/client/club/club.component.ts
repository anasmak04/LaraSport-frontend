import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CityServiceService } from "src/app/services/admin/city/city-service.service";
import { ClubServiceService } from "src/app/services/admin/club/club-service.service";
import { CommentServiceService } from "src/app/services/admin/comment/comment-service.service";
import { ClubclientService } from "src/app/services/client/club/clubclient.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-club",
  templateUrl: "./club.component.html",
  styleUrls: ["./club.component.css"],
})
export class ClubComponent implements OnInit {
  constructor(
    private clubservice: ClubclientService,
    private route: ActivatedRoute
  ) {}

  public loader = inject(LoaderServiceService);
  private commentservice = inject(CommentServiceService);
  private cityservice = inject(CityServiceService);

  clubs: any[] = [];
  comments: any[] = [];
  clubssearch: any[] = [];
  mostreserved: any[] = [];
  searchTerm: String = "";

  value = 5;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const cityid = +params["id"];
      if (cityid) {
        this.FindCityByClub(cityid);
        this.FindAllComments();
      }
      this.MostReserved();
    });
  }

  MostReserved() {
    this.clubservice.TheMostClubReserved().subscribe({
      next: (response) => {
        this.mostreserved = response.clubs;
        console.log(this.mostreserved);
      },
      error: (err) => console.log(err),
    });
  }

  saveComment() {
    const comment = {
      content: "comment",
      club_id: 1,
    };
    this.commentservice.save(comment).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => console.log(err),
    });
  }

  FindAllComments() {
    this.commentservice.FindAll().subscribe({
      next: (response) => {
        this.comments = response.comments;
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

  search(searchTerm: String) {
    this.clubservice.search(searchTerm).subscribe({
      next: (response) => {
        this.clubssearch = response.search;
        console.log(this.clubssearch);
      },
      error: (err) => console.log(err),
    });
  }
}

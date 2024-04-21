import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { CommentServiceService } from "src/app/services/comment/comment-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

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



 
  public loader = inject(LoaderServiceService);
  private commentservice = inject(CommentServiceService);

  clubs: any[] = [];
  comments: any[] = [];
  clubssearch: any[] = [];
  searchTerm: String = "";

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

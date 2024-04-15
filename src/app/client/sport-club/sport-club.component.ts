import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClubTagsService } from "src/app/services/club-tags/club-tags.service";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { CommentServiceService } from "src/app/services/comment/comment-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-sport-club",
  templateUrl: "./sport-club.component.html",
  styleUrl: "./sport-club.component.css",
})
export class SportClubComponent implements OnInit {
  constructor(
    private clubservice: ClubServiceService,
    private sport : ClubTagsService,
    private route: ActivatedRoute
  ) {}

  loader = inject(LoaderServiceService);
  commentservice = inject(CommentServiceService);

  clubs: any[] = [];
  comments: any[] = [];
  clubssearch: any[] = [];
  searchTerm: String = "";

  value = 5;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const sportid = +params["id"];
      if (sportid) {
        this.FindCityByClub(sportid);
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

  FindCityByClub(sportid: number) {
   this.sport.FindClubByTag(sportid).subscribe({
      next: (response) => {
        this.clubs = response.clubs;
        console.log(this.clubs)
      },
      error: (err) => console.log(err),
   })
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

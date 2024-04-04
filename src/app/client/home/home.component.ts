import { Component, OnInit } from "@angular/core";
import { map } from "rxjs";
import { CityServiceService } from "src/app/services/city/city-service.service";
import { ClubTagsService } from "src/app/services/club-tags/club-tags.service";
import { PostServiceService } from "src/app/services/post/post-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  cities: any = [];
  tags: any = [];
  constructor(
    private cityservice: CityServiceService,
    private tagsservice: ClubTagsService
  ) {}

  ngOnInit(): void {
    this.findcities();
    this.findtags();
  }

  findcities() {
    this.cityservice
      .findAll()
      .pipe(map((res) => res.city.slice(0, 3)))
      .subscribe({
        next: (response) => {
          this.cities = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  findtags() {
    this.tagsservice
      .getTags()
      .pipe(map((res) => res.clubtag.slice(0, 3)))
      .subscribe({
        next: (response) => {
          this.tags = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}

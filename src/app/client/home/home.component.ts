import { Component, OnInit, inject } from "@angular/core";
import { Route, Router } from "@angular/router";
import { map } from "rxjs";
import { CityServiceService } from "src/app/services/city/city-service.service";
import { ClubTagsService } from "src/app/services/club-tags/club-tags.service";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { EventServiceService } from "src/app/services/event/event-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  cities: any = [];
  events: any = [];
  tags: any = [];
  selectedTag: string = "";
  selectedCity: string = "";
  constructor(
    private cityservice: CityServiceService,
    private tagsservice: ClubTagsService,
    private clubservice: ClubServiceService,
    private eventservice: EventServiceService,
    private router: Router
  ) {}


  loader = inject(LoaderServiceService);

  ngOnInit(): void {
    this.findcities();
    this.findtags();
    this.getevents();
  }

  tocities() {
    this.router.navigate(["/city"]);
  }

  toblogs() {
    this.router.navigate(["/post"]);
  }

  clubs: any;

  searchclub() {
    this.router.navigate(["/club-result"], {
      queryParams: { tag: this.selectedTag, city: this.selectedCity },
    });
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


  eventroute() {
    this.router.navigate(["/event"]);
  }
  getevents() {
    this.eventservice
      .FindAllEvents()
       .subscribe({
        next: (response) => {
          this.events = response.event.slice(0, 3);
          console.log(this.events);
        },
        error: (err) => {
          console.log(err);
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
          console.log(this.tags);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}

import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventServiceService } from "src/app/services/event/event-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-event-city",
  templateUrl: "./event-city.component.html",
  styleUrls: ["./event-city.component.css"]

})
export class EventCityComponent implements OnInit {
  events: any = [];
  cities: any = [];

  constructor(
    private eventservice: EventServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  loader = inject(LoaderServiceService);

  

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const cityId = params["cityId"];
      if (cityId) {
        this.fetchEvents(cityId);
      }
    });
    this.getallcities();
  }

  fetchEvents(cityId: number) {
    this.eventservice.getEventsByCity(cityId).subscribe({
      next: (response) => {
        console.log("Fetched events: ", response); 
        this.events = response.event;  
      },
      error: (err) => {
        console.error("Failed to fetch events", err);
      },
    });
  }
  

  getallcities() {
    this.eventservice.getcitiesByEvents().subscribe({
      next: (response) => {
        this.cities = response.city;
        console.log(this.cities);
      },
      error: (err) => console.log(err),
    });
  }

  navigateToEvents(cityId: number) {
    this.router.navigate(["/events/", cityId]);
  }
}

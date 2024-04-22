import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventServiceService } from "src/app/services/admin/event/event-service.service";
import { EventclientService } from "src/app/services/client/event/eventclient.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.css"],
})
export class EventDetailsComponent implements OnInit {
  cities: any = [];
  constructor(
    private route: ActivatedRoute,
    private eventservice: EventclientService,
    private router: Router
  ) {}

  loader = inject(LoaderServiceService);
  event: any = {};

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const eventId = +params["id"];
      if (eventId) {
        this.findeventbyid(eventId);
      }

      this.getallcities();
    });
  }

  navigateToEvents(cityId: number) {
    this.router.navigate(["/events/", cityId]);
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

  findeventbyid(id: number) {
    this.eventservice.findById(id).subscribe({
      next: (response) => {
        this.event = response.event;
        console.log(this.event);
      },
      error: (error) => console.log(error),
    });
  }
}

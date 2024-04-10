import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventServiceService } from "src/app/services/event/event-service.service";

@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.css"],
})
export class EventDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private eventservice: EventServiceService
  ) {}


  event : any = {};

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const eventId = +params["id"];
      if (eventId) {
        this.findeventbyid(eventId);
      }
    });
  }

  findeventbyid(id: number) {
    this.eventservice.findById(id).subscribe({
      next: (response) => {
        this.event= response.event;
        console.log(this.event);
      },
      error: (error) => console.log(error),
    });
  }
}

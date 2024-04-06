import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Header } from "primeng/api";

import { CityServiceService } from "src/app/services/city/city-service.service";
import { ClubTagsService } from "src/app/services/club-tags/club-tags.service";
import { EventServiceService } from "src/app/services/event/event-service.service";
import { SportTypeService } from "src/app/services/sport-type/sport-type.service";

@Component({
  selector: "app-admin-event",
  templateUrl: "./admin-event.component.html",
  styleUrls: ["./admin-event.component.css"],
})
export class AdminEventComponent implements OnInit {
  events: any[] = [];

  constructor(
    private eventservice: EventServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.findallEvents();
  }

  handleAdd() {
    this.router.navigate(["/admin/add/event"]);
  }

  findallEvents() {
    return this.eventservice.FindAllEvents().subscribe({
      next: (response) => {
        console.log(response);
        this.events = response.event;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}

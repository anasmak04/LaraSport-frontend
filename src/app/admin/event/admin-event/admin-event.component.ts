import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Header } from "primeng/api";
import { AlertService } from "src/app/services/alert/alert.service";

import { CityServiceService } from "src/app/services/admin/city/city-service.service";
import { ClubTagsService } from "src/app/services/admin/club-tags/club-tags.service";
import { EventServiceService } from "src/app/services/admin/event/event-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";
import { SportTypeService } from "src/app/services/admin/sport-type/sport-type.service";

@Component({
  selector: "app-admin-event",
  templateUrl: "./admin-event.component.html",
  styleUrls: ["./admin-event.component.css"],
})
export class AdminEventComponent implements OnInit {
  events: any[] = [];
  confirmDelete = false;

  constructor(
    private eventservice: EventServiceService,
    private router: Router,
    private sweet: AlertService
  ) {}

  loader = inject(LoaderServiceService);

  ngOnInit() {
    this.findallEvents();
  }


  cancel() {
    this.confirmDelete = false;
  }

  toggleconfirmDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

  
  handleAdd() {
    this.router.navigate(["/admin/add/event"]);
  }
  

  delete(id: number) {
    this.eventservice.delete(id).subscribe({
      next: () => {
        this.sweet.showSuccess("delete", "event deleted successfully");
        this.findallEvents();
      },

      error: (err) => {
        this.sweet.showError("delete", "event not deleted");
      },
    });
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

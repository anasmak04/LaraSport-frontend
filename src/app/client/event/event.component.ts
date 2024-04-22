import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { CityServiceService } from "src/app/services/admin/city/city-service.service";
import { EventServiceService } from "src/app/services/admin/event/event-service.service";
import { EventclientService } from "src/app/services/client/event/eventclient.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"],
})
export class EventComponent implements OnInit {
  events: any[] = [];
  cities: any[] = [];
  constructor(private eventservice: EventclientService,
    private router : Router,
  ) {}

  loader = inject(LoaderServiceService);

  ngOnInit(): void {
    this.getAll();
    this.getallcities();
  }

  getAll() {
    this.eventservice.FindAllEvents().subscribe({
      next: (response) => {
        this.events = response.event;
        console.log(this.events);
      },

      error: (err) => console.log(err),
    });
  }


  getallcities(){
    this.eventservice.getcitiesByEvents().subscribe({
      next: (response) => {
        this.cities = response.city;
        console.log(this.cities);
      },
      error: (err) => console.log(err),
    });
  
  }

 

  navigateToEvents(cityId: number) {
    this.router.navigate(['/events/', cityId]);
  }


}

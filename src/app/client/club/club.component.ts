import { Component, OnInit } from "@angular/core";
import { CityServiceService } from "src/app/services/city/city-service.service";
import { CityResponse } from "src/app/shared/model/city-response";

@Component({
  selector: "app-club",
  templateUrl: "./club.component.html",
  styleUrls: ["./club.component.css"],
})
export class ClubComponent implements OnInit {
  cities: any[] = [];
  constructor(private cityService: CityServiceService) {}

  ngOnInit(): void {
    this.findAllCities();
  }

  findAllCities() {
    this.cityService.findAll().subscribe({
      next: (response) => {
        this.cities = response.city;
        console.log(this.cities);
      },
      error: (err) => console.error("Failed to load cities:", err),
    });
  }
}

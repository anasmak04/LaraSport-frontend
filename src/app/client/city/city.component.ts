import { Component, OnInit } from '@angular/core';
import { CityServiceService } from 'src/app/services/city/city-service.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
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

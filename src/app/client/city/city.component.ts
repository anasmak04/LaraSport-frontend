import { Component, OnInit, inject } from '@angular/core';
import { CityServiceService } from 'src/app/services/city/city-service.service';
import { LoaderServiceService } from 'src/app/services/loader/loader-service.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: any[] = [];
  constructor(private cityService: CityServiceService) {}
   loader = inject(LoaderServiceService);
   

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

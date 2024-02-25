import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CityServiceService } from "src/app/services/city/city-service.service";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { CityResponse } from "src/app/shared/model/city-response";

@Component({
  selector: "app-club",
  templateUrl: "./club.component.html",
  styleUrls: ["./club.component.css"],
})
export class ClubComponent implements OnInit {
  constructor(
    private clubservice: ClubServiceService,
    private route: ActivatedRoute
  ) {}
  
  clubs: any[] = [];

  value = 5
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const cityid = +params['id']; 
      if (cityid) {
        this.FindCityByClub(cityid);
      }
    });
  }
  
  FindCityByClub(cityid: number) {
    this.clubservice.getClubsByCity(cityid).subscribe({
      next: (response) => {
        this.clubs = response.club;
        console.log(this.clubs)
      },
      error: (err) => console.log(err),
    });

  }
}

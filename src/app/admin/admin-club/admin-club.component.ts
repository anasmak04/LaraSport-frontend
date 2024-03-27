import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CityServiceService } from "src/app/services/city/city-service.service";
import { ClubTagsService } from "src/app/services/club-tags/club-tags.service";
import { ClubServiceService } from "src/app/services/club/club-service.service";

@Component({
  selector: "app-admin-club",
  templateUrl: "./admin-club.component.html",
  styleUrls: ["./admin-club.component.css"],
})
export class AdminClubComponent implements OnInit {

  clubs : any = [];

  constructor(private clubservice : ClubServiceService,
    private route : Router){
  }

  ngOnInit(): void {
    this.FindAllClubs();
  }


  addroute(){
    this.route.navigate(["admin/add/club"]);
  }




  FindAllClubs(){
    return this.clubservice.FindAllClubs().subscribe({
      next : (response) => {
        this.clubs = response.clubs;
      },

      error  : (err) => console.log(err),
    }) 
  }
  
}

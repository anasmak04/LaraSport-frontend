import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert/alert.service";
import { CityServiceService } from "src/app/services/city/city-service.service";
import { ClubTagsService } from "src/app/services/club-tags/club-tags.service";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-admin-club",
  templateUrl: "./admin-club.component.html",
  styleUrls: ["./admin-club.component.css"],
})
export class AdminClubComponent implements OnInit {
  clubs: any = [];
  confirmDelete = false;

  constructor(
    private clubservice: ClubServiceService,
    private route: Router,
    private sweet: AlertService
  ) {}

  loader = inject(LoaderServiceService);

  ngOnInit(): void {
    this.FindAllClubs();
  }

  addroute() {
    this.route.navigate(["admin/add/club"]);
  }


  cancel(){
    this.confirmDelete = false;
  }


  toggleconfirmDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

  editroute() {}

  delete(id: number) {
    this.clubservice.delete(id).subscribe({
      next: () => {
        this.sweet.showSuccess("club", "club deleted succsessfully");
        this.FindAllClubs();
      },
      error: (err) => {
        this.sweet.showError("club", "club not deleted ");
      },
    });
  }

  FindAllClubs() {
    return this.clubservice.FindAllClubs().subscribe({
      next: (response) => {
        this.clubs = response.clubs;
      },
      error: (err) => console.log(err),
    });
  }


}

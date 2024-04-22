import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert/alert.service";
import { ClubServiceService } from "src/app/services/admin/club/club-service.service";
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

  currentPage =1;

  addroute() {
    this.route.navigate(["admin/add/club"]);
  }

  cancel() {
    this.confirmDelete = false;
  }

  toggleconfirmDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

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

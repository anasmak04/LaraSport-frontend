import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/services/alert/alert.service";
import { ClubFacadeService } from "src/app/services/club/club-facade.service";

@Component({
  selector: "app-add-club",
  templateUrl: "./add-club.component.html",
  styleUrls: ["./add-club.component.css"],
})
export class AddClubComponent implements OnInit {
  clubs: any = [];
  cities: any = [];
  tags: any[] = [];
  managers: any[] = [];

  FormClub: FormGroup;
  constructor(
    private Facadeservcice: ClubFacadeService,
    private fb: FormBuilder,
    private sweet: AlertService
  ) {
    this.FormClub = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price_day: ["", Validators.required],
      price_month: ["", Validators.required],
      price_year: ["", Validators.required],
      city_id: ["", Validators.required],
      user_id: ["", Validators.required],
      tags: ["", Validators.required],
      image: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.findAllClubs();
    this.FindAllCities();
    this.findAllClubTags();
    this.FindAllManagers();
  }

  FindAllManagers() {
    return this.Facadeservcice.findAllManagers().subscribe({
      next: (response) => {
        this.managers = response.managers;
      },
      error: (err) => console.log(err),
    });
  }

  findAllClubTags() {
    return this.Facadeservcice.findAllClubTags().subscribe({
      next: (response) => {
        this.tags = response.clubtag;
        console.log(this.tags);
      },
      error: (err) => console.log(err),
    });
  }

  findAllClubs() {
    return this.Facadeservcice.findAllClubs().subscribe({
      next: (response) => {
        this.clubs = response.clubs;
      },
      error: (err) => console.log(err),
    });
  }

  FindAllCities() {
    return this.Facadeservcice.FindAllCities().subscribe({
      next: (response) => {
        this.cities = response.city;
      },
      error: (err) => console.log(err),
    });
  }

  add() {
    if (this.FormClub.valid) {
      const formData = new FormData();
      formData.append("name", this.FormClub.get("name")?.value);
      formData.append("description", this.FormClub.get("description")?.value);
      formData.append("price_day", this.FormClub.get("price_day")?.value);
      formData.append("price_month", this.FormClub.get("price_month")?.value);
      formData.append("price_year", this.FormClub.get("price_year")?.value);
      formData.append("description", this.FormClub.get("description")?.value);
      formData.append("city_id", this.FormClub.get("city_id")?.value);
      formData.append("user_id", this.FormClub.get("user_id")?.value);

      const tags = this.FormClub.get("tags")?.value;
      if (Array.isArray(tags)) {
        tags.forEach((tag) => {
          formData.append("tags[]", tag);
        });
      } else {
        console.warn("Tags are not in an array format.");
      }

      const fileInput: HTMLInputElement =
        document.querySelector('input[type="file"]')!;
      if (fileInput && fileInput.files && fileInput.files[0]) {
        formData.append("image", fileInput.files[0]);
      }

      this.Facadeservcice.saveClub(formData).subscribe({
        next: (response) => {
          console.log("Upload successful", response);
          this.sweet.showSuccess("Club", "Club created successfully");
          this.findAllClubs();
        },
        error: (err) => {
          this.sweet.showError("Club", "Club not created");
        },
      });
    }
  }
}

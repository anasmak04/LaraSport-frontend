import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertService } from "src/app/services/alert/alert.service";
import { CityServiceService } from "src/app/services/city/city-service.service";
import { ClubTagsService } from "src/app/services/club-tags/club-tags.service";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { EventServiceService } from "src/app/services/event/event-service.service";
import { ManagerService } from "src/app/services/manager/manager.service";
import { Club } from "src/app/shared/model/club/club";
import { ClubResponse } from "src/app/shared/model/club/club-response";

@Component({
  selector: "app-edit-club",
  templateUrl: "./edit-club.component.html",
  styleUrls: ["./edit-club.component.css"],
})
export class EditClubComponent implements OnInit {
  ClubForm: FormGroup;
  postId: number = 0;
  cities: any[] = [];
  tags: any[] = [];
  managers: any[] = [];

  constructor(
    private clubservice: ClubServiceService,
    private cityservice: CityServiceService,
    private managerservice : ManagerService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clubtag: ClubTagsService,
    private router: Router,
    private sweet: AlertService
  ) {
    this.ClubForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      // image: ["", Validators.required],
      city_id: ["", Validators.required],
      user_id: ["", Validators.required],
      tags: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params["id"];
    this.loadPostData(this.postId);
    this.findallCities();
    this.findallclubtags();
    this.findallmanager();
  }

  findallclubtags() {
    this.clubtag.getTags().subscribe({
      next: (response) => {
        this.tags = response.clubtag;
      },
      error: (err) => console.log(err),
    });
  }

  loadPostData(id: number) {
    this.clubservice.getClubById(id).subscribe({
      next: (response) => {
        this.ClubForm.setValue({
          name: response.club.name,
          description: response.club.description,
          // image: response.club.image,
          city_id: response.club.city,
          user_id: response.club.user,
          tags: response.club.tags
            ? response.club.tags.map((tag) => tag.id)
            : [],
        });
      },
      error: (err) => console.log(err),
    });
  }

  findallCities() {
    this.cityservice.findAll().subscribe({
      next: (response) => {
        this.cities = response.city;
      },
      error: (err) => console.log(err),
    });
  }


  findallmanager(){
    this.managerservice.FindAllManagers().subscribe({
      next: (response) => {
        this.managers = response.managers;
        console.log(this.managers);
      },
      error: (err) => console.log(err),
    });
    
  }

  updatePost() {
    console.log("Form Value: ", this.ClubForm.value);
    console.log("Form Validity: ", this.ClubForm.valid);

    if (this.ClubForm.valid) {
      this.clubservice.update(this.postId, this.ClubForm.value).subscribe({
        next: (club) => {
          this.sweet.showSuccess("Club Updated Successfully", "Success");
          this.router.navigate(["/admin/club"]);
          console.log("Post updated successfully:", event);
        },
        error: (err) => {
          this.sweet.showError("Error Updating Event", "Error");
          console.log("Error updating post:", err);
        },
      });
    } else {
      console.log("Validation failed");
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/services/alert/alert.service";
import { CityServiceService } from "src/app/services/city/city-service.service";

@Component({
  selector: "app-admin-city",
  templateUrl: "./admin-city.component.html",
  styleUrls: ["./admin-city.component.css"],
})
export class AdminCityComponent implements OnInit {
  cityForm: FormGroup;
  cities: any = [];

  constructor(
    private cityservice: CityServiceService,
    private fb: FormBuilder,
    private sweet: AlertService
  ) {
    this.cityForm = this.fb.group({
      name: ["", Validators.required],
      image: ["", Validators.required],
    });
  }

  showModal: boolean = false;
  showModalUpdate: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  ngOnInit(): void {
    this.finAllCities();
  }

  add() {
    if (this.cityForm.valid) {
      const formdata = new FormData();
      formdata.append("name", this.cityForm.get("name")?.value);
      const fileInput: HTMLInputElement =
        document.querySelector('input[type="file"]')!;
      if (fileInput && fileInput.files && fileInput.files[0]) {
        formdata.append("image", fileInput.files[0]);
      }

      this.cityservice.save(formdata).subscribe({
        next: () => {
          this.finAllCities();
          this.sweet.showSuccess("City added", "City added successfully");
          this.cityForm.reset();
        },
        error: () => this.sweet.showError("Error", "Error adding city"),
      });
    }
  }

  finAllCities() {
    this.cityservice.findAll().subscribe({
      next: (result) => {
        this.cities = result.city;
      },
      error: (err) => console.log(err),
    });
  }
}

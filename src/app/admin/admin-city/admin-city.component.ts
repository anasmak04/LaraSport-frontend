import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/services/alert/alert.service";
import { CityServiceService } from "src/app/services/city/city-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

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
      id : [""],
      name: ["", Validators.required],
      image: ["", Validators.required],
    });
  }

  loader = inject(LoaderServiceService);

  showModal: boolean = false;
  showModalUpdate: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  ngOnInit(): void {
    this.finAllCities();
  }


  toggleModalUpdate(){
    this.showModalUpdate = !this.showModalUpdate;
  }

  update() {
    const id = this.cityForm.value.id;
    console.log("Updating category with ID:", id);
    if (id && this.cityForm.valid) {
      this.cityservice.update(id, this.cityForm.value).subscribe({
        next: () => {
          this.sweet.showSuccess(
            "city updated",
            "city updated successfully"
          );
          this.cityForm.reset();
          this.toggleModalUpdate();
          this.finAllCities(); 
        },
        error: (err) => {
          this.sweet.showError("Error", "city not updated");
          console.error(err);
        },
      });
    } 
  }

  findbyid(id: number) {
    this.showModalUpdate = true;
    this.cityservice.findbyid(id).subscribe({
      next: (result) => {
        this.cityForm.patchValue(result.city);
      },
      error: (err) => console.log(err),
    });
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
          this.showModal = !this.showModal;
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

  delete(id: number) {
    this.cityservice.delete(id).subscribe({
      next: () => {
        this.finAllCities();
        this.sweet.showSuccess("City deleted", "City deleted successfully");
      },
      error: () => this.sweet.showError("Error", "Error deleting city"),
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthFacadeService } from "src/app/services/auth/auth-facade.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: any = FormGroup;
  cities: any[] = [];

  constructor(
    private fb: FormBuilder,
    private FacadeService: AuthFacadeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCities();
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      dateOfBirth: ["", [Validators.required]],
      city: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      password_confirmation: ["", [Validators.required]],
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.FacadeService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log("Registration successful", response);
          this.router.navigate(["/login"]);
        },
        error: (error) => {
          console.error("Registration failed", error);
        },
      });
    }
  }

  getCities() {
    this.FacadeService.getCities().subscribe({
      next: (response) => (this.cities = response.city),
      error: (err) => console.log(err),
    });
  }
}

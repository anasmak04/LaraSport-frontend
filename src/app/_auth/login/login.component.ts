import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/auth/auth-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  errorMessage: string = "";

  constructor(
    private authservice: AuthServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authservice.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log("login successful", response);
          this.authservice.storeToken(response.token);
          const id = localStorage.setItem("managerId", response.id.toString());
          this.authservice.storeRoles(response.roles);
          this.authservice.storeUser(response.user);
          this.authservice.storeisBanned(response.is_banned);
          if (response.roles.includes("Admin")) {
            this.router.navigate(["/admin/dashboard"]);
          } else if (response.roles.includes("Manager")) {
            this.router.navigate(["/manager/reservation"]);
          } else {
            this.router.navigate(["/city"]);
          }
        },
        error: (error) => {
          this.errorMessage = "Incorrect username or password.";
          console.error("login failed", error);
        },
      });
    }
  }
}

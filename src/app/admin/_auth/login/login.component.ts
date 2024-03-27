import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/Authservice/auth-service.service";

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

          this.authservice.storeToken(response.access_token);
          this.authservice.storeRoles(response.roles);
          this.authservice.storeUser(response.user);

          if (response.roles.includes("Admin")) {
            this.router.navigate(["/admin/dashboard"]);
          } else {
            this.router.navigate(["/user/home"]);
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

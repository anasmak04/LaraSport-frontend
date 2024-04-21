import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/auth/auth-service.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthServiceService, private router: Router) {}

  ngOnInit(): void {}
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.auth.logout().subscribe({
      next: () => {
        this.router.navigate(["/login"]);
      },

      error: (error) => {
        console.error("logout failed", error);
      },
    });
  }

  login() {
    this.router.navigate(["/login"]);
  }
  register() {
    this.router.navigate(["/register"]);
  }


  event(){
    this.router.navigate(["/event"]);
  }

  post(){
    this.router.navigate(["/post"]);
  }

  city(){
    this.router.navigate(["/city"]);
  }

  home(){
    this.router.navigate(["/"]);
  }
}

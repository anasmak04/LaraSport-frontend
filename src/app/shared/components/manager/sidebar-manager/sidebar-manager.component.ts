import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar-manager",
  templateUrl: "./sidebar-manager.component.html",
  styleUrl: "./sidebar-manager.component.css",
})
export class SidebarManagerComponent {
  constructor(private router: Router) {}

  club() {
    this.router.navigate(["/mangager/club"]);
  }
}

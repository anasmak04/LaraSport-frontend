import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  isCityRoute: boolean = false;
  isDashboardRoute: boolean = false;
  isUserRoute: boolean = false;
  isblogRoute: boolean = false;
  iscategoryRoute: boolean = false;
  isclubsRoute: boolean = false;
  istagsRoute: boolean = false;
  issportRoute: boolean = false;
  iseventsRoute: boolean = false;

  constructor(private route: Router) {}

  ngOnInit() {
    this.checkCityRoute();
    this.checkDashboardRoute();
    this.checkUserRoute();
    this.checkblogRoute();
    this.checkCategoryRoute();
    this.checkclubRoute();
    this.checktagsRoute();
    this.checksportRoute();
    this.checkeventsRoute();
  }

  checkeventsRoute() {
    this.iseventsRoute = this.route.url.includes("/event");
  }

  checksportRoute() {
    this.issportRoute = this.route.url.includes("/sport");
  }

  checktagsRoute() {
    this.istagsRoute = this.route.url.includes("/tags");
  }

  checkclubRoute() {
    this.isclubsRoute = this.route.url.includes("/club");
  }

  checkCityRoute() {
    this.isCityRoute = this.route.url.includes("/city");
  }

  checkDashboardRoute() {
    this.isDashboardRoute = this.route.url.includes("/dashboard");
  }

  checkUserRoute() {
    this.isUserRoute = this.route.url.includes("/users");
  }

  checkblogRoute() {
    this.isblogRoute = this.route.url.includes("/post");
  }

  checkCategoryRoute() {
    this.iscategoryRoute = this.route.url.includes("/category");
  }

  users() {
    this.route.navigate(["/admin/users"]);
  }

  categories() {
    this.route.navigate(["/admin/category"]);
  }

  tags() {
    this.route.navigate(["/admin/tags"]);
  }

  posts() {
    this.route.navigate(["/admin/post"]);
  }
  dashboard() {
    this.route.navigate(["/admin/dashboard"]);
  }

  clubtags() {
    this.route.navigate(["/admin/sport"]);
  }

  events() {
    this.route.navigate(["/admin/event"]);
  }

  city() {
    this.route.navigate(["/admin/city"]);
  }

  clubs() {
    this.route.navigate(["/admin/club"]);
  }
}

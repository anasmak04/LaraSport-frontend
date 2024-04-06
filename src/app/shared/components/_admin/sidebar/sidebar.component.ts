import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {}
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

  clubtags(){
    this.route.navigate(["/admin/clubtags"]);
  }

  events() {
    this.route.navigate(["/admin/event"]);
  }

  city() {
    this.route.navigate(["/admin/city"]);
  }


  clubs(){
    this.route.navigate(["/admin/club"]);
  }


}

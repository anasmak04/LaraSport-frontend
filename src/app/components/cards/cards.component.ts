import { Component, OnInit, inject } from "@angular/core";
import { StatisticsService } from "../../services/statistics/statistics.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
})
export class CardsComponent implements OnInit {
  constructor(public statistics: StatisticsService) {}

  ngOnInit(): void {
    this.countusers();
    this.countblogs();
    this.countcategories();
    this.countcities();
    this.countclubs();
  }

  loader = inject(LoaderServiceService);


  countUsers: any;
  countBlogs: any;
  countCategories: any;
  countCities : any;
  countClubs : any;

  countusers() {
    return this.statistics.CountUsers().subscribe({
      next: (response) => (this.countUsers = response.count),
      error: (err) => console.log(err),
    });
  }

  countblogs() {
    return this.statistics.CountBlogs().subscribe({
      next: (response) => (this.countBlogs = response.count),
      error: (err) => console.log(err),
    });
  }

  countcategories() {
    return this.statistics.CountCategories().subscribe({
      next: (response) => (this.countCategories = response.count),
      error: (err) => console.log(err),
    });
  }


  countcities() {
    return this.statistics.CountCities().subscribe({
      next: (response) => (this.countCities = response.count),
      error: (err) => console.log(err),
    });
  }

  countevents() {
    return this.statistics.CountCities().subscribe({
      next: (response) => (this.countCities = response.count),
      error: (err) => console.log(err),
    });
  }



  countclubs() {
    return this.statistics.CountClubs().subscribe({
      next: (response) => (this.countClubs = response.count),
      error: (err) => console.log(err),
    });
  }


}

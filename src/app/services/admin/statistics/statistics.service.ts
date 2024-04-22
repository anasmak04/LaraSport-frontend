import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Statistics } from "src/app/shared/model/statistics";

@Injectable({
  providedIn: "root",
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  CountUsers() {
    return this.http.get<Statistics>("http://127.0.0.1:8000/api/admin/countusers");
  }

  CountBlogs() {
    return this.http.get<Statistics>("http://localhost:8000/api/countposts");
  }

  CountCategories() {
    return this.http.get<Statistics>(
      "http://localhost:8000/api/countcategories"
    );
  }

  CountCities() {
    return this.http.get<Statistics>("http://localhost:8000/api/admin/countcities");
  }

  CountClubs() {
    return this.http.get<Statistics>("http://localhost:8000/api/admin/countclubs");
  }

  CountEvents() {
    return this.http.get<Statistics>("http://localhost:8000/api/admin/countevents");
  }
}

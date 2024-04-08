import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Statistics } from "src/app/shared/model/statistics";

@Injectable({
  providedIn: "root",
})
export class StatisticsService {
  constructor(private http: HttpClient) {}


  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }


  CountUsers() {
    return this.http.get<Statistics>("http://127.0.0.1:8000/api/countusers", {headers : this.getHeaders()});
  }

  CountBlogs() {
    return this.http.get<Statistics>("http://localhost:8000/api/countposts", {headers : this.getHeaders()});
  }

  CountCategories() {
    return this.http.get<Statistics>(
      "http://localhost:8000/api/countcategories", {headers : this.getHeaders()}
    );
  }

  CountCities() {
    return this.http.get<Statistics>("http://localhost:8000/api/countcities", {headers : this.getHeaders()});
  }

  CountClubs() {
    return this.http.get<Statistics>("http://localhost:8000/api/countclubs", {headers : this.getHeaders()});
  }

  CountEvents() {
    return this.http.get<Statistics>("http://localhost:8000/api/countevents", {headers : this.getHeaders()});
  }
}

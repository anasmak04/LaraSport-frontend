import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChartDataService {
  constructor(private http: HttpClient) {}

 

  getChartDataPosts(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/api/chart/posts");
  }


  getChartDataEvents(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/api/chart/events");
  }

  
  getChartDataClubs(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/api/chart/clubs");
  }

  

  getUserGrowth(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/api/chart/users");
  }
}







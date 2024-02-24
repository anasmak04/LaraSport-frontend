import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CityResponse } from "src/app/shared/model/city-response";

@Injectable({
  providedIn: "root",
})
export class CityServiceService   {

  private ApiCity = "http://127.0.0.1:8000/api/city";

  constructor(private http: HttpClient) {}

  findAll(): Observable<CityResponse> {
    return this.http.get<CityResponse>(this.ApiCity);
  }

  
  
}

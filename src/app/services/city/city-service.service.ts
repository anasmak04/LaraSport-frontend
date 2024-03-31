import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CityResponse } from "src/app/shared/model/city/city-response";

@Injectable({
  providedIn: "root",
})
export class CityServiceService   {

  private ApiCity = "http://127.0.0.1:8000/api/city";

  constructor(private http: HttpClient) {}


  findAll(): Observable<CityResponse> {
    return this.http.get<CityResponse>(this.ApiCity);
  }

  save(formdata: FormData): Observable<any>{
    return this.http.post(this.ApiCity, formdata);
  }
  

  delete(id : number): Observable<any>{
    return this.http.delete(this.ApiCity + '/' + id);
  }
  
}

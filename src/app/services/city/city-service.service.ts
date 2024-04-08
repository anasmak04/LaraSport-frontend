import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CitySearchResponse } from "src/app/shared/model/city-search-response";
import { CityResponse } from "src/app/shared/model/city/city-response";

@Injectable({
  providedIn: "root",
})
export class CityServiceService   {

  private ApiCity = "http://127.0.0.1:8000/api/city";
  
  private ApiCitySearch = "http://127.0.0.1:8000/api/search/city";

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  constructor(private http: HttpClient) {}


  findAll(): Observable<CityResponse> {
    return this.http.get<CityResponse>(this.ApiCity, {headers: this.getHeaders()});
  }

  save(formdata: FormData): Observable<any>{
    return this.http.post(this.ApiCity, formdata, {headers: this.getHeaders()});
  }
  

  delete(id : number): Observable<any>{
    return this.http.delete(this.ApiCity + '/' + id, {headers: this.getHeaders()});
  }

  search(searchTerm : String) : Observable<CitySearchResponse>{
    return this.http.get<CitySearchResponse>(this.ApiCitySearch + '/' + searchTerm , {headers: this.getHeaders()});
  }

  
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Club } from "src/app/shared/model/club";
import { ClubResponse } from "src/app/shared/model/club-response";
import { tap } from "rxjs/operators";
import { CommentServiceService } from "../comment/comment-service.service";
import { ClubdetailsResponse } from "src/app/shared/model/clubdetails-response";

@Injectable({
  providedIn: "root",
})
export class ClubServiceService {
  private ApiUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}


  getClubsByCity(cityid: number): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.ApiUrl}/city/${cityid}/clubs`);
  }


  getClubById(id: number): Observable<ClubdetailsResponse> {
    return this.http.get<ClubdetailsResponse>(`${this.ApiUrl}/clubs/${id}`);
  }

  FindAllClubs(): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.ApiUrl}/clubs`);
  }

  save(formdata: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append("Authorization", "Bearer " + localStorage.getItem("access_token"));  
    return this.http.post(`${this.ApiUrl}/clubs`, formdata, { headers: headers });
  }

  


}

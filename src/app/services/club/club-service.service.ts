import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Club } from "src/app/shared/model/club/club";
import { ClubResponse } from "src/app/shared/model/club/club-response";
import { tap } from "rxjs/operators";
import { CommentServiceService } from "../comment/comment-service.service";
import { ClubdetailsResponse } from "src/app/shared/model/clubdetails/clubdetails-response";
import { ClubSearchResponse } from "src/app/shared/model/club-search-response";

@Injectable({
  providedIn: "root",
})
export class ClubServiceService {
  private ApiUrl = "http://127.0.0.1:8000/api";
  private ApiClubSearch = "http://127.0.0.1:8000/api/search/club";


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
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem("access_token")
    );
    return this.http.post(`${this.ApiUrl}/clubs`, formdata, {
      headers: headers,
    });
  }


  search(searchTerm: String): Observable<ClubSearchResponse> {
    return this.http.get<ClubSearchResponse>(`${this.ApiClubSearch}/${searchTerm}`);
  }
}

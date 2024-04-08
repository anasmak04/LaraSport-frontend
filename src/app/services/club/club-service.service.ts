import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getClubsByCity(cityid: number): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.ApiUrl}/city/${cityid}/clubs`, {
      headers: this.getHeaders(),
    });
  }

  getClubById(id: number): Observable<ClubdetailsResponse> {
    return this.http.get<ClubdetailsResponse>(`${this.ApiUrl}/clubs/${id}`, {
      headers: this.getHeaders(),
    });
  }

  FindAllClubs(): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.ApiUrl}/clubs`, {
      headers: this.getHeaders(),
    });
  }

  save(formdata: FormData): Observable<any> {
    return this.http.post(`${this.ApiUrl}/clubs`, formdata, {
      headers: this.getHeaders(),
    });
  }

  search(searchTerm: String): Observable<ClubSearchResponse> {
    return this.http.get<ClubSearchResponse>(
      `${this.ApiClubSearch}/${searchTerm}`,
      { headers: this.getHeaders() }
    );
  }

  searchClubs(tagId: string, cityId: string): Observable<ClubResponse> {
    let params = new HttpParams();
    if (cityId) {
      params = params.append("city_id", cityId);
    }
    if (tagId) {
      params = params.append("tag_id", tagId);
    }

    return this.http.get<ClubResponse>(`${this.ApiUrl}/search/clubs`, {
      headers: this.getHeaders(),
    });
  }
}

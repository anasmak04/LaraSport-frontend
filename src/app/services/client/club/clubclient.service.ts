import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Club, ClubResponsee } from "src/app/shared/model/club/club";
import { ClubResponse } from "src/app/shared/model/club/club-response";
import { tap } from "rxjs/operators";
import { ClubdetailsResponse } from "src/app/shared/model/clubdetails/clubdetails-response";
import { ClubSearchResponse } from "src/app/shared/model/club-search-response";
@Injectable({
  providedIn: "root",
})
export class ClubclientService {
  private ApiUrl = "http://127.0.0.1:8000/api/user";
  private ApiClubSearch = "http://127.0.0.1:8000/api/search/club";

  constructor(private http: HttpClient) {}

  getClubsByCity(cityid: number): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.ApiUrl}/city/${cityid}/clubs`);
  }

  getClubById(id: number): Observable<ClubResponsee> {
    return this.http.get<ClubResponsee>(`${this.ApiUrl}/clubs/${id}`);
  }

  FindAllClubs(): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.ApiUrl}/clubs`);
  }

  search(searchTerm: String): Observable<ClubSearchResponse> {
    return this.http.get<ClubSearchResponse>(
      `${this.ApiClubSearch}/${searchTerm}`
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

    return this.http.get<ClubResponse>(`${this.ApiUrl}/search/clubs`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.ApiUrl + "/" + id);
  }


  

  TheMostClubReserved() : Observable<ClubResponse>{
    return this.http.get<ClubResponse>("http://127.0.0.1:8000/api/mostclub/reserved");
  }


}

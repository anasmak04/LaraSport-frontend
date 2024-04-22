import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClubResponse } from "src/app/shared/model/club/club-response";
import { Clubtag } from "src/app/shared/model/clubtag/clubtag";
import { ClubtagRESPONSE } from "src/app/shared/model/clubtag/clubtag-response";
@Injectable({
  providedIn: "root",
})
export class SportclientService {

  private searchApi = "http://127.0.0.1:8000/api/user/search/sport/"
  constructor(private http: HttpClient) {}

  getTags(): Observable<ClubtagRESPONSE> {
    return this.http.get<ClubtagRESPONSE>("http://127.0.0.1:8000/api/user/clubtags");
  }

  searchSport(search: string): Observable<ClubtagRESPONSE> {
    return this.http.get<ClubtagRESPONSE>(this.searchApi + search);
  }

  FindClubByTag(sport: number): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(
      `http://127.0.0.1:8000/api/sport/club/${sport}`
    );
  }
}

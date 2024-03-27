import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Club } from "src/app/shared/model/club";
import { ClubResponse } from "src/app/shared/model/club-response";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClubServiceService {
  private ApiUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}

  getClubsByCity(cityid: number): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.ApiUrl}/city/${cityid}/clubs`);
  }

  FindAllClubs(): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.ApiUrl}/clubs`);
  }

  save(formdata: FormData): Observable<any> {
    return this.http.post(`${this.ApiUrl}/clubs`, formdata);
  }
}

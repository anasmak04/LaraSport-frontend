import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClubResponse } from "src/app/shared/model/club-response";

@Injectable({
  providedIn: "root",
})
export class ClubServiceService {
  private ApiUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}

  getClubsByCity(cityid: number): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.ApiUrl}/city/${cityid}/clubs`);
  }
}

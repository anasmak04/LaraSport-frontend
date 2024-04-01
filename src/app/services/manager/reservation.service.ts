import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReservationResponse } from "src/app/shared/model/reservation/ReservationResponse";

@Injectable({
  providedIn: "root",
})
export class ReservationService {
  Apiurl = "http://localhost:8000/api/reservation/";
  constructor(private http: HttpClient) {}

  // Get all reservations
  getAllReservations(club_id: number): Observable<ReservationResponse> {
    return this.http.get<ReservationResponse>(this.Apiurl + club_id);
  }
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReservationResponse } from "src/app/shared/model/reservation/ReservationResponse";

@Injectable({
  providedIn: "root",
})
export class ReservationService {
  Apiurl = "http://localhost:8000/api/reservation";
  constructor(private http: HttpClient) {}

  // Get all reservations
  getAllReservations(): Observable<ReservationResponse> {
    const header = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    })
    return this.http.get<ReservationResponse>(this.Apiurl , {headers: header});
  }

}

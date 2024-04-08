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

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }


  // Get all reservations
  getAllReservations(): Observable<ReservationResponse> {
    return this.http.get<ReservationResponse>(this.Apiurl, {
      headers: this.getHeaders(),
    });
  }
}

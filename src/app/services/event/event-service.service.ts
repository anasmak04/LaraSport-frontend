import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EventResponse } from "src/app/shared/model/event-response";

@Injectable({
  providedIn: "root",
})
export class EventServiceService {
  private urlApi = "http://127.0.0.1:8000/api/event";

  constructor(private http: HttpClient) {}

  
  save(formdata: FormData): Observable<any> {
    const token = localStorage.getItem("access_token");
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    return this.http.post(this.urlApi, formdata, { headers: headers });
  }

  FindAllEvents(): Observable<EventResponse> {
    return this.http.get<EventResponse>(this.urlApi);
  }

  FindEventById(id: number): Observable<EventResponse> {
    return this.http.get<EventResponse>(this.urlApi + "/" + id);
  }
}

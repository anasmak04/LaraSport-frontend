import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EventResponse } from "src/app/shared/model/event/event-response";

@Injectable({
  providedIn: "root",
})
export class EventServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api/event';

  constructor(private http: HttpClient) {}

  save(formData: FormData): Observable<any> {
    const token = localStorage.getItem('access_token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrl, formData, { headers });
  }

  FindAllEvents(): Observable<EventResponse> {
    return this.http.get<EventResponse>(this.apiUrl);
  }

  FindEventById(id: number): Observable<EventResponse> {
    return this.http.get<EventResponse>(this.apiUrl + "/" + id);
  }
}

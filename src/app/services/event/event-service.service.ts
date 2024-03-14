import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventResponse } from 'src/app/shared/model/event-response';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {


  private urlApi = "http://127.0.0.1:8000/api/event";


  constructor(private http : HttpClient) { }


  FindAllEvents(): Observable<EventResponse>{
    return this.http.get<EventResponse>(this.urlApi);
  }


  FindEventById(id: number): Observable<EventResponse>{
    return this.http.get<EventResponse>(this.urlApi + '/' + id);
  }

  

}

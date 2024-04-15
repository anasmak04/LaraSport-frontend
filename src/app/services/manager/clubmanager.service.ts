import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { clubManagerReseponse } from "src/app/shared/model/manager/clubManagerReseponse";

@Injectable({
  providedIn: "root",
})
export class ClubmanagerService {
  private APi = "http://127.0.0.1:8000/api/manager/club/";





  manager_id = localStorage.getItem("managerId");
  constructor(private http: HttpClient) {}

  FindClubByManager(): Observable<clubManagerReseponse> {
    const managerId = localStorage.getItem("managerId");
    return this.http.get<clubManagerReseponse>(this.APi + managerId);
  }
}

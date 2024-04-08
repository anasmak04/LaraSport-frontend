import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ManagerResponse } from "src/app/shared/model/manager/manager-response";

@Injectable({
  providedIn: "root",
})
export class ManagerService {
  private API = "http://127.0.0.1:8000/api/managers";

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  constructor(private Http: HttpClient) {}

  FindAllManagers(): Observable<ManagerResponse> {
    return this.Http.get<ManagerResponse>(this.API, {
      headers: this.getHeaders(),
    });
  }
}

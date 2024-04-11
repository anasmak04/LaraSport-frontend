import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ManagerResponse } from "src/app/shared/model/manager/manager-response";

@Injectable({
  providedIn: "root",
})
export class ManagerService {
  private API = "http://127.0.0.1:8000/api/managers";



  constructor(private Http: HttpClient) {}

  FindAllManagers(): Observable<ManagerResponse> {
    return this.Http.get<ManagerResponse>(this.API);
  }
}

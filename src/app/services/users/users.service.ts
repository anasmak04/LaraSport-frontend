import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserResponse } from "src/app/shared/model/user-response";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  Api = "http://127.0.0.1:8000/api/user";

  constructor(private http: HttpClient) {}

  findAllUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.Api);
  }

  
}

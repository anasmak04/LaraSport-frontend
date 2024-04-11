import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/shared/model/user/user";
import { UserResponse } from "src/app/shared/model/user/user-response";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  Api = "http://127.0.0.1:8000/api/user";
  APIURL = "http://127.0.0.1:8000/api/user/";
  ApiSearch = "http://127.0.0.1:8000/api/search/user/";

  constructor(private http: HttpClient) {}

  findAllUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.Api);
  }

  updateRole(userId: number, roleId: number): Observable<any> {
    const url = `${this.Api}${userId}/role`;
    const body = { role_id: roleId };
    return this.http.put<any>(url, body);
  }

  search(sarchTerm: String): Observable<any> {
    return this.http.get<any>(this.ApiSearch + sarchTerm);
  }

  banUser(userId: number): Observable<User> {
    return this.http.patch<User>(
      `http://127.0.0.1:8000/api/user/${userId}/ban`,
      {}
    );
  }

  unbanUser(userId: number): Observable<User> {
    return this.http.patch<User>(
      `http://127.0.0.1:8000/api/user/${userId}/unban`,
      {}
    );
  }
}

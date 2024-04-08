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

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  findAllUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.Api, {
      headers: this.getHeaders(),
    });
  }

  updateRole(userId: number, roleId: number): Observable<any> {
    const url = `${this.Api}${userId}/role`;
    const body = { role_id: roleId };
    return this.http.put<any>(url, body, { headers: this.getHeaders() });
  }

  search(sarchTerm: String): Observable<any> {
    return this.http.get<any>(this.ApiSearch + sarchTerm, {
      headers: this.getHeaders(),
    });
  }

  banUser(userId: number): Observable<User> {
    return this.http.patch<User>(
      `http://127.0.0.1:8000/api/user/${userId}/ban`,
      { headers: this.getHeaders() }
    );
  }

  unbanUser(userId: number): Observable<User> {
    return this.http.patch<User>(
      `http://127.0.0.1:8000/api/user/${userId}/unban`,
      { headers: this.getHeaders() }
    );
  }
}

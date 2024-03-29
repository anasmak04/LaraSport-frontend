import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { RegsiterResponse } from "../../shared/model/regsiter-response";
import { LoginResponse } from "src/app/shared/model/login-response";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  private apiUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}

  // isLoggedIn = false;

  register(user: any): Observable<RegsiterResponse> {
    // this.isLoggedIn = true;
    return this.http.post<RegsiterResponse>(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<LoginResponse> {
    // this.isLoggedIn = true;
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  storeToken(token: string): void {
    localStorage.setItem("access_token", token);
  }

  storeUser(user: string[]): void {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser(): any {
    const userString = localStorage.getItem("user");
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }

  storeRoles(roles: string[]): void {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  getToken(): string | null {
    const tokenString = localStorage.getItem("access_token");
    return tokenString;
  }

  getRole(): string | null {
    return localStorage.getItem("roles");
  }

  getAuthHeaders(): { Authorization: string } | {} {
    const token = this.getToken();
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  }



  logout() {
    return this.http.delete(`${this.apiUrl}/logout`).pipe(
      tap(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("roles");
        localStorage.removeItem("user");
      })
    );
  }



}

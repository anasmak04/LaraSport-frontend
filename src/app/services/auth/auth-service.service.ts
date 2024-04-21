import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { RegsiterResponse } from "../../shared/model/register/regsiter-response";
import { LoginResponse } from "src/app/shared/model/login/login-response";

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

  storeisBanned(isBanned: boolean | number) {
    const isBannedValue = Boolean(isBanned); // Converts 1 to true, 0 to false, if needed
    localStorage.setItem('is_banned', JSON.stringify(isBannedValue));
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

  // getAuthHeaders(): { Authorization: string } | {} {
  //   const token = this.getToken();
  //   if (token) {
  //     return { Authorization: `Bearer ${token}` };
  //   }
  //   return {};
  // }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }


  isNoLoggedIn(){
    return this.getToken() == null;
  }

  logout(): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .post(`${this.apiUrl}/logout`, {}, { headers: headers })
      .pipe(
        tap(() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("roles");
          localStorage.removeItem("user");
          localStorage.removeItem("managerId");
          localStorage.removeItem("is_banned");
        })
      );
  }
}

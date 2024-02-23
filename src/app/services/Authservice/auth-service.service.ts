import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegsiterResponse } from '../../shared/model/regsiter-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {


  private apiUrl = environment.Auth_api;

  constructor(private http : HttpClient) { }


  register(user: any) : Observable<RegsiterResponse> {
    return this.http.post<RegsiterResponse>(`${this.apiUrl}/register`, user);

  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }



   storeToken(token: string): void {
    localStorage.setItem('access_token', token);
  }


  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getAuthHeaders(): { Authorization: string } | {} {
    const token = this.getToken();
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  }

  getProtectedData() {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/protected`, { headers });
  }


  logout() {
    localStorage.removeItem('access_token');
  }

}

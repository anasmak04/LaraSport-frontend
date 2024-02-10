import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http : HttpClient) { }


  register(user: any) {
    return this.http.post(`${this.apiUrl}/api/register`, user);
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/api/login`, credentials);
  }

}

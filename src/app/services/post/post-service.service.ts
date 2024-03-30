import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostResponse } from "src/app/shared/model/post/PostResponse";

@Injectable({
  providedIn: "root",
})
export class PostServiceService {
  UrlApi: string = "http://127.0.0.1:8000/api/post";

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  save(postData: any): Observable<any> {
    return this.http.post(this.UrlApi, postData, {
      headers: this.getHeaders(),
    });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlApi}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  findAll(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.UrlApi}`, {
      headers: this.getHeaders(),
    });
  }

  findById(id: number): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.UrlApi}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  update(id: number, category: PostResponse): Observable<PostResponse> {
    return this.http.put<PostResponse>(`${this.UrlApi}/${id}`, category, {
      headers: this.getHeaders(),
    });
  }
}

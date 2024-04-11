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


  save(postData: any): Observable<any> {
    return this.http.post(this.UrlApi, postData);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlApi}/${id}`);
  }

  findAll(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.UrlApi}`);
  }

  findById(id: number): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.UrlApi}/${id}`);
  }

  update(id: number, category: PostResponse): Observable<PostResponse> {
    return this.http.put<PostResponse>(`${this.UrlApi}/${id}`, category);
  }
}

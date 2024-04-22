import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post, PostResponsee } from "src/app/shared/model/post/Post";
import { PostResponse } from "src/app/shared/model/post/PostResponse";

@Injectable({
  providedIn: "root",
})
export class PostServiceService {
  UrlApi: string = "http://127.0.0.1:8000/api/admin/post";

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

  findById(id: number): Observable<PostResponsee> {
    return this.http.get<PostResponsee>(`${this.UrlApi}/${id}`);
  }

  update(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.UrlApi}/${id}`, post);
  }
}

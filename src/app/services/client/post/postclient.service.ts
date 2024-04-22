import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post, PostResponsee } from "src/app/shared/model/post/Post";
import { PostResponse } from "src/app/shared/model/post/PostResponse";
@Injectable({
  providedIn: 'root'
})
export class PostclientService {

  UrlApi: string = "http://127.0.0.1:8000/api/user/post";

  constructor(private http: HttpClient) {}


  findAll(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.UrlApi}`);
  }

  findById(id: number): Observable<PostResponsee> {
    return this.http.get<PostResponsee>(`${this.UrlApi}/${id}`);
  }

  


}

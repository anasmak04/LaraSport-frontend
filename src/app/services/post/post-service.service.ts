import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostResponse } from "src/app/shared/model/PostResponse";
import { PostResponseId } from "src/app/shared/model/post-reponseId";

@Injectable({
  providedIn: "root",
})
export class PostServiceService {
  constructor(private http: HttpClient) {}

  UrlApi: string = "http://127.0.0.1:8000/api/post";

  save(formdata: FormData): Observable<any> {
    const token = localStorage.getItem("access_token");
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    return this.http.post(this.UrlApi, formdata, { headers });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlApi}/${id}`);
  }

  findAll(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.UrlApi}`);
  }

  findById(id: number): Observable<PostResponseId> {
    return this.http.get<PostResponseId>(`${this.UrlApi}/${id}`);
  }

  update(id: number, category: PostResponse): Observable<PostResponse> {
    return this.http.put<PostResponse>(`${this.UrlApi}/${id}`, category);
  }
}

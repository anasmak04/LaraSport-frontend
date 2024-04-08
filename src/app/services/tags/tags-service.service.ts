import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryResponse } from "src/app/shared/model/category/category-response";
import { Tags } from "src/app/shared/model/tags/Tags";
import { TagsResponse } from "src/app/shared/model/tags/TagsResponse";

@Injectable({
  providedIn: "root",
})
export class TagsServiceService {
  constructor(private http: HttpClient) {}
  UrlApi: string = "http://127.0.0.1:8000/api/tags";

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  save(tags: Tags): Observable<Tags> {
    return this.http.post<Tags>(this.UrlApi, tags, {
      headers: this.getHeaders(),
    });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlApi}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  findById(id: number): Observable<Tags> {
    return this.http.get<Tags>(`${this.UrlApi}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  findAll(): Observable<TagsResponse> {
    return this.http.get<TagsResponse>(this.UrlApi, {
      headers: this.getHeaders(),
    });
  }

  update(id: number, tags: Tags): Observable<Tags> {
    return this.http.put<Tags>(`${this.UrlApi}/${id}`, tags, {
      headers: this.getHeaders(),
    });
  }
}

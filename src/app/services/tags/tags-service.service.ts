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



  save(tags: Tags): Observable<Tags> {
    return this.http.post<Tags>(this.UrlApi, tags);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlApi}/${id}`);
  }

  findById(id: number): Observable<Tags> {
    return this.http.get<Tags>(`${this.UrlApi}/${id}`);
  }

  findAll(): Observable<TagsResponse> {
    return this.http.get<TagsResponse>(this.UrlApi);
  }

  update(id: number, tags: Tags): Observable<Tags> {
    return this.http.put<Tags>(`${this.UrlApi}/${id}`, tags);
  }
}

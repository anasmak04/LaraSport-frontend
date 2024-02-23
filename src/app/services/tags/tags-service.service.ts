import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { categoryResponse } from "src/app/shared/model/category-response";
import { Tags } from "src/app/shared/model/Tags";
import { TagsResponse } from "src/app/shared/model/TagsResponse";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TagsServiceService {
  constructor(private http: HttpClient) {}
  UrlApi: string = environment.Tags_api;

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

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoriesResponse } from "src/app/shared/model/categories-response";
import { categoryResponse } from "src/app/shared/model/category-response";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CategoryServiceService {
  constructor(private http: HttpClient) {}

  UrlApi: string = environment.Category_api;

  save(category: categoryResponse): Observable<categoryResponse> {
    return this.http.post<categoryResponse>(this.UrlApi, category);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlApi}/${id}`);
  }

  findAll(): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(`${this.UrlApi}`);
  }

  findById(id: number): Observable<categoryResponse> {
    return this.http.get<categoryResponse>(`${this.UrlApi}${id}`);
  }

  update(id: number, category: categoryResponse): Observable<categoryResponse> {
    return this.http.put<categoryResponse>(`${this.UrlApi}/${id}`, category);
  }
}

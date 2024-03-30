import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryResponse } from "src/app/shared/model/category/category-response";
@Injectable({
  providedIn: "root",
})
export class CategoryServiceService {
  constructor(private http: HttpClient) {}

  UrlApi: string = "http://127.0.0.1:8000/api/category";

  save(category: CategoryResponse): Observable<CategoryResponse> {
    return this.http.post<CategoryResponse>(this.UrlApi, category);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlApi}/${id}`);
  }

  findAll(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.UrlApi}`);
  }

  findById(id: number): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.UrlApi}${id}`);
  }

  update(id: number, category: CategoryResponse): Observable<CategoryResponse> {
    return this.http.put<CategoryResponse>(`${this.UrlApi}/${id}`, category);
  }
}

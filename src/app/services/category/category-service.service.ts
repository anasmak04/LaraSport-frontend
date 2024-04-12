import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryResponsee, category } from "src/app/shared/model/category/category";
import { CategoryResponse } from "src/app/shared/model/category/category-response";
@Injectable({
  providedIn: "root",
})
export class CategoryServiceService {
  constructor(private http: HttpClient) {}

  UrlApi: string = "http://127.0.0.1:8000/api/category";

  save(category: category): Observable<category> {
    return this.http.post<category>(this.UrlApi, category);
  }
  

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlApi}/${id}`);
  }

  findAll(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.UrlApi}`);
  }

  findById(id: number): Observable<CategoryResponsee> {
    return this.http.get<CategoryResponsee>(`${this.UrlApi}/${id}`);
  }

  update(id: number, category: category): Observable<category> {
    return this.http.put<category>(`${this.UrlApi}/${id}`, category);
  }
}

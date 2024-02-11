import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResponse } from 'src/app/shared/model/PostResponse';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http : HttpClient) { }

  UrlApi: string = "http://127.0.0.1:8000/api/post";

  save(category: PostResponse): Observable<PostResponse> {
    return this.http.post<PostResponse>(this.UrlApi, category);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlApi}/${id}`);
  }

  findAll(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.UrlApi}`);
  }

  findById(id: number): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.UrlApi}${id}`);
  }

  update(id: number, category: PostResponse): Observable<PostResponse> {
    return this.http.put<PostResponse>(`${this.UrlApi}/${id}`, category);
  }
}

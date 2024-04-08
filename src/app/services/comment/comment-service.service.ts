import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CommentResponse } from "src/app/shared/model/comment/comment-response";

@Injectable({
  providedIn: "root",
})
export class CommentServiceService {
  urlcomment = "http://127.0.0.1:8000/api/comment";
  http = inject(HttpClient);


  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  FindAll(): Observable<CommentResponse> {
    return this.http.get<CommentResponse>(this.urlcomment, {headers: this.getHeaders()});
  }

  save(commentData: any): Observable<CommentResponse> {
    return this.http.post<CommentResponse>(
      "http://127.0.0.1:8000/api/comment",
      commentData , {headers: this.getHeaders()}
    );
  }
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CommentResponse } from "src/app/shared/model/comment-response";

@Injectable({
  providedIn: "root",
})
export class CommentServiceService {
  urlcomment = "http://127.0.0.1:8000/api/comment";
  http = inject(HttpClient);

  FindAll(): Observable<CommentResponse> {
    return this.http.get<CommentResponse>(this.urlcomment);
  }

  token = localStorage.getItem("access_token");

  save(commentData: any): Observable<CommentResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    console.log(this.token);
    return this.http.post<CommentResponse>(
      "http://127.0.0.1:8000/api/comment",
      commentData,
      { headers: headers }
    );
  }
}

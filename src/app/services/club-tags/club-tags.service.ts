import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Clubtag } from "src/app/shared/model/clubtag/clubtag";
import { ClubtagRESPONSE } from "src/app/shared/model/clubtag/clubtag-response";

@Injectable({
  providedIn: "root",
})
export class ClubTagsService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    console.log("token", token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getTags(): Observable<ClubtagRESPONSE> {
    return this.http.get<ClubtagRESPONSE>("http://127.0.0.1:8000/api/clubtags");
  }

  save(formData: FormData): Observable<ClubTagsService> {
    return this.http.post<ClubTagsService>(
      "http://127.0.0.1:8000/api/clubtags",
      formData
    );
  }

  update(formData: FormData, id: number): Observable<Clubtag> {
    return this.http.put<Clubtag>(
      `http://127.0.0.1:8000/api/clubtags/${id}`,
      formData,
    );
  }


  delete(id: number): Observable<Clubtag> {
    return this.http.delete<Clubtag>(`http://127.0.0.1:8000/api/clubtags/${id}`);
  }
}

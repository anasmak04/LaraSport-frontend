import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SporttypeResponse } from "src/app/shared/model/sporttype/sporttype-response";

@Injectable({
  providedIn: "root",
})
export class SportTypeService {
  constructor(private http: HttpClient) {}

  FindAll(): Observable<SporttypeResponse> {
    return this.http.get<SporttypeResponse>(
      "http://127.0.0.1:8000/api/sporttypes"
    );
  }
}

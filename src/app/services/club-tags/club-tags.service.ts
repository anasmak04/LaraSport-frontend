import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clubtag } from 'src/app/shared/model/clubtag';
import { ClubtagRESPONSE } from 'src/app/shared/model/clubtag-response';

@Injectable({
  providedIn: 'root'
})
export class ClubTagsService {

  
  constructor(private http : HttpClient) {
   }

    getTags() : Observable<ClubtagRESPONSE>{
      return this.http.get<ClubtagRESPONSE>("http://127.0.0.1:8000/api/clubtags");
    }


   
}

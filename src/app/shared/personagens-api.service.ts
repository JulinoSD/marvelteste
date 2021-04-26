import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PersonagensApiService {

  PUBLIC_KEY = "c3a40e6814de4a0186e86382e4abef7c";
  HASH = "e6d707cac343d4600f690d9a173f131e";
  URL_API = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable <any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }

  getCharacterStories(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(filter((characterId: any)=>characterId.data.results))
  }
}

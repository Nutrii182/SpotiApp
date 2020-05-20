import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Listo!!!');
  }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAIaGlOCGsA3PrK0FyfgRwTfrrj_sAcUsFCq96lvtxC-lan_KRKvtdYWo0hxZXoEqXTmU_YUwoh6Ex7zpA'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    // tslint:disable-next-line: no-string-literal
    return this.getQuery('browse/new-releases?limit=20').pipe( map(data => data['albums'].items));
  }

  getArtist(termino: string){
    // tslint:disable-next-line: no-string-literal
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map(data => data['artists'].items));
  }
}

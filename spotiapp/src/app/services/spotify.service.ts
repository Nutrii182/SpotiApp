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
      Authorization: 'Bearer BQD7h8_6aNOpjRyIdcEW9cEJ3ZBMUXA5a3Pw90Owycnb-46VCTj2p6LdK5iGv6uIC_BmXVPZBMaiexWa8rs'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    // tslint:disable-next-line: no-string-literal
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string){
    // tslint:disable-next-line: no-string-literal
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtistId(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string){
    // tslint:disable-next-line: no-string-literal
    return this.getQuery(`artists/${id}/top-tracks?country=MX`).pipe(map(data => data['tracks']));
  }
}

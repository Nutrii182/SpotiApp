import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( p => {
      this.loading = true;
      this.getArtista(p.id);
      this.getTopTracks(p.id);
    });
  }

  getArtista(id: string){
    this.spotifyService.getArtistId(id).subscribe(a => {
      this.artist = a;
      this.loading = false;
    });
  }

  getTopTracks(id: string){
    this.spotifyService.getTopTracks(id).subscribe(t => {
      this.topTracks = t;
      console.log(this.topTracks);
      this.loading = false;
    });
  }

}

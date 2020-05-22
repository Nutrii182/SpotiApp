import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newRealeses: any = [];
  loading: boolean;
  er = false;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    spotify.getNewReleases().subscribe((data: any) => {
      this.newRealeses = data;
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.er = true;
      this.mensajeError = error.error.error.message;
    });
  }

}

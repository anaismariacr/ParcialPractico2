import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  ratingPromedio: number = 0;
  numTemps: number = 0;

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  calcularRatingPromedio() {
    let avg = 0;
    this.animes.forEach(anime => {
      avg += parseFloat(anime.Rating);
    });
    return avg / this.animes.length;
  }

  calcularNumTemps() {
    let num = 0;
    this.animes.forEach(anime => {
      num += anime.seasons.length;
    });
    return num;
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;

  }

  ngOnInit() {
    this.getAnimes();
    this.ratingPromedio = this.calcularRatingPromedio();
    this.numTemps = this.calcularNumTemps();
  }

}

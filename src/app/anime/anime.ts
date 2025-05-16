import { Season } from "./season";

export class Anime {
  id: number;
  name: string;
  description: string;
  Rating: number;
  total_episodes: number;
  categorie: string;
  studio: string;
  img: string;
  seasons: Season[];

  constructor(
    id: number,
    name: string,
    description: string,
    Rating: number,
    total_episodes: number,
    categorie: string,
    studio: string,
    img: string,
    seasons: Season[],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.Rating = Rating,
    this.total_episodes = total_episodes;
    this.categorie= categorie,
    this.studio= studio,
    this.img = img;
    this.seasons = seasons;
  }
 }

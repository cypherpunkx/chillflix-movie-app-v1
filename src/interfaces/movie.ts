export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

export interface MovieApiResponse {
  page: number;
  results: Movie[];
}

export enum BackdropSize {
  W300 = "w300",
  W780 = "w780",
  W1280 = "w1280",
  ORIGINAL = "original",
}

export enum LogoSize {
  W45 = "w45",
  W92 = "w92",
  W154 = "w154",
  W185 = "w185",
  W300 = "w300",
  W500 = "w500",
  ORIGINAL = "original",
}

export enum PosterSize {
  W92 = "w92",
  W154 = "w154",
  W185 = "w185",
  W342 = "w342",
  W500 = "w500",
  W780 = "w780",
  ORIGINAL = "original",
}

export enum ProfileSize {
  W45 = "w45",
  W185 = "w185",
  H632 = "h632",
  ORIGINAL = "original",
}

export enum StillSize {
  W92 = "w92",
  W185 = "w185",
  W300 = "w300",
  ORIGINAL = "original",
}

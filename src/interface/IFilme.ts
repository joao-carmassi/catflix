export interface IFilmeApi {
  adult: boolean;
  backdrop_path: string | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFilme {
  nome: string;
  caminho: string;
  formato: 'mkv' | 'mp4';
  tipo: {
    filme: boolean;
    temporadas: {
      temporada: number;
      episodios: number;
    }[];
  };
  dados: IFilmeApi;
}

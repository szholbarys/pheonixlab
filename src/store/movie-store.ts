import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

const API_KEY = "7e59b8de";
const BASE_URL = "http://www.omdbapi.com/";

class MovieStore {
  movies = [];
  topMovies = [];
  currentMovie: any = null;
  query = "";
  isSearchPerformed = false;
  favorites: any[] = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchTopMovies();
    this.loadFavoritesFromStorage();
  }

  async searchMovies(query: string) {
    this.query = query;
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${query}`
    );
    runInAction(() => {
      this.movies = response.data.Search || [];
      this.isSearchPerformed = true;
    });
  }

  async fetchMovieDetails(id: string) {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    runInAction(() => {
      this.currentMovie = response.data;
    });
  }

  async fetchTopMovies() {
    const topMovieIds = [
      "tt0111161",
      "tt0068646",
      "tt0071562",
      "tt0468569",
      "tt0050083",
      "tt0108052",
      "tt0167260",
      "tt0110912",
      "tt0060196",
      "tt0120737",
    ];
    const topMoviesData = await Promise.all(
      topMovieIds.map((id) =>
        axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`)
      )
    );
    runInAction(() => {
      this.topMovies = topMoviesData.map((response) => response.data);
    });
  }

  resetSearch() {
    this.isSearchPerformed = false;
    this.query = "";
    this.movies = [];
  }

  toggleFavorite(movie: any) {
    const index = this.favorites.findIndex((m) => m.imdbID === movie.imdbID);
    if (index === -1) {
      this.favorites.push(movie);
    } else {
      this.favorites.splice(index, 1);
    }
    this.saveFavoritesToStorage();
  }

  isFavorite(id: string) {
    return this.favorites.some((movie) => movie.imdbID === id);
  }

  getFavorites() {
    return this.favorites;
  }

  private loadFavoritesFromStorage() {
    const storedFavorites = localStorage.getItem("favoriteMovies");
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  private saveFavoritesToStorage() {
    localStorage.setItem("favoriteMovies", JSON.stringify(this.favorites));
  }
}

export const movieStore = new MovieStore();

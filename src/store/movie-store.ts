import { makeAutoObservable, runInAction } from "mobx";
import {
  searchMoviesApi,
  fetchMovieDetailsApi,
  fetchTopMoviesApi,
} from "../service/api";

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
    const movies = await searchMoviesApi(query);
    runInAction(() => {
      this.movies = movies;
      this.isSearchPerformed = true;
    });
  }

  async fetchMovieDetails(id: string) {
    const movie = await fetchMovieDetailsApi(id);
    runInAction(() => {
      this.currentMovie = movie;
    });
  }

  async fetchTopMovies() {
    const topMovies = await fetchTopMoviesApi();
    runInAction(() => {
      this.topMovies = topMovies;
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

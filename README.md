# Movie App

A movie discovery app built using React, MobX for state management, and Material UI for the user interface. This app allows users to search for movies, view movie details, add movies to favorites, and explore a list of top movies. The data is fetched from the OMDB API.

# Features

 Search for Movies: Search movies by title using the OMDB API.

 Movie Details: View detailed information about a specific movie including title, plot, actors, director, and IMDb rating.

 Favorites: Add or remove movies from your favorites list, with persistence across sessions using localStorage.

 Top Movies: Explore a curated list of top movies with detailed information.

 Responsive UI: Fully responsive UI, optimized for both desktop and mobile devices.

# Technologies Used

 React: The core JavaScript library for building the user interface.

 MobX: A state management library to handle global state for movies, favorites, and search results.

 Material UI: A component library for React that implements Google's Material Design.

 React Router: For navigation between pages (Movie List, Movie Details, Favorites).

 Axios: For making HTTP requests to the OMDB API.

 OMDB API: External API used for fetching movie data by title or IMDb ID.

# Getting Started

```bash
git clone https://github.com/szholbarys/pheonixlab.git
```

```bash
npm i
```

```bash
npm start
```

# Usage
### Movie List Page
The Movie List page displays a list of movies.
You can search for movies using the Search Bar. As you type, the list of movies updates based on the search query.
If no search has been performed, the Top 10 Movies are displayed.
### Movie Detail Page
Clicking on a movie title from the Movie List will navigate you to the Movie Detail page.
This page displays detailed information about the selected movie, such as its plot, actors, director, and IMDb rating.
You can also add or remove the movie from your Favorites.
### Favorites Page
The Favorites Page displays a list of movies that you have added to your favorites.
Movies in the favorites list are persistent across sessions (saved in localStorage).
### Toggle Favorite
On both the Movie List and Movie Detail pages, you can toggle a movie as a favorite.
When a movie is marked as a favorite, it is saved in localStorage and will persist across page reloads.
### State Management (MobX)
MovieStore
The MovieStore is a MobX store that manages the state of the app, including:

movies: A list of movies fetched from the OMDB API.
topMovies: A list of top movies to display when no search is performed.
currentMovie: The movie object that holds the details of the selected movie.
favorites: A list of favorite movies saved in localStorage.
query: The current search query.
isSearchPerformed: A boolean indicating whether a search has been performed.
Actions in MovieStore
searchMovies(query: string): Fetches movies based on the search query from the OMDB API.
fetchMovieDetails(id: string): Fetches the details of a single movie by its IMDb ID.
fetchTopMovies(): Fetches a curated list of top movies.
toggleFavorite(movie: any): Adds or removes a movie from the favorites list.
isFavorite(id: string): Checks if a movie is marked as a favorite.
getFavorites(): Returns the list of favorite movies.
resetSearch(): Resets the search state.
API Integration
This app uses the OMDB API to fetch movie data. You need an API key to interact with the API.

# Local Storage
The app uses localStorage to persist the list of favorite movies. This ensures that even if the user refreshes the page or closes the app, their favorite movies remain saved.

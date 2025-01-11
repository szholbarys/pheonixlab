import React from "react";
import { observer } from "mobx-react-lite";
import { Container, Typography, Grid } from "@mui/material";
import MovieCard from "../components/movie-list/movie-card";
import { movieStore } from "../store/movie-store";

const FavoritesPage = observer(() => {
  const favoriteMovies = movieStore.getFavorites();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Favorite Movies
      </Typography>
      {favoriteMovies.length === 0 ? (
        <Typography variant="body1">You haven't added any movies to your favorites yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {favoriteMovies.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
});

export default FavoritesPage;


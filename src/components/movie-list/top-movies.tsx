import React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@mui/material";
import MovieCard from "./movie-card";
import { movieStore } from "../../store/movie-store";

const TopMovies = observer(() => (
  <div>
    <Typography variant="h5" component="h2" gutterBottom>
      Top 10 Movies
    </Typography>
    <Grid container spacing={3}>
      {movieStore.topMovies.map((movie) => (
        <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  </div>
));

export default TopMovies;


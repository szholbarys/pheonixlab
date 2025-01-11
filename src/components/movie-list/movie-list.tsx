import React from "react";
import { observer } from "mobx-react-lite";
import MovieCard from "./movie-card";
import { movieStore } from "../../store/movie-store";
import { Grid } from "@mui/material";

const MovieList = observer(() => (
  <Grid container spacing={3}>
    {movieStore.movies.map((movie) => (
      <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
        <MovieCard movie={movie} />
      </Grid>
    ))}
  </Grid>
));

export default MovieList;

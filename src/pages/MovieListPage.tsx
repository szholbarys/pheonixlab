import React from "react";
import { observer } from "mobx-react-lite";
import { Container, Typography, Box } from "@mui/material";
import SearchBar from "../components/movie-list/search-bar";
import MovieList from "../components/movie-list/movie-list";
import TopMovies from "../components/movie-list/top-movies";
import { movieStore } from "../store/movie-store";

const MovieListPage = observer(() => (
  <Container maxWidth="lg" sx={{ py: 4 }}>
    <SearchBar />
    <Box sx={{ my: 4 }}>
      {movieStore.isSearchPerformed ? (
        <>
          <Typography variant="h5" component="h2" gutterBottom>
            Search Results
          </Typography>
          <MovieList />
        </>
      ) : (
        <TopMovies />
      )}
    </Box>
  </Container>
));

export default MovieListPage;

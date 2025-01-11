import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { movieStore } from "../../store/movie-store";

const MovieDetail = observer(() => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) movieStore.fetchMovieDetails(id);
  }, [id]);

  if (!movieStore.currentMovie)
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );

  const {
    Title,
    Year,
    Genre,
    Director,
    Plot,
    Poster,
    Actors,
    Runtime,
    imdbRating,
  } = movieStore.currentMovie;
  const isFavorite = movieStore.isFavorite(id);

  const handleToggleFavorite = () => {
    movieStore.toggleFavorite(movieStore.currentMovie);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src={Poster}
              alt={Title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h4" component="h1" gutterBottom>
                {Title} ({Year})
              </Typography>
              <IconButton onClick={handleToggleFavorite} color="error">
                {isFavorite ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Box>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {Runtime} | {Genre}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Director:</strong> {Director}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Actors:</strong> {Actors}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Plot:</strong> {Plot}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Chip
                label={`IMDb: ${imdbRating}`}
                color="primary"
                sx={{ mr: 1 }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Trailer
          </Typography>
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/gul5c2CYGQ4"
              title="Top 50 Best Movies of All Time - IMDB"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            ></iframe>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
});

export default MovieDetail;

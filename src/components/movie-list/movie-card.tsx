import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { movieStore } from "../../store/movie-store";
import { observer } from "mobx-react-lite";

const MovieCard = observer(({ movie }: { movie: any }) => {
  const isFavorite = movieStore.isFavorite(movie.imdbID);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    movieStore.toggleFavorite(movie);
  };

  return (
    <Card
      sx={{
        display: "flex",
        height: "100%",
        width: "250px",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={movie.Poster}
        alt={movie.Title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Year}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Link
            to={`/movies/${movie.imdbID}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" color="secondary">
              Details
            </Button>
          </Link>
          <IconButton
            onClick={handleToggleFavorite}
            color="secondary"
            aria-label="add to favorites"
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
});

export default MovieCard;

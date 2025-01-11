import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the Movie App
      </Typography>
      <Typography variant="h6" gutterBottom>
        Discover your favorite movies, explore details, and save them to your
        favorites list!
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to="/movies"
          sx={{ marginRight: 2 }}
        >
          Browse Movies
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={RouterLink}
          to="/favorites"
        >
          View Favorites
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;

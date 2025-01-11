import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <Button color="inherit" component={RouterLink} to="/movies">
          Movies
        </Button>
        <Button color="inherit" component={RouterLink} to="/favorites">
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
    <Container>
      <Routes>
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Container>
  </Router>
);

export default App;

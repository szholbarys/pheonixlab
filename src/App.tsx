import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MovieListPage />} />
      <Route path="/movies/:id" element={<MovieDetailPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </Router>
);

export default App;

import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";
import { movieStore } from "../../store/movie-store";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery) {
      movieStore.searchMovies(newQuery);
    } else {
      movieStore.resetSearch();
    }
  };

  const handleClear = () => {
    setQuery("");
    movieStore.resetSearch();
  };

  return (
    <TextField
      fullWidth
      label="Search for movies"
      variant="outlined"
      value={query}
      onChange={handleSearch}
      InputProps={{
        endAdornment: query && (
          <InputAdornment position="end">
            <IconButton onClick={handleClear} edge="end">
              <Clear />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;


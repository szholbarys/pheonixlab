import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <RouterLink
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie App
          </Typography>
        </RouterLink>
        <div>
          <Button color="inherit" component={RouterLink} to="/movies">
            Movies
          </Button>
          <Button color="inherit" component={RouterLink} to="/favorites">
            Favorites
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

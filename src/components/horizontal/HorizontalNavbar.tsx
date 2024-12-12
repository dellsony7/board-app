import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const HorizontalNavbar: React.FC = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard Layout
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Profile</Button>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalNavbar;

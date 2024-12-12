import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "secondary.main",
        color: "white",
        height: "100vh",
        position: "fixed",
        top: 64,
      }}
    >
      <List>
        <ListItem component="button" sx={{ cursor: "pointer" }}>
          <ListItemIcon>
            <DashboardIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem component="button" sx={{ cursor: "pointer" }}>
          <ListItemIcon>
            <SettingsIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

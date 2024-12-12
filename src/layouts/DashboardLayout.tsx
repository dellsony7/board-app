import React from "react";
import { Box, CssBaseline } from "@mui/material";
import HorizontalNavbar from "../components/horizontal/HorizontalNavbar";
import Sidebar from "../components/vertical/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      {/* Horizontal Navbar */}
      <HorizontalNavbar />
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: 8, // Adjust for AppBar height
          marginLeft: 30, // Adjust for Sidebar width
          padding: 3,
          bgcolor: "background.default",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;

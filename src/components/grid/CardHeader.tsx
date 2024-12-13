import * as React from "react";
import Grid from "@mui/material/Grid";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface CardHeaderProps {
  name: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ name }) => {
  const getBackgroundColor = (name: string) => {
    switch (name) {
      case "To do":
        return "#f0f4ff";
      case "In Progress":
        return "#FFA800";
      case "Approved":
        return "#AEE753";
      case "Reject":
        return "#F90430";
      default:
        return "#f0f4ff"; // Default color
    }
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={6}>
        <Typography
          sx={{
            display: "inline-block",
            backgroundColor: getBackgroundColor(name),
            color: "#333",
            padding: "3px 16px",
            fontSize: "0.7rem",
            borderRadius: 5,
            textAlign: "center", // Centering the text
            width: "100%", // Ensuring the text spans the full width available
          }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <div>
          <IconButton aria-label="add" size="small">
            <AddIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="more options" size="small">
            <MoreVertIcon />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default CardHeader;

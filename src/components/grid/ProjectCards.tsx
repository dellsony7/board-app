import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 0,
  boxShadow: "none",
  border: "1px solid #ddd",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function AutoGrid() {
  return (
    <Box
      sx={{
        boxShadow: "none",
        width: "100%",
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Item>size=grow</Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Item>size=6</Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Item>size=grow</Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Item>size=grow</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

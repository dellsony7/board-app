import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { IconButton, Typography, Card, CardContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "./CardHeader";

// Styled Paper Item (for layout)
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));


const data = {
  "To do": [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ],
  "In Progress": [
    { id: 4, title: "Task A" },
    { id: 5, title: "Task B" },
  ],
  "Approved": [
    { id: 6, title: "Task X" },
    { id: 7, title: "Task Y" },
  ],
  "Reject": [
    { id: 8, title: "Task Z" },
    { id: 9, title: "Task W" },
  ],
};

export default function AutoGrid() {
  return (
    <Box sx={{ boxShadow: "none", width: "100%" }}>
      <Grid container spacing={3}>
        {Object.entries(data).map(([category, tasks]) => (
          <Grid key={category} size={{ xs: 12, sm: 6, md: 3 }} padding={1}>
            <CardHeader name={category} />

            <Grid container spacing={1}>
              {tasks.map((task) => (
                <Grid key={task.id} size={12}>
                  <Card sx={{ margin: 1 }}>
                    <CardContent>
                      <Typography variant="h6">{task.title}</Typography>
                      {/* You can add more task details here */}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

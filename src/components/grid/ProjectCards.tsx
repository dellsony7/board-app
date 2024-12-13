import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import CardHeader from "./CardHeader";

// Styled Paper Item (for layout)
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Define interface for task
interface AssignedPerson {
  name: string;
  avatar: string;
}

interface Task {
  id: number;
  title: string;
  type: string;
  status: string;
  priority: string;
  assigned: AssignedPerson[];
  dueDate: string;
  linked: string;
}

// GroupedTasks will be an object where keys are status strings and values are arrays of Task objects
interface GroupedTasks {
  [key: string]: Task[];
}

export default function AutoGrid() {
  const [tasks, setTasks] = React.useState<Task[]>([]); // State for raw tasks
  const [groupedTasks, setGroupedTasks] = React.useState<GroupedTasks>({}); // State for grouped tasks

  // Fetch data and group tasks by status
  React.useEffect(() => {
    axios
      .get("/fake-db/tasks.json") // Adjust the URL if necessary
      .then((response) => {
        const fetchedTasks: Task[] = response.data;

        // Group tasks by their status
        const grouped = fetchedTasks.reduce((acc: GroupedTasks, task: Task) => {
          if (!acc[task.status]) {
            acc[task.status] = [];
          }
          acc[task.status].push(task); // Add the whole task, not just title and id
          return acc;
        }, {});

        setGroupedTasks(grouped); // Set grouped tasks
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Box sx={{ boxShadow: "none", width: "100%" }}>
      <Grid container spacing={3}>
   
        {Object.entries(groupedTasks).map(([category, tasks]) => (
          <Grid key={category} item xs={12} sm={6} md={3} padding={1}>
            <CardHeader name={category} />
            <Grid container spacing={1}>
              {tasks.map((task) => (
                <Grid key={task.id} item xs={12}>
                  <Card sx={{ margin: 1 }}>
                    <CardContent sx={{ textAlign: "left" }}>
                      <Typography
                        gutterBottom
                        sx={{
                          color: "text.secondary",
                          fontSize: 14,
                          textAlign: "left",
                        }}
                      >
                        {task.type}
                      </Typography>
                      <Typography variant="h6">{task.title}</Typography>
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

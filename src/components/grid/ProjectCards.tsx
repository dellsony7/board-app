import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import CardHeader from "./CardHeader";
import CardBody from "../card-components/CardBody";
import CardFooter from "../card-components/CardFooter";

interface AssignedPerson {
  name: string;
  avatar: string;
}

interface Image {
  alt: string;
  src: string;
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
  image: Image[];
  color: string;
}

interface GroupedTasks {
  [key: string]: Task[];
}

export default function AutoGrid() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [groupedTasks, setGroupedTasks] = React.useState<GroupedTasks>({});
  React.useEffect(() => {
    axios
      .get("/fake-db/tasks.json")
      .then((response) => {
        const fetchedTasks: Task[] = response.data;

        const grouped = fetchedTasks.reduce((acc: GroupedTasks, task: Task) => {
          if (!acc[task.status]) {
            acc[task.status] = [];
          }
          acc[task.status].push(task); 
          return acc;
        }, {});

        setGroupedTasks(grouped); 
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
                    <CardContent>
                      <CardBody
                        assigned={task.assigned}
                        priority={task.priority}
                      />
                      <CardMedia
                        component="img"
                        height="120"
                        image="/images/images.png"
                      />
                    </CardContent>
                    <CardFooter linked={task.linked} dueDate={task.dueDate} />
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

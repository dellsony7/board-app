import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography, Paper } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import axios from "axios";

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

export default function SwimlaneDashboard() {
  const [tasks, setTasks] = React.useState<
    { id: number; title: string; status: string }[]
  >([]);

  React.useEffect(() => {
    axios
      .get("/fake-db/tasks.json") // Adjust the path to your data
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleStatusChange = (taskId: number, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const categorizedTasks = tasks.reduce(
    (acc, task) => {
      if (!acc[task.status]) {
        acc[task.status] = [];
      }
      acc[task.status].push(task);
      return acc;
    },
    {} as Record<string, { id: number; title: string; status: string }[]>
  );

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

  const handleDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) return;

    // Reordering the tasks within the same status category
    const newTasks = [...tasks];
    const [movedTask] = newTasks.splice(source.index, 1);
    movedTask.status = destination.droppableId;
    newTasks.splice(destination.index, 0, movedTask);

    setTasks(newTasks); // Update the state with reordered tasks
  };

  return (
    <Box sx={{ boxShadow: "none", width: "100%" }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={0}>
          {["To Do", "In Progress", "Approved", "Reject"].map((status) => (
            <Grid key={status} item xs={12} sm={6} md={3} padding={1}>
              <Item>
                <Typography
                  sx={{
                    display: "inline-block",
                    backgroundColor: getBackgroundColor(status),
                    color: "#333",
                    padding: "3px 16px",
                    fontSize: "0.7rem",
                    borderRadius: 5,
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {status}
                </Typography>

                <Droppable droppableId={status}>
                  {(provided) => (
                    <Grid
                      container
                      spacing={1}
                      direction="column"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {categorizedTasks[status]?.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={String(task.id)}
                          index={index}
                        >
                          {(provided) => (
                            <Grid
                              item
                              xs={12}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Card sx={{ margin: 1 }}>
                                <CardContent>
                                  <Typography variant="h6">
                                    {task.title}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Grid>
                  )}
                </Droppable>
              </Item>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Box>
  );
}

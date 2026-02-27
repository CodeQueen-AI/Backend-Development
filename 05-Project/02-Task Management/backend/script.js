import express from "express";
import cors from "cors";
import taskModel from "./models/task.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:3000"
}));


/*
================================
CREATE TASK
================================
*/
app.post("/tasks/create", async (req, res) => {

  const { text } = req.body;

  const newTask = await taskModel.create({
    text
  });

  res.json({
    success: true,
    message: "Task created successfully",
    task: newTask
  });

});


/*
================================
READ TASKS
================================
*/
app.get("/tasks/read", async (req, res) => {

  const tasks = await taskModel.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    tasks
  });

});


/*
================================
UPDATE TASK
================================
*/
app.put("/tasks/update/:id", async (req, res) => {

  const updatedTask = await taskModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({
    success: true,
    task: updatedTask
  });

});


/*
================================
DELETE TASK
================================
*/
app.delete("/tasks/delete/:id", async (req, res) => {

  await taskModel.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "Task deleted successfully"
  });

});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
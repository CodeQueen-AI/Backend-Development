import express from "express";
import cors from "cors";
import taskModel from "./Models/tasks.js";
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:3000"
}));

// Create Tasks
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

// Read Tasks
app.get("/tasks/read", async (req, res) => {
  const tasks = await taskModel.find().sort({ createdAt: -1 });
  res.json({
    success: true,
    tasks
  });
});

// Update Task
app.put("/tasks/update/:id", async (req, res) => {
  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete Tasks
app.delete("/tasks/delete/:id", async (req, res) => {
  await taskModel.findByIdAndDelete(req.params.id);
  res.json({
    success: true,
    message: "Task deleted successfully"
  });
});

app.listen(5000)
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

// Update Tasks
// app.put("/tasks/update/:id", async (req, res) => {
//   const updatedTask = await taskModel.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.json({
//     success: true,
//     task: updatedTask
//   });
// });


// Update Task
app.put("/tasks/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;

    // Check if task exists
    const existingTask = await taskModel.findById(id);
    if (!existingTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    // Optional: prevent empty text update
    if (text !== undefined && text.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Task text cannot be empty"
      });
    }

    // Update only provided fields
    const updatedTask = await taskModel.findByIdAndUpdate(
      id,
      {
        ...(text !== undefined && { text }),
        ...(completed !== undefined && { completed })
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
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
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/AllTasks");

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const taskModel = mongoose.model("Task", taskSchema);

export default taskModel;
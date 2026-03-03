import express from "express";
import cors from "cors";
import userModel from "./Models/user.js";
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow frontend
app.use(cors({
  origin: "http://localhost:3000"
}));

// Create Users
app.post("/create", async (req, res) => {
  const { name, email, image } = req.body;
  const createdUser = await userModel.create({
    name,
    email,
    image
  });
  res.status(200).json({
    success: true,
    message: "User created successfully",
    user: createdUser
  });
});

// Read Users
app.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.json({
    success: true,
    users
  });
});

// Update Users
app.put("/update/:id", async (req, res) => {

  const updatedUser = await userModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({
    success: true,
    user: updatedUser
  });

});

// Delete Users
app.delete("/delete/:id", async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.json({
    success: true,
    message: "User deleted successfully"
  });

});

app.listen(5000)
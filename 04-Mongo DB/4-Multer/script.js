import express from "express";
import connectDB from "./Models/user.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

connectDB();

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", userRoutes);

app.listen(3000)
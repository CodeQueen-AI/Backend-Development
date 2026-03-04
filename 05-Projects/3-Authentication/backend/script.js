import express from "express";
import userModel from "./Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Create user
app.post("/create", async (req, res) => {
  try {
    const { username, email, password, age } = req.body;

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const createdUser = await userModel.create({
      username,
      email,
      password: hash,
      age
    });

    // Create token
    const token = jwt.sign({ email }, "splkoun");

    // Send token in cookie
    res.cookie("token", token, { httpOnly: true });

    res.json({ user: createdUser, token });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

// Login user
app.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email or password is wrong!");

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).send("Email or password is wrong!");

    const token = jwt.sign({ email: user.email }, "splkoun");
    res.cookie("token", token, { httpOnly: true });

    res.json({ message: "Logged in successfully!", token });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.listen(5000)
import express from "express";
import userModel from "./userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Create
app.post("/create", async (req, res) => {
  try {
    let { username, email, password, age } = req.body;

    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Hash password
    const hash = await bcrypt.hash(password, salt);

    // 3️⃣ Create user
    const createdUser = await userModel.create({
      username,
      email,
      password: hash,
      age
    });

    // Create token
    const token = jwt.sign({ email }, "shhhhhsecretkey");

    // Send token in cookie
    res.cookie("token", token);

    res.send(createdUser);

  } catch (error) {
    res.status(500).send("Error creating user");
  }
});

app.listen(3000)
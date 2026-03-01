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

app.post('/login' , async (req, res) => {
    let user = await userModel.findOne({email: req.body.email})
    if(!user) return res.send('something is wrong!')
    bycrypt.compare(req.body.password, user.password, function(err, reuslt) {
        if(result){
            const token = jwt.sign({ email : user.email }, "shhhhhsecretkey");
            res.cookie("token", token);
            res.send("Yes You can login!")
        }
            else res.send("Something is wrong!")
})
})

app.get('/logout' , (req, res) => {
    res.cookie('token' , "");
    res.redirect("/");
})
app.listen(3000)
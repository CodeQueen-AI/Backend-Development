// import express from 'express';
// import userModel from './models/user.js'; 

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Read
// app.get('/read' , async (req , res) => {
//     let users = await userModelfind();
//     res.render('read' , {users})
// })

// // Create
// app.post('/create' , async (req , res) => {
//     let {name, email, image} = req.body;

//     let createdUser = await userModel.create({
//         name,
//         email, 
//         image
//     })

//     res.send((createdUser))
// })

// // Edit
// app.get('edit/:userid' , async (req, res) => {
//     userModel.findOne({_id: req.params.user})
//     res.render('edit' , {user})
// })

// // Delete
// app.get('delete/:id' , async (req, res) => {
//     let users = await userModel.findOneAndDelete({_id: req.params.user})
//     res.redirect('read')
// })

// app.listen(5000)

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userModel from "./models/user.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow frontend
app.use(cors({
  origin: "http://localhost:3000"
}));

// connect mongodb (ONLY ONCE)
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.log("MongoDB connection error:", err);
});


// TEST ROUTE (IMPORTANT for debugging)
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend working"
  });
});


// CREATE USER
app.post("/create", async (req, res) => {
  try {
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

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

});


// READ USERS
app.get("/read", async (req, res) => {

  try {

    const users = await userModel.find();

    res.status(200).json({
      success: true,
      users: users
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

});

// DELETE USER
app.delete("/delete/:id", async (req, res) => {
  try {

    const deletedUser = await userModel.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.json({
      success: true,
      message: "User deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
});

// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
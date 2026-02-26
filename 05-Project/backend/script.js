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



// index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userModel from './models/user.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

// ✅ Connect to MongoDB only once
if (mongoose.connection.readyState === 0) {
  mongoose
    .connect('mongodb://127.0.0.1:27017/userDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));
} else {
  console.log('MongoDB already connected');
}

// Create user route
app.post('/create', async (req, res) => {
  try {
    const { name, email, image } = req.body;
    const createdUser = await userModel.create({ name, email, image });
    res.status(200).send({ success: true, message: 'User created successfully!', user: createdUser });
  } catch (err) {
    console.error('Create user error:', err);
    res.status(500).send({ success: false, message: 'Error creating user.' });
  }
});

app.get('/read', async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json({
      success: true,
      users: users
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
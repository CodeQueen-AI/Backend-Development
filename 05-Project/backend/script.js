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



import express from 'express';
import userModel from './models/user.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Read all users
app.get('/read', async (req, res) => {
  try {
    let users = await userModel.find();
    res.render('read', { users });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
});

// Create user
app.post('/create', async (req, res) => {
  try {
    let { name, email, image } = req.body;

    let createdUser = await userModel.create({ name, email, image });

    res.status(200).send({ success: true, message: "User created successfully!", user: createdUser });
  } catch (err) {
    res.status(500).send({ success: false, message: "Error creating user." });
  }
});

// Edit user
app.get('/edit/:userid', async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.params.userid });
    res.render('edit', { user });
  } catch (err) {
    res.status(500).send({ success: false, message: "Error fetching user." });
  }
});

// Delete user
app.get('/delete/:id', async (req, res) => {
  try {
    await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect('/read');
  } catch (err) {
    res.status(500).send({ success: false, message: "Error deleting user." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
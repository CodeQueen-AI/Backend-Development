import express from 'express';
import userModel from './models/user.js'; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Read
app.get('/read' , async (req , res) => {
    let users = await userModelfind();
    res.render('read' , {users})
})

// Create
app.post('/create' , async (req , res) => {
    let {name, email, image} = req.body;

    let createdUser = await userModel.create({
        name,
        email, 
        image
    })

    res.send((createdUser))
})

// Edit
app.get('edit/:userid' , async (req, res) => {
    userModel.findOne({_id: req.params.user})
})

// Delete
app.get('delete/:id' , async (req, res) => {
    let users = await userModel.findOneAndDelete({_id: req.params.user})
    res.redirect('read')
})

app.listen(5000)
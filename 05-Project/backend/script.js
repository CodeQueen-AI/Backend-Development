import express from 'express';
import userModel from './models/user.js'; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/read' , async (req , res) => {
    let users = await userModelfind();
    res.render('read' , {users})
})

app.post('/create' , async (req , res) => {
    let {name, email, image} = req.body;

    let createdUser = await userModel.create({
        name,
        email, 
        image
    })

    res.send((createdUser))
})

app.listen(5000)
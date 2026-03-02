import express from 'express';
import userModel from './Models/user.js'; 
import postModel from './Models/post.js'; 
const app = express()

app.get('/' , (req, res) => {
    res.send("Welcome")
})

// Create
app.get('/create' , async (req, res) => {
    let user = await userModel.create({
        username: "codequeen", 
        age: 18,
        email: "codequeen",
    })
    res.send(user)
})

// Post Create
// app.get('/post/create' , async (req, res) => {
//     postModel.Model.create
// })


app.listen(3000)
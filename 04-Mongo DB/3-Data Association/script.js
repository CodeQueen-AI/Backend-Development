import express from 'express';
import userModel from './Models/user.js'; 
import postModel from './Models/post.js'; 
const app = express()

app.get('/' , (req, res) => {
    res.send("Welcome")
})

app.get('/create' , async (req, res) => {
    let user = await userModel.create({
        username: "codequeen", 
        age: 18,
        email: "codequeen",
    })
    res.send(user)
})

app.listen(3000)
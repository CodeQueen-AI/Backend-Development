import express from 'express';
import userModel from './userModels.js'; 
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser())

app.get('/' , (req, res) => {
    res.send("Welcome")
})

app.post('/create' , async(req, res) => {
    let {username, email, password, age} = req.body;

    let createdUser = await userModel.create({
        username,
        email,
        password,
        age
    })
    res.send((createdUser))
})

app.listen(3000)
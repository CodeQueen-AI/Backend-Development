import express from 'express';
import userModel from './Models/user.js'; 
import bcrypt from 'bcrypt';

const app = express()
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/' , (req, res) => {
    res.send("Welcome")
})

app.post('/register' , async  (req, res) => {
    let {email, password, username, name, age} = req.body
    let user =  await userModel.findOne({email});
    if(user) return res.status(500).send("User already registered")
})

app.listen(3000)
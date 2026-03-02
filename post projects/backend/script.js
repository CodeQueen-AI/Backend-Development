import express from 'express';
import userModel from './Models/user.js'; 
const app = express()

app.get('/' , (req, res) => {
    res.send("Welcome")
})

app.listen(3000)
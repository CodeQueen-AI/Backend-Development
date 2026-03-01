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

app.post('/create' , (req, res) => {
    let {username, email, password, age} = req.body;

    bycrypt.getSalt(10, (err, salt) => {
        bycrypt.hash(password , salt, async(err, hash) =>
            let createdUser = await userModel.create({
                username,
                email,
                password:hash,
    })
    JsonWebTokenError.sign({email}, "shhhhh")
    res.send((createdUser))
})

app.listen(3000)
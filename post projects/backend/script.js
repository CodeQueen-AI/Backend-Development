import express from 'express';
import userModel from './Models/user.js'; 
import postModel from './Models/post.js'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express()
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/' , (req, res) => {
    res.send("Welcome")
})

app.get('/profile', isLoggedIn , (req, res) => {
    let user = await userModel.findOne({email: req.user.email}).populate("posts");
    res.send("profile", {user})
})

app.get('/like/:id', isLoggedIn , (req, res) => {
    let post = await userModel.findOne({_id: req.params.id}).populate("user");

    if(post.likes.indexOf(req.user.userid) === -1){
        post.likes.push(req.user.userid)
    }
    else{
        post.likes.splice(post.likes.indexof(req.user.userid), 1)
    }
    await post.save()
    res.redirect("/profile")
})


app.post('/post', isLoggedIn , async(req, res) => {
    let user = await userModel.findOne({email: req.user.email}).populate("posts")

    let {content} = req.body

    let post = await postModel.create({
        user:user._id,
        content : content
    })

    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile")
})

app.post('/register' , async  (req, res) => {
    let {email, password, username, name, age} = req.body
    let user =  await userModel.findOne({email});
    if(user) return res.status(500).send("User already registered")

    bcrypt.genSalt(10, {err, salt} => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                email,
                age,
                name,
                password: hash
            });

            // Login
            let token = jwt.sign({email: email, userid: user._id}, "shhhh");
            res.cookie("token", token);
            res.send("registered")
        })
    })
})

app.post('/login' , async  (req, res) => {
    let {email, password} = req.body

    let user =  await userModel.findOne({email});
    if(user) return res.status(500).send("Something went wrong")
        bcrypt.hash(password, salt, async (err, result) => {
    if(result) res.status(200).send("you can login!")
        else redirect("/login")
    let token = jwt.sign({email: email, userid: user._id}, "shhhh");
            res.cookie("token", token);
})
})

app.get('/logout', (req, res) => {
    res.cookie("token" , "");
    res.redirect("login")
})

function isLoggedIn(req, res, next){
    if(req.cookies.token === "") res.send('You must be logged in')
        else{
    let data = jwt.verify(req.cookies.token, "shhhh");
    req.user = data
}}
app.listen(3000)
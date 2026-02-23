import express from 'express';
const cookieParser = require('cookie-parser');
const app = express()

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/set', (req, res) => {
    res.cookie("username", "CodeQueen");
    res.send("Cookie Set");
});

app.get('/get', (req, res) => {
    res.send(req.cookies.username);
});

app.listen(3000)
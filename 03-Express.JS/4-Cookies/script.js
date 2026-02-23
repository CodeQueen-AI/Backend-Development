import express from 'express';
const cookieParser = require('cookie-parser');
const app = express()

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(3000)
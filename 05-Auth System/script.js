import express from 'express';
import bcrypt from 'bcrypt';
const jwt = require('sonwebtoken')
const app = express();

app.get('/', (req, res) => {
    let token = jwt.sign({email: "harsh@example.com"}, "secret");
    res.cookie("token" , token)
    res.send("Done")
});


app.listen(3000)
import express from 'express';
import cookieParser from 'cookie-parser';
const jwt = require('sonwebtoken')
const app = express();

app.use(cookieParser())
app.get('/', (req, res) => {
    let token = jwt.sign({email: "harsh@example.com"}, "secret");
    res.cookie("token" , token)
    res.send("Done")
});

app.get("/read", function (req, res) {
    console.log(res.cookies.token)
})

app.listen(3000)
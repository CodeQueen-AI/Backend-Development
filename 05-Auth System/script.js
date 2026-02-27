import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
const app = express();

app.use(cookieParser())
app.get('/', (req, res) => {
    let token = jwt.sign({email: "harsh@example.com"}, "secret");
    res.cookie("token" , token)
    res.send("Done")
});

app.get("/read", function (req, res) {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data)
})

app.listen(3000)
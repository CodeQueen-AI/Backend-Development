import express from 'express';
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/' , (req, res) => {
    res.cookie("name" , "harsh");
    res.send("Done")
})

app.get('/' , (req, res) => {
    console.log(req.cookies)
    res.send("Read Page")
})

app.listen(3000)


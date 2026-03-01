import express from 'express';
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser())

app.get('/' , (req, res) => {
    res.send("Welcome")
})

app.listen(3000)
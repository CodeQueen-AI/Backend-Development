import express from 'express';
const app = express()

const userModel = require('./userModels');

app.get('/' , (req, res) => {
    res.send('Hey!')
})

app.listen(3000)
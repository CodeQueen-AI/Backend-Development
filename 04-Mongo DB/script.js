import express from 'express';
const app = express()

const userModel = require('./userModels');

app.get('/' , (req, res) => {
    res.send('Hey!')
})

// Create User
app.get('create' , async (req, res) => {
    let createuser = await userModel.create({ //Asynchronous Operations
        name : 'codequeen',
        username : 'codequeen',
        email : 'codeq209@gmail.com'
    })
    res.send(createuser)
})
app.listen(3000)
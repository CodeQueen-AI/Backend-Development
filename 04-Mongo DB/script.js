import express from 'express';
const app = express()

const userModel = require('./userModels');

app.get('/' , (req, res) => {
    res.send('Hey!')
})

// Create User
app.get('create' , (req, res) => {
    userModel.create({ //Asynchronous Operations
        name : 'codequeen',
        username : 'codequeen',
        email : 'codeq209@gmail.com'
    })
    console.log("Hey!")
})
app.listen(3000)
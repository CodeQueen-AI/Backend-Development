import express from 'express';
import userModel from './userModels.js'; // notice .js

const app = express();

app.get('/', (req, res) => res.send('Hey!'));

// Users Create
app.get('/create', async (req, res) => {
    const createuser = await userModel.create({
        name: 'codequeen',
        username: 'codequeen',
        email: 'codeq209@gmail.com'
    });
    res.send(createuser);
});

// Users Update
app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username : 'codequeen'} , {name: 'CodeQueen 23'} , {new: true});
    res.send(updateduser)
});

// Users Read
app.get('/read', async (req, res) => {
    let users = await userModel.find()
    res.send(users)
});

app.listen(3000)
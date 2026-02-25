import express from 'express';
import userModel from './userModels.js'; // notice .js

const app = express();

app.get('/', (req, res) => res.send('Hey!'));

app.get('/create', async (req, res) => {
    const createuser = await userModel.create({
        name: 'codequeen',
        username: 'codequeen',
        email: 'codeq209@gmail.com'
    });
    res.send(createuser);
});

app.listen(3000)
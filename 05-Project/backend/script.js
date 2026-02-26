import express from 'express';
import userModel from './userModels.js'; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/read' , (req , res) => {
    res.send('read')
})

app.listen(3000)
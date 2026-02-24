import express from 'express';
const app = express()
app.use(express.json());

// Fake database (array)
let users = [];

// 1-Crate -> Add new user
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({
        message: "User Created Successfully",
        users
    });
});

// 2-Read -> Get all users
app.get('/users', (req, res) => {
    res.json(users);
});


app.listen(3000)
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

// 3-Update -> Update user by index
app.put('/users/:index', (req, res) => {
    const index = req.params.index;
    users[index] = req.body;

    res.json({
        message: "User Updated Successfully",
        users
    });
});

// 4-Delete -> Delete user by Index
app.delete('/users/:index', (req, res) => {
    const index = req.params.index;
    users.splice(index, 1);

    res.json({
        message: "User Deleted Successfully",
        users
    });
});

app.listen(3000)
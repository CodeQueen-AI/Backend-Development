import express from 'express';
const app = express()

app.get('/' , (req, res) => {
    res.send('Dynamic Routes')
})

// Dynamic Route
app.get("/profile/:name", (req, res) => {
    const userName = req.params.name;
    res.send(`Welcome, ${userName}`);
});

// Dynamic Route (Name + Age)
app.get("/profile/:name/:age", (req, res) => {
    const userName = req.params.name;
    const userAge = req.params.age;
    res.send(`Welcome ${userName}, Your Age is ${userAge}`);
});

app.listen(3000)


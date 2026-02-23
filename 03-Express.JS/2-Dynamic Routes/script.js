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

app.listen(3000)


import express from 'express';
const app = express()

// Parsers
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('Mini Project');
});
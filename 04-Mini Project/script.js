import express from 'express';
const app = express()

// Parsers
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('Mini Project');
});

// app.get("/profile/codequeen", (req, res) => {
//     res.send('CodeQueen Profile');
// });

// dynamic route
app.get("/profile/:name", (req, res) => {
    res.send('Profile');
});
app.listen(3000)


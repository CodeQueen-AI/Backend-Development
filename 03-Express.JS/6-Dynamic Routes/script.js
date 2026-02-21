

// app.get("/profile/codequeen", (req, res) => {
//     res.send('CodeQueen Profile');
// });

// dynamic route
app.get("/profile/:name", (req, res) => {
    res.send(`Welcome, ${req.params.name}`);
});

// Age


app.listen(3000)

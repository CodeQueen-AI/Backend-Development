import express from 'express';
const app = express()

// Simple Express.JS Code
app.get('/' , (req, res) => {
    res.send('Hello World')
})

// Routes - About Route
app.get('/about' , (req , res) => {
    res.send('Hello World from About Page!!')
})
app.listen(3000)

// Middleware
app.use(function(req , res, next){
    console.log('Run Middleware')
    next()
})
app.get('/' , (req, res) => {
    res.send('Hello World from Middleware')
})

app.listen(3000)

// Error Handling
app.get('/error', (req, res, next) => {
    next(new Error("Simple Error"));
});

// Simple Error Middleware
app.use((err, req, res, next) => {
    console.log(err.message); 
    res.status(500).send("Something went wrong!");
});

app.listen(3000)
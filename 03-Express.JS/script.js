import express from 'express';
const app = express()

// Home Page
// app.get('/' , (req, res) => {
//     res.send('Hello World')
// })

// Routes - About Routes
// app.get('/about' , (req , res) => {
//     res.send('Hello World from About Page!!')
// })
// app.listen(3000)

// Middleware
// app.use(function(req , res, next){
//     console.log('Run Middleware')
//     next()
// })
// app.get('/' , (req, res) => {
//     res.send('Hello World from Middleware')
// })

// app.listen(3000)

// Error Handling
// 1-Route that throws error
app.get('/error', (req, res, next) => {
    next(new Error("Simple Error"));
});

// 3-Simple Error Middleware
app.use((err, req, res, next) => {
    console.log(err.message); 
    res.status(500).send("Something went wrong!");
});

app.listen(3000)

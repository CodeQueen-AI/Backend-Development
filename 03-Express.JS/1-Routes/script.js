import express from 'express';
const app = express()

// Home Page
app.get('/' , (req, res) => {
    res.send('Hello World')
})

// About Route
app.get('/about' , (req , res) => {
    res.send('Hello World from About Page!')
})

// Service Route
app.get('/service' , (req , res) => {
    res.send('Hello World from Service Page!')
})

// Contact Route
app.get('/contact' , (req , res) => {
    res.send('Hello World from Contact Page!')
})
app.listen(3000)
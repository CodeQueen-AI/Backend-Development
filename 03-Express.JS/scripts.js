import express from 'express';
const app = express()

// Home Page
app.get('/' , (req, res) => {
    res.send('Hello World')
})
app.listen(3000)

// Routes - About Routes
app.get('/profile' , (req , res) => {
    res.send('Hello World from About Page!!')
})
app.listen(3000)
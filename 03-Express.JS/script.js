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
app.use(function(req , res, next)) {
    console.log('Run Middleware')
}

import express from 'express';
const app = express()

// Middleware
app.use(function(req , res, next){
    console.log('Run Middleware')
    next()
})
app.get('/' , (req, res) => {
    res.send('Hello World from Middleware')
})

app.listen(3000)
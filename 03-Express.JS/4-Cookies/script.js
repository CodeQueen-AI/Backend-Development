import express from 'express';
const app = express()



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

// Cookies
app.use(express.json())
app.use(express.urlencoded({extended : true}))
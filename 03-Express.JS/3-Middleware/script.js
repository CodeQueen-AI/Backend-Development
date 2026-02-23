import express from 'express';
const app = express()

// Built in Middleware (Body Parser)
app.use(express.json());

// Global Middleware
app.use((req, res, next) => {
    console.log("Global Middleware Running");
    next(); 
});

app.listen(3000)

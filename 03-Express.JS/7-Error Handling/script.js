import express from 'express';
const app = express()

// Error Handling
app.get('/error', (req, res, next) => {
    next(new Error("Simple Error"));
});


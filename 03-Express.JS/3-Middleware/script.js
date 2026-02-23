import express from 'express';
const app = express()

// Built in Middleware (Body Parser)
app.use(express.json());

app.listen(3000)
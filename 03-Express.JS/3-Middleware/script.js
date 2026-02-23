import express from 'express';
const app = express()

// Built in Middleware (Body Parser)
app.use(express.json());

// Global Middleware
app.use((req, res, next) => {
    console.log("Global Middleware Running");
    next(); 
});

// Custom Middleware (Auth Check)
function checkAuth(req, res, next) {
    const token = req.query.token;

    if (token === "12345") {
        console.log("User Authenticated");
        next();
    } else {
        res.send("Unauthorized Access");
    }
}

app.listen(3000)
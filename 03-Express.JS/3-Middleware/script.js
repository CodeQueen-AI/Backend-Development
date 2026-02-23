import express from 'express';
const app = express()

// Built in Middleware (Body Parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Route with Middleware
app.get("/dashboard", checkAuth, (req, res) => {
    res.send("Welcome to Dashboard");
});

// Frontend → Backend Data Flow (POST)
app.post("/submit", (req, res) => {
    console.log("Data received from frontend:", req.body);
    res.json({
        message: "Data received successfully",
        data: req.body
    });
});

app.listen(3000)
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

// Route with Middleware
app.get("/dashboard", checkAuth, (req, res) => {
    res.send("Welcome to Dashboard");
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

// Error Handling Middleware
// 1-Route that throws error
app.get("/error", (req, res, next) => {
    const error = new Error("This is a custom error!");
    next(error); 
});

// 2-Error Handling Middleware
app.use((err, req, res, next) => {
    console.log("Error:", err.message);

    res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: err.message
    });
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
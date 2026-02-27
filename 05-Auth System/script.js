import express from 'express';
const app = express()

// Home Page
app.get('/' , (req, res) => {
    res.cookie("name" , "harsh");
    res.send("Done")
})

app.listen(3000)


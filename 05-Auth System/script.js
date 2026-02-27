import express from 'express';
const app = express()

const bycrpt = require('bycrypt')

app.get('/' , (req, res) => {
    bycrypt.genSalt(saltRounds, function(err, salt)) {
        bycrypt.hash(myPlaintextPassword, salt , function(err, hash) {
            // Store hash in your password DB
        })
    }
})

app.listen(3000)
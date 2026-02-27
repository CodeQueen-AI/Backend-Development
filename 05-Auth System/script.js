import express from 'express';
import bcrypt from 'bcrypt';

const app = express();
const password = "plmnkoijbhuygv";

app.get('/', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            console.log("Hashed Password:", hash);
            res.send("Password hashed! Check console.");
        });
    });
});

app.listen(3000)
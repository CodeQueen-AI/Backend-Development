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

// Check how the password matches the hash
app.get('/', (req, res) => {
    bycrypt.compare("plmnkoijbhuygv" , "$2b$10$7FMrxAHbTHArh.y/qiVvTerZwQ/2qtcbaJreUHp33QG9K/sy3nccK/sy3nccK")
    console.log(result)
});

app.listen(3000)
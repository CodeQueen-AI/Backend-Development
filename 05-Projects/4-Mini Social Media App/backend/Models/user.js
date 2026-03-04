import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/media app')

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/Database testing')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: Array
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
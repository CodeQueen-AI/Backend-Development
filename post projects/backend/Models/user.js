import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/socialnetwork')

const userSchema = new mongoose.Schema({
    username : String,
    name : String,
    age : Number,
    email: String,
    password: String
});

const userModel = mongoose.model('app', userSchema);

export default userModel;
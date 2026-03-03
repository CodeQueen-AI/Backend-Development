import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/taskmanager')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image : String
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
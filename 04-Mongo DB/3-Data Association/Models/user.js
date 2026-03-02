import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/Databasetesting')

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.Object,
            ref: 'post'
        }
    ]
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
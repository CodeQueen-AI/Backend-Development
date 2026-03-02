import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/Database testing')

const postSchema = mongoose.Schema({
    postdata: String,
    user: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const userModel = mongoose.model('post', postSchema);

export default userModel;
// Models/post.js
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/socialnetwork')


const postSchema = mongoose.Schema({
    postdata: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    likes: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    ]
});

const Post = mongoose.model('Post', postSchema);
export default Post;

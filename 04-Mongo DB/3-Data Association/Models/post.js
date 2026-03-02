import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    postdata: String,
    user: {
        type: mongoose.Schema.Types.Object,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const userModel = mongoose.model('post', postSchema);

export default userModel;
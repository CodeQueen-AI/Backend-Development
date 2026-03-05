import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/postapp");

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  likes: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;
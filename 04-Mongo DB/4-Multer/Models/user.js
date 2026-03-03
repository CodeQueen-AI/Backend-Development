import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/multerDB");
const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    memoryImage: Buffer
});

const User = mongoose.model("User", userSchema);

export default User;
import express from "express";
import connectDB from "./config/db.js";
import Post from "./Models/post.js"

const app = express();
const PORT = 3000;

// ===== Middleware =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== Connect Database =====
connectDB();

// ================= ROUTES =================

// Home
app.get("/", (req, res) => {
  res.send("Post API Running 🚀");
});

// ✅ Create Post
app.post("/post", async (req, res) => {
  try {
    const { content } = req.body;

    const newPost = await Post.create({ content });

    res.status(201).json({
      message: "Post created successfully",
      post: newPost
    });

  } catch (err) {
    res.status(500).json({ message: "Error creating post" });
  }
});

// ✅ Get All Posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);

  } catch (err) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

// ✅ Edit Post
app.put("/post/:id", async (req, res) => {
  try {
    const { content } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { content },
      { new: true }
    );

    res.json({
      message: "Post updated successfully",
      post: updatedPost
    });

  } catch (err) {
    res.status(500).json({ message: "Error updating post" });
  }
});

// ✅ Delete Post
app.delete("/post/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: "Error deleting post" });
  }
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
import express from "express";
import Post from "../Models/post"

const router = express.Router();

router.post("/create", async (req, res) => {
  const { title, description } = req.body;

  const post = await Post.create({
    title,
    description
  });

  res.json(post);
});

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

router.put("/like/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  post.likes += 1;
  await post.save();

  res.json(post);
});

router.put("/edit/:id", async (req, res) => {
  const { title, description } = req.body;

  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { title, description },
    { new: true }
  );

  res.json(post);
});

export default router;
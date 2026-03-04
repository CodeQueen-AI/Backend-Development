"use client";
import { useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleCreatePost = async () => {
    if (!title || !description) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Post created successfully!");
        setTitle("");
        setDescription("");
      } else {
        setMessage(data.message || "Error creating post");
      }
    } catch (error) {
      setMessage("Server error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 px-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Create Post
      </h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="w-full border p-2 mb-4 rounded"
      />

      {message && (
        <p className="text-center text-sm mb-2">{message}</p>
      )}

      <button
        onClick={handleCreatePost}
        className="w-full bg-black text-white py-2 rounded"
      >
        Create Post
      </button>
    </div>
  );
}
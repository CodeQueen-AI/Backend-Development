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
        headers: { "Content-Type": "application/json" },
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
    <div>
      <div className="flex flex-col items-center justify-start pt-8 px-6">
        <div className="p-3 w-full max-w-md">
          <h1 className="text-4xl font-semibold text-center mb-6 text-[#261CC1]">
            Create Post
          </h1>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#261CC1] py-1"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#261CC1] py-1"
              rows={3}
            ></textarea>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center mt-2 text-sm">
              {message}
            </p>
          )}

          {/* Create Button */}
          <button
            type="button"
            onClick={handleCreatePost}
            className="mt-4 w-40 py-3 mx-auto block font-semibold bg-[#261CC1] text-white border-2 border-[#261CC1] hover:bg-white hover:text-[#261CC1] hover:border-[#261CC1] cursor-pointer transition-all duration-300"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}
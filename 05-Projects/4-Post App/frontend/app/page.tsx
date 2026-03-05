"use client";
import { useState } from "react";
import Link from "next/link";

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
      const res = await fetch("http://localhost:5000/posts", {
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
    <div className="min-h-screen flex flex-col">

      {/* Top Bar */}
      <div className="p-6">
        <Link
          href="/"
          className="relative text-[#261CC1] font-medium inline-block
                     after:absolute after:left-0 after:-bottom-1
                     after:h-[2px] after:w-0 after:bg-[#261CC1]
                     after:transition-all after:duration-300
                     hover:after:w-full"
        >
          All Posts
        </Link>
      </div>

      {/* Centered Form */}
      <div className="flex flex-1 items-center justify-center px-6 -mt-16">
        <div className="p-6 w-full max-w-md">

          <h1 className="text-4xl font-semibold text-center mb-8 text-[#261CC1]">
            Create Post
          </h1>

          {/* Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#261CC1] py-2"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#261CC1] py-2"
            ></textarea>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-sm mb-4">
              {message}
            </p>
          )}

          {/* Button */}
          <button
            type="button"
            onClick={handleCreatePost}
            className="w-40 py-3 mx-auto block font-semibold
                       bg-[#261CC1] text-white border-2 border-[#261CC1]
                       hover:bg-white hover:text-[#261CC1]
                       transition-all duration-300 cursor-pointer"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import { FaEdit, FaTrash, FaHeart } from "react-icons/fa";

interface Post {
  id: number;
  title: string;
  description: string;
  imageURL?: string;
}

export default function PostDetails() {
  const [liked, setLiked] = useState(false);

  // Example post
  const post: Post = {
    id: 1,
    title: "My Awesome Post",
    description: "This is a detailed description of the post. You can write a few lines about it.",
    imageURL: "https://via.placeholder.com/400x200"
  };

  return (
    <div className="min-h-screen p-6 flex justify-center">
      <div className="w-full max-w-2xl p-6 flex flex-col gap-4">

        {/* Post Heading */}
        <h1 className="text-3xl font-semibold text-[#261CC1]">{post.title}</h1>

        {/* Post Description */}
        <p className="text-gray-700 text-base">{post.description}</p>

        {/* Action Icons */}
        <div className="flex items-center gap-6 mt-4">
          {/* Edit */}
          <Link href={`/edit-post/${post.id}`} className="flex items-center gap-1 text-blue-600 hover:underline">
            <FaEdit /> Edit
          </Link>

          {/* Delete */}
          <button className="flex items-center gap-1 text-red-600 hover:underline cursor-pointer">
            <FaTrash /> Delete
          </button>

          {/* Like */}
          <button
            className="flex items-center gap-1 transition-colors cursor-pointer"
            onClick={() => setLiked(!liked)}
          >
            <FaHeart className={`text-xl ${liked ? 'text-red-600' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
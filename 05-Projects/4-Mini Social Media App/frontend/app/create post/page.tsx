"use client";
import { useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-semibold text-center mb-8 text-[#261CC1]">
          Create Post
        </h1>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 py-1"
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="w-full"
            />
          </div>

          <button
            type="button"
            className="mt-6 w-40 py-3 mx-auto block font-semibold bg-blue-600 text-white border-2 border-white hover:bg-white hover:text-blue-600 hover:border-blue-600 cursor-pointer transition-all duration-300"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}
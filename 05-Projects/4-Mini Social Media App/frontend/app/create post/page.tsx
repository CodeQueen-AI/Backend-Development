"use client";
import { useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  return (
    <div className="flex flex-col items-center justify-start pt-8 px-6">
      <div className="p-3 w-full max-w-md">
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
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#261CC1] py-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#261CC1] py-1"
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#261CC1] py-1"
            />
          </div>

          {imageURL && (
            <div className="mt-4 text-center">
              <p className="mb-2 font-medium text-gray-700">Image Preview:</p>
              <img src={imageURL} alt="Preview" className="mx-auto max-h-48 rounded" />
            </div>
          )}

          <button
            type="button"
            className="mt-6 w-40 py-3 mx-auto block font-semibold bg-[#261CC1] text-white border-2 border-white hover:bg-white hover:text-[#261CC1] hover:border-[#261CC1] cursor-pointer transition-all duration-300"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}
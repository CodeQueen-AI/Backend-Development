"use client";
import { useState, useEffect } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>("");

  // Update URL whenever image changes
  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setImageURL(url);

      // Cleanup URL when component unmounts or image changes
      return () => URL.revokeObjectURL(url);
    } else {
      setImageURL("");
    }
  }, [image]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
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
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="w-full"
            />
          </div>

          {/* Image Preview */}
          {imageURL && (
            <div className="mt-4 text-center">
              <p className="mb-2 font-medium text-gray-700">Image Preview:</p>
              <img src={imageURL} alt="Preview" className="mx-auto max-h-48 rounded" />
              <p className="mt-2 text-sm text-gray-500 break-all">URL: {imageURL}</p>
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
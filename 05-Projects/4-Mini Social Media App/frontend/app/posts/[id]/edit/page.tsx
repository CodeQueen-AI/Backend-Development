"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditPostPage() {
  const router = useRouter();
  const { id } = useParams(); // dynamic post id
  // Example initial post data (normally fetch from backend)
  const initialPost = {
    title: "My Awesome Post",
    description: "This is a detailed description of the post.",
    imageURL: "https://via.placeholder.com/400x200"
  };

  const [title, setTitle] = useState(initialPost.title);
  const [description, setDescription] = useState(initialPost.description);
  const [imageURL, setImageURL] = useState(initialPost.imageURL);

  return (
    <div className="min-h-screen p-6 flex justify-center items-start bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-[#261CC1] text-center mb-4">
          Edit Post
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
            />
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

          <button
            type="button"
            className="mt-4 w-40 py-3 mx-auto block font-semibold bg-[#261CC1] text-white border-2 border-white hover:bg-white hover:text-[#261CC1] hover:border-[#261CC1] cursor-pointer transition-all duration-300"
            onClick={() => alert(`Post ${id} updated! (frontend only)`)}
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}
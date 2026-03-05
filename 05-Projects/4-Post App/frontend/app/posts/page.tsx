"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { FaEdit, FaTrash } from "react-icons/fa"

export default function PostsPage() {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await fetch("http://localhost:5000/posts")
    const data = await res.json()
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const deletePost = async (id: string) => {
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE"
    })
    getPosts()
  }

  const likePost = async (id: string) => {
    await fetch(`http://localhost:5000/posts/like/${id}`, {
      method: "PUT"
    })
    getPosts()
  }

  return (
    <div className="p-10">

      {/* Back to Home */}
      <div className="flex justify-start mb-6">
        <Link
          href="/"
          className="text-sm hover:underline"
        >
          ← Back To Home
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-10 text-center text-[#1A05A2]">
        All Posts
      </h1>

      {/* posts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {posts.map((post: any) => (
          <div
            key={post._id}
            className="border rounded-xl p-5 flex flex-col justify-between h-full"
          >

            {/* Title */}
            <h2 className="text-lg font-semibold text-center">
              {post.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 my-2 text-center">
              {post.description}
            </p>

            {/* Created At */}
            <p className="text-sm text-gray-400 text-center">
              Created At: {new Date(post.createdAt).toLocaleDateString()}
            </p>

            {/* Actions */}
            <div className="flex justify-between items-center mt-3">

              {/* Like */}
              <button
                onClick={() => likePost(post._id)}
                className="text-red-500 cursor-pointer"
              >
                ❤️ {post.likes}
              </button>

              {/* Edit & Delete */}
              <div className="flex gap-3">
                <FaEdit
                  className="cursor-pointer text-blue-500"
                  size={18}
                  onClick={() => alert("Edit feature coming soon!")}
                />
                <FaTrash
                  className="cursor-pointer text-gray-600"
                  size={18}
                  onClick={() => deletePost(post._id)}
                />
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}
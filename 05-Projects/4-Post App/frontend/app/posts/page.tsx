"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaEdit, FaTrash } from "react-icons/fa"

export default function PostsPage() {
  const router = useRouter()
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
      <div className="flex justify-start mb-6">
        <Link
          href="/"
          className="text-sm hover:underline">
          ← Back To Home
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-semibold mb-10 text-center text-[#1A05A2]">
        All Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post: any) => (
          <div
            key={post._id}
            className="border p-5 flex flex-col justify-between h-full">
            {/* Title */}
            <h2 className="text-lg font-semibold text-center mb-2">
              {post.title}
            </h2>
            {/* Description */}
            <p className=" mb-2 text-left">
              {post.description}
            </p>
            {/* Created At */}
            <p className="text-sm text-gray-600 mb-3 text-left">
              Created At: {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <div className="flex justify-between items-center mt-auto">
              <button
                onClick={() => likePost(post._id)}
                className="text-red-500 cursor-pointer">
                ❤️ {post.likes}
              </button>
              <div className="flex gap-3">
                <FaEdit
                  className="cursor-pointer text-blue-500"
                  size={18}
                  onClick={() => router.push(`/posts/edit/${post._id}`)}/>
                <FaTrash
                  className="cursor-pointer text-red-700"
                  size={18}
                  onClick={() => deletePost(post._id)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
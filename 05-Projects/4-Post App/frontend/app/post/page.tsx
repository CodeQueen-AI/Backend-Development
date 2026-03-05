"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

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

      {/* top links */}
      <div className="flex gap-6 mb-8">

        <Link
          href="/"
          className="text-sm hover:underline"
        >
          Back to Home
        </Link>

        <Link
          href="/create-post"
          className="text-sm hover:underline"
        >
          Create Post
        </Link>

      </div>

      <h1 className="text-2xl font-semibold mb-6">
        All Posts
      </h1>

      {/* posts grid */}
      <div className="grid gap-6">

        {posts.map((post: any) => (

          <div
            key={post._id}
            className="border rounded-xl p-5 space-y-2"
          >

            <h2 className="text-lg font-semibold">
              {post.title}
            </h2>

            <p className="text-gray-600">
              {post.description}
            </p>

            <p className="text-sm text-gray-400">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>

            {/* buttons */}
            <div className="flex gap-4 pt-2">

              <button
                onClick={() => likePost(post._id)}
                className="text-red-500"
              >
                ❤️ {post.likes}
              </button>

              <button
                onClick={() => deletePost(post._id)}
                className="text-gray-600"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
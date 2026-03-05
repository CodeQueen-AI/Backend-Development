"use client"
import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"

export default function EditPostPage() {
  const router = useRouter()
  const params = useParams()
  const postId = params.id
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  // Fetch existing post data
  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`http://localhost:5000/posts/${postId}`)
      if (!res.ok) return alert("Failed to fetch post")
      const data = await res.json()
      setTitle(data.title)
      setDescription(data.description)
    }
    getPost()
  }, [postId])

  // Update post
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:5000/posts/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    })
    if (res.ok) {
      router.push("/posts")
    } else {
      alert("Failed to update post")
    }
  }

  return (
    <div className="p-10">
      <Link href="/posts" className="text-sm hover:underline mb-6 block">
        ← All Posts
      </Link>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-5xl font-semibold mb-10 text-center text-[#1A05A2]">
          Update Post
        </h1>
        <form onSubmit={handleSubmit} className="w-[420px] space-y-8">
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-600">Title</label>
            <input
              className="border-b outline-none pb-1 w-full focus:border-[#1A05A2]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required/>
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-600">Description</label>
            <textarea
              className="border-b outline-none pb-1 w-full focus:border-[#1A05A2]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required/>
          </div>
          <button
            className="block mx-auto px-8 py-4 border-2 border-[#1A05A2] text-[#1A05A2] bg-white 
            cursor-pointer transition hover:bg-[#1A05A2] hover:text-white hover:border-white">
            Update Post
          </button>
        </form>
      </div>
    </div>
  )
}
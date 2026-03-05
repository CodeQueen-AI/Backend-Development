"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"

export default function EditPostPage() {

  const router = useRouter()
  const params = useParams() // get the dynamic id
  const postId = params.id

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  // fetch existing post data
  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(`http://localhost:5000/posts/${postId}`)
      const data = await res.json()
      setTitle(data.title)
      setDescription(data.description)
    }
    getPost()
  }, [postId])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await fetch(`http://localhost:5000/posts/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    })

    router.push("/posts")
  }

  return (
    <div className="p-10">

      {/* top link */}
      <Link
        href="/posts"
        className="text-sm hover:underline mb-6 block"
      >
        ← All Posts
      </Link>

      <div className="flex flex-col items-center mt-10">

        {/* heading */}
        <h1 className="text-5xl font-semibold mb-10 text-center text-[#1A05A2]">
          Edit Post
        </h1>

        <form onSubmit={handleSubmit} className="w-[420px] space-y-8">

          {/* Title */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-600">
              Title
            </label>
            <input
              className="border-b outline-none pb-1 w-full focus:border-[#1A05A2]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-600">
              Description
            </label>
            <textarea
              className="border-b outline-none pb-1 w-full focus:border-[#1A05A2]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            className="block mx-auto px-8 py-4 border-2 cursor-pointer border-[#1A05A2] text-[#1A05A2] bg-white transition hover:bg-[#1A05A2] hover:text-white hover:border-white"
          >
            Update Post
          </button>

        </form>

      </div>

    </div>
  )
}
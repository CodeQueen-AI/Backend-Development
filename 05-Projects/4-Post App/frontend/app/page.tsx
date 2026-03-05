"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function CreatePost() {

  const router = useRouter()

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  const handleSubmit = async (e:any)=>{
    e.preventDefault()

    await fetch("http://localhost:5000/posts/create",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({title,description})
    })

    router.push("/posts")
  }

  return (

    <div className="p-10">

      {/* top link */}
      <Link
        href="/posts"
        className="text-sm hover:underline"
      >
        All Posts
      </Link>

      <div className="flex justify-center mt-10">

        <form
        onSubmit={handleSubmit}
        className="w-[420px] p-6 border rounded-xl space-y-4">

          <h1 className="text-xl font-semibold">
            Create Post
          </h1>

          <input
          placeholder="Title"
          className="w-full border p-2 rounded"
          onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
          placeholder="Description"
          className="w-full border p-2 rounded"
          onChange={(e)=>setDescription(e.target.value)}
          />

          <button
          className="bg-black text-white px-4 py-2 rounded">
            Create Post
          </button>

        </form>

      </div>

    </div>
  )
}
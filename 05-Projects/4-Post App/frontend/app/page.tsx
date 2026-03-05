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

      <div className="flex flex-col items-center mt-20">

        {/* heading */}
        <h1 className="text-5xl font-semibold mb-10 text-center text-[#1A05A2]">
          Create Post
        </h1>

        <form
        onSubmit={handleSubmit}
        className="w-[420px] space-y-8">

             {/* Title */}
<div className="flex flex-col">
  <label className="text-sm mb-1 text-gray-600">
    Title
  </label>

  <input
    className="border-b outline-none pb-1 w-full focus:border-[#1A05A2]"
    onChange={(e)=>setTitle(e.target.value)}
  />
</div>

{/* Description */}
<div className="flex flex-col">
  <label className="text-sm mb-1 text-gray-600">
    Description
  </label>

  <textarea
    className="border-b outline-none pb-1 w-full focus:border-[#1A05A2]"
    onChange={(e)=>setDescription(e.target.value)}
  />
</div>

          {/* button */}
         <button
className="block mx-auto px-8 py-4 border-2 border-[#1A05A2] text-[#1A05A2] bg-white cursor-pointer transition hover:bg-[#1A05A2] hover:text-white hover:border-white">
  Create Post
</button>

        </form>

      </div>

    </div>
  )
}
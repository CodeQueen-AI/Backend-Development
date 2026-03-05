"use client"
import { useState } from "react"

export default function CreatePost() {

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

    alert("Post Created")
  }

  return (
    <div className="flex justify-center mt-20">

      <form
      onSubmit={handleSubmit}
      className="w-[400px] p-6 border rounded-xl space-y-4">

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
          Create
        </button>

      </form>

    </div>
  )
}
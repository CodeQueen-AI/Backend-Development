"use client"
import { useEffect,useState } from "react"

export default function Posts() {

  const [posts,setPosts] = useState([])

  const getPosts = async ()=>{
    const res = await fetch("http://localhost:5000/posts")
    const data = await res.json()
    setPosts(data)
  }

  useEffect(()=>{
    getPosts()
  },[])

  const deletePost = async (id:string)=>{
    await fetch(`http://localhost:5000/posts/${id}`,{
      method:"DELETE"
    })
    getPosts()
  }

  const likePost = async (id:string)=>{
    await fetch(`http://localhost:5000/posts/like/${id}`,{
      method:"PUT"
    })
    getPosts()
  }

  return (

    <div className="p-10 grid gap-6">

      {posts.map((post:any)=>(
        <div
        key={post._id}
        className="border p-5 rounded-xl">

          <h2 className="text-lg font-semibold">
            {post.title}
          </h2>

          <p className="text-gray-600">
            {post.description}
          </p>

          <p className="text-sm mt-2">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>

          <div className="flex gap-4 mt-3">

            <button
            onClick={()=>likePost(post._id)}>
              ❤️ {post.likes}
            </button>

            <button
            onClick={()=>deletePost(post._id)}>
              Delete
            </button>

          </div>

        </div>
      ))}

    </div>
  )
}
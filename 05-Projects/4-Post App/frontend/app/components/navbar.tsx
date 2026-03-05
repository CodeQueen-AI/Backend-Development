"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex gap-6 p-6 border-b font-medium">
      <Link href="/posts" className="hover:underline">
        All Posts
      </Link>

      <Link href="/create-post" className="hover:underline">
        Create Post
      </Link>
    </div>
  )
}
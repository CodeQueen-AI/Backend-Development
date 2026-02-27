"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function UserPage() {
  return (
    <div className="min-h-screen">
      <div className="p-6">
        <Link
          href="/read"
          className="inline-flex items-center gap-2 text-[#FF3E9B] font-medium hover:underline transition 
          cursor-pointer">
          All Tasks
          <FaArrowRight />
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-8 w-full max-w-md">
          <h1 className="text-5xl font-semibold text-center mb-6 text-[#FB2576]">
            Add To Task
          </h1>
          <form className="flex flex-col gap-8">
            <div>
              <label className="block text-sm font-medium mb-1">TASK</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
                required/>
            </div>

            <button
  type="submit"
  className="mt-6 w-40 py-3 mx-auto block font-semibold 
  bg-[#FB2576] text-white border-2 border-white
  hover:bg-white hover:text-[#FB2576] hover:border-[#FB2576]
  cursor-pointer transition-all duration-300">
  Add To Task
</button>
          </form>
        </div>
      </div>
    </div>
  )
}
"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CreateUserPage() {
  return (
    <div className="min-h-screen">
      <div className="p-6">
        <Link href="/read"
          className="inline-flex items-center gap-2 text-[#FF3E9B] font-medium hover:underline transition 
          cursor-pointer">
          Read All Users
          <FaArrowRight />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="p-8 w-full max-w-md">
        <h1 className="text-5xl font-semibold text-center mb-8 text-[#FB2576]">
            Create Users
          </h1>
          <form className="flex flex-col gap-8">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                NAME
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
              />
            </div>
            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                IMAGE URL
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"/>
            </div>
            {/* Button */}
            <button
              type="submit" className="mt-6 w-40 py-3 mx-auto block font-semibold border-2 cursor-pointer
                transition-all duration-300 bg-white text-[#FF3E9B] border-[#FF3E9B] hover:bg-[#FF3E9B]
               hover:text-white hover:border-white">
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
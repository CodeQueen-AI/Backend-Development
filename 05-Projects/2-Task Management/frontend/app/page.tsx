"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function UserPage() {
  const [text, setText] = useState("");
  const [successMsg, setSuccessMsg] = useState(""); 

  // Submit function
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/tasks/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMsg("Task created successfully!"); 
        setText(""); 
        setTimeout(() => setSuccessMsg(""), 3000);
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg("Failed to create task."); 
    }
  };
  return (
    <div className="min-h-screen">
      <div className="p-6">
        <Link
          href="/tasks"
          className="inline-flex items-center gap-2 text-[#FF3E9B] font-medium hover:underline transition 
          cursor-pointer mb-10">
          All Tasks
          <FaArrowRight />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="p-8 w-full max-w-md">
          <h1 className="text-5xl font-semibold text-center mb-12 text-[#FB2576]">
            Add To Task
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                TASK
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
                required/>
            </div>
            <button
              type="submit"
              className="mt-6 w-40 py-3 mx-auto block font-semibold  bg-[#FB2576] text-white border-2
              border-white hover:bg-white hover:text-[#FB2576] hover:border-[#FB2576] cursor-pointer 
              transition-all duration-300">
              Add To Task
            </button>
          </form>
          {successMsg && (
            <p className="mt-4 text-center text-green-500 font-medium">
              {successMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
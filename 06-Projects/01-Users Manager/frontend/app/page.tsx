"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function CreateUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !image) {
      setMessage("Please fill all fields before creating a user.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, image }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage(data.message);
        setName("");
        setEmail("");
        setImage("");
        setTimeout(() => setMessage(""), 5000);
      } else {
        setMessage(data.message || "Error creating user.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error creating user.");
    }
  };
  const isFormValid = name && email && image;
  return (
    <div className="min-h-screen">
      <div className="p-6">
        <Link
          href="/read"
          className="inline-flex items-center gap-2 text-[#FF3E9B] font-medium hover:underline transition 
          cursor-pointer">
          Read All Users
          <FaArrowRight />
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-8 w-full max-w-md">
          <h1 className="text-5xl font-semibold text-center mb-6 text-[#FB2576]">
            Create Users
          </h1>

          {message && (
            <p
              className={`text-center mb-4 font-medium text-lg ${
                message.includes("Error") ? "text-red-600" : "text-green-600"
              }`}>
              {message}
            </p>
          )}

          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">NAME</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
                required/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
                required/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">IMAGE URL</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
                required/>
            </div>

            <button
              type="submit"
              disabled={!isFormValid} 
              className={`mt-6 w-40 py-3 mx-auto block font-semibold border-2 cursor-pointer transition-all 
                duration-300
                ${isFormValid
                  ? "bg-white text-[#FF3E9B] border-[#FF3E9B] hover:bg-[#FF3E9B] hover:text-white hover:border-white"
                  : "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"}
              `}>
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function EditUserPage() {

  const { id } = useParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  // 🔥 Fetch existing user
  useEffect(() => {

    const fetchUser = async () => {
      const res = await fetch("http://localhost:5000/read");
      const data = await res.json();

      if (data.success) {
        const user = data.users.find((u: any) => u._id === id);

        if (user) {
          setName(user.name);
          setEmail(user.email);
          setImage(user.image);
        }
      }
    };

    fetchUser();

  }, [id]);



  // 🔥 Update user
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const res = await fetch(`http://localhost:5000/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, image }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("User updated successfully ✅");

        setTimeout(() => {
          router.push("/read");
        }, 1500);
      } else {
        setMessage(data.message);
      }

    } catch (error) {
      console.log(error);
      setMessage("Error updating user.");
    }
  };


  return (
    <div className="min-h-screen">

      {/* Back Button */}
      <div className="p-6">
        <Link
          href="/read"
          className="inline-flex items-center gap-2 text-[#FF3E9B] font-medium hover:underline transition cursor-pointer"
        >
          <FaArrowLeft />
          Back To Users
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <div className="p-8 w-full max-w-md">

          <h1 className="text-5xl font-semibold text-center mb-3 text-[#FB2576]">
            Edit User
          </h1>

          <div className="w-32 h-1 bg-[#FF3E9B] mx-auto mb-8"></div>

          {message && (
            <p className="text-center mb-4 font-medium text-lg text-green-600">
              {message}
            </p>
          )}

          <form className="flex flex-col gap-8" onSubmit={handleUpdate}>

            <div>
              <label className="block text-sm font-medium mb-1">NAME</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">IMAGE URL</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-40 py-3 mx-auto block font-semibold border-2 cursor-pointer transition-all duration-300 bg-white text-[#FF3E9B] border-[#FF3E9B] hover:bg-[#FF3E9B] hover:text-white hover:border-white"
            >
              Update User
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ReadUsersPage() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Ali Khan",
      email: "ali@example.com",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Emma Watson",
      email: "emma@example.com",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return (
    <div className="min-h-screen p-10">
      <div className="mb-6">
        <Link
          href="/" className="inline-flex items-center gap-2 text-[#FF3E9B] font-medium hover:underline
            transition cursor-pointer">
          <FaArrowLeft />
          Back To Home
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-semibold text-center mb-12 text-[#FB2576]">
        Read Users
      </h1>

      {/* Users Grid */}
      <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-5 text-center shadow-sm hover:shadow-md transition">

            {/* Image */}
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"/>

            {/* Name */}
            <h2 className="text-lg font-semibold">
              {user.name}
            </h2>

            {/* Email */}
            <p className="text-gray-500 text-sm mb-4">
              {user.email}
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-3">

              {/* Edit */}
              <button className="px-4 py-1 border-2 border-[#FF3E9B] bg-[#FF3E9B] text-white cursor-pointer
                  hover:bg-white hover:text-[#FF3E9B] transition">
                Edit
              </button>

              {/* Delete */}
              <button className="px-4 py-1 border-2 border-red-500 bg-red-500 text-white cursor-pointer
               hover:bg-white hover:text-red-500
                  transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
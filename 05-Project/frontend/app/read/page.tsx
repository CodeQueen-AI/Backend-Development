"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ReadUsersPage() {

  const [users, setUsers] = useState<any[]>([]);

  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.json();

    if (data.success) {
      setUsers(data.users);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // DELETE FUNCTION
  const handleDelete = async (id: string) => {

    await fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    });

    fetchUsers(); // refresh list
  };

  return (
    <div className="min-h-screen p-10">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#FF3E9B] font-medium hover:underline transition cursor-pointer"
        >
          <FaArrowLeft />
          Back To Home
        </Link>
      </div>

      <h1 className="text-5xl font-semibold text-center mb-12 text-[#FB2576]">
        Read Users
      </h1>

      <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
        {users.map((user) => (
          <div
            key={user._id}
            className="border p-5 text-center shadow-sm hover:shadow-md transition"
          >
            <img
              src={user.image || "https://i.pravatar.cc/150?img=50"}
              alt={user.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />

            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-500 text-sm mb-4">{user.email}</p>

            
            <div className="flex justify-center gap-3 mt-4">

  <Link
    href={`/edit/${user._id}`}
    className="px-4 py-1 bg-blue-500 text-white text-sm 
    hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500 
    transition cursor-pointer"
  >
    Edit
  </Link>

  <button
    onClick={() => handleDelete(user._id)}
    className="px-4 py-1 bg-red-500 text-white text-sm
    hover:bg-white hover:text-red-500 hover:border-2 hover:border-red-500 
    transition cursor-pointer"
  >
    Delete
  </button>

</div>

          </div>
        ))}
      </div>
    </div>
  );
}
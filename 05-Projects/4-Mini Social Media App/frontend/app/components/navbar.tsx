"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="px-6 py-3 flex items-center justify-between border-b border-gray-300">
      
      {/* Left Link */}
      <div>
        <Link href="/create-post" className="text-[#261CC1] font-semibold hover:underline">
          Post
        </Link>
      </div>

      {/* Right User Section */}
      <div className="flex items-center space-x-4 relative">
        <span className="text-[#261CC1] font-semibold">Hello! Sumbal Naz</span>

        <div className="relative">
          <img 
            src="/Profile Pic.jpg"
            alt="Profile" 
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg py-2">
              <button 
                className="w-full text-left px-4 py-1 hover:bg-gray-200"
                onClick={() => alert("Logged out!")}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

    </nav>
  );
}
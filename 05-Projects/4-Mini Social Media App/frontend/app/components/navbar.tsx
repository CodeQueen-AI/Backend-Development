"use client";
import { useState } from "react";

export default function Navbar({ username, profilePic }: { username: string, profilePic: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="px-6 py-3 flex items-center justify-between border-b border-gray-300">
      
      {/* Left Links */}
      <div className="flex space-x-6 -translate-y-1">
        <a 
          href="#"
          className="relative hover:text-blue-500 transition"
        >
          Your Feeds
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
        </a>
        <a 
          href="#"
          className="relative hover:text-blue-500 transition"
        >
          Your Posts
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
        </a>
      </div>

      {/* Right User Section */}
      <div className="flex items-center space-x-4 relative -translate-y-1">
        <span className="text-[#261CC1] font-semibold -translate-y-0.5">Hello! {username}</span>
        
        {/* Profile Pic */}
        <div className="relative">
          <img 
            src={profilePic}
            alt="Profile" 
            className="w-10 h-10 rounded-full cursor-pointer -translate-y-0.5"
            onClick={() => setDropdownOpen(!dropdownOpen)}/>

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
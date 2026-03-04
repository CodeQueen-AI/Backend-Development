"use client";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="px-6 py-3 flex items-center justify-between border-b border-gray-300">
      
      {/* Left Links */}
      <div className="flex space-x-6 -translate-y-1">
        {/* Feed Link */}
        <a 
          href="#"
          className="relative group px-1" // added px-1 for spacing
        >
          <span className="hover:text-[#261CC1] transition">Your Feeds</span>
          <span className="absolute left-1 right-1 -bottom-1 h-0.5 bg-[#261CC1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>

        {/* Posts Link */}
        <a 
          href="#"
          className="relative group px-1" // added px-1 for spacing
        >
          <span className="hover:text-[#261CC1] transition">Your Posts</span>
          <span className="absolute left-1 right-1 -bottom-1 h-0.5 bg-[#261CC1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
      </div>

      {/* Right User Section */}
      <div className="flex items-center space-x-6 relative -translate-y-1">
        <span className="text-[#261CC1] font-semibold -translate-y-0.2">Hello! Sumbal Naz</span>
        
        {/* Profile Pic */}
        <div className="relative">
          <img 
            src="/Profile Pic.jpg"
            alt="Profile" 
            className="w-10 h-10 rounded-full cursor-pointer -translate-y-0.2"
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
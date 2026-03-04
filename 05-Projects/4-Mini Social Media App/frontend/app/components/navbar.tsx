"use client";
import { useState } from "react";

export default function Navbar({ username, profilePic }: { username: string, profilePic: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white px-6 py-3 flex items-center justify-between">
      
      {/* Left Links */}
      <div className="flex space-x-6">
        <a href="#" className="hover:underline">Your Feeds</a>
        <a href="#" className="hover:underline">Your Posts</a>
      </div>

      {/* Right User Section */}
      <div className="flex items-center space-x-4 relative">
        <span className="text-white font-semibold">Hello! {username}</span>
        
        {/* Profile Pic */}
        <div className="relative">
          <img 
            src={profilePic} 
            alt="Profile" 
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg py-2">
              <button 
                className="w-full text-left px-4 py-1 hover:bg-gray-200"
                onClick={() => alert("Logged out!")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
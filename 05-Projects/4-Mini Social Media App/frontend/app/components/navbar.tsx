"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="px-6 py-3 flex items-center justify-between border-b border-gray-300">

      {/* Left Link */}
      <div>
        <Link href="/create-post" className="text-[#261CC1] font-semibold hover:underline inline-flex items-center gap-1">
          Post <FaArrowRight />
        </Link>
      </div>

      {/* Right User Section */}
      <div className="flex items-center space-x-2 relative">
        <span className="text-[#261CC1] font-semibold">Hello! Sumbal Naz</span>

        <div 
          className="flex items-center cursor-pointer relative"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          ref={dropdownRef}
        >
          <img 
            src="/Profile Pic.jpg"
            alt="Profile" 
            className="w-10 h-10 rounded-full"
          />

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-2 w-36 bg-white text-black rounded shadow-lg py-2 transition-all duration-300
                        ${dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
          >
            {!loggedOut ? (
              <button 
                className="w-full text-left px-4 py-1 hover:bg-gray-200 text-black"
                onClick={() => setLoggedOut(true)}
              >
                Logout
              </button>
            ) : (
              <span className="w-full block px-4 py-1 text-red-600 font-medium">
                You are logged out
              </span>
            )}
          </div>
        </div>
      </div>

    </nav>
  );
}
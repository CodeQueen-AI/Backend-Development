"use client";
import { Poppins } from "next/font/google";
import { AiOutlineEye } from "react-icons/ai";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function SignUpPage() {
  return (
    <div className={`min-h-screen flex ${poppins.className}`}>
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-start justify-center p-10">
        <div>
          <h1 className="text-4xl font-extrabold text-purple-900 mb-8">
            Create Your Account
          </h1>
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"/>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"/>
            </div>
            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"/>
              <span className="absolute right-2 top-6 cursor-pointer text-gray-500">
                <AiOutlineEye size={20} />
              </span>
            </div>
            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"/>
              <span className="absolute right-2 top-6 cursor-pointer text-gray-500">
                <AiOutlineEye size={20} />
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-900 to-purple-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-in-out cursor-pointer">
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-600 mt-0">
              Already have an account?{" "}
              <a href="/login" className="text-purple-900 font-medium">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex justify-center items-center">
        <Image
          src="/Img.png"
          alt="Sign up illustration"
          className="object-contain h-full"
          width={500}
          height={600}
        />
      </div>
    </div>
  );
}
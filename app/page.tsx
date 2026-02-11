"use client";
import { Poppins } from "next/font/google";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function SignUpPage() {
  return (
    <div className={`min-h-screen flex bg-white ${poppins.className}`}>
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-950">
            Create Your Account
          </h1>

          <form className="space-y-6">
            {/* First Name & Last Name side-by-side */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
              />
              <span className="absolute right-2 top-6 cursor-pointer text-gray-500">
                <AiOutlineEye size={20} />
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border-b border-gray-300 p-1 focus:outline-none focus:border-blue-950"
              />
              <span className="absolute right-2 top-6 cursor-pointer text-gray-500">
                <AiOutlineEye size={20} />
              </span>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-950 to-blue-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-in-out cursor-pointer"
            >
              Sign Up
            </button>

            {/* Already have an account */}
            <p className="text-center text-sm text-gray-600 mt-0">
              Already have an account?{" "}
              <a href="/login" className="text-blue-950 font-medium">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

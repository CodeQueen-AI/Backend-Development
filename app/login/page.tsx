"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function LoginPage() {
  return (
    <div className={`min-h-screen flex bg-white ${poppins.className}`}>
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white w-full max-w-md">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-900">
            User Login
          </h1>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-between items-center text-sm mt-1">
              <Link
                href="/forgot"
                className="text-purple-900 font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-900 to-purple-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-in-out mt-4 cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-purple-900 font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2 hidden md:block">
        <Image
          src="/login.avif"
          alt="Login illustration"
          className="h-full object-cover"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}

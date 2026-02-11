"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { AiOutlineEye } from "react-icons/ai";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function ForgotPasswordPage() {
  return (
    <div className={`min-h-screen flex bg-white ${poppins.className}`}>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-purple-900">
            Forgot Password
          </h1>

          <form className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Enter your email
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"/>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                Enter OTP
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"/>
            </div>
            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 tracking-wide uppercase mb-1">
                New Password
              </label>
              <input
                type="password"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-purple-900"/>
              <span className="absolute right-2 top-9 text-gray-500 cursor-pointer">
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
              <span className="absolute right-2 top-9 text-gray-500 cursor-pointer">
                <AiOutlineEye size={20} />
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-900 to-purple-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer">
              Reset Password
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Back to{" "}
            <Link href="/login" className="text-purple-900 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 hidden md:block">
        <Image
          src="/Img.png"
          alt="Forgot password illustration"
          className="h-full object-cover"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}

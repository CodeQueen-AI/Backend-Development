import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function CreateAccount() {
  return (
    <div className={`${poppins.className} min-h-screen flex items-center justify-center`}>
      <div className="p-5 w-full max-w-md">

        {/* Heading */}
        <h1 className="text-4xl font-semibold text-center text-[#261CC1] mb-8">
          Create Your Account
        </h1>

        <form className="space-y-4">

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#261CC1] py-2 transition duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#261CC1] py-2 transition duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#261CC1] py-2 transition duration-300"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Age
            </label>
            <input
              type="number"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#261CC1] py-2 transition duration-300"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-1/2 mx-auto block 
                       bg-white text-[#261CC1] 
                       border-2 border-[#261CC1] 
                       py-3 font-medium 
                       hover:bg-[#261CC1] hover:text-white hover:border-white 
                       transition-all duration-300 
                       mt-6 cursor-pointer"
          >
            Create User
          </button>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#261CC1] font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
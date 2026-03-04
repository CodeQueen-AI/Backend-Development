import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-5 w-full max-w-md">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-center text-[#261CC1] mb-8">
          Welcome Back
        </h1>

        <form className="space-y-4">
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

          {/* Button */}
          <button
            type="submit"
            className="w-1/2 mx-auto block bg-white text-[#261CC1] border-2 border-[#261CC1] py-3 
            font-medium hover:bg-[#261CC1] hover:text-white hover:border-white transition-all duration-300 
            mt-6 cursor-pointer">
            Login
          </button>

          {/* Register Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/"
                className="text-[#261CC1] font-medium hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
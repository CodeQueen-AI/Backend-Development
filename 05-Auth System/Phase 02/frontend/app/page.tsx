import { Poppins } from "next/font/google";

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

        <form className="space-y-6">

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
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#261CC1] py-2 transition duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#261CC1] py-2 transition duration-300"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium mb-2">
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
            className="w-full bg-[#261CC1] text-white py-2 rounded-lg hover:opacity-90 transition duration-300 mt-4"
          >
            Create User
          </button>

        </form>
      </div>
    </div>
  );
}
export default function CreateUserPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
      {/* Card */}
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Users
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-4">
          
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Image URL Input */}
          <input
            type="text"
            placeholder="Enter image URL"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="mt-2 text-white font-semibold py-2 rounded-lg transition"
            style={{ backgroundColor: "#FF3E9B" }}
          >
            Create User
          </button>

        </form>

      </div>

    </div>
  );
}
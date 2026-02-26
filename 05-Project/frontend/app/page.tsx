export default function CreateUserPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="p-8 w-full max-w-md">
        
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-10">
          Create Users
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-8">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              NAME
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              IMAGE URL
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-pink-500 py-1"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 text-white font-semibold py-2 rounded-lg transition hover:opacity-90"
            style={{ backgroundColor: "#FF3E9B" }}
          >
            Create User
          </button>

        </form>

      </div>

    </div>
  );
}
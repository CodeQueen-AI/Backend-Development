export default function ReadUsersPage() {

  // temporary dummy users
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Ali Khan",
      email: "ali@example.com",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Emma Watson",
      email: "emma@example.com",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return (
    <div className="min-h-screen p-10">

      {/* Heading */}
      <h1 className="text-5xl font-semibold text-center mb-12">
        Read Users
      </h1>

      {/* Users Grid */}
      <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">

        {users.map((user) => (
          <div
            key={user.id}
            className="border p-5 text-center shadow-sm hover:shadow-md transition"
          >

            {/* Image */}
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />

            {/* Name */}
            <h2 className="text-lg font-semibold">
              {user.name}
            </h2>

            {/* Email */}
            <p className="text-gray-500 text-sm mb-4">
              {user.email}
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-3">

              {/* Edit */}
              <button
                className="
                  px-4 py-1
                  border-2
                  border-[#FF3E9B]
                  text-[#FF3E9B]
                  cursor-pointer
                  hover:bg-[#FF3E9B]
                  hover:text-white
                  transition
                "
              >
                Edit
              </button>

              {/* Delete */}
              <button
                className="
                  px-4 py-1
                  border-2
                  border-red-500
                  text-red-500
                  cursor-pointer
                  hover:bg-red-500
                  hover:text-white
                  transition
                "
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
"use client";

interface Post {
  id: number;
  title: string;
  description: string;
  imageURL: string;
}

export default function YourPostsPage() {
  // Example data (tumhare backend se fetch kar sakti ho)
  const posts: Post[] = [
    { id: 1, title: "Post One", description: "This is a description for post one. It may be long so we will truncate it.", imageURL: "https://via.placeholder.com/150" },
    { id: 2, title: "Post Two", description: "This is a description for post two. It may be long so we will truncate it.", imageURL: "https://via.placeholder.com/150" },
    { id: 3, title: "Post Three", description: "This is a description for post three. It may be long so we will truncate it.", imageURL: "https://via.placeholder.com/150" },
    { id: 4, title: "Post Four", description: "This is a description for post four. It may be long so we will truncate it.", imageURL: "https://via.placeholder.com/150" },
    { id: 5, title: "Post Five", description: "This is a description for post five. It may be long so we will truncate it.", imageURL: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-4xl font-semibold text-[#261CC1] mb-8 text-center">Your Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={post.imageURL} alt={post.title} className="w-full h-32 object-cover" />

            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-2 mb-2">{post.description}</p>
              <a href="#" className="text-blue-600 font-medium mt-auto hover:underline text-sm">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
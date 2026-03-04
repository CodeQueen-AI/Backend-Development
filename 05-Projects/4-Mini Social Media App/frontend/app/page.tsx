// "use client";

// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-blue-200 to-blue-300">
//       {/* Title */}
//       <h1 className="text-7xl font-bold text-blue-700 mb-10 text-center">
//         Mini Social Media App
//       </h1>

//       {/* Buttons */}
//       <div className="flex gap-6">
//         <Link
//           href="/signup"
//           className="px-8 py-3 bg-white text-blue-700 font-semibold border-2 shadow-md hover:bg-blue-700 hover:text-white transition cursor-pointer">
//           Sign Up
//         </Link>

//         <Link
//           href="/login"
//           className="px-8 py-3 bg-white text-blue-700 font-semibold border-2 shadow-md hover:bg-blue-700 hover:text-white transition cursor-pointer">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }

import Navbar from './components/navbar'
import Post from './create post/page'
import Userpost from "./posts/[id]/page"
export default function HomePage() {
  return (
    <div>
    <Navbar/>
    {/* <Post/> */}
    <Userpost/>
    </div>
  );
}
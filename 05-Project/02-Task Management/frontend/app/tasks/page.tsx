// "use client";

// import { useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";

// export default function ReadPage() {

//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       text: "Learn Next.js",
//       date: "27 Feb 2026",
//       completed: false,
//     },
//     {
//       id: 2,
//       text: "Build Task App",
//       date: "26 Feb 2026",
//       completed: true,
//     },
//     {
//       id: 3,
//       text: "Connect MongoDB",
//       date: "25 Feb 2026",
//       completed: false,
//     },
//   ]);

//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <div className="min-h-screen p-8">

//       {/* Heading */}
//       <h1 className="text-5xl font-semibold text-center mb-10 text-[#FB2576]">
//         All Tasks
//       </h1>

//       {/* Task list */}
//       <div className="max-w-xl mx-auto">

//         {tasks.map((task) => (
//           <div key={task.id} className="py-4 border-b border-gray-300">

//             <div className="flex justify-between items-start">

//               {/* Left side */}
//               <div className="flex items-center gap-3">

//                 {/* Smaller Circle */}
//                 <div
//                   onClick={() => toggleComplete(task.id)}
//                   className={`w-5 h-5 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all
//                   ${
//                     task.completed
//                       ? "bg-red-500 border-red-500"
//                       : "border-gray-400"
//                   }`}
//                 >
//                   {task.completed && (
//                     <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
//                   )}
//                 </div>

//                 {/* Task text */}
//                 <p
//                   className={`font-medium text-lg ${
//                     task.completed
//                       ? "line-through text-gray-400"
//                       : ""
//                   }`}
//                 >
//                   {task.text}
//                 </p>

//               </div>

//               {/* Right side */}
//               <div className="flex flex-col items-end">

//                 {/* Date */}
//                 <p className="text-sm text-gray-400">
//                   {task.date}
//                 </p>

//                 {/* Icons below date */}
//                 <div className="flex gap-3 mt-1">

//                   <FaEdit className="cursor-pointer text-blue-500 hover:scale-110 transition text-lg" />

//                   <FaTrash
//                     onClick={() => deleteTask(task.id)}
//                     className="cursor-pointer text-red-500 hover:scale-110 transition text-lg"
//                   />

//                 </div>

//               </div>

//             </div>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";

// export default function ReadPage() {

//   const [tasks, setTasks] = useState([]);

//   // Fetch tasks from backend
//   const fetchTasks = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/tasks/read");
//       const data = await res.json();

//       if (data.success) {
//         // Map tasks from backend to match frontend format
//         const formattedTasks = data.tasks.map((task) => ({
//           id: task._id,
//           text: task.text,
//           completed: task.completed,
//           date: new Date(task.createdAt).toLocaleDateString("en-GB", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric"
//           })
//         }));

//         setTasks(formattedTasks);
//       }
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   // Toggle complete
//   const toggleComplete = async (id) => {
//     try {
//       const task = tasks.find(t => t.id === id);
//       const res = await fetch(`http://localhost:5000/tasks/update/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ completed: !task.completed })
//       });
//       const data = await res.json();

//       if (data.success) {
//         setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
//       }
//     } catch (error) {
//       console.error("Error updating task:", error);
//     }
//   };

//   // Delete task
//   const deleteTask = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5000/tasks/delete/${id}`, {
//         method: "DELETE"
//       });
//       const data = await res.json();

//       if (data.success) {
//         setTasks(tasks.filter(t => t.id !== id));
//       }
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen p-8">

//       {/* Heading */}
//       <h1 className="text-5xl font-semibold text-center mb-10 text-[#FB2576]">
//         All Tasks
//       </h1>

//       {/* Task list */}
//       <div className="max-w-xl mx-auto">

//         {tasks.length === 0 ? (
//           <p className="text-center text-gray-400">No tasks yet.</p>
//         ) : (
//           tasks.map((task) => (
//             <div key={task.id} className="py-4 border-b border-gray-300">

//               <div className="flex justify-between items-start">

//                 {/* Left side */}
//                 <div className="flex items-center gap-3">

//                   {/* Smaller Circle */}
//                   <div
//                     onClick={() => toggleComplete(task.id)}
//                     className={`w-5 h-5 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all
//                     ${task.completed ? "bg-red-500 border-red-500" : "border-gray-400"}`}
//                   >
//                     {task.completed && (
//                       <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
//                     )}
//                   </div>

//                   {/* Task text */}
//                   <p className={`font-medium text-lg ${task.completed ? "line-through text-gray-400" : ""}`}>
//                     {task.text}
//                   </p>

//                 </div>

//                 {/* Right side */}
//                 <div className="flex flex-col items-end">

//                   {/* Date */}
//                   <p className="text-sm text-gray-400">{task.date}</p>

//                   {/* Icons below date */}
//                   <div className="flex gap-3 mt-1">

//                     <FaEdit className="cursor-pointer text-blue-500 hover:scale-110 transition text-lg" />

//                     <FaTrash
//                       onClick={() => deleteTask(task.id)}
//                       className="cursor-pointer text-red-500 hover:scale-110 transition text-lg"
//                     />

//                   </div>

//                 </div>

//               </div>

//             </div>
//           ))
//         )}

//       </div>

//     </div>
//   );
// }




"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ReadPage() {

  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/tasks/read");
      const data = await res.json();

      if (data.success) {
        const formattedTasks = data.tasks.map((task) => ({
          id: task._id,
          text: task.text,
          completed: task.completed,
          date: new Date(task.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
          })
        }));

        setTasks(formattedTasks);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Toggle complete
  const toggleComplete = async (id) => {
    try {
      const task = tasks.find(t => t.id === id);
      const res = await fetch(`http://localhost:5000/tasks/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed })
      });
      const data = await res.json();

      if (data.success) {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/tasks/delete/${id}`, {
        method: "DELETE"
      });
      const data = await res.json();

      if (data.success) {
        setTasks(tasks.filter(t => t.id !== id));
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="min-h-screen p-8">

      {/* Back to Home */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-[#FF3E9B] font-medium hover:underline transition cursor-pointer"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-semibold text-center mb-10 text-[#FB2576]">
        All Tasks
      </h1>

      {/* Task list */}
      <div className="max-w-xl mx-auto">

        {tasks.length === 0 ? (
          <p className="text-center text-gray-400 font-medium">
            No tasks available. Please add a task first.
          </p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="py-4 border-b border-gray-300">

              <div className="flex justify-between items-start">

                {/* Left side */}
                <div className="flex items-center gap-3">

                  {/* Smaller Circle */}
                  <div
                    onClick={() => toggleComplete(task.id)}
                    className={`w-5 h-5 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all
                    ${task.completed ? "bg-red-500 border-red-500" : "border-gray-400"}`}
                  >
                    {task.completed && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    )}
                  </div>

                  {/* Task text */}
                  <p className={`font-medium text-lg ${task.completed ? "line-through text-gray-400" : ""}`}>
                    {task.text}
                  </p>

                </div>

                {/* Right side */}
                <div className="flex flex-col items-end">

                  {/* Date */}
                  <p className="text-sm text-gray-400">{task.date}</p>

                  {/* Icons below date */}
                  <div className="flex gap-3 mt-1">

                    <FaEdit className="cursor-pointer text-blue-500 hover:scale-110 transition text-lg" />

                    <FaTrash
                      onClick={() => deleteTask(task.id)}
                      className="cursor-pointer text-red-500 hover:scale-110 transition text-lg"
                    />

                  </div>

                </div>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}
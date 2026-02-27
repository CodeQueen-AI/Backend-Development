"use client";

import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ReadPage() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn Next.js",
      date: "27 Feb 2026",
      completed: false,
    },
    {
      id: 2,
      text: "Build Task App",
      date: "26 Feb 2026",
      completed: true,
    },
    {
      id: 3,
      text: "Connect MongoDB",
      date: "25 Feb 2026",
      completed: false,
    },
  ]);

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen p-8">

      {/* Heading */}
      <h1 className="text-5xl font-semibold text-center mb-10 text-[#FB2576]">
        All Tasks
      </h1>

      {/* Task list */}
      <div className="max-w-xl mx-auto">

        {tasks.map((task) => (
          <div key={task.id} className="py-4 border-b border-gray-300">

            <div className="flex justify-between items-start">

              {/* Left side */}
              <div className="flex items-center gap-3">

                {/* Smaller Circle */}
                <div
                  onClick={() => toggleComplete(task.id)}
                  className={`w-5 h-5 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all
                  ${
                    task.completed
                      ? "bg-red-500 border-red-500"
                      : "border-gray-400"
                  }`}
                >
                  {task.completed && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>

                {/* Task text */}
                <p
                  className={`font-medium text-lg ${
                    task.completed
                      ? "line-through text-gray-400"
                      : ""
                  }`}
                >
                  {task.text}
                </p>

              </div>

              {/* Right side */}
              <div className="flex flex-col items-end">

                {/* Date */}
                <p className="text-sm text-gray-400">
                  {task.date}
                </p>

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
        ))}

      </div>

    </div>
  );
}
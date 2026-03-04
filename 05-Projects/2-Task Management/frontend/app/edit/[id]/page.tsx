"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [text, setText] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`http://localhost:5000/tasks/read/${id}`);
        const data = await res.json();

        if (data.success) {
          setText(data.task.text);
        }
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    if (id) fetchTask();
  }, [id]);

  const updateTask = async () => {
    try {
      const res = await fetch(`http://localhost:5000/tasks/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      const data = await res.json();

      if (data.success) {
        router.push("/tasks");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-semibold mb-6 text-[#FB2576]">
        Edit Task
      </h1>

      <div className="w-full max-w-md flex flex-col gap-6 items-center">
        {/* Simple underline input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border-b border-gray-400 focus:outline-none text-lg pb-1"
        />

        {/* Centered button with white bg, border, and colored text */}
        <button
          onClick={updateTask}
          className="px-6 py-2 bg-white border-2 border-[#FB2576] text-[#FB2576] hover:bg-[#FB2576]  hover:text-white transition cursor-pointer">
          Update Task
        </button>
      </div>
    </div>
  );
}
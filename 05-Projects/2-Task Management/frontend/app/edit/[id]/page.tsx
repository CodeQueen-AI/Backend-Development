"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditPage({ params }: any) {
  const router = useRouter();
  const { id } = params;

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch single task
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`http://localhost:5000/tasks/read/${id}`);
        const data = await res.json();

        if (data.success) {
          setText(data.task.text);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [id]);

  // Update task
  const updateTask = async () => {
    try {
      const res = await fetch(`http://localhost:5000/tasks/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      const data = await res.json();

      if (data.success) {
        router.push("/read"); // go back to all tasks
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-semibold mb-6 text-[#FB2576]">
        Edit Task
      </h1>

      <div className="w-full max-w-md">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button
          onClick={updateTask}
          className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition">
          Update Task
        </button>
      </div>
    </div>
  );
}
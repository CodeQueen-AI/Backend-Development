import { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"] });

export default function CreateAccount() {
  const [form, setForm] = useState({ username: "", email: "", password: "", age: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // important for cookies
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) setMessage("User created successfully!");
      else setMessage(data.message || "Error");
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div className={`${poppins.className} min-h-screen flex items-center justify-center`}>
      <div className="p-5 w-full max-w-md">
        <h1 className="text-4xl font-semibold text-center text-[#261CC1] mb-8">
          Create Your Account
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {["username","email","password","age"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field==="password"?"password":field==="age"?"number":"text"}
                name={field}
                value={form[field as keyof typeof form]}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#261CC1] py-2 transition duration-300"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-1/2 mx-auto block bg-white text-[#261CC1] border-2 border-[#261CC1] py-3 font-medium hover:bg-[#261CC1] hover:text-white hover:border-white transition-all duration-300 mt-6 cursor-pointer"
          >
            Create User
          </button>

          {message && <p className="text-center mt-3 text-sm text-green-600">{message}</p>}

          <div className="text-center mt-6">
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[#261CC1] font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, Lock, UserPlus } from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: form.name,
      });

      await setDoc(doc(db, "users", user.uid), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        createdAt: new Date(),
      });

      navigate("/login");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-white to-gray-200 px-4">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 shadow-xl rounded-2xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto bg-green-500 rounded-xl flex items-center justify-center shadow-md">
            <UserPlus className="text-white" size={26} />
          </div>

          <h1 className="text-2xl font-bold text-white mt-4">
            Create Account
          </h1>

          <p className="text-sm text-gray-400">
            Join us and start shopping
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border-gray-700 text-white border  rounded-lg py-3 pl-10 pr-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="w-full  border bg-gray-800 border-gray-700 text-white rounded-lg py-3 pl-10 pr-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-gray-800 border-gray-700 text-white border  rounded-lg py-3 pl-10 pr-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-gray-800 border-gray-700 text-white border  rounded-lg py-3 pl-10 pr-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
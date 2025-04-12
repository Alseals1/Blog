import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  if (!user) return null; // Don't show navbar if not logged in
  return (
    <>
      <nav className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/home" className="text-xl font-bold text-gray-800">
            BlogDemo
          </Link>
          <div className="space-x-5.5">
            <Link
              to="/home"
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Home
            </Link>
            <button
              onClick={handleSignOut}
              className="text-red-600 hover:text-red-800 font-medium transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>
      <Link
        to="/create"
        className="fixed bottom-6 right-6 bg-blue-600 text-white text-3xl rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        +
      </Link>
    </>
  );
}

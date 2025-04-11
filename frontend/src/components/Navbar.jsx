import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            BlogDemo
          </Link>
          <div className="space-x-5.5">
            <Link
              to="/home"
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-800 font-medium transition"
            >
              Login
            </Link>
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

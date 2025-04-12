import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { toast } from "react-hot-toast";

function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    fetch(`${baseURL}/api/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const handleDelete = async (id) => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmed) return;

    const response = await fetch(`${baseURL}/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      toast("Good Bye Post !!");
      setPost((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } else {
      alert("Failed to delete post.");
    }
  };

  return (
    // Seperate Post: Post from 3 days or less to appear at the top
    // Post that have the most to least comment to appear in order in Other Post
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Recent Posts
        </h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              <div className="space-between">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-2">{post.content}</p>
              </div>
              <button //Move button to the end and add a trash can image
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(post.id);
                }}
                className="mt-2 bg-gradient-to-bl text-red-600 hover:text-red-800 text-sm"
              >
                Delete
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    fetch(`${baseURL}/api/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
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
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-2">{post.content}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
